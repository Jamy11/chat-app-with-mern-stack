const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
dotenv.config();
const PORT = process.env.PORT || 50000;
connectDB();
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("App is running");
});

// app.get("/api/chats", (req, res) => {
//   res.send(chats);
// });
app.use("/api/user", userRoutes);
app.listen(PORT, console.log("server started", PORT));
