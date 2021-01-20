const jwt=require('jsonwebtoken');
const load = require("dotenv").config();
if (load.error) throw load.error;

exports.requireSignin=(req,res,next)=>{
    const token=req.header('x-auth');
    if(!token) res.status(401).json({msg:"no token founds"})
    try {
        const decode=jwt.verify(token,process.env.JWT_SECRET);
        req.user=decode;
    } catch (error) {
        
    }
    next();
}