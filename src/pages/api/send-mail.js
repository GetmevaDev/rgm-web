import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, subject, message } = req.body;

    // Create a transport object using SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "mail",
        pass: "your-password",
      },
    });

    // Define the email options
    const mailOptions = {
      from: "mail",
      to: email,
      subject,
      text: message,
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      res.status(500).json({ error: "Failed to send email" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
