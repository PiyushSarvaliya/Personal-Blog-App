const express = require("express")
const connect = require("./config/db")
const userroute = require("./routes/user.routes")
const app = express()
const cookie = require("cookie-parser")
const blogroute = require("./routes/blog.routes")
const methodOveride = require("method-override")
const ejsMate = require("ejs-mate") 
app.use(methodOveride("_method"))
app.engine("ejs" , ejsMate)
require("dotenv").config()
app.use(express.urlencoded({extended : true}))
app.use(express.json())
app.set("view engine" , "ejs")
app.set("views" , __dirname + "/views")
app.use(cookie())
app.use("/user" , userroute)
app.use("/blog" , blogroute)

app.get("/" , (req , res) =>{
    res.redirect("/user/signup")
})

app.get("/blog" , (req , res) =>{
    res.redirect("/blog/home")
})

app.get("/user" , (req , res) =>{
    res.redirect("/user/signup")
})


app.listen(process.env.PORT,()=>{
    connect()
    console.log(`port is start ${process.env.PORT}`)
})