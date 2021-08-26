const { Router } = require("express");
const router = Router();
const fetch = require("node-fetch");
const url = "https://lorem-faker.vercel.app/api?quantity=5";

router.get("/", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const fetchResponse = await fetch(url);
  const jsonFetch = await fetchResponse.json();
  if(!jsonFetch){
    res.status(404).json("Not found");
  }
  let arrayResponse = [];
  for (const key in jsonFetch) {
    const element = {
      UUID: (parseInt(key) + 1),
      title: jsonFetch[key],
      state: false,
    };
    arrayResponse.push(element)
  }
  res.json(arrayResponse);
});

router.put("/:UUID", (req, res) => {
  console.log("This is the UUID", req.params.UUID);
  res.status(201).json("Updated");
});

module.exports = router;
