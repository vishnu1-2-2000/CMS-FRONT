import {React,useState,useEffect} from 'react'
import {useNavigate} from 'react-router'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';  
import Navbarpage from '../Adminpage/Course/Navbarpage'
import Staff_Dashboard from './Staff_Dashboard';
import Autocomplete from '@mui/material/Autocomplete';

function ApplyLeave() {
        const [regno,setRegno]=useState("")
        const[reg_label,setReg_label]=useState("")
        const[name,setName]=useState("")
        const[course,setCourse]=useState("")
        const[subject,setSubject]=useState("") 
        const[message,setMessage] =useState("")
        const[date,setDate]=useState("")
        const[date_to,setDateto]=useState("")
        const navigate=useNavigate()

        var loggedInUsername=window.localStorage.getItem('loggedInUsername')
        var loggedInPassword=window.localStorage.getItem('loggedInUserPassword')
        var loggedInUserrole=window.localStorage.getItem('loggedInUserrole')

        function getStaffDetails(){
          axios.get("http://localhost:8000/adminapp/staffdetail/")
          .then((res)=>{
            res.data.map(data => {
             
              if(data.staff_uname==loggedInUsername){
               
              
               setRegno(data.staff_registerid)
               setName(data.staff_name)
               setSubject(data.subject)
               
                
               }
              })
          })
        }
useEffect(()=>{
getStaffDetails()
},[])
        var regnofield=  <TextField id="outlined-basic" value={regno} onChange={ (e)=>setRegno(e.target.value)}   label="Enter Register Number"></TextField> 
        var namefield=  <TextField id="outlined-basic" value={name} onChange={ (e)=>setName(e.target.value)}   label="Enter Name"></TextField> 
       
        var subjectfield=  <TextField id="outlined-basic" value={subject} onChange={ (e)=>setSubject(e.target.value)}  label="Enter Subject"></TextField>
        var messagefield=  <TextField id="outlined-basic" onChange={ (e)=>setMessage(e.target.value)}  label="Enter Message"></TextField> 
        var datefield=  <TextField id="outlined-basic" type="date" onChange={ (e)=>setDate(e.target.value)}  ></TextField> 
        var datetofield=  <TextField id="outlined-basic" type="date" onChange={ (e)=>setDateto(e.target.value)}  ></TextField>       
        const handleSubmit =(e)=>{
                                    e.preventDefault()
                                      
                                        axios.post("http://localhost:8000/staffapp/staff_leave/",{
                                  
                                               "regno":regno,
                                               "name":name,
                                              
                                               "subject" :subject,
                                               
                                                "message":message,
                                                "date_on":date ,
                                                "date_to":date_to,
                                                "status":"sended"           
                                        })
                                        .then(()=>{
                                          navigate("/get_staff_leave")
                                        //      alert("saved")         
                                        })
                                  }                 
                                 
  return (
                    <div>
                    <br/>
      <Box sx={{ display: 'flex' }}>
                   
                   <Staff_Dashboard/>
                   <Box component="main2" sx={{ flexGrow: 4, p: 1 }}>
                   <Navbarpage/>               
       <Box
          component="form"
          sx={{ '& > :not(style)': { m: 1} }}
          noValidate
          autoComplete="off"
        >

        { regnofield}
  
        {namefield}
       
        {subjectfield}
         {datefield}
         {datetofield}                                 
      
        {messagefield}

      
     
     
      </Box>
      <center><button class="btn btn-primary" onClick={handleSubmit}>Save</button></center>
      </Box>
      </Box>
    </div>
  )
}

export default ApplyLeave
