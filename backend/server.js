const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");

dotenv.config();
const PORT = process.env.PORT || 50000;

const app = express();

app.get("/", (req, res) => {
  res.send("App is running");
});

app.get("/api/chats", (req, res) => {
  res.send(chats);
});

app.listen(PORT, console.log("server started", PORT));
