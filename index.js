const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const student = {
  name: "Sumi Akter",
  id: 8,
  favSub: "Mathematics",
};

app.get("/", (req, res) => {
    const query = req.body;
  res.send("Simple node js connecting 2023");
});

app.listen(port, () => {
  console.log("Simple node js connecting", port);
});
