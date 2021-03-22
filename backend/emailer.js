import nodemailer from "nodemailer";
import { EMAIL, PASSWORD, MAIN_URL } from "../backend/config/index.js";

export const sendEmail = (message) => {
  const transporter = nodemailer.createTransport({
    service: "yahoo",
    auth: {
      user: EMAIL,
      pass: PASSWORD,
    },
    proxy: "http://127.0.0.1:50066",
  });

  return transporter
    .sendMail(message)
    .then((info) => {
      console.log(`message sent: ${info.response}`);
    })
    .catch((error) => console.error(error));
};

export { MAIN_URL };
