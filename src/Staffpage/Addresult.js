import {React,useState,useEffect} from 'react'
import {useNavigate} from 'react-router'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';  
import Navbarpage from '../Adminpage/Course/Navbarpage'
import Staff_Dashboard from './Staff_Dashboard';
import Autocomplete from '@mui/material/Autocomplete';
import Grid from '@mui/material/Grid';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useMediaQuery } from 'react-responsive';
function Addresult() {
     const [regno,setRegno]=useState([])
     const[reg_label,setReg_label]=useState("")
     const[name,setName]=useState("")
     const[course,setCourse]=useState("")
     const[subject,setSubject]=useState([]) 
     const[subject_labeloption,setSubjectlabel]=useState("")
     const[grade,setGrade] =useState("")
     const[mark,setMark] =useState("")
     const[date,setDate]=useState("")
     const[status,setStatus]=useState("")
     
     const navigate=useNavigate()
     const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
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

     function getStudentdata(reg){
                    // alert(reg)
                    axios.get("http://localhost:8000/adminapp/student_registerno/"+reg)
                    .then((res)=>{
                        
                        setName(res.data[0].student_name)
                        setCourse(res.data[0].course)                
                    })
     }

function getSubjectoption(){
                    axios.get("http://localhost:8000/adminapp/subjectdetail/")
                    .then((res)=>{
                         setSubject(res.data)
                    })
}

function getRegisterno(){
                    axios.get("http://localhost:8000/adminapp/studentdetail/")
                    .then((res)=>{
                                        setRegno(res.data)
                    })
}


const suboption = subject.map(options =>({
                    label: options.subject
}))

const regoption = regno.map(options =>({
                    label: options.registerno
}))


const handleSubject = (event,value)=>{
     setSubjectlabel(value)
}
const handleStudent=(event,value) => {
                    // alert(reg_label)
   setReg_label(value)
   getStudentdata(value)
  
}

const handleReg=(event,value)=>{
                    // alert(reg_label)
                    setReg_label(value);
                    getStudentdata(value)
                 }

useEffect(()=>{
    getSubjectoption()
    getRegisterno()                
},[])


// var regfield=  <TextField id="outlined-basic" onChange={ handleReg}  label="Enter Register Number"></TextField> 
var namefield=  <TextField id="outlined-name" onChange={ (e)=>setName(e.target.value)} value={name}  label="Enter Name"></TextField> 
var coursefield=  <TextField id="outlined-course" onChange={ (e)=>setCourse(e.target.value)} value={course} label="Enter Course"></TextField> 
var subjectfield=  <TextField id="outlined-subject" onChange={ (e)=>setSubject(e.target.value)}  label="Enter Subject"></TextField>
var gradefield=  <TextField id="outlined-grade" onChange={ (e)=>setGrade(e.target.value)}  label="Enter Grade"></TextField> 
var markfield=  <TextField id="outlined-mark" onChange={ (e)=>setMark(e.target.value)}  label="Enter Mark"></TextField>  
var datefield=  <TextField id="outlined-date"  type="date" onChange={ (e)=>setDate(e.target.value)}  ></TextField> 
var statusfield=  <TextField id="outlined-status"   onChange={ (e)=>setStatus(e.target.value)} label="Enter Status"  ></TextField> 
                   
const handleSubmit =(e)=>{
      e.preventDefault()
     
     // alert(reg_label)
     // alert(subject_labeloption)
     // alert(grade)
      axios.post("http://localhost:8000/staffapp/addresult/",{

             "regno":reg_label,
             "name":name,
             "course":course,
             "subject":subject_labeloption,
             "grade":grade,
              "mark":mark,
              "date":date ,
              "status":status     
      })
      .then(()=>{
          //  alert("saved")
           navigate("/getresult")         
      })
}


  return (
     <div>
                   
     <Box sx={{ display: 'flex' }}>
          <Staff_Dashboard/>
               <Box component="main2" sx={{ flexGrow: 4, p: 1 }}>
                   <Navbarpage/>               
                    {/* <Box
                         component="form"
                         sx={{ '& > :not(style)': { m: 1} }}
                         noValidate
                         autoComplete="off"
                    >

  
                    <Autocomplete
                         disablePortal
                         options={regoption}
                         onInputChange={handleReg}
                         sx={{ width: 300 }}
                         renderInput={(params) => <TextField {...params} label="Select Subject" />}
                    />
                    {namefield}
                    {coursefield}
                    <Autocomplete
                         disablePortal
                         options={suboption}
                         onInputChange={handleSubject}
                         sx={{ width: 300 }}
                         renderInput={(params) => <TextField {...params} label="Select Subject" />}
                    />
                    {datefield}                                 
                    {markfield}
                    {gradefield}
               </Box>
               <center><button class="btn btn-primary" onClick={handleSubmit}>Save</button></center> */}

     <Grid container spacing={2}>
      <Grid item xs={4}>
      <Autocomplete
                         disablePortal
                         options={regoption}
                         onInputChange={handleReg}
                         sx={{ width: 300 }}
                         renderInput={(params) => <TextField {...params} label="Select Subject" />}
                    />
      </Grid>
      <Grid item xs={4}>
      <Autocomplete
                         disablePortal
                         options={suboption}
                         onInputChange={handleSubject}
                         sx={{ width: 300 }}
                         renderInput={(params) => <TextField {...params} label="Select Subject" />}
                    />
      </Grid>

      <Grid item xs={4}>
      {namefield}
      </Grid>
    </Grid>
     <br></br>
    <Grid container spacing={2}>
      <Grid item xs={4}>
      {coursefield}
      </Grid>
      <Grid item xs={4}>
      {markfield}
      </Grid>

      <Grid item xs={4}>
      {gradefield}
      </Grid>

      <Grid item xs={4}>
      {datefield} 
      </Grid>
      <Grid item xs={4}>
      {statusfield} 
      </Grid>
    </Grid>
    <center><button class="btn btn-primary" onClick={handleSubmit}>Save</button></center>

      </Box>
      </Box>
    </div>
  )
}

export default Addresult
