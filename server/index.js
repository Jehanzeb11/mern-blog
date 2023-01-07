const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const userRouter = require("./routes/users")
const blogRouter = require("./routes/blog")

const app = express()

app.use(express.json({ limit: "30mb", extended: true }))
app.use(express.urlencoded({ limit: "30mb", extended: true }))

app.use(cors())

app.use("/user",userRouter)
app.use("/blog",blogRouter)






const PORT = process.env.PORT || 5050

const monGoUrl = "mongodb+srv://jehanzeb:jehanzebBlog123@cluster0.yvp2ftm.mongodb.net/blog"



mongoose.connect(monGoUrl).then(() => {
    app.listen(PORT , ()=>{
        console.log(`mongo DB connected and Server running on port : ${PORT}`)
        })
}).catch((err) => {
    console.log(err)
});



//mongodb+srv://jehanzeb:<password>@cluster0.yvp2ftm.mongodb.net/test


app.get('/',(req,res)=>{
res.send("wassup")
})



