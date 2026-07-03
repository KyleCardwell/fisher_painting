import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();

    const name = String(body?.name || "").trim();
    const email = String(body?.email || "").trim();
    const message = String(body?.message || "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Name, email, and message are required.",
        },
        { status: 400 }
      );
    }

    // TODO: Integrate with SendGrid or Resend for email delivery
    return NextResponse.json({
      success: true,
      message: "Thank you! We'll be in touch soon.",
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Invalid request payload.",
      },
      { status: 400 }
    );
  }
}
