const { json } = require('express')
const jwt = require('jsonwebtoken')
const JWN_SECRET_KEY = "CodeTOCreateToken"
const fetchUser=(req,res,next)=>{
    
    const token = req.header('auth-token')
    if(!token) return res.status(400).json({error:"Invalid Token"}) 
    try {
        const decoded = jwt.verify(token,JWN_SECRET_KEY)
        req.user = decoded
        next()
    } catch (error) {
        // console.log(error)
        res.status(400).json({error:"Invalid Token"})
    }
}

module.exports = fetchUser