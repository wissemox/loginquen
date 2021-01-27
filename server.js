const express = require("express")
const app=express() 
const connect = require('./config/connectDb')
connect()

app.use(express.json())
//Routes 
app.use("/api/contacts",require("./route/contact"))
const port = process.env.PORT||5000
app.listen(port,(err)=>
err ? console.log(err): console.log('server is runnig'))