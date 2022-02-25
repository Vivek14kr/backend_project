const express = require("express")
const router = express.Router()
const User = require("../models/User.model");

router.post("/", async(req, res)=>{
    try {
      const data = await User.create(req.body);
      return res.status(201).json(data)
    } catch (error) {
        
        return res.status(500).json({ message: e.message, status: "failed" });
   
    }
  
})

router.get("/", async(req, res)=>{
    try {
        const data = await User.find().lean().exec()
        return res.status(201).json(data)
    } catch (error) {
            
        return res.status(500).json({ message: e.message, status: "failed" });
   
    }
})
module.exports = router