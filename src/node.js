// const express = require('express');
// const nodemailer = require('nodemailer');

// const app = express();
// const port = process.env.PORT || 5000;

// // Configure email sending using Nodemailer
// const transporter = nodemailer.createTransport({
//   host: 'smtp.example.com', // Replace with your SMTP host
//   port: 587, // Replace with your SMTP port
// //   secure: true, // Use TLS
//   auth: {
//     user: 'your_email@example.com', // Replace with your email address
//     pass: 'your_password', // Replace with your email password
//   },
// });

// // API endpoint to receive email data from React
// app.post('/send-email', async (req, res) => {
//   const { name, email, message } = req.body; // Extract data from request body

//   try {
//     // Construct email content
//     const mailOptions = {
//       from: '"Your Name" <your_email@example.com>', // Replace with your name and email
//       to: 'recipient_email@example.com', // Replace with recipient email
//       subject: `Contact Form Message from ${name}`,
//       text: message,
//     };

//     // Send email using Nodemailer
//     await transporter.sendMail(mailOptions);

//     res.status(200).json({ message: 'Email sent successfully!' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Failed to send email' });
//   }
// });

// app.listen(port, () => console.log(`Server listening on port ${port}`));
