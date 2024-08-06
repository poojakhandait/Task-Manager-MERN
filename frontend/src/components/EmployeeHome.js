import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Ct from './Ct'
import axios from 'axios'

const EmployeeHome=()=> {

let[data1,setData1]=useState([])
let[data2,setData2]=useState([])
let[data3,setData3]=useState([])
let[sd,setSd]=useState([])
let[ed,setEd]=useState([])
let[f,setF]=useState(true)
let navigate=useNavigate()
let obj=useContext(Ct)

let fun=(e)=>{

  setSd(e.target.value)
 
}
let fun1=(e)=>{
  setEd(e.target.value)

}

useEffect(()=>{
  if(obj.data.token==""){
    navigate("/")
  }
  else{
    axios.get(`http://localhost:5000/emptask/${obj.data._id}`).then((res)=>{
      setData1(res.data.filter((item)=>item.status==undefined))
      setData2(res.data.filter((item)=>item.status=="pending"))
      setData3(res.data.filter((item)=>item.status=="complet"))
    })

  }
  
},[f])
let accept=(taskid,sd)=>{
  
  axios.get(`http://localhost:5000/accept/${sd}/${taskid}`).then((res)=>{
    

  setSd("")
    setF((f)=>!f)
  })

}
let reject=(taskid)=>{
  axios.get(`http://localhost:5000/reject/${taskid}`).then(()=>{
    setF(!f)
  })

}
let com=(taskid,ed)=>{
  console.log(taskid,ed)
  axios.get(`http://localhost:5000/complet/${ed}/${taskid}`).then(()=>{
    
    setEd("")
    setF((f)=>!f)
  })

}
  return (
    <div className='emphome'>
      {data1.length>0 &&<div className='card1'> <h2 className='dept'>Tasks Assign To You</h2>
        {
        data1.map((item)=>{
          return(<div>
            <p><span className='text'>Title</span> : {item.title}</p>
            <p> Deadline : {new Date (item.deadline).toLocaleDateString()}</p>
            <input className='date' type='date' onChange={fun} name='start'/><br></br>
            <button className='cbtn' onClick={()=>accept(item._id,sd)}>Accept</button><br></br>
            <button className='cbtn' onClick={()=>reject(item._id)}>Reject</button>
          </div>)
        })
      }
</div>}
{data2.length>0 &&<div className='card1'><h2 className='dept'>Tasks Accepted By You</h2>
{
  data2.map((item)=>{
    return(<div>
      <p><span className='text'>Title</span> : {item.title}</p>
      <input className='date' type='date' onChange={fun1} name='end'/>
      <button className='cbtn' onClick={()=>com(item._id,ed)}>Complet</button>
    </div>)
  })
}
</div>}
{data3.length>0 &&<div className='card1'><h2 className='dept'>Tasks Completed By You</h2>
  {
    data3.map((item)=>{
      return(<div>
        <p><span className='text'>Title</span> : {item.title}</p>
      </div>)
    })
  }
</div>}
      
    </div>
  )
}

export default EmployeeHome