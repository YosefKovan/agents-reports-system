import express from "express";

const router = express.Router();

router.use("/", (req, res, next)=>{

    try{
        return res.status(200).json({message : "api server is running"});
    }catch(error){
        next(error);
    }
})

export default router;