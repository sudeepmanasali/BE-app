const express = require("express");
const mongoose = require("mongoose");

const server = express();

server.get("/", (req, res) => {

  const data = [
    { name: "Jhon", age: 20 },
    { name: "XYZ", age: 20 },
    { name: "Mike", age: 20 },
    { name: "Jane", age: 20 }
  ];

  res.send(data);
});

mongoose
  .connect(
    `mongodb+srv://sudeep_manasali:Sudeep%401234@googleformclone.urebd.mongodb.net/google_form_clone?retryWrites=true&w=majority`)
  .then(() => {
    server.listen(8080, () => {
      console.log("success fully running", 8080);
    });
  })
  .catch((err) => {
    console.log(err);
    process.exit();
  });
