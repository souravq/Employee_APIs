import express from "express";

const app = express();

app.get("/", (req, res) => {
  res("Hello World !!!");
});

export default app;
