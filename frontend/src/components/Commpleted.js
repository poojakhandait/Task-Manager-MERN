import React, { useContext, useEffect, useState } from 'react'
import Ct from './Ct'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Commpleted = () => {
let[d2,setD2]=useState([])
let obj=useContext(Ct)
let navigate=useNavigate()
useEffect(()=>{
    if (obj.data.token ==undefined)
    {
        navigate('/')
    }
    else{
        axios.get("http://localhost:5000/gettask").then((res)=>{

            setD2(res.data.filter((item)=>item.status=="complet"))
        })

    }
    

},[])
  return (
    <div className='complet'>
        {d2.length>0 && <div className='ticker-container '>
          <div className='ticker'>
              <h3 className='ticker-item'>Tasks Completed By Employees</h3>
          </div>
          
        </div>}
    
        
       <div className='s5'>
        {
            d2.map((item)=>{
                return(<div className='s7'>
                    <p>Task : <span className='dept'>{item.title}</span></p>
                    <p>Deadline : {new Date (item.deadline).toLocaleDateString()}</p>
                    <p>StartDate :<span className='text'> {new Date (item.start).toLocaleDateString()}</span></p>
                    <p>EndDate : {new Date (item.end).toLocaleDateString()}</p>
                    <p>EmployeeId :<span className='phno'>{item.eid}</span></p>
                    
                </div>)
            })
        }
        </div>
    </div>
  )
}

export default Commpleted