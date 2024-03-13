const mongoose=require('mongoose')
const URI= "mongodb://localhost:27017/cloud_note_book"
// const URI= "mongodb+srv://cybsecured36:thisisfakeaccount@cloudnb.ea8n47f.mongodb.net/?retryWrites=true&w=majority&appName=CloudNB"
const connectToMongo =async ()=>{
    try {
        await mongoose.connect(URI)
        console.log("Connected To DataBase Successfully")
    } catch (error) {
        console.log("Databsed Disconnected")
    }
}

module.exports=connectToMongo;