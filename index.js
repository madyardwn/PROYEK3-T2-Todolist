const express = require("express");
const app = express();
const PORT = 3000;
const dotenv = require("dotenv");
dotenv.config();

app.use(express.urlencoded({ extended: true }));

// GET
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// POST
app.post("/", (req, res) => {
  console.log(req.body);
});

app.listen(PORT, () => console.log(`Server Up and running on port ${PORT}`));
