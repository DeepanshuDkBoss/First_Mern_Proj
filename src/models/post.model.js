const mongoose = require("mongoose");

//To let the database know how the post is gonna look
const postSchema = new mongoose.Schema({
    image:String,
    caption: String,
})

const postModel = mongoose.model("post",postSchema)

module.exports = postModel;