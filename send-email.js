 const nodemailer = require("nodemailer");

// Access the SMTP key from environment variables (GitHub Secrets)
const smtpKey = process.env.BREVO_SMTP_KEY;

if (!smtpKey) {
  console.error("SMTP Key is missing!");
  process.exit(1); // Exit with error
}

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com", // Brevo SMTP host
  port: 587,
  secure: false, // true for port 465, false for 587
  auth: {
    user: "897745002@smtp-brevo.com", // Must match verified sender in Brevo
    pass: smtpKey,
  },
});

const mailOptions = {
  from: '"Your Name" <info@medperks.co.uk>', 
  to: "luke.found@icloud.com", // Use the correct recipient email address
  subject: "Test Email from GitHub Actions",
  text: "This is a test email sent from GitHub Actions using Brevo SMTP.",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error("Error sending email:", error);
    process.exit(1); // Exit if sending email fails
  } else {
    console.log("Email sent successfully:", info.response);
  }
});
