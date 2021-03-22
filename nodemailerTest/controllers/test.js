const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "yahoo",
  auth: {
    user: "medo1208@yahoo.com",
    pass: "wrvvkigxyittunfd",
  },
  proxy: "http://127.0.0.1:55256",
});

let message = {
  from: "medo1208@yahoo.com",
  to: "medo0o6665@gmail.com",
  subject: "signup successful",
  text: "hello there",
};

transporter
  .sendMail(message)
  .then(() => {
    console.log("you should receive an email from us");
    // return res.status(200).json({ msg: "you should receive an email from us" });
  })
  .catch((error) => console.error(error));
