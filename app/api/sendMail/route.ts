import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const body = await request.json();

  const { name, email, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ message: "All fields are required" }, { status: 400 });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    await transporter.sendMail({
        from: `"${name}" <${process.env.GMAIL_USER}>`,
        replyTo: email,
        to: process.env.GMAIL_USER,
        subject: `Pesan dari ${name}`,
        text: message,
    });

    return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
  }
}
