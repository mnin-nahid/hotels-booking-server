import express from "express";

const router = express.Router();

router.get("/", (req, res)=>{
    res.send("Hey, This is users endpoint");
})

export default router;