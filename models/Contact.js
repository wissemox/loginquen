const mongoose= require("mongoose")
const shema = mongoose.Schema;
const ContactSchema = new shema({
    name:{
        type:String
    },
    email:{
        type:String,
        unique:true
    },
    phone:{
        type:Number
    },
    dataCreation:{
        type:Date,
        default:Date.now()
    }
}); 
module.exports=Contact=mongoose.model("Contact",ContactSchema);