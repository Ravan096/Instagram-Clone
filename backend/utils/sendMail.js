const nodemailer = require('nodemailer');


const sendMail= async (option)=>{
    const transporter = nodemailer.createTransport({
        host: "smtp-mail.outlook.com",
        port: 587,
        service:"outlook",
        auth: {
          user: "lakshman.academy@outlook.com",
          pass: "Laksh@1491",
        },
      });

      let mailOptions = {
        from: 'lakshman.academy@outlook.com',
        to: option.email,
        subject: option.subject,
        text: option.message
      };

      await transporter.sendMail(mailOptions)
}


module.exports= sendMail;