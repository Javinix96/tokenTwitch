const express = require("express");
const app = express();
const cors = require("cors");

let token = "";
let fullToken = "";

app.use(express.json());
app.use(cors());
const PORT = 8080;

app.get("/TOKK/", (req, res) => {
  token = req.query.code;
  fullToken = `Bearer ${token}`;
  console.log(fullToken);
  res.json("took");
});

app.get("/fullTokk", (req, res) => {
  console.log(fullToken + "PREUBA");
  res.send(JSON.stringify({ token, fullToken }));
});

app.listen(PORT, () => {
  console.log("Server listerning on Port localhost:" + PORT);
});
