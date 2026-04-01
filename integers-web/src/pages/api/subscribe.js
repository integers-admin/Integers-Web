import nodemailer from "nodemailer";

export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { email } = req.body;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOption = {
      from: `"Integers Newsletter" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: "New Subscriber",
      html: `
<div style="font-family: Outfit, sans-serif; color: #333; line-height: 1.6; max-width: 600px; margin: auto; border-radius: 10px; background-color: #f9f9f9; overflow: hidden;">
    
    <!-- Header -->
    <div style="background-color: #00CEC9; padding: 20px; text-align: center;">
        <h1 style="color: #fff; margin: 0; font-size: 24px;">
            New Newsletter Subscription
        </h1>
    </div>

    <!-- Body -->
    <div style="padding: 20px;">
        
        <p style="color: #00CEC9; font-weight:500; font-size: 20px;">
            Dear Integers Team,<br>
            a new user has subscribed to your newsletter.
        </p>

         <p style="font-size:16px; padding: 15px; background-color: #fff; border-left: 5px solid #00CEC9; border-radius: 5px;">
         <strong>New Subscriber Email:</strong><br/>
         <a href="mailto:${email}" style="color: #00CEC9; text-decoration: none;">
        ${email}
        </a>
        </p>
        <p style="text-align: center; margin-top: 20px;">
            <a href="mailto:${email}" 
               style="display: inline-block; padding: 10px 20px; background-color: #00CEC9; color: #fff; text-decoration: none; border-radius: 5px; font-weight: bold;">
                Reply to User
            </a>
        </p>

    </div>
    <div style="background-color: #f1f1f1; padding: 15px; text-align: center; font-size: 12px; color: #666;">
        This notification was sent from the Integers website newsletter subscription form.
    </div>

</div>
`,
    };

    await transporter.sendMail(mailOption);

    return res.status(200).json({
      message: "Subscription successful. Email sent!",
    });

  } catch (error) {
    console.error("Email error:", error);
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
}
