import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";
export async function POST(req, res) {
  const payload = await req.json();
  const e = payload.email;
  const n = payload.name;
  const q = payload.query;

  const bodyl = `Dear ${n},\nThank you for reaching out and expressing your interest my portfolio.I appreciate the opportunity to connect with you.\nI have received your inquiry and will review the details you provided. I will get back to you as soon as possible with the information or response you requested.\nIf you have any additional questions or if there's anything specific you would like to discuss, please feel free to let me know.\nThank you once again for considering my portfolio.\nI will look forward to the possibility of working together.\n\n\nBest regards,\nShashi Preetham\nshashiawaripreetham@gmail.com`;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.user,
      pass: process.env.pass,
    },
  });
  const transporter2 = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.user2,
      pass: process.env.pass2,
    },
  });

  const mailOptions = {
    from: process.env.user,
    to: e,
    subject: "Thank You for Your Inquiry - Shashi Awari",
    text: bodyl,
  };
  const mailOptions2 = {
    from: process.env.user2,
    to: process.env.user,
    subject: n ,
    text: e +"\n"+q,
  };

  try {
    await transporter.sendMail(mailOptions);
    await transporter2.sendMail(mailOptions2)
    const uri = process.env.MONGODB_URI;
    const client = new MongoClient(uri);

    try {
      await client.connect();
      const db = client.db();
      const collection = db.collection("portfolio");

      const result = await collection.insertOne(payload);
      return NextResponse.json({ message: "Emails sent successfully" });
    } catch (error) {
      console.error("Error:", error);
      return NextResponse.json({ success: false, error: error.message });
    } finally {
      await client.close();
    }
  } catch (error) {
    console.error(error);
    return NextResponse.error({ message: "Error uploading" });
  }
}
