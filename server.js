const express = require("express");
const bodyParser = require("body-parser");
const client = require("twilio")("AC137737e38e5f757d10fa5c5054465a70", "d4dc47939b44a2a7b0a91234bf6665d2");
const path = require("path");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const apiPort = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, "build")));

app.post("/api/messages", (req, res) => {
    res.header("Content-Type", "application/json");
    console.log(req.body);
    client.messages
        .create({
            from: "2055512859",
            to: req.body.to,
            body: req.body.body,
        })
        .then(() => {
            console.log("SENT MESSAGE FROM " + req.body.body);
            res.send(JSON.stringify({ success: true }));
        })
        .catch((err) => {
            console.log(err);
            res.send(JSON.stringify({ success: false }));
        });
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/build/index.html"));
});

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
