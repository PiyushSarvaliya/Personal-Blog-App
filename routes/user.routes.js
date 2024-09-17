const {Router} = require("express")
const { signupui, create, loginui, login } = require("../controller/user.controller")
const userroute = Router()

userroute.get("/signup" , signupui)
userroute.post("/signup" , create)
userroute.get("/login" , loginui)
userroute.post("/login" , login)

module.exports = userroute