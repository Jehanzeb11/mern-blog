const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const secret = "wassup"


// sign in user

const signIn = async (req,res)=>{
    const {email,password}=req.body;

try {
    const oldUser = await userModel.findOne({email})


    if (!oldUser) {
        res.status(400).json({message:"user does not exist"})
    }
    if (!email || !password) {
        res.status(400).json({message:"input fields require"})
    }
    const correctPass = await bcrypt.compare(password,oldUser.password)

    if (!correctPass) {
        res.status(400).json({message:"invalid user"})
        
    }


    const token = jwt.sign({email:oldUser.email,id:oldUser._id},secret,{expiresIn:"30d"})



    res.status(200).json({result:oldUser,token})
    
} catch (error) {
    
}


}





// register user

const signUp = async (req,res)=>{

    const {name,email,password}=req.body
try {

    const oldUser = await userModel.findOne({email})

    if (oldUser) {
        res.status(400).json({message:"user already exists"})
    }


    const hashPassword = await bcrypt.hash(password,10)


    const result = await userModel.create({
        email,
        password:hashPassword,
        name
    }) 

    const token = jwt.sign({email : result.email,id:result._id},secret,{
        expiresIn:"30d"
    })


    res.status(201).json({result,token})


    
} catch (error) {
    res.status(400).json({message:"something went wrong"})
    console.log(error)
}
}


module.exports = {signUp,signIn}