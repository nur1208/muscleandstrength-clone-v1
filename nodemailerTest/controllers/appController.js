const nodemailer = require("nodemailer");

const Mailgen = require("mailgen");

const { EMAIL, PASSWORD, MAIN_URL } = require("../config");

let transporter = nodemailer.createTransport({
  service: "yahoo",
  auth: {
    user: EMAIL,
    pass: PASSWORD,
  },
  proxy: "http://127.0.0.1:55256",
});

let MailGenerator = new Mailgen({
  theme: "default",
  product: {
    // Appears in header & footer of e-mails
    name: "muscleandstrength",
    link: "http://127.0.0.1:3000",
    // Optional product logo
    logo:
      "https://ecp.yusercontent.com/mail?url=https%3A%2F%2Fcdn.muscleandstrength.com%2Fstore%2Fskin%2Ffrontend%2Fmnsv4%2Fdefault%2Fimages%2Flogo_email.gif&t=1610882023&ymreqid=bf2a1792-b4db-390f-1cc3-61000001ce00&sig=TswtBRSwWTa2cQuTBNu4Fg--~D",
  },
});

const signup = (req, res) => {
  const { userEmail, name } = req.body;

  // sign up the user .....

  // then send the email
  let response = {
    body: {
      name,
      intro:
        "There was recently a request to change the password for your account.",
      action: {
        instructions:
          "If you requested this password change, please reset your password here:",
        button: {
          color: "#3696c2", // Optional action button color
          text: "Reset Password",
          link: "http://127.0.0.1:3000/store/customer/account/changeforgotten/",
        },
      },
      outro:
        "If you did not make this request, you can ignore this message and your password will remain the same.",
    },
  };

  let mail = MailGenerator.generate(response);

  let message = {
    from: EMAIL,
    to: userEmail,
    subject: "request to change the password",
    html: mail,
  };

  transporter
    .sendMail(message)
    .then(() => {
      return res
        .status(200)
        .json({ msg: "you should receive an email from us" });
    })
    .catch((error) => console.error(error));
};

const getBill = (req, res) => {
  const { name, userEmail } = req.body;

  let response = {
    body: {
      name,
      intro: "Your bill has arrived!",
      table: {
        data: [
          {
            item: "MERN stack book",
            description: "A mern stack book",
            price: "$10.99",
          },
        ],
      },
      outro: "Looking forward to do more business with you",
    },
  };

  let mail = MailGenerator.generate(response);

  let message = {
    from: EMAIL,
    to: userEmail,
    subject: "transaction",
    html: mail,
  };

  transporter
    .sendMail(message)
    .then(() => {
      return res
        .status(200)
        .json({ msg: "you should receive an email from us" });
    })
    .catch((error) => console.error(error));
};

module.exports = {
  signup,
  getBill,
};
