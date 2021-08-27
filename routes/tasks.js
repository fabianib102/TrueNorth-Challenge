const { Router } = require("express");
const router = Router();
const fetch = require("node-fetch");
const url = "https://lorem-faker.vercel.app/api?quantity=3";

router.get("/", async (req, res) => {
  const fetchResponse = await fetch(url);
  const jsonFetch = await fetchResponse.json();
  let arrayResponse = [];
  for (const key in jsonFetch) {
    const element = {
      UUID: (parseInt(key) + 1),
      title: jsonFetch[key],
      state: false,
    };
    arrayResponse.push(element)
  }
  res.status(200).json(arrayResponse);
});

router.put("/:UUID", async (req, res) => {
  console.log("This is the UUID", req.params.UUID);
  res.status(200).json("Updated");
});

module.exports = router;
