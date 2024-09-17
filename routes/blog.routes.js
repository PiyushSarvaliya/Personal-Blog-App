const {Router} = require("express")
const { blogformui, createblog, home, allblog, singleblog, deletedata, editdata, updatedata,  } = require("../controller/blog.controller")
const blogroute = Router()

blogroute.get("/blog" , blogformui)
blogroute.post("/createblog" , createblog)
blogroute.get("/home" , home)
blogroute.get("/blogs" , allblog)
blogroute.get("/singleBlog/:id" , singleblog)
blogroute.delete("/:id" , deletedata)

blogroute.get("/:id/edit" , editdata)
blogroute.patch("/:id" , updatedata)
module.exports = blogroute