//import express
const express = require("express");
//import my routes
const router = require("./src/routes");

//add express to app
const app = express();

app.use(express.json());

//custom url + routes
app.use("/api/", router);

//which port?
const port = 5000;

//testing
app.get("/", (req, res) => {
  res.send("Hello from express!");
});

//log and launch
app.listen(port, () => console.log(`Listening on port ${port}!`));
