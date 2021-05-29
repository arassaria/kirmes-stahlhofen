const express = require("express");
const { getDJView, deleteData, updateData } = require("../lib/serverMethods");

const router = express.Router();
const musicWishes = "musicRequests";
const greetings = "greetings";

router.get("/music", async (req, res, next) => {
  try {
    const data = await getDJView({ collectionName: musicWishes });
    res.send(data);
  } catch (error) {
    next(new Error(error));
  }
});

router.get("/greets", async (req, res, next) => {
  try {
    const data = await getDJView({ collectionName: greetings });
    res.send(data);
  } catch (error) {
    next(new Error(error));
  }
});

module.exports = router;
