const nodemailer = require("nodemailer");
const createError = require("http-errors");

const sendApprovalEmail = async (appointment) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: true, // Use SSL/TLS
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: appointment.email,
      subject: "Your Appointment Confirmation - Wundt Psychological Institute",
      html: `
    <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: auto; padding: 20px; border-radius: 8px; background-color: #f9f9f9;">
      <h2 style="color: #007bff; text-align: center;">Appointment Confirmation</h2>
      
      <p style="font-size: 16px;">Hello <strong>${
        appointment.firstname
      },</strong></p>
      <p>Your appointment at <strong>Wundt Psychological Institute</strong> has been successfully scheduled. Below are the details of your appointment:</p>
      
      <div style="background-color: #fff; padding: 15px; border-radius: 5px; box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);">
        <p><strong>📅 Date:</strong> ${appointment.date.toDateString()}</p>
        <p><strong>⏰ Time:</strong> ${appointment.time}</p>
        <p><strong>📍 Location:</strong> ${appointment.branch}</p>
      </div>

      <p style="margin-top: 15px;">If you need to make any changes or have questions, feel free to <a href="mailto:${
        process.env.EMAIL_USER
      }" style="color: #007bff; text-decoration: none;">contact us</a>.</p>
      
      <p style="margin-top: 20px;">Thank you for choosing Wundt Psychological Institute. We look forward to seeing you.</p>
      
      <p style="margin-top: 20px; font-weight: bold;">Best regards,<br>
      Wundt Psychological Institute Team</p>
    </div>
  `,
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Email sending error:", error);
    throw createError(500, "Failed to send confirmation email");
  }
};

module.exports = sendApprovalEmail;
