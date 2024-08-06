import React, { useContext, useState } from 'react'
import Ct from './Ct'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const AddTask=()=> {
  let[data,setData]=useState({})
  let obj=useContext(Ct)
  let navigate=useNavigate()

let fun=(e)=>{
  setData({...data,[e.target.name]:e.target.value})
}

let add=()=>{
  axios.post("http://localhost:5000/addtask",data).then(()=>{
    navigate('/mhome')
  })
}

  return (
    <div className='addtask'>
      <div className='update'>
        <input type='text' placeholder='Enter Title' name='title' onChange={fun}/>
        <select name='cat' onChange={fun}>
          <option  selected disabled>Select Category</option>
          <option value="Front end developer">Front end developer</option>
          <option value="Back end developer">Back end developer</option>
          <option value="MERN stack developer	">MERN stack developer	</option>
          <option value="AI developer">AI developer</option>
        </select>
        <input type='Date' name='deadline' onChange={fun}/>
        <button className='task' onClick={add}>AddTask</button>
      </div>

    </div>
  )
}

export default AddTask