const express = require("express");
const bodyarser = require('body-parser');
const htmlspecialchars = require('htmlspecialchars');
const https = require("https");
const fs = require("fs");
const mailpost = require("./components/mail/mail");
let app = express();

const options={   cert: fs.readFileSync('./components/sslcert/fullchain.pem'),
key: fs.readFileSync('./components/sslcert/privkey.pem') }


app.use(bodyarser.urlencoded({ extended: true }));
app.use(bodyarser.json());
app.use("/views", express.static('static'));
app.use((req, res, next) => {
  if (req.url != '/') {
    res.status(404).send('Not found');

  }
  next();
});
app.use(require('helmet')());





app.get("/", (reg, res) => {

    res.render("index.html");

});

app.post("/", (reg, res) => {
  let name = htmlspecialchars(reg.body.name);
  let phone = htmlspecialchars(reg.body.phone);
  let comit = htmlspecialchars(reg.body.text);
  if (name.length == 0 || phone.length < 15 || comit.length == 0) {
    res.send("Что-то пошло не так ");
    return false;
  }
  mailpost.mailpost(mailpost.transporter, name, phone, comit, res)

});

app.listen(80, () => {
  console.log("server start")
});

https.createServer(options, app).listen(443);

