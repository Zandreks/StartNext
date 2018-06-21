const nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
    host: 'smtp.mail.ru',
    port: 465,
    secure: true,
    auth: {
        user: "maks-ast@bk.ru",
        pass: ""
    }
});

let mailpost = (transporter, name, phone, comit, res) => {
    let mailOptions = {
        from: '"Info StartNext 👻" <maks-ast@bk.ru>',
        to: 'zandreks@gmail.com',
        subject: 'Письмо с сайта StarttNext.kz ✔',
        text: 'Hello world?',
        html: "<p>Имя: " + name + " <br> Телефон: " + phone + " <br> Сообщение: " + comit + " </p>"
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.send(error);
        }
        res.send("ok");
    });

}
module.exports.mailpost = mailpost;
module.exports.transporter = transporter;  