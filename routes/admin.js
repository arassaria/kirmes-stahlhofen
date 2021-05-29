const express = require("express");
const {
  getAdminView,
  deleteData,
  updateData,
} = require("../lib/serverMethods");

const router = express.Router();
const musicWishes = "musicRequests";
const greetings = "greetings";

router.get("/music", async (req, res, next) => {
  try {
    const data = await getAdminView({ collectionName: musicWishes });
    res.send(data);
  } catch (error) {
    next(new Error(error));
  }
});

router.patch("/music", async (req, res, next) => {
  const { id } = req.query;
  try {
    await updateData({ collectionName: musicWishes, id, data: req.body });
    res.send("Music request updated.");
  } catch (error) {
    next(new Error(error));
  }
});

router.delete("/music", async (req, res, next) => {
  const { id } = req.query;
  try {
    await deleteData({ collectionName: musicWishes, id });
    res.send("Music request deleted");
  } catch (error) {
    next(new Error(error));
  }
});

router.get("/greets", async (req, res, next) => {
  try {
    const data = await getAdminView({ collectionName: greetings });
    res.send(data);
  } catch (error) {
    next(new Error(error));
  }
});

router.patch("/greets", async (req, res, next) => {
  const { id } = req.query;
  try {
    await updateData({ collectionName: greetings, id, data: req.body });
    res.send("Greeting request updated");
  } catch (error) {
    next(new Error(error));
  }
});

router.delete("/greets", async (req, res, next) => {
  const { id } = req.query;
  try {
    await deleteData({ collectionName: greetings, id });
    res.send("Greeting request deleted");
  } catch (error) {
    next(new Error(error));
  }
});

module.exports = router;
