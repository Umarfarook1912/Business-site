import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, overview } = body;

    // Validate inputs
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email, and phone are required fields." },
        { status: 400 }
      );
    }

    const adminEmail = process.env.ADMIN_EMAIL || "growza@gmail.com";

    // Build email HTML template
    const emailHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; borderRadius: 5px;">
        <h2 style="color: #000; border-bottom: 2px solid #eaeaea; padding-bottom: 10px;">New Consultation Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone / WhatsApp:</strong> ${phone}</p>
        <div style="margin-top: 20px; padding: 15px; bg-color: #f9f9f9; border-left: 4px solid #000;">
          <p style="margin: 0;"><strong>Project Overview / Challenges:</strong></p>
          <p style="margin: 10px 0 0 0; white-space: pre-wrap;">${overview || "No overview provided."}</p>
        </div>
        <p style="font-size: 12px; color: #666; margin-top: 30px; border-top: 1px solid #eaeaea; padding-top: 10px;">
          This request was submitted from the Growza consultation form.
        </p>
      </div>
    `;

    console.log("-----------------------------------------");
    console.log("New Consultation Form Submission Received:");
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone}`);
    console.log(`Overview: ${overview}`);
    console.log("-----------------------------------------");

    // Check if SMTP is configured
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (smtpHost && smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: parseInt(smtpPort || "587"),
        secure: smtpPort === "465",
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: `"${name} via Growza" <${smtpUser}>`,
        to: adminEmail,
        replyTo: email,
        subject: `Growza Consultation Request - ${name}`,
        html: emailHtml,
      });

      console.log("SMTP Email successfully sent to admin.");
      return NextResponse.json({ success: true, message: "Consultation request sent successfully." });
    } else {
      console.warn("SMTP credentials not fully configured in environment. Displaying fallback log only.");
      return NextResponse.json({
        success: true,
        message: "Request received (Dev mode: logged to console).",
        devMode: true
      });
    }
  } catch (error: any) {
    console.error("Error processing consultation submission:", error);
    return NextResponse.json(
      { error: "Internal server error. Failed to process consultation request." },
      { status: 500 }
    );
  }
}
