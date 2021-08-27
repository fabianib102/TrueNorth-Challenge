const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const taskRoute = require('./routes/tasks');

app.get("/", (req, res)=>{
  res.send("Express Here")
});

app.use("/tasks", taskRoute);

app.listen(3001, ()=>{
  console.log("The express listening")
})

module.exports = app