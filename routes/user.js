const express = require("express");
const { insertData } = require("../lib/serverMethods");

const router = express.Router();
const musicWishes = "musicRequests";
const greetings = "greetings";

router.post("/music", async (req, res, next) => {
  try {
    await insertData({ collectionName: musicWishes, data: req.body });
    res.send("Music request added.");
  } catch (error) {
    next(new Error(error));
  }
});

router.post("/greets", async (req, res, next) => {
  try {
    await insertData({ collectionName: greetings, data: req.body });
    res.send("Greeting request added.");
  } catch (error) {
    next(new Error(error));
  }
});

module.exports = router;
