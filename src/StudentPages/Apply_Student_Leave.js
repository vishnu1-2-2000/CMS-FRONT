import {React,useState,useEffect} from 'react'
import {useNavigate} from 'react-router'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';  
import Navbarpage from '../Adminpage/Course/Navbarpage'
import Student_Dashboard from './Student_Dashboard';
import Autocomplete from '@mui/material/Autocomplete';
import Grid from '@mui/material/Grid';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
function Apply_Student_Leave() {
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
          axios.get("http://localhost:8000/adminapp/studentdetail/")
            .then((res)=>{
                res.data.map(data => {
                         
                  if(data.student_uname==loggedInUsername){
                           setRegno(data.registerno)
                           setName(data.student_name)
                           setCourse(data.course)
                           
                            
                        }
                    })
                })
          }
  useEffect(()=>{
              getStaffDetails()
            },[])
var regnofield=  <TextField id="outlined-basic" value={regno} onChange={ (e)=>setRegno(e.target.value)}   label="Enter Register Number"></TextField> 
var namefield=  <TextField id="outlined-basic" value={name} onChange={ (e)=>setName(e.target.value)}   label="Enter Name"></TextField> 
var coursefield=  <TextField id="outlined-basic" value={course} onChange={ (e)=>setCourse(e.target.value)}  label="Enter Subject"></TextField>
var messagefield=  <TextField id="outlined-basic" onChange={ (e)=>setMessage(e.target.value)}  label="Enter Message"></TextField> 
var datefield=  <TextField id="outlined-basic" type="date" onChange={ (e)=>setDate(e.target.value)} style={{width:'50%'}}   ></TextField> 
var datetofield=  <TextField id="outlined-basic" type="date" onChange={ (e)=>setDateto(e.target.value)} style={{width:'50%'}}   ></TextField>       
const handleSubmit =(e)=>{
                            e.preventDefault()
                                                  
                                axios.post("http://localhost:8000/staffapp/student_leave/",{
                                              
                                            "regno":regno,
                                            "name":name,
                                            "course" :course,
                                            "message":message,
                                            "date_on":date ,
                                            "date_to":date_to,
                                            "status":"sended"           
                                    })
                                      .then(()=>{
                                                    navigate("/get-student-leave/")
                                                    //      alert("saved")         
                                                })
                                            }                 
                                            const Item = styled(Paper)(({ theme }) => ({
                                              backgroundColor: '#fff',
                                              ...theme.typography.body2,
                                              padding: theme.spacing(2),
                                              textAlign: 'center',
                                              color: theme.palette.text.secondary,
                                              ...theme.applyStyles('dark', {
                                                backgroundColor: '#1A2027',
                                              }),
                                            }));                                           
  return (
            <div >
              <br/>
                <Box sx={{ display: 'flex' }}>             
                <Student_Dashboard/>
                  <Box component="main2" sx={{ flexGrow: 4, p: 1 }}>
                    <Navbarpage/>               
                      {/* <Box
                        component="form"
                        sx={{ '& > :not(style)': { m: 1} }}
                        noValidate
                        autoComplete="off"
                        
                        > */}
            {/* <div class="row" id="sutdent_leave_apply_page">
              <div class="col-6">
              { regnofield}
              
              {namefield}
             
              {coursefield}
              </div>
              <br/>
              <div class="col-6">
              {datefield}

              {datetofield}                                 
                  
              {messagefield}
              </div>
            </div> */}
<br></br>   <br></br>  <br></br>          
<center>
<Grid container spacing={2}>
      <Grid item xs={4}>
      { regnofield}
      </Grid>
      <Grid item xs={4}>
      {namefield}
      </Grid>

      <Grid item xs={4}>
      {coursefield}
      </Grid>
    </Grid>
     <br></br>
    <Grid container spacing={2}>
      <Grid item xs={4}>
      {datefield}
      </Grid>
      <Grid item xs={4}>
      {datetofield}
      </Grid>

      <Grid item xs={4}>
      {messagefield}
      </Grid>

     
    </Grid>
        <br></br>
        <center><button class="btn btn-primary" onClick={handleSubmit}>Save</button></center>
        </center>
  

                    
                    
                  {/* </Box> */}
                 
                  </Box>
                  </Box>
                </div>
              )
}

export default Apply_Student_Leave
