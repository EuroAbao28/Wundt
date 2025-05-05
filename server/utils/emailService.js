const nodemailer = require("nodemailer");
const createError = require("http-errors");

const sendApprovalEmail = async ({ appointment, additionalNote }) => {
  const { firstname, email, date, time, branch } = appointment;
  const LOGO_URL =
    "https://res.cloudinary.com/dh2rqtgfz/image/upload/v1746299946/Wundt/assets/xwzbguukskrt0zdievrh.png";

  // Email template
  const htmlTemplate = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>Appointment Confirmation</title>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
        rel="stylesheet"
      />
    </head>
    <body
      style="font-family: 'Poppins', sans-serif; margin: 0; padding: 0; background-color: #f9f9f9;"
    >
      <div style="max-width: 600px; margin: auto; padding: 12px 0;">
        <div
          style="border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden; background-color: #ffffff;"
        >
          <!-- Logo -->
          <div
            style="background: linear-gradient(to right, #29ab87, #2563eb); padding: 16px; text-align: center;"
          >
            <img
              src="${LOGO_URL}"
              alt="Logo"
              style="height: 64px; border-radius: 9999px; border: 4px solid white;"
            />
          </div>

          <!-- Body -->
          <div style="padding: 16px;">
            <div style="text-align: center;">
              <h1 style="font-size: 24px; font-weight: 600; margin: 0;">
                Appointment Confirmed
              </h1>
              <p style="color: #6b7280; margin-top: 8px;">
                Thank you for choosing our services
              </p>
            </div>

            <p style="margin-top: 32px;">Dear ${firstname},</p>

            <p style="margin-top: 16px;">
              Your appointment has been successfully scheduled. Here are the
              details:
            </p>

            <div
              style="margin-top: 24px; background-color: #f9fafb; border-left: 2px solid #29ab87; padding: 16px; border-radius: 4px;"
            >
              <div style="margin-bottom: 12px;">
                <strong>Date:</strong> <span>${new Date(
                  date
                ).toDateString()}</span>
              </div>
              <div style="margin-bottom: 12px;">
                <strong>Time:</strong> <span>${time}</span>
              </div>
              <div>
                <strong>Location:</strong> <span>${branch}</span>
              </div>
            </div>

          ${
            additionalNote
              ? `
                <div style="margin-top: 16px; background-color: #f9fafb; border-left: 2px solid #2563eb; padding: 16px; border-radius: 4px;">
                  <p style="font-weight: 600; margin: 0;">Additional Notes:</p>
                  <p style="margin-top: 8px;">${additionalNote}</p>
                </div>
              `
              : ""
          }

            <p style="margin-top: 24px;">
              If you need to reschedule or have any questions, please reply to
              this email.
            </p>

            <div
              style="border-top: 1px solid #e5e7eb; margin-top: 24px; padding-top: 24px;"
            >
              <p style="margin: 0;">Best regards,</p>
              <p style="font-weight: 600; margin-top: 4px;">
                Wundt Psychological Institute
              </p>

              <div style="padding-top: 24px; text-align: left;">
                <a
                  href="https://wundt.vercel.app/"
                  style="color: #2563eb; text-decoration: none;"
                >
                  Visit our website
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  </html>
  `;

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Wundt Psychological Institute" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Your Appointment Confirmation - Wundt Psychological Institute",
      html: htmlTemplate,
    });
  } catch (error) {
    console.error("Email sending error:", error);
    throw createError(500, "Failed to send confirmation email");
  }
};

module.exports = sendApprovalEmail;
