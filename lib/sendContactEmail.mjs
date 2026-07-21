import nodemailer from "nodemailer";

export async function sendContactEmail(
  { name, email, subject, message },
  env = process.env
) {
  const smtpUser = env.SMTP_USER;
  const smtpPass = env.SMTP_PASS;
  const contactReceiver = env.CONTACT_RECEIVER;

  if (!smtpUser || !smtpPass || !contactReceiver) {
    throw new Error("Email service is not configured");
  }

  if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
    throw new Error("All fields are required");
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  await transporter.sendMail({
    from: `"Portfolio Contact" <${smtpUser}>`,
    to: contactReceiver,
    replyTo: email,
    subject: `[Portfolio] ${subject}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Subject: ${subject}`,
      "",
      message,
    ].join("\n"),
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p>${message.replace(/\n/g, "<br />")}</p>
    `,
  });
}
