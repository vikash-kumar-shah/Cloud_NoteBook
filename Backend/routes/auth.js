const User = require("../models/User")
const express=require('express')
const router=express.Router()
const bcryptjs=require('bcryptjs')
const jwt= require("jsonwebtoken")
const JWN_SECRET_KEY = "CodeTOCreateToken"
const fetchUser = require("../Middleware/fetchuser")

//npm package for validating user data
const { body , validationResult } = require('express-validator');


// EddPoint To Create User - /api/auth/createUser
// router.post("/endpoint",[validation],callbackfunction())

router.post('/createUser',[
    body('email',"Not a Valid Email").isEmail(),
    body("name","Min length should be 3").isLength({min:3}),
    body("password").isLength({min:3})
    ],async (req,res)=>{
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    try {
        let user=await User.findOne({email:req.body.email})
        if(user){
            return res.status(400).json({"error":"User with this email id alreay exists"})
        }
        const salt=await bcryptjs.genSalt(10)
        const secPass=await bcryptjs.hash(req.body.password,salt)
        user = await User.create({
            name:req.body.name,
            email:req.body.email,
            password:secPass
        })
        const data={userID: user.id}
        const authToken = jwt.sign(data,JWN_SECRET_KEY)
        const verification = jwt.verify(authToken,JWN_SECRET_KEY)
        console.log(verification)
        res.json({authToken:authToken})
    } catch (error) {
        console.log(error.message)
        return res.status(400).send("Some Error Occured check your auth.js file")
    }
})

// EddPoint To Login User - /api/auth/login
router.post('/login',[
    body('email',"Not a Valid Email").isEmail(),
    body("password","Password Cannot be Blank").exists()
    ],async (req,res)=>{
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    const {email,password}=req.body
    try {
        let user =await User.findOne({email})
        if(!user)
        {
            return res.status(400).json({error:"Invalid Credentials Uer Doesn't Exists"})
        }
        let passwordmatch =await bcryptjs.compare(password,user.password)
        if(!passwordmatch)
        {
            return res.status(400).json({error:"Invalid Credentials password doesnt match"})
        }
        const data={userID:user.id}
        const authToken = jwt.sign(data,JWN_SECRET_KEY)
        console.log(authToken)
        res.json({authToken:authToken,data:data,success:true})
    } catch (error) {
        console.log(error.message)
        res.status(400).send("Some Error Occured check your auth.js file")
    }
})

// EddPoint To Get User Data - /api/auth/getuser
router.post('/getuser',fetchUser,async (req,res)=>{
    try {
        const user = req.user.userID
        const userData = await User.findById(user)
        // const userData = await User.findOne({_id:user})
        res.status(202).json(userData)
    } catch (error) {
        // console.log(error)
        res.status(400).json("Error at /getuser in auth.js")
    }
})

module.exports=router