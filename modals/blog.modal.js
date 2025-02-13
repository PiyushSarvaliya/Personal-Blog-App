const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  img :{
    type: String,
    required : true,
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
}
});

const blog = mongoose.model("blog", blogSchema);

module.exports = blog;