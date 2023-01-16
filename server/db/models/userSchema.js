const mongoose=require('mongoose');
const bycryptjs=require('bcryptjs');
const jwt=require('jsonwebtoken');

const userSchema=new mongoose.Schema({
    username:{
        type : String,
        required : true,
        unique : true
    },
    email:{
        type : String,
        required : true,
        unique : true,
    },
    password : {
        type : String,
        required : true,
    },
    tokens : [
        {
            token : {
                type : String,
                required : true
            }
        }
    ]
})


//Hashing password to secure
userSchema.pre('save',async function(next){
    if(this.isModified('password')){
        this.password = bycryptjs.hashSync(this.password,10);
    }
    next();
})

userSchema.methods.generateToken=async function(){
    try{
        let generateToken = jwt.sign({_id : this._id},process.env.SECRET_KEY);
        this.tokens= this.tokens.concat({token : generateToken});
        await this.save();
        return generateToken;
    }catch(error){
         console.log(error);
    }
}


//Createing Model

const Users = new mongoose.model("USER",userSchema);

module.exports=Users;