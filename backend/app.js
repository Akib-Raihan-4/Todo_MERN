const express = require("express");
const app = express();
require("./conn/conn");
const auth = require("./routes/auth");
const list = require("./routes/list");

app.get("/", (req, res) => {
  res.send("hello");
});
app.use(express.json());
app.use("/api/v1", auth);
app.use("/api/v2", list);
app.listen(1000, () => {
  console.log("Server Started");
});
