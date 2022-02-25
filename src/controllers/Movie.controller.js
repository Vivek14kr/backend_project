const express = require("express")

const router = express.Router()

const Movie = require("../models/Movies.model");

router.post("/", async(req, res) =>{
    try {
        const data = await Movie.create(req.body)
        return res.status(201).json(data)
    } catch (error) {
        return res.status(500).json({message:e.message, status:"failed"})
    }
})

router.get("/", async(req, res)=>{
    try {
        let data = await Movie.find().lean().exec()
        return res.status(201).json(data)
    } catch (error) {
        
        return res.status(500).json({ message: e.message, status: "failed" });
   
    }
})
router.get("/:actors", async (req, res) => {
  try {
    let data = await Movie.find().lean().exec();
console.log(data, req.params)
    let arr = []
    for (let i = 0; i < data.length; i++){
        for (let j = 0; j < data[i].actors.length;j++){
  if (data[i].actors[j] == req.params.actors) {
    arr.push(data[i]);
  }
        }
      
    }
    return res.status(201).json(arr);
  } catch (error) {
    return res.status(500).json({ message: e.message, status: "failed" });
  }
});

module.exports = router