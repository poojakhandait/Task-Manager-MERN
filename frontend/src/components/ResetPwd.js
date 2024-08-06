import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Ct from './Ct'
import axios from 'axios'

const ResetPwd=()=> {
  let[data,setData]=useState()
  let navigate=useNavigate()
  let obj=useContext(Ct)
  let fun=(e)=>{
    setData({"pwd":e.target.value})
  }
  let change=()=>{
    axios.post("http://localhost:5000/resetpwd",{...data,"_id":obj.data._id}).then((res)=>{
      obj.fun({"token":"","_id":"","name":"","role":""})
      navigate("/")
    })
    
  }
  return (
    <div className='semp'>
      <div className='getemp'>
        <input type='password' placeholder='Entr new password......' onChange={fun}/>
        <button className='ebtn' onClick={change}>ChangePWD</button>
      </div>

    </div>
  )
}

export default ResetPwd