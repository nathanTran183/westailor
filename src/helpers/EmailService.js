/**
 * Created by phuct on 11/25/2017.
 */
const nodemailer = require('nodemailer');

module.exports = {
    sendNodeMailer (mailOptions, next) {
        var config = {
            // host: "smtp.ethereal.email", // hostname
            // secureConnection: true, // use SSL
            // port: 465, // port for secure SMTP
            auth: {
                user: "taylorhoran94@gmail.com",
                pass: "0905131033"
            },
            service: 'gmail',
            // tls: {
            //     rejectUnauthorized: false
            // }
        };

        var transporter = nodemailer.createTransport(config);
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error)
                console.log('----------')
                return next(error);
            }
            return next();
        });
    }
}