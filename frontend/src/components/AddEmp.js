import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddEmp=()=> {
  let navigate=useNavigate()
  let[err,setErr]=useState("")
  let [data,setData]=useState({"_id":"","name":"","phno":"","dept":"","sal":"","pwd":""})

let fun=(e)=>{
  setData({...data,[e.target.name]:e.target.value})
}

let add=()=>{
  axios.post("http://localhost:5000/reg",data).then((res)=>{

    if(res.data.err==undefined)
      {
        navigate("/getall")
      }
      else{
        setErr(res.data.err)
      }
  })
}

  return (
    <div className='regcon'>
      <div className='update'>
        {err!="" &&<div className='err'>{err}</div>}
        <input type='text' placeholder='Write Employee Id' name='_id' onChange={fun}/>

        <input type='text' placeholder='Write Employee Name' name='name'  onChange={fun}/>

        <input type='text' placeholder='Write Employee phone Number' name='phno'  onChange={fun}/>

        <input type='text' placeholder='Write Employee Salary' name='sal'  onChange={fun}/>

        <input type='password' placeholder='Write Employee Password' name='pwd'  onChange={fun}/>
        <select name='dept' onChange={fun}>
          <option value="" selected disabled>Select Department</option>
          <option value="Front end developer">Front end  developer</option>
          <option value="Back end developer">Back end  developer</option>
          <option value="MERN stack developer">MERN stack developer</option>
          <option value="AI developer">AI developer</option>
        </select>

        <button className='task' onClick={add}>AddEmp</button>

      </div>
      
    </div>
  )
}

export default AddEmp