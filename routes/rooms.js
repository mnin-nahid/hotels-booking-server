import express from "express";

const router = express.Router();

router.get("/", (req, res)=>{
    res.send("Hey, This is rooms endpoint");
})

export default router;