const nodemailer = require('nodemailer');


const sendMail= async (option)=>{
    const transporter = nodemailer.createTransport({
        host: "smtp-mail.outlook.com",
        port: 587,
        service:"outlook",
        auth: {
          user: "xxxx@outlook.com",
          pass: "XXXXXXXXXX",
        },
      });

      let mailOptions = {
        from: 'xxxxxxx@outlook.com',
        to: option.email,
        subject: option.subject,
        text: option.message
      };

      await transporter.sendMail(mailOptions)
}


module.exports= sendMail;
