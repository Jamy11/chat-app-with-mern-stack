const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");

const { notFound, errorHandler } = require("./middleware/errorMiddleware");
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
app.use("/api/chat", chatRoutes);

app.use(notFound);
app.use(errorHandler);
app.listen(PORT, console.log("server started", PORT));
