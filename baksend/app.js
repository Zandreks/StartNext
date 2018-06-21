const express = require("express");
const bodyarser = require('body-parser');
const htmlspecialchars = require('htmlspecialchars');
const https = require("https");
const fs = require("fs");
const mailpost = require("./components/mail/mail");
let app = express();
app.use(express.static(__dirname + "/views/"));

const options={   cert: fs.readFileSync('./components/sslcert/fullchain.pem'),
key: fs.readFileSync('./components/sslcert/privkey.pem') }

app.use(bodyarser.urlencoded({ extended: true }));
app.use(bodyarser.json());

app.use(require('helmet')());





app.get("/", (reg, res) => {

    res.sendFile(__dirname + "/views/index.html");
});

app.post("/", (reg, res) => {
  let name = htmlspecialchars(reg.body.name);
  let phone = htmlspecialchars(reg.body.phone);
  let comit = htmlspecialchars(reg.body.text);
  if (name.length == 0 || comit.length == 0) {
    res.send("Что-то пошло не так ");
    return false;
  }
  mailpost.mailpost(mailpost.transporter, name, phone, comit, res)

});

app.listen(80, () => {
  console.log("server start")
});

https.createServer(options, app).listen(443);

