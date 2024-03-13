const connectToMongo=require('./db.js')
const express = require('express');
const app = express();
const cors = require('cors');
const port=5000
connectToMongo()
app.use(cors());
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("Vikash is Sending response from Express Server");
    // res.end("Done")
})

app.use("/api/auth",require("./routes/auth"))
app.use("/api/notes",require("./routes/notes"))

app.listen(port,()=>{
    console.log("Listening on specified Port");
})
