const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const port = 1001;
const bodyParser = require("body-parser");
const appRoutes = require("./routes");

app.use(express.static("public"));
let urlEncodedParser = bodyParser.urlencoded({ extended: true });

app.set("view engine", "ejs");

//app use the routes from routes/index.js
app.use(appRoutes);

app.post("/contact", urlEncodedParser, function (req, res) {
  let formData = req.body;
  console.log(formData);

  var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "2efab4564a593d",
      pass: "8b071722c3d684",
    },
  });

  async function sendEmail() {
    const info = await transport.sendMail({
      from: "afi.hillman17@gmail.com", // sender address
      to: formData.email, // list of receivers
      subject: `What's good my boy ${formData.nameInput}`,
      text: "WHAT'S GOOD GANG", // plain text body
      html: "<p>WHAT'S GOOD GANG</p>", // html body
    });

    console.log("Message sent: %s", info.messageId);
  }
  sendEmail()
    .then(() => {
      res.redirect("/thank-you");
    })
    .catch(() => {
      res.send("FAILED");
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
