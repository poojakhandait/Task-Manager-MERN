import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Ct from './Ct'

const Nav=()=> {
  let obj=useContext(Ct)
  return (
    <nav>
     {obj.data.token=="" && <Link to='/'>Home</Link>}
      {obj.data.token=="" &&<Link to='/login'>Login</Link>}
      {obj.data.token !="" && obj.data.role=="employee" &&<Link to='/emphome'>EmployeeHome</Link>}
      {obj.data.token !="" && obj.data.role=="manager" &&<Link to='/mhome'>ManagerHome</Link>}
      {obj.data.token !="" && obj.data.role=="manager" &&<Link to='/addtask'>AddTask</Link>}
      {obj.data.token !="" && obj.data.role=="manager" &&<Link to='/addemp'>AddEmp</Link>}
      {obj.data.token !="" && obj.data.role=="employee" &&<Link to='/resetpwd'>ResetPwd</Link>}
      {obj.data.token !="" && <Link to='/logout'>Logout</Link>}


    </nav>
  )
}

export default Nav