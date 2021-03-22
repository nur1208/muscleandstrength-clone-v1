import nodemailer from "nodemailer";
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "mdnuur1208@gmail.com",
    pass: "medomedooo19",
  },
  proxy: "http://127.0.0.1:55256",
});

const message = {
  from: "mdnuur1208@gmail.com",
  to: "medo0o6665@gmail.com",
  subject: "signup successful",
  text: "hello there",
};

transporter.sendMail(message, (err, date) => {
  if (err) {
    console.error(err);
  } else {
    console.log("email sent ");
  }
});
