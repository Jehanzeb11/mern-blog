const express = require("express")
const router = express.Router()

const {createBlog,getBlog,getSingleBlog,getUserBlog, deleteBlog, updateBlog} = require("../controllers/blog")

const {blogMiddleware} = require("../middleware/middlewares")

router.post("/",blogMiddleware,createBlog)
router.get("/",getBlog)
router.get("/:id",getSingleBlog)
router.get("/userBlogs/:id",blogMiddleware,getUserBlog)
router.delete("/:id",blogMiddleware,deleteBlog)
router.put("/:id",blogMiddleware,updateBlog)

module.exports=router