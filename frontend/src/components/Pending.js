import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import Ct from './Ct'
import { useNavigate } from 'react-router-dom'

const Pending = () => {
  let [d3,setD3]=useState([])
  let obj=useContext(Ct)
  let navigate=useNavigate()

  useEffect(()=>{
    if (obj.data.token ==undefined)
      {
          navigate('/')
      }
      else{
          axios.get("http://localhost:5000/gettask").then((res)=>{
  
              setD3(res.data.filter((item)=>item.status=="pending"))
          })
  
      }

  })
  return (
    <div className='pending'>
      {d3.length>0 && <div className='ticker-container '>
          <div className='ticker'>
              <h3 className='ticker-item'>Tasks Accepted By Employees Pending For Completion</h3>
          </div>
          
        </div>}
        <div className='s5'>
      
        {
            d3.map((item)=>{
                return(<div className='s7'>
                    <p>Task : <span className='dept'>{item.title}</span></p>
                    <p>Deadline : {new Date (item.deadline).toLocaleDateString()}</p>
                    <p>StartDate : <span className='phno'>{new Date (item.start).toLocaleDateString()}</span></p>
                    <p>EmployeeId : {item.eid}</p>
                </div>)
            })
        }
        </div>

    </div>
  )
}

export default Pending