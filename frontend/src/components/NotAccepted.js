import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import Ct from './Ct'
import { useNavigate } from 'react-router-dom'

const NotAccepted = () => {
  let[d4,setD4]=useState([])
  let obj=useContext(Ct)
  let navigate=useNavigate()
  useEffect(()=>{
    if (obj.data.token ==undefined)
      {
          navigate('/')
      }
      else{
          axios.get("http://localhost:5000/gettask").then((res)=>{
  
              setD4(res.data.filter((item)=>item.eid !=undefined && item.status==undefined))
          })
  
      }

  })
  return (
    <div className='notaccept'>
      {d4.length>0 && <div className='ticker-container '>
          <div className='ticker'>
              <h3 className='ticker-item'>Tasks Not Accepted By Employee</h3>
          </div>
          
        </div>}
      <div className='s5'>
        {
            d4.map((item)=>{
                return(<div className='s6'>
                    <p>Task : <span className='dept'>{item.title}</span></p>
                    <p>Deadline : {new Date (item.deadline).toLocaleDateString()}</p>
                    <p>EmployeeId : <span className='text'>{item.eid}</span></p>
                </div>)
            })
        }
        </div>
        
    </div>
  )
}

export default NotAccepted