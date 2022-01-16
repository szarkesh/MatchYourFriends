const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const client = require("twilio")("ACd5b8214ab5a4060171d3e5a21b1d8012", "a0cb27f849f23ad587279cdd726830f4");
const path = require("path");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());

const apiPort = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, "client/build")));

app.post("/api/messages", (req, res) => {
  res.header("Content-Type", "application/json");
  console.log(req.body);
  Promise.all([
    client.messages.create({
      from: "9034943977",
      to: req.body.phone1,
      body: req.body.message1,
    }),
    client.messages.create({
      from: "9034943977",
      to: req.body.phone2,
      body: req.body.message2,
    }),
  ])
    .then(() => {
      console.log("SENT MESSAGE FROM " + req.body.body);
      res.send(JSON.stringify({ success: true }));
    })
    .catch((err) => {
      console.log(err);
      res.send(JSON.stringify({ success: false }));
    });
});

app.get("/test2", (req, res) => {
  res.send("hello, world");
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build", "index.html"));
});

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
