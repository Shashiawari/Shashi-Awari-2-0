import nodemailer from "nodemailer";
import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

const escapeHtml = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const getMailConfig = () => {
  const user = process.env.MAIL_USER || process.env.user;
  const pass = process.env.MAIL_PASS || process.env.pass;
  const notifyEmail =
    process.env.CONTACT_NOTIFY_EMAIL ||
    process.env.MAIL_TO ||
    user;

  return { user, pass, notifyEmail };
};

const createTransporter = ({ user, pass }) =>
  nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });

const buildOwnerMail = ({ name, email, query, notifyEmail, senderEmail }) => ({
  from: `"Shashi Awari Portfolio" <${senderEmail}>`,
  to: notifyEmail,
  replyTo: email,
  subject: `New portfolio contact from ${name}`,
  text: [
    "You received a new contact form submission.",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    "",
    "Message:",
    query,
  ].join("\n"),
  html: `
    <div style="font-family: Arial, sans-serif; color: #111; line-height: 1.6;">
      <h2 style="margin-bottom: 12px;">New portfolio contact</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Message:</strong></p>
      <p style="white-space: pre-line;">${escapeHtml(query)}</p>
    </div>
  `,
});

const buildVisitorMail = ({ name, email, query, senderEmail }) => ({
  from: `"Shashi Awari" <${senderEmail}>`,
  to: email,
  replyTo: senderEmail,
  subject: "Thanks for reaching out to Shashi Awari",
  text: [
    `Hi ${name},`,
    "",
    "Thanks for reaching out through my portfolio.",
    "I received your message and will get back to you as soon as possible.",
    "",
    "Your message:",
    query,
    "",
    "Best regards,",
    "Shashi Awari",
  ].join("\n"),
  html: `
    <div style="font-family: Arial, sans-serif; color: #111; line-height: 1.7;">
      <p>Hi ${escapeHtml(name)},</p>
      <p>Thanks for reaching out through my portfolio.</p>
      <p>I received your message and will get back to you as soon as possible.</p>
      <p><strong>Your message:</strong></p>
      <p style="white-space: pre-line;">${escapeHtml(query)}</p>
      <p style="margin-top: 20px;">Best regards,<br />Shashi Awari</p>
    </div>
  `,
});

const saveSubmission = async (payload) => {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    return;
  }

  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db();
    const collection = db.collection("portfolio");

    await collection.insertOne({
      ...payload,
      createdAt: new Date(),
    });
  } finally {
    await client.close();
  }
};

export async function POST(req) {
  try {
    const payload = await req.json();
    const name = payload?.name?.trim();
    const email = payload?.email?.trim();
    const query = payload?.query?.trim();

    if (!name || !email || !query) {
      return NextResponse.json(
        { success: false, message: "All fields are required." },
        { status: 400 }
      );
    }

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!isValidEmail) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const { user, pass, notifyEmail } = getMailConfig();

    if (!user || !pass) {
      return NextResponse.json(
        { success: false, message: "Email service is not configured." },
        { status: 500 }
      );
    }

    const transporter = createTransporter({ user, pass });

    await Promise.all([
      transporter.sendMail(
        buildOwnerMail({
          name,
          email,
          query,
          notifyEmail,
          senderEmail: user,
        })
      ),
      transporter.sendMail(
        buildVisitorMail({
          name,
          email,
          query,
          senderEmail: user,
        })
      ),
    ]);

    try {
      await saveSubmission({ name, email, query });
    } catch (dbError) {
      console.error("Failed to store contact submission:", dbError);
    }

    return NextResponse.json({
      success: true,
      message: "Emails sent successfully.",
    });
  } catch (error) {
    console.error("Contact form failed:", error);

    return NextResponse.json(
      { success: false, message: "Could not send email right now." },
      { status: 500 }
    );
  }
}
