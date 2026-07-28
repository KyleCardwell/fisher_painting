const siteverifyUrl = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
const developmentSecretKey = "1x0000000000000000000000000000000AA";

function getAllowedHostnames() {
  if (process.env.NODE_ENV === "development") {
    return ["localhost", "127.0.0.1"];
  }

  const configuredHostnames = process.env.TURNSTILE_ALLOWED_HOSTNAMES;

  if (configuredHostnames) {
    return configuredHostnames
      .split(",")
      .map((hostname) => hostname.trim().toLowerCase())
      .filter(Boolean);
  }

  return [];
}

export async function verifyTurnstileToken({ action, request, token }) {
  const secretKey =
    process.env.NODE_ENV === "development"
      ? developmentSecretKey
      : process.env.TURNSTILE_SECRET_KEY || "";
  const allowedHostnames = getAllowedHostnames();

  if (!secretKey || allowedHostnames.length === 0 || !token || token.length > 2048) {
    return false;
  }

  const remoteIp =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "";

  const body = new URLSearchParams({
    secret: secretKey,
    response: token,
  });

  if (remoteIp) {
    body.set("remoteip", remoteIp);
  }

  try {
    const response = await fetch(siteverifyUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body,
      cache: "no-store",
      signal: AbortSignal.timeout(10000),
    });

    if (!response.ok) {
      return false;
    }

    const result = await response.json();
    const hostname = String(result.hostname || "").toLowerCase();

    return (
      result.success === true &&
      result.action === action &&
      allowedHostnames.includes(hostname)
    );
  } catch {
    return false;
  }
}
