// dev in jason
const dotenv=require('dotenv');
const express=require('express');
const bycryptjs=require('bcryptjs');
const jwt= require('jsonwebtoken');
const cookieParser=require('cookie-parser');

const app= express();

// configure env File and require connection file
// not working
dotenv.config({path:'./config.env'});
require('./db/conn');
const port=process.env.PORT;
//require model and error because of db connection
const Users= require('./db/models/userSchema');


// this method is used to get data from frontend
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());

app.get('/',(req,res)=>{
    res.send('Hello world');
})

//Registration
app.post('/register',async (req,res)=>{
    try{
     //get body or data 
    //  console.log("hi")
     const username=req.body.username;
     const email=req.body.email;
     const password=req.body.password;

     const createUser=new Users({
        username:username,
        email:email,
        password:password
     });
     
     //save method is used to create user or Insert user
     const created=await createUser.save();
     console.log(created);
     res.status(200).send("Registered");
    }catch(error)
    {
res.status(400).send(error);
    }
})


// login user
app.post('/login',async(req,res)=>{
    try{
        const email=req.body.email;
        const password=req.body.password;

        //find user if exist
        const user = await Users.findOne({email: email});
        if(user){
            // verify password
            const isMatch=await bycryptjs.compare(password,user.password);
            if(isMatch)
            {
                const token=await user.generateToken();
                res.cookie("jwt",token,{
                    // expires token in a 24 hours
                    expires : new Date(Date.now()+86400000),
                    httpOnly: true
                })
                res.status(200).send("logged in");
            }
            else{
                res.status(400).send("invalid credential");
            }
            
        }
        else
        {
            res.status(400).send("invalid credential");

        }
    }catch(error){
         res.status(400).send(error);
    }
})

app.get('/logout',(req,res)=>{
    res.clearCookie("jwt",{path:'/'})
    res.status(200).send("User Logged Out")
})
app.listen(port,()=>{
    console.log("server is listening");
})