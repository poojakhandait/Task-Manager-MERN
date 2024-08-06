import axios from 'axios'
import React, { useContext, useState } from 'react'
import Ct from './Ct'

const GetempId = () => {
  let obj=useContext(Ct)
  let [id,setId]=useState()
  let [d,setD]=useState([])

let fun=(e)=>{
  setId(e.target.value)
  

}
let display=()=>{
  axios.get(`http://localhost:5000/getid/${id}`).then((res)=>{
    
    setD(res.data)
    
    
  })

}
  return (
    <div className='semp'>
      <div className='getemp'>
      <input type='text' placeholder='Enter Emplpyee Id' name='_id' onChange={fun}/>
      <button className='display' onClick={display}></button>Click_Here
    </div>
      {Object.keys(d).length>0 && <div className='empid'>
         <p>Emp_Id :<span className='dept'> {d._id}</span></p>
          <p>Name : {d.name}</p>
          <p>Department : <span className='text'>{d.dept}</span></p>
          <p>Phone_Number : {d.phno}</p>
          <p>Salary : <span className='sal'>{d.sal}</span></p>
        </div>}
    </div>
  )
}

export default GetempId