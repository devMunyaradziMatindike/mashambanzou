import { NextResponse } from "next/server";
import { Resend } from "resend";
import { buildDonationInquiryEmailHtml } from "@/lib/email/donation-inquiry-email";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(req: Request) {
  if (!resend) {
    return NextResponse.json(
      { error: "Email is not configured. Set RESEND_API_KEY on the server." },
      { status: 503 },
    );
  }

  let body: { name?: string; email?: string; phone?: string };
  try {
    body = (await req.json()) as { name?: string; email?: string; phone?: string };
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";

  if (!name || !email || !phone) {
    return NextResponse.json({ error: "Name, email and phone are required." }, { status: 400 });
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  const from = process.env.RESEND_FROM ?? "Mashambanzou Care Trust <onboarding@resend.dev>";
  const html = buildDonationInquiryEmailHtml({ email, name, phone });

  const { error } = await resend.emails.send({
    from,
    to: [email],
    subject: "Thank you — we’ve received your in-kind donation interest",
    html,
  });

  if (error) {
    console.error("[donate-inquiry]", error);
    return NextResponse.json({ error: "Failed to send email. Please try again later." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
