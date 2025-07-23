const nodemailer = require("nodemailer");


const dotenv = require("dotenv");
dotenv.config();

const sendEmail = async (to, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = { from: process.env.EMAIL_USER, to, subject, text };
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
};

module.exports = { sendEmail };

// const sendEmail = async (
//     senderEmail: string,
//     senderPassword: string,
//     recivers: string[],
//     message: string
// ): Promise<void> => {
//     const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: senderEmail,
//             pass: senderPassword,
//         },
//     });

//     const mailOptions = {
//         from: senderEmail,
//         to: recivers.join(','),
//         subject: 'Elective Notification',
//         text: `${message}\n\nWebsite : https://elective.vercel.app`,
//     };

//     const emailResponse = await transporter.sendMail(mailOptions);
//     console.log('Email sent:', emailResponse);
// };