const express = require("express");
const bodyParser = require("body-parser");

const cors = require("cors");
const sendMail = require("./mailer");
const app = express();
const PORT = 8080 || process.env.PORT;

app.use(
  cors({
    origin: ["http://localhost:5173", "https://avisekh.vercel.app"],
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send(
    "<h3>This is the server for <a href={avisekh.vercel.app}>avisekh.versel.app</a></h3>"
  );
});

app.post("/", (req, res) => {
  const { name, email, message } = req.body;
  sendMail(email, message, name);
  res.send(`mail sent to ${process.env.ADMIN_EMAIL}`);
  res.send(`mail sent to ${process.env.EMAIL}`);
  res.send(`mail sent to ${process.env.PASS}`);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
