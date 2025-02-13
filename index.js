import express from "express";

const app = express();
const port = 4000;

app.get("/test", (req, res) => {
  res.json({ message: "successful" });
});

app.get("/home", (req, res) => {
  res.send("Testing server");
});

app.listen(port, () => {
  console.log(`Running in port ${port}`);
});
