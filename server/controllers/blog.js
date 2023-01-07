const mongoose  = require('mongoose');
const BlogModel = require("../models/blogModel")


const createBlog = async (req, res) => {

    const blog = req.body;
    const newBlog = new BlogModel({
        ...blog,
        creator: req.userId,
        createdAt: new Date().toISOString()
    });



    try {
        await newBlog.save();
        res.status(201).json(newBlog)
    } catch (error) {
        res.status(404).json({ message: "cannot create blog" })
    }


}




const getBlog = async (req, res) => {

    try {

        const blogs = await BlogModel.find()
        res.status(200).json(blogs)
    } catch (error) {
        res.status(404).json({ message: "cannot get blog" })
    }


}



const getSingleBlog = async (req, res) => {
    const { id } = req.params;
    try {

        const blog = await BlogModel.findById(id)
        res.status(200).json(blog)
    } catch (error) {
        res.status(404).json({ message: "cannot get blog" })
    }


}





const getUserBlog = async (req, res) => {
    const { id } = req.params;

if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ message: "user does not exist" })   
}

const userBlogs = await BlogModel.find({creator : id})
res.status(200).json(userBlogs)

}










const deleteBlog = async (req, res) => {
    const { id } = req.params;
try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ message: `blog does not exist with id ${id}` })   
}

 await BlogModel.findByIdAndDelete(id)

res.status(200).json({message:"blog deleted successfully"})
} catch (error) {
    res.status(404).json({ message: "something went wrong plz try again later" })   
    
}


}





const updateBlog = async (req, res) => {
    const { id } = req.params;
    const { title,description,imageFile,creator } = req.body;
try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
   return res.status(404).json({ message: `blog does not exist with id ${id}` })   
}




const updatedBlog = {
    title,
    description,
    imageFile,
    creator,
    _id: id
}


  await BlogModel.findByIdAndUpdate(id,updatedBlog,{new : true})
return res.json(updatedBlog)




} catch (error) {
    res.status(404).json({ message: "something went wrong plz try again later" })   
    
}


}



module.exports = { createBlog, getBlog, getSingleBlog,getUserBlog,deleteBlog,updateBlog }