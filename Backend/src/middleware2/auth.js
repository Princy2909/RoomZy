const User = require("../models/Usermodel");
const jwt=require("jsonwebtoken");

const validateToken=async (req,res,next)=>{
    try{
        const {token}=req.cookies;
        const decodedData=jwt.verify(token,process.env.JWT_SECRET);
        const {id}=decodedData;
        const user= await User.findById(id);
        if(!user) throw new Error("Token  Invalid !!");
        req.user=user;
        next();
    }catch(err){
        res.status(401).json({error : "Unauthorized"+err.message});
    }
 
}

module.exports= {validateToken};