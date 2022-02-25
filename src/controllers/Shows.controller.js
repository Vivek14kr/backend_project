const express = require("express");
const ShowsModel = require("../models/Shows.model");

const router = express.Router();

const Show= require("../models/Shows.model");

router.post("/", async (req, res) => {
  try {
    const data = await Show.create(req.body);
    return res.status(201).json(data);
  } catch (error) {
    return res.status(500).json({ message: error.message, status: "failed" });
  }
});

router.get("/", async (req, res) => {
  try {
    let data = await Show.find().lean().exec();
    return res.status(201).json(data);
  } catch (error) {
    return res.status(500).json({ message: error.message, status: "failed" });
  }
});
router.get("/:movie", async (req, res) => {
  try {
     const shows = await Show.find()
       
       .populate({ path: "movie", select: { name: 1 } })
       .populate({
         path: "screen",
         populate: {
           path: "theatre",
         },
       })
       .lean()
       .exec();
       let arr = []
for (let i  = 0; i < shows.length; i++){
 if (shows[i].movie.name == req.params.movie){
   arr.push(shows[i])
 }
}

     return res.status(201).json({ arr});
  } catch (error) {
    return res.status(500).json({ message: error.message, status: "failed" });
  }
});



module.exports = router;
