let mongoose=require("mongoose")
let empsch= new mongoose.Schema({
    "_id":String,
    "name":String,
    "phno":String,
    "dept":String,
    "sal":Number,
    "role":{
        type:String,
        default:"employee"
    },
    "pwd":String
})
let emp=mongoose.model("emp",empsch)
module.exports=emp
