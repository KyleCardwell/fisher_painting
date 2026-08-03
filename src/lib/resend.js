const resendApiUrl = "https://api.resend.com/emails";

function getRecipients() {
  return String(process.env.EMAIL_TO || "")
    .split(",")
    .map((address) => address.trim())
    .filter(Boolean);
}

export async function sendEmail({ attachments, replyTo, subject, text }) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM;
  const to = getRecipients();

  if (!apiKey || !from || to.length === 0) {
    throw new Error("Email delivery is not configured.");
  }

  const response = await fetch(resendApiUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "User-Agent": "fisher-painting-website/1.0",
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: replyTo,
      subject,
      text,
      ...(attachments?.length ? { attachments } : {}),
    }),
    cache: "no-store",
    signal: AbortSignal.timeout(15000),
  });

  if (!response.ok) {
    const details = await response.text();
    console.error("Resend rejected an email request:", response.status, details);
    throw new Error("Email delivery failed.");
  }

  return response.json();
}
