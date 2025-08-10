const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  secure: true,
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: "testmail31102003@gmail.com",
    pass: "qghfrouqhanyavpb",
  },
});

const sendMail = (to, msg, name) => {
  transporter.sendMail({
    from: "testmail31102003@gmail.com",
    to: [to, "avisekh.sabi31102003@gmail.com"],
    subject: `Hello!! ${name}`,
    html: `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Email</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #000000;
            color: #FFFFFF;
            padding: 20px;
          }
          .container {
            max-width: 600px;
            margin: auto;
            background: #000000;
            border-radius: 8px;
            overflow: hidden;
            color: #FFFFFF;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          }
          .header {
            background: #6E4CD3;
            color: #fff;
            padding: 20px;
            text-align: center;
            font-size: 24px;
          }
          .content {
            padding: 20px;
            line-height: 1.6;
          }
          .footer {
            background: #333333;
            padding: 10px;
            font-size: 12px;
            text-align: center;
            color: #FFFFFF;
          }
          a.button {
            display: inline-block;
            padding: 10px 15px;
            background-color: #6E4CD3;
            color: white;
            text-decoration: none;
            border-radius: 4px;
            margin-top: 10px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">Hello, ${name} 👋</div>
          <div class="content">
            <p class="msg">
            This is the message you have sent: ${msg}
            </p>
            <p>We hope you’re having a great day!</p>
            <a href="https://yourwebsite.com" class="button">Visit Website</a>
          </div>
          <div class="footer">
            &copy; ${new Date().getFullYear()} Avisekh sabi. All rights reserved.
          </div>
        </div>
      </body>
      </html>
    `,
  });
};

module.exports = sendMail;
