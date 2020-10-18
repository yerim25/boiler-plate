const express = require("express");
const app = express();
const port = 5000;
const { User } = require("./models/User");

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://yerim25:na6175yj@cluster0.mjt1k.mongodb.net/Cluster0?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
