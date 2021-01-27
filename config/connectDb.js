const mongoose = require("mongoose") 
const config=require("config")
// const connectDb=()=>{
//     mongoose.connect(config.get("MONGOURI"),{ useNewUrlParser: true , useUnifiedTopology: true})
//     .then(()=> console.log("mongoose is connected"))
//     .catch(err=> console.log(err))
// }
const connectDb=async ()=>{
    try {
        await  mongoose.connect(config.get("MONGOURI"),
        { useNewUrlParser: true , useUnifiedTopology: true})
        console.log('mongoos connected')
    } catch(error){
        console.log(error)
    }
}
module.exports=connectDb