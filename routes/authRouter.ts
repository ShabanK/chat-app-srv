import { Router } from "express";

const authRouter = Router();

authRouter.get("/", (req, res) => {
  res.send("Hello World");
});

export default authRouter;
