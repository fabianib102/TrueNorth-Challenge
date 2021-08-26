const express = require("express");
const app = express();

app.get("/", (req, res)=>{
  res.send("Express Here")
})

app.listen(3001, ()=>{
  console.log("The express hav to be run")
})