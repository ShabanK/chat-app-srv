import express from "express";
import authRouter from "./routes/authRouter";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/auth", authRouter);

app.listen(3000, () => {
  console.log("Server is running");
});
