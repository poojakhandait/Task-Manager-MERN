let emp=require('../model/empmodel')
let bcrypt=require("bcrypt")
let jwt=require("jsonwebtoken")

let addemp=async(req,res)=>{
    try{
       let hashcode= await bcrypt.hash(req.body.pwd,10)
       let data=new emp({...req.body,"pwd":hashcode}) 
       await data.save()
       res.json({"msg":"Employee account created"})
    }
    catch(err)
    {
        console.log(err)
    }
}

let emplogin=async(req,res)=>{
    try{
        let obj= await emp.findById({"_id":req.body._id})
        if(obj)
            {
                let f=await bcrypt.compare(req.body.pwd,obj.pwd)
                if(f){
                    res.json({"token":jwt.sign({"_id":obj._id},"abcd"),"_id":obj._id,"name":obj.name,"role":obj.role})
                }
                else{
                    res.json({"msg":"check employee pwd"})
                }
            }
            else{
                res.json({"msg":"check employee Id"})
            }
    }
    catch(err)
    {
        console.log(err)
    }
}

let getallemp=async(req,res)=>{
    let data=await emp.find({"role":"employee"})
    res.json(data)
 }

 let getempid=async(req,res)=>{
    let data=await emp.findById({"_id":req.params.eid})
    res.json(data)

 }

 let sortemp=async(req,res)=>{
  try{
  let data= await emp.aggregate([{$match:{"role":"employee"}},{$sort:{[req.params.cat]:1}}])
  res.json(data)
  }
  catch(err)
  {
    console.log(err)
  }
 }
let department=async(req,res)=>{
  try{
    let depart= await emp.aggregate([ {$match:{"role":"employee"}}, {$group:{"_id":"$dept","empcount":{$sum:1},"totalamount":{$sum:"$sal"}}}])
    res.json(depart)

  }
  catch(err)
  {
    console.log(err)
  }
}
let getdept=async(req,res)=>{
  let data=await emp.find({"role":"employee"},{"dept":1,"_id":0})
  let dept=[]
  for (let i=0;i<data.length;i++){
    if(!dept.includes(data[i].dept)){
      dept.push(data[i].dept)
    }
  }
  res.json(dept)
}
 let getempdept=async(req,res)=>{
  let data=await emp.find({"dept":req.params.depart},{"_id":1})
  let emps=[]
  for(let i=0;i<data.length;i++){
    emps.push(data[i]._id)

  }
  res.json(emps)
 }


let resetpwd=async(req,res)=>{
    let hashcode= await bcrypt.hash(req.body.pwd,10)
    await emp.findByIdAndUpdate({"_id":req.body._id},{"pwd":hashcode})
    res.json({"msg":"reset pwd process is done"})
 }


 let delemp=async(req,res)=>{
    try{
      await emp.findByIdAndDelete({"_id":req.params.eid})
      res.jason({"msg":"Employee Deletion Done"})

    }
    catch(err){
      console.log(err)
      
    }
  }
  let updateemp=async(req,res)=>{
    try{
      let{name,phno,dept,sal}=req.body
      await emp.findByIdAndUpdate({"_id":req.body._id},{name,phno,dept,sal})
      res.json({"msg":" Employee Updation is done"})

    }
    catch(err){
      console.log(err)

    }

  }
 module.exports={addemp,emplogin,getallemp,getempid,resetpwd,updateemp,delemp,sortemp,department,getdept,getempdept}