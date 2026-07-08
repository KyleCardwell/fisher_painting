import { NextResponse } from "next/server";

const maxResumeSize = 20 * 1024 * 1024;

export async function POST(request) {
  try {
    const formData = await request.formData();

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const website = String(formData.get("website") || "").trim();
    const captcha = String(formData.get("captcha") || "") === "true";
    const resume = formData.get("resume");

    if (website) {
      return NextResponse.json({
        success: true,
        message: "Thank you! We'll be in touch soon.",
      });
    }

    if (!name || !email || !phone) {
      return NextResponse.json(
        {
          success: false,
          message: "Name, email address, and phone number are required.",
        },
        { status: 400 }
      );
    }

    if (!captcha) {
      return NextResponse.json(
        {
          success: false,
          message: "Please complete the CAPTCHA.",
        },
        { status: 400 }
      );
    }

    if (resume && resume.size > maxResumeSize) {
      return NextResponse.json(
        {
          success: false,
          message: "Resume must be 20 MB or smaller.",
        },
        { status: 400 }
      );
    }

    // TODO: Integrate with SendGrid, Resend, or a recruiting system for delivery.
    return NextResponse.json({
      success: true,
      message: "Thank you! We'll be in touch soon.",
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Invalid application payload.",
      },
      { status: 400 }
    );
  }
}
