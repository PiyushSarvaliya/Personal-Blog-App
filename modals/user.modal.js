const moongose = require("mongoose")

const userschema = new moongose.Schema({
    username : String,
    password : String,
    email : String,
})

const user = moongose.model("userblog" , userschema)


module.exports = user