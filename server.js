const express = require("express");
const app = express();
const taskRoute = require('./routes/tasks');

app.get("/", (req, res)=>{
  res.send("Express Here")
})

app.use("/tasks", taskRoute);

app.listen(3001, ()=>{
  console.log("The express listening")
})