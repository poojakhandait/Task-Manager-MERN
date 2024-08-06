import React, { useContext, useState } from 'react'
import Ct from './Ct'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login=()=> {
  let [data,setData]=useState({})
  let [err,setErr]=useState("")
  let obj=useContext(Ct)
  let navigate=useNavigate()

  let fun=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }

    let login=()=>{
      axios.post("http://localhost:5000/login",data).then((res)=>{
         
        if(res.data.token!=undefined && res.data.role==="manager")
        {
          obj.fun(res.data)
          navigate('/mhome')
        }
        else{
          if(res.data.token!=undefined){
            obj.fun(res.data)
          navigate('/emphome')

          }
          
        }
      }).catch((err)=>{
        setErr("server error")
      })

    }
  
  
  return (
    <div className='con'>
      <div className='form'>
        <div className='img'></div>
        
       <div className='login'> <i class="fa-solid fa-id-badge"></i><input type='text' placeholder='Enter Id.........' name='_id' onChange={fun}/></div>
        <div className='login'><i class="fa-solid fa-lock"></i><input type='password' placeholder='Enter Password' name='pwd' onChange={fun}/>
        </div>
        <button className='loginbtn' onClick={login}>Login</button>

      </div>

    </div>
  )
}

export default Login