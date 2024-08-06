import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Ct from './Ct'
import axios from 'axios'

const ManagerHome=()=> {
let navigate=useNavigate()
let obj=useContext(Ct)
let [d1,setD1]=useState([])
let [tid,setTid]=useState("")
let[dept,setDept]=useState([])
let [emp,setEmp]=useState([])
let [eid,setEid]=useState()
let [f,setF]=useState(true)


useEffect(()=>{
  if(obj.data.token=="")
  {
    navigate('/')
  }
  else{
    axios.get("http://localhost:5000/gettask").then((res)=>{
      setD1(res.data.filter((item)=>item.eid==undefined))
      // setD2(res.data.filter((item)=>item.eid !=undefined && item.status==undefined))
      // setD3(res.data.filter((item)=>item.status=="pending"))
      // setD4(res.data.filter((item)=>item.status=="complete"))
    })
    axios.get("http://localhost:5000/getdepart").then((res)=>{
      setDept(res.data)
    })
  }

},[f])

let getemp=(e)=>{
  axios.get(`http://localhost:5000/getemp/${e.target.value}`).then((res)=>{
    setEmp(res.data)
  })
}

let del=(taskid)=>{
  axios.delete(`http://localhost:5000/deltask/${taskid}`).then(()=>{
    setF(!f)

  })

}
let fun=(e)=>{
  setEid(e.target.value)
}
let assign=(id)=>{
  setTid(id)

}
let update=()=>{
  axios.get(`http://localhost:5000/assign/${tid}/${eid}`).then(()=>{

  })
  setTid("")
  setF((f)=>!f)
}

  return (
    <div className='managerhome'>
        {d1.length>0 && <div className='ticker-container '>
          <div className='ticker'>
              <h3 className='ticker-item'>Taskes Need To Assign</h3>
          </div>
          
        </div>}
        {d1.length>0 && <table border={1} className='table'>
        <tr className='th'><th>Taske</th><th>Category</th><th>Deadline</th><th>Assign/Delete</th>{tid.length>0 &&<th>Department/Employees/UpdateButton</th>}</tr>
          
          {
            d1.map((item)=>{
              return(<tr className='td'>
             
                <td>{item.title}</td>
                <td>{item.cat}</td>
                <td>{new Date (item.deadline).toLocaleDateString()}</td>
                <td>{tid!=item._id && <section><button className='btn' onClick={()=>assign(item._id)}>Assign</button><button className='btn' onClick={()=>del(item._id)}>Delete</button>
                </section>}</td>
                {
                  tid==item._id &&<div>
                    <td><select onChange={getemp}>
                      <option selected disabled>select dept</option>
                      {
                        dept.map((item)=>{
                          return(
                            <option value={item}>{item}</option>
                          )

                        })
                      }
                      </select></td>
                      <td><select onChange={fun}>
                        <option selected disabled>select emp</option>
                        {
                          emp.map((item)=>{
                            return(
                              <option value={item}>{item}</option>
                            )
                          })
                        }
                        </select></td>
                        <td><button className='btn' onClick={update}>Update</button></td>
                  </div>
                }
                 
              </tr>)
            })
          }




          </table>}

      
      <div className='foot'>
        <Link to='/getall'>AllEmp</Link>
        <Link to='/getid'>EmpId</Link>
        <Link to='/sort'>SortEmp</Link>
        <Link to='/depart'>SortDepartment</Link>
        <Link to='/notaccept'>NotAccepted</Link>
        <Link to='/pending'>Pending</Link>
        <Link to='/com'>Completed</Link>
      </div>
    </div>
  )
}

export default ManagerHome