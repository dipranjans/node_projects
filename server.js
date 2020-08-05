const express = require("express");
const app = express();
const main = require("./nodemailer");

app.get("/", (req, res) => {
  res.send("welcome to node.js nodemailer");
});

app.get("/sendmail", (req, res) => {
  main()
    .then(response => {
      console.log(response);
      res.send(response);
    })
    .catch(console.error);
});

const port = 3000;
app.listen(port, (req, res) => {
  console.log(`server is listening to ${port}`);
});
