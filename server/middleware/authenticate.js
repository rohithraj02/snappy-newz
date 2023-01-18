const Users =require('../db/models/userSchema')
const jwt=require('jsonwebtoken')
const authenticate=async(req,res,next)=>{
    try{
        const token=req.cookies.jwt;
        if(!token){
            res.status(401).send("No token")
        }else{
            const verifyToken=jwt.verify(token,process.env.SECRET_KEY);
            const rootUser=await Users.findOne({_id:verifyToken._id,"tokens.token": token});
            if(!rootUser)
            {
                res.status(401).send("user not found")
            }
            else{
                res.status(200).send("Authorized user")
            }
            next();
        }

    }catch(error){
        res.status(401).send("error");
        console.log(error)
    }
}

module.exports=authenticate