const jwt = require("jsonwebtoken");


const secret = "wassup"


const blogMiddleware = async(req,res,next)=>{

try {
  const token = req.headers.authorization.split(" ")[1];
 const isAuth = token.length < 500
 let decoded;
 if (token && isAuth) {
  decoded = jwt.verify(token,secret)
  req.userId = decoded?.id
 }
 next()
} catch (error) {
  console.log(error)
}

  
}

module.exports = {blogMiddleware};