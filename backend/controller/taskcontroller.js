let task=require("../model/taskmodel")
let {v4:uuidv4}=require('uuid')

let addtask=async(req,res)=>{
    try{
    let id=uuidv4()
    let data=new task({...req.body,"_id":id})
    await data.save()
    res.json({"msg":"Task added"})
    }
    catch(err)
    {
        console.log(err)
    }
}
let deltask=async(req,res)=>{
    try{
        let obj= await task.findById({"_id":req.params.taskid})
        if(obj.eid==undefined)
        {
            await task.findByIdAndDelete({"_id":obj._id})
            res.json({"msg":"task deleted"})
        }
        else{
            res.json({"msg":"task assigned to employee"})
        }

    }
    catch(err)
    {

    }
}

let assigntask=async(req,res)=>{
    try{
        await task.findByIdAndUpdate({"_id":req.params.taskid},{"eid":req.params.eid})
        res.json({"msg":"assign task"})
    }
    catch(err)
    {
        console.log(err)
    }
}
let accepttask=async(req,res)=>{
    try{
        await task.findByIdAndUpdate({"_id":req.params.taskid},{"status":"pending","start":req.params.sdate})
        res.json({"msg":"Task accepted"})
    }
    catch(err)
    {
        console.log(err)
    }
}

 let rejecttask=async(req,res)=>{
    try{
         await task.findByIdAndUpdate({"_id":req.params.taskid},{$unset:{"eid":""}})
         res.json({"msg":"Task rejected"})
    }
    catch(err)
    {
        console.log(err)
    }
 }
 let complet=async(req,res)=>{
    try{
        await task.findByIdAndUpdate({"_id":req.params.taskid},{"status":"complet","end":req.params.edate})
        res.json({"mgs":"Task Complet"})

    }
    catch(err)
    {
        console.log(err)

    }
 }
 let getalltask=async(req,res)=>{
    try{
        let data=await task.find({})
        res.json(data)

    }
    catch(err)
    {
        console.log(err)

    }
 }
 let getemptask=async(req,res)=>{
    try{
        let data=await task.find({"eid":req.params.eid})
        res.json(data)

    }
    catch(err){
        console.log(err)

    }
 }

 module.exports={addtask,deltask,assigntask,accepttask,rejecttask,complet,getalltask,getemptask}