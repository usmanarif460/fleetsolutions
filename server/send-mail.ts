import { IncomingMessage, ServerResponse } from "http";
import nodemailer from "nodemailer";

export default async function (req: IncomingMessage, res: ServerResponse) {
  if (req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", async () => {
      const { email, subject, message } = JSON.parse(body);
      const transporter = nodemailer.createTransport({
        host: "smtp.example.com",
        port: 587,
        secure: false,
        auth: {
          user: "your_email@example.com",
          pass: "your_password",
        },
      });
      const mailOptions = {
        from: '"Your Name" <your_email@example.com>',
        to: email,
        subject: subject,
        text: message,
      };
      try {
        await transporter.sendMail(mailOptions);
        res.statusCode = 200;
        res.end("Email sent");
      } catch (error: any) {
        res.statusCode = 500;
        res.end(`Failed to send email: ${error.message}`);
      }
    });
  } else {
    res.statusCode = 405;
    res.end("Method Not Allowed");
  }
}
