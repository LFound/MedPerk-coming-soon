const nodemailer = require("nodemailer");

// Load environment variables
const smtpKey = process.env.SMTP_KEY;

if (!smtpKey) {
  console.error("SMTP Key is missing!");
  process.exit(1); // Exit with error
}

const transporter = nodemailer.createTransport({
  host: "smtp-relay.sendinblue.com", // Brevo SMTP host
  port: 587,
  secure: false, // true for port 465, false for 587
  auth: {
    user: "info@medperks.co.uk", // Must match verified sender in Brevo
    pass: smtpKey,
  },
});

const mailOptions = {
  from: '"Your Name" <info@medperks.co.uk>', 
  to: "your-personal-email@example.com", 
  subject: "Test Email from GitHub Actions",
  text: "This is a test email sent from GitHub Actions using Brevo SMTP.",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error("Error sending email:", error);
    process.exit(1);
  } else {
    console.log("Email sent successfully:", info.response);
  }
});
