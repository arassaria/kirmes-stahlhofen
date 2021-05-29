const express = require("express");
const { getCollection } = require("../lib/serverMethods");

const router = express.Router();
const musicWishes = "music-requests";
const greetings = "greetings";

router.get("/music", async (req, res, next) => {
  try {
    const data = await getCollection({ collectionName: musicWishes });
    res.send(data);
  } catch (error) {
    next(new Error(error));
  }
});

router.get("/greets", async (req, res, next) => {
  try {
    const data = await getCollection({ collectionName: greetings });
    res.send(data);
  } catch (error) {
    next(new Error(error));
  }
});

module.exports = router;
