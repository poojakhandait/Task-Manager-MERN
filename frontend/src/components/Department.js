import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Department = () => {
  let[dp,setDp]=useState([])

  useEffect(()=>{
    axios.get("http://localhost:5000/depart").then((res)=>{
      setDp(res.data)
      console.log(res.data);

    })
  },[])
  return (
    <div className='depart'>
      {dp.length>0 &&<div>
     {
      dp.map((item)=>{
        return(<div className='s4'>
          <p>Department:<span className='dept'>{item._id}</span></p>
          <p>Emp_Count:{item.empcount}</p>
          <p><span className='text'>Salary_Total_Amount</span>:{item.totalamount}</p>
        </div>)
      })
     } 

          </div>}

    </div>
  )
}

export default Department