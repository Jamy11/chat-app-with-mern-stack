const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT || 50000;

const app = express();

app.listen(PORT, console.log("server started", PORT));
