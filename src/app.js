require('dotenv').config();
const express = require('express');
const noteModel = require('./models/note.model');
const app = express();
app.use(express.json());
// app logic here with mongodb

//default getway 
app.get('/',(req,res)=>{
    res.status(200).send("Hello")
});
// post notes create new data
app.post('/notes',async(req,res)=>{

    const data = req.body; // {title,description}
    await noteModel.create({
        title:data.title,
        description:data.description
    });
    res.status(200).json({message:"Note Created"});
});
// get notes data
app.get('/notes',async(req,res)=>{

    //we can insert mongodb query :D
    //will spit out all data inside the db
    //returns an array when used find() if no data then empty array xD
    // returns an object when used findOne or null when nothing
    const notes =  await noteModel.find();
    res.status(200).json({
        message:"Notes Fetched Successfully",
        notes:notes
    });
})
//delete a specific note :D
app.delete('/notes/:id',async(req,res)=>{
    const id = req.params.id;
    await noteModel.findOneAndDelete({
        _id:id
    });
    res.status(200).json({
        message : "Note Deleted Successfully"
    })
});
//update existing data
app.patch('/notes/:id',async(req,res)=>{
    const id = req.params.id;
    const desc = req.body.description;
    await noteModel.findOneAndUpdate({_id:id},{description:desc});
    res.status(200).json({
        message:"Notes Updated Successfully"
    })
})
module.exports = app;