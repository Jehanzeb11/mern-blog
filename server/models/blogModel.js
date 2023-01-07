const mongoose = require("mongoose")

const blogSchema = mongoose.Schema({

title:String,
description:String,
name:String,
creator:String,
imageFile:String,
createdAt:{
    type:Date,
    default : new Date()
},
likeCount:{
    type:Number,
    default:0
}

})


const blogModel = mongoose.model("blog",blogSchema)

module.exports= blogModel