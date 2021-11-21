const express = require("express")
const mongoose = require("mongoose")
const mySchema = require("./mySchema")

const app = express()

const url = 'mongodb+srv://aryankumar277:aryan123@cluster0.zikj6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(url).then(()=>console.log("connected to db"))

app.use(express.json())

app.get('/', (req, res)=>{
    res.send("hello world"
)})

app.post('/addNew', async(req, res)=>{
    try{
        console.log(req.body);
        const newStud = new mySchema(req.body)
        await newStud.save()
    }
    catch(err){
        res.send('Error : '+err)
    }
})

app.use("/", (req,res)=> {
    res.json()
})

app.listen(3000, ()=>console.log("Express started"))