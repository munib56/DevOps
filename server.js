const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello, World! This is a simple Node.js app.");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
