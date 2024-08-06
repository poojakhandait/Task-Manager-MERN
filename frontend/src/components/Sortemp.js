import React, { useState } from 'react'
import axios from 'axios'

const Sortemp = () => {
  let [cat,setCat]=useState()
  let  [emp,setEmp]=useState([])

  let fun=(e)=>{
    setCat(e.target.value)
  }
  let sort=()=>{
    axios.get(`http://localhost:5000/sort/${cat}`).then((res)=>{
      setEmp(res.data)
    })

  }
  return (
    <div className='sort'>
      <div className='s1'>
       <select  onChange={fun}>
          <option disabled selected>Select Category</option>
          <option value="_id">ID</option>
          <option value="name">Name</option>
          <option value="dept">Department</option>
          <option value="sal">Salary</option>
        </select>
        <button className='sbtn' onClick={sort}>Sort_Data</button>
      </div>
      {emp.length>0 &&<div className='s2'>
        
     {
      emp.map((item)=>{
        return(<div className='s3'>
          <p>Emp_Id:<span className='text'>{item._id}</span></p>
          <p><span className='name'>Name</span>:{item.name}</p>
          <p>Department:<span className='dept'>{item.dept}</span></p>
          <p><span className='phno'>Phone_Number</span>:{item.phno}</p>
          <p>Salary:<span className='sal'>{item.sal}</span></p>
        </div>)
      })
     } 
    </div>}

    </div>
  )
}

export default Sortemp