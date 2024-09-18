const express = require("express");
const app = express();
const { verbs } = require("./verbs");
const PORT = process.env.PORT || 5000;

console.log(verbs);

app.get("/", (req, res) => {
  res.status(200).json(verbs);
});

app.get("*", (req, res) => {
  res.status(404).json({ error: "Wrong url address" });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

app.listen(PORT, () => {
  console.log("Server listening on port " + PORT);
});
