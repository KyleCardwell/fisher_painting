import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/resend";
import { verifyTurnstileToken } from "@/lib/turnstile";

export async function POST(request) {
  let body;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Invalid request payload.",
      },
      { status: 400 }
    );
  }

  try {
    const name = String(body?.name || "").trim();
    const email = String(body?.email || "").trim();
    const phone = String(body?.phone || "").trim();
    const serviceNeeded = String(body?.serviceNeeded || "").trim();
    const message = String(body?.message || "").trim();
    const turnstileToken = String(body?.turnstileToken || "");

    if (
      !name ||
      !email ||
      !serviceNeeded ||
      !message ||
      !/^\S+@\S+\.\S+$/.test(email)
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Name, email, service, and message are required.",
        },
        { status: 400 }
      );
    }

    const isHuman = await verifyTurnstileToken({
      action: "contact",
      request,
      token: turnstileToken,
    });

    if (!isHuman) {
      return NextResponse.json(
        {
          success: false,
          message: "CAPTCHA verification failed. Please try again.",
        },
        { status: 403 }
      );
    }

    await sendEmail({
      replyTo: email,
      subject: `Website inquiry from ${name.slice(0, 100)}`,
      text: [
        "New Fisher Painting website inquiry",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "Not provided"}`,
        `Service needed: ${serviceNeeded || "Not specified"}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    return NextResponse.json({
      success: true,
      message: "Thank you! We'll be in touch soon.",
    });
  } catch (error) {
    console.error("Contact form delivery failed:", error);
    return NextResponse.json(
      {
        success: false,
        message: "We couldn't send your message. Please try again or call us.",
      },
      { status: 500 }
    );
  }
}
