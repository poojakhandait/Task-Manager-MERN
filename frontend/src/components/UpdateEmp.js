import React, { useContext, useState } from 'react'
import Ct from './Ct'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const UpdateEmp = () => {
    let obj=useContext(Ct)
    let navigate=useNavigate()
    let[dat,setDat]=useState(obj.data)
    let fun=(e)=>{
        setDat({...dat,[e.target.name]:e.target.value})

    }
    let update=()=>{
        console.log("update",obj._id,obj.token)
        axios.put('http://localhost:5000/updateemp',dat).then(()=>{
            navigate('/getall')
        })
    }

  return (
    <div className='updateemp'>
        <div className='update'>
            <input type='text' placeholder='Emp_Id' name='_id' value={dat._id} onChange={fun} readOnly/>
            <input type='text' placeholder='Name...' name='name' value={dat.name} onChange={fun}/>
            <input type='text' placeholder='Department' name='dept' value={dat.dept} onChange={fun}/>
            <input type='text' placeholder='Salary' name='sal' value={dat.sal} onChange={fun}/>
            <input type='text' placeholder='Phone_Number' name='phno' value={dat.phno} onChange={fun}/>
            <button className='loginbtn'   onClick={update}>Update</button>
        

        </div>
    </div>
  )
}

export default UpdateEmp