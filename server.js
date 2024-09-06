const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const helmet = require('helmet');
dotenv.config();

const server = express();

server.use(helmet());
server.get("/", (req, res) => {

  const data = [
    { name: "Jhon", age: 20 },
    { name: "XYZ", age: 20 },
    { name: "Mike", age: 20 },
    { name: "Jane", age: 20 }
  ];

  res.send(data);
});

const PORT = process.env.PORT || 8081

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}%401234@googleformclone.urebd.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`)
  .then(() => {
    server.listen(PORT, () => {
      console.log("success fully running", PORT);
    });
  })
  .catch((err) => {
    console.log(err);
    process.exit();
  });
