import React, { useContext, useEffect, useState } from 'react'
import Ct from './Ct'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Getallemp = () => {
  let[data,setData]=useState([])
  let[f,setF]=useState(true)
  let obj=useContext(Ct)
   let navigate=useNavigate()

  useEffect(()=>{
    if(obj.data.token==undefined)
    {
      navigate('/')
    }
    else{
      axios.get("http://localhost:5000/getallemp").then((res)=>{
        setData(res.data)
        console.log(res.data)
      })

    }
    
  },[f])

  let del=(eid)=>{
    axios.delete(`http://localhost:5000/delemp/${eid}`).then(()=>{
      setF((f)=>!f)
    })
  }
  let edit=(item)=>{
    obj.fun(item)
    navigate('/update')

  }
  
  return (
    <div className='emp'>
      <div className='empimg'></div>
      
      {data.length>0 && <div className='card'>
     
     {
      data.map((item)=>{
        return(<div className='empcard'>
          <div className='profile'></div>
          <p><span className='text'>EmpID:</span>EmpID:{item._id}</p>
          <p>Name:{item.name}</p>
          <p>Department:<span className='dept'>{item.dept}</span></p>
          <p>Phone:{item.phno}</p>
          <p>Salary:<span className='sal'>{item.sal}</span></p>
          <button className='btn' onClick={()=>edit(item) }>Edit</button>
          <button  className='btn'  onClick={()=>del(item._id) }>Delete</button>
        </div>)
      })
     }

        </div>}
    </div>
  )
}

export default Getallemp