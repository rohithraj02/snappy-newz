const mongoose=require('mongoose');
mongoose.set('strictQuery', true);
const db=process.env.DATABASE;
// console.log(db)
mongoose.connect(db,{
    useNewUrlParser : true,
    useUnifiedTopology : true

}).then(()=>{
    console.log("connection successfull");
}).catch((e)=>{
    console.log(e);
}) 



