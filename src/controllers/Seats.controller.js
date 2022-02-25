const express = require("express");

const router = express.Router();
const Show = require("../models/Shows.model");

const Seats= require("../models/Screen.model");

// router.post("/", async (req, res) => {
//   try {
//     const data = await Screen.create(req.body);
//     return res.status(201).json(data);
//   } catch (error) {
//     return res.status(500).json({ message: e.message, status: "failed" });
//   }
// });

router.get("/", async (req, res) => {
  try {
    let data = await Screen.find().lean().exec();
    return res.status(201).json(data);
  } catch (error) {
    return res.status(500).json({ message: e.message, status: "failed" });
  }
});

module.exports = router;
