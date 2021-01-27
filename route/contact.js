const express=require("express")
const router=express.Router()
const Contact=require("../models/Contact")
// Path : 
// router.get("/",(req,res)=>{
//     res.send("test")
// })
//post 
// router.post("/add",(req,res)=>{
//     const {name,email,phone}=req.body
//     const newContac =new Contact({
//         name,
//         email,
//         phone
//     })
//     newContac.save().then(contact=>res.json({
//         msg:'contact added',contact
//     })).catch(err => console.log(err))
// })

//post 
router.post("/add",async(req,res)=>{
    const {name,email,phone}=req.body
    try{
        const newContac =new Contact({
            name,
            email,
            phone
        })
       const contact = await newContac.save()
        res.json({msg:"contact added",contact})
    }catch(error){
        console.log(error)
    }   
   
    
})
//get 
router.get("/",async(req,res)=>{
    try{
      const contacts= await Contact.find()
        res.json({msg:"data fetched",contacts})
    }catch(error){
        console.log(error)
    }
})
// delete 
router.delete("/delete/:id",async(req,res)=>{
    const {id}=req.params
    try{
        const contact=await Contact.findOneAndDelete({_id:id})
        res.json({msg:"contact deleted",contact})
    } catch(error){
        console.log(error)
    }
})
// get contact by id 
router.get('/:_id',async(req,res)=>{
    const {_id} =req.params
    try{
        const contact =await Contact.findById(_id)
        res.json({msg:"Contact finded",contact})
    }catch(error){
        console.log(error)
    }
})
router.put("/edit/:_id",async(req,res)=>{
    const {_id}=req.params
    const {name,email,phone}=req.body
    try{
        const editedContact=await Contact.findOneAndUpdate({_id},{$set:req.body});
        res.json({msg:"editted Contact",editedContact})
    }catch(error){
        console.log(error)
    }
})
module.exports=router