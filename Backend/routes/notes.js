const express = require('express')
const Notes = require('../models/Notes')
const fetchuser = require("../Middleware/fetchuser")
const { body , validationResult } = require('express-validator');
const router = express.Router()


router.post("/getallnotes",fetchuser,async (req,res)=>{
    try {
        const notes =await Notes.find({userid:req.user.userID})
        res.status(200).json(notes)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.post("/addnote",fetchuser,[
    body('title',"Title Length should be MIn.5").isLength({min:5}),
    body("description","Description Length should be MIn.5").isLength({min:5}),
],async (req,res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    try {
        const {title,description,tag} = req.body
        const note = Notes({
            userid:req.user.userID,
            title,
            description,
            tag
        })
        note.save()
        res.status(200).json(note)
    } catch (error) {
        res.status(500).json(error)
    }
})


router.put("/updatenote/:id",fetchuser,async (req,res)=>{
    try {
        const noteid = req.params.id
        if(!noteid) return res.status(404).send("ID Not Found");
        const user =await Notes.findById(noteid)
        console.log(user.userid.toString(),req.user.userID)
        // if(!user || (user.userid.toString()!==req.user.userID)) return res.status(401).send("Page Not Found")
        if(!user) return res.status(401).send("Page Not Found")
        if(user.userid.toString()!==req.user.userID) return res.status(401).send("Wrong USer")
        const update=await Notes.findByIdAndUpdate(noteid,req.body)
        res.status(200).send(update)
    } catch (error) {
        res.status(500).json(error)
    }
})


router.delete("/deletenote/:id",fetchuser,async (req,res)=>{
    try {
        const noteid = req.params.id
        if(!noteid) return res.status(404).send("ID Not Found");
        const user =await Notes.findById(noteid)
        console.log(user.userid.toString(),req.user.userID)
        if(!user || (user.userid.toString()!==req.user.userID)) return res.status(401).send("Page Not Found")
        const update=await Notes.findByIdAndDelete(noteid)
        res.status(200).send(update)
    } catch (error) {
        res.status(404).send("Page Not Found which you are trying to delete")
    }
})


module.exports=router