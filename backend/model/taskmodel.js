let mongoose=require("mongoose")
let tasksch= new mongoose.Schema({
    "_id":String,
    "title":String,
    "cat":String,
    "deadline":Date,
    "start":Date,
    "end":Date,
    "status":String,
    "eid":String
})
let task=mongoose.model("task",tasksch)
module.exports=task
