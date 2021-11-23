const express = require("express")
const app = express()
const mongoose = require("mongoose")
const mySchema = require("./schema")
const url = 'mongodb+srv://aryankumar277:aryan123@cluster0.zikj6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(url).then(()=>console.log("connected to db"))
app.use(express.json())

app.post('/addNew', async(req, res)=>{
    const studName = req.body.name;
    const studRegno = req.body.regno;
    const studMarks = req.body.marks;

    try{
        const newStud = new mySchema(
            {
                name: studName,
                regno: studRegno,
                marks: studMarks
            }
        )
        const studData = await newStud.save()
        res.json(
            {
                "message": "Student details saved succesfully","Data": studData
            }
        )
    }
    catch(err){
        res.json.err(err);
    }
})

app.use("/", (req,res)=> {
    res.json(
        {"message": "server has started"}
    )
})

app.listen(3000, ()=>console.log("Express started"))