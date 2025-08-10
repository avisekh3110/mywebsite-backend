const express = require("express");
const bodyParser = require("body-parser");

const cors = require("cors");
const app = express();
const PORT = 8080 || process.env.PORT;

app.use(
  cors({
    origin: ["http://localhost:5173", "https://avisekh.vercel.app/"],
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/", (req, res) => {
  const data = req.body;
  console.log(data);
  res.send("Done!!");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
