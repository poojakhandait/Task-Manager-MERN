import React, { useState } from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import Login from './components/Login'
import EmployeeHome from './components/EmployeeHome'
import ManagerHome from './components/ManagerHome'
import AddTask from './components/AddTask'
import ResetPwd from './components/ResetPwd'
import Ct from './components/Ct'
import Getallemp from './components/Getallemp'
import GetempId from './components/GetempId'
import Sortemp from './components/Sortemp'
import Department from './components/Department'
import UpdateEmp from './components/UpdateEmp'
import AddEmp from './components/AddEmp'
import Pending from './components/Pending'
import NotAccepted from './components/NotAccepted'
import Commpleted from './components/Commpleted'
import Home from './components/Home'
import Logout from './components/Logout'


const App=()=> {
  let [data,setData]=useState({"token":"","_id":"","name":"","role":""})
  let fun=(obj)=>{
    setData({...obj})
    
  }
  let obj={"data":data,"fun":fun}

  return (
    
    <BrowserRouter>
    <Ct.Provider value={obj}>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/emphome' element={<EmployeeHome/>}/>
      <Route path='/mhome' element={<ManagerHome/>}/>
      <Route path='/addtask' element={<AddTask/>}/>
      <Route path='/resetpwd' element={<ResetPwd/>}/>
      <Route path='/getall' element={<Getallemp/>}/>
      <Route path='/getid' element={<GetempId/>}/>
      <Route path='/sort' element={<Sortemp/>}/>
      <Route path='/depart' element={<Department/>}/>
      <Route path='/update' element={<UpdateEmp/>}/>
      <Route path='/addemp' element={<AddEmp/>}/>
      <Route path='/com' element={<Commpleted/>}/>
      <Route path='/pending' element={<Pending/>}/>
      <Route path='/notaccept' element={<NotAccepted/>}/>
      <Route path='/logout' element={<Logout/>}/>

    </Routes>
    </Ct.Provider>
    </BrowserRouter>
  )
}

export default App