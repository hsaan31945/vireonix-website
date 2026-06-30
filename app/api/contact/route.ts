import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const recipient = "contact@vireonix.dev";

function value(data: FormData, key: string) {
  return String(data.get(key) || "").trim();
}

export async function POST(request: Request) {
  const data = await request.formData();
  const name = value(data, "name");
  const email = value(data, "email");
  const company = value(data, "company");
  const service = value(data, "service");
  const budget = value(data, "budget");
  const message = value(data, "message");

  if (!name || !email || !company || !service || !budget || !message) {
    return NextResponse.json({ error: "Please fill in every field." }, { status: 400 });
  }

  const host = process.env.SMTP_HOST || "smtp.hostinger.com";
  const port = Number(process.env.SMTP_PORT || 465);
  const user = process.env.SMTP_USER || recipient;
  const pass = process.env.SMTP_PASS;

  if (!pass) {
    return NextResponse.json({ error: "SMTP credentials are not configured." }, { status: 500 });
  }

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `"Vireonix Website" <${user}>`,
      to: recipient,
      replyTo: email,
      subject: `Proposal request from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company}`,
        `Service Needed: ${service}`,
        `Budget Range: ${budget}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });
  } catch {
    return NextResponse.json({ error: "We could not send your proposal request right now." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
