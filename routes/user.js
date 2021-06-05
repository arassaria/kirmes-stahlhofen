const express = require("express");
const {
  insertData,
  getUserRights,
  checkAvailability,
  validateUser,
  getLoginToken,
} = require("../lib/serverMethods");

const router = express.Router();
const CryptoJS = require("crypto-js");
const musicWishes = "musicRequests";
const greetings = "greetings";
const fussball = "fussball";

router.post("/fussball-em", async (req, res, next) => {
  try {
    await insertData({ collectionName: fussball, data: req.body });
    res.send("Data added");
  } catch (error) {
    nexz(new Error(error));
  }
});

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

router.post("/login", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = CryptoJS.SHA256(password).toString();
    const validation = await validateUser({
      username,
      password: hashedPassword,
    });
    res.send(validation);
  } catch (error) {
    next(new Error(error));
  }
});

router.post("/token", async (req, res, next) => {
  try {
    const { username } = req.body;
    const token = await getLoginToken({ username });
    res.json(token);
  } catch (error) {
    next(new Error(error));
  }
});

router.post("/rank", async (req, res, next) => {
  try {
    const { token } = req.body;
    const rank = await getUserRights({ token });
    res.json(rank);
  } catch (error) {
    console.log(error);
    next(new Error(error));
  }
});

router.post("/register", async (req, res, next) => {
  const { username, password, rank } = req.body;
  const hashedPassword = CryptoJS.SHA256(password).toString();
  try {
    await insertData({
      collectionName: "users",
      data: {
        username,
        password: hashedPassword,
        rank,
      },
    });
  } catch (error) {
    next(new Error(error));
  }
});

router.post("/checkUsername", async (req, res, next) => {
  const { username } = req.body;
  try {
    const available = await checkAvailability({ username });
    res.send(available);
  } catch (error) {
    console.log(error);
    next(new Error(error));
  }
});

module.exports = router;
