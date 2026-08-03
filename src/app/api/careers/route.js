import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/resend";
import { verifyTurnstileToken } from "@/lib/turnstile";

const maxResumeSize = 4 * 1024 * 1024;

export const runtime = "nodejs";

export async function POST(request) {
  let formData;

  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Invalid application payload.",
      },
      { status: 400 }
    );
  }

  try {
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const website = String(formData.get("website") || "").trim();
    const turnstileToken = String(formData.get("turnstileToken") || "");
    const resume = formData.get("resume");

    if (website) {
      return NextResponse.json({
        success: true,
        message: "Thank you! We'll be in touch soon.",
      });
    }

    if (!name || !email || !phone || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Name, email address, and phone number are required.",
        },
        { status: 400 }
      );
    }

    const isHuman = await verifyTurnstileToken({
      action: "careers",
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

    if (resume && resume.size > maxResumeSize) {
      return NextResponse.json(
        {
          success: false,
          message: "Resume must be 4 MB or smaller.",
        },
        { status: 400 }
      );
    }

    const hasResume =
      resume && typeof resume.arrayBuffer === "function" && resume.size > 0;
    const attachments = hasResume
      ? [
          {
            content: Buffer.from(await resume.arrayBuffer()).toString("base64"),
            filename: String(resume.name || "resume").replace(/[^a-zA-Z0-9._ -]/g, "_"),
          },
        ]
      : undefined;

    await sendEmail({
      attachments,
      replyTo: email,
      subject: `Job application from ${name.slice(0, 100)}`,
      text: [
        "New Fisher Painting job application",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Resume: ${hasResume ? "Attached" : "Not provided"}`,
        "",
        "Message:",
        String(formData.get("message") || "").trim() || "No message provided.",
      ].join("\n"),
    });

    return NextResponse.json({
      success: true,
      message: "Thank you! We'll be in touch soon.",
    });
  } catch (error) {
    console.error("Careers form delivery failed:", error);
    return NextResponse.json(
      {
        success: false,
        message: "We couldn't send your application. Please try again or call us.",
      },
      { status: 500 }
    );
  }
}
