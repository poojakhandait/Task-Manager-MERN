let express=require('express')
const { addemp, emplogin, getallemp, getempid, resetpwd, updateemp, delemp, sortemp, department, getdept, getempdept } = require('../controller/empcontroller')
const { addtask, assigntask, accepttask, rejecttask, getalltask, deltask, complet, getemptask } = require('../controller/taskcontroller')


let route=new express.Router()
route.post("/reg",addemp)
route.post('/login',emplogin)
route.get('/getallemp',getallemp)
route.get('/getid/:eid',getempid)
route.get('/sort/:cat',sortemp)
route.get('/depart',department)
route.get('/getdepart',getdept)
route.get('/getemp/:depart',getempdept)
route.post('/resetpwd',resetpwd)
route.put('/updateemp',updateemp)
route.delete('/delemp/:eid',delemp)
route.post('/addtask',addtask)
route.delete('/deltask/:taskid',deltask)
route.get('/assign/:taskid/:eid',assigntask)
route.get('/gettask',getalltask)
route.get('/accept/:sdate/:taskid',accepttask)
route.get('/reject/:taskid',rejecttask)
route.get('/complet/:edate/:taskid',complet)
route.get('/emptask/:eid',getemptask)

module.exports=route