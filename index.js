const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Welcome to CI/CD Node App" });
});

app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));