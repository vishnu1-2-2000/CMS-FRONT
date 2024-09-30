import {React,useState,useEffect} from 'react'
import {useNavigate} from 'react-router'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';  
import Navbarpage from '../Course/Navbarpage';
import Admin_Dashboard from '../Admin_Dashboard';
import Autocomplete from '@mui/material/Autocomplete';
import Grid from '@mui/material/Grid';
// import Select from "react-select";
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

function Add() {
                    const[subject,setSubject]=useState("");
                    const[course,setCourse]=useState("");
                    const[staff,setStaff]=useState([]);
                    const[staff_label,setStafflabel]=useState("")
                    const[date,setDate]=useState("");

                    const[couselabel,setCourselabel]=useState("")
                    const [options, setOptions] = useState([]);
                    const navigate=useNavigate()
                    
                    let optionsNew = [];
 

// function getStaffname(){
//   axios
//   .get("http://localhost:8000/adminapp/staffdetail/")
//   .then((res)=>{
//      setStaff(res.data)
//   })
// }





useEffect(() => {

  axios.get('http://localhost:8000/adminapp/coursedetail/')
   
    .then((res)=>{
      setOptions(res.data)
    })

    axios
      .get("http://localhost:8000/adminapp/staffdetail/")
      .then((res)=>{
        setStaff(res.data)
    })


  
}, []);

// useEffect(()=>{
//   getStaffname()
// },[])
const kl=options.map(option => ({
  
  label: option.course_name.toUpperCase(), // Example transformation
}));

const sl = staff.map(option => ({
  
  label: option.staff_name
}));
 const coursedata=(event,value)=>{
 
                    setCourselabel(value)
 }  
 
 const staffhandlechange=(event,value)=>{
          setStafflabel(value)
 }

                            
  var subjectfield=  <TextField id="outlined-subj" 
                    onChange={ (e)=>setSubject(e.target.value)}  
                    label="Enter Subject"
                    sx={{
                      // Root class for the input field
                      "& .MuiOutlinedInput-root": {
                        color: "#FFFFF0",
                        fontFamily: "Arial",
                        fontWeight: "bold",
                        // Class for the border around the input field
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#CD853F	",
                          borderWidth: "2px",
                        },
                      },
                      // Class for the label of the input field
                      "& .MuiInputLabel-outlined": {
                        color: "#FFA500",
                        fontWeight: "bold",
                      },
                    }}
                    ></TextField> 
                   
                    // var stafffield=<TextField id="outlined-basic" onChange={(e)=>setStaff(e.target.value)} label="Enter Staff Name"></TextField>  
                    var datefield=
                   <input type="date" onChange={(e)=>setDate(e.target.value)}></input>
                    // <TextField id="outlined-basic" onChange={(e)=>setDate(e.target.value)} label="Enter Date Time"></TextField>  
   
function submit(e){
                    e.preventDefault()
                    alert(couselabel)
                    axios.post("http://localhost:8000/adminapp/subjectdetail/",
                                     
                         {
                              'subject':subject,
                              'course':couselabel,
                              "staff":staff_label,
                                        // "time":date,
                                
                         }               
                    )
                    .then((res)=>{
                          navigate("/subjectdetails")             
                    })
                     }                 
  return (
    <div style={{
      background: "linear-gradient(90deg, rgba(35,40,82,1) 25%, rgba(26,34,122,1) 55%, rgba(27,44,94,1) 89%)",
      
    }} 
>
                  
      <Box sx={{ display: 'flex' }}>
                   
                   <Admin_Dashboard/>
                   <Box component="main2" sx={{ flexGrow: 4, p: 1 }}>
                   <Navbarpage/>               
                   <br/><br/><br/><br/>
<center style={{background: "linear-gradient(90deg, rgba(16,18,54,1) 25%, rgba(26,37,62,1) 55%, rgba(8,11,69,1) 84%)"}}>
      <Grid container spacing={2}>
      <Grid item xs={4}>
      <Autocomplete
                                        disablePortal
                                        options={kl}
                                        onInputChange={coursedata}
                                        sx={{
                                          // Root class for the input field
                                          "& .MuiOutlinedInput-root": {
                                            color: "#FFFFF0",
                                            fontFamily: "Arial",
                                            fontWeight: "bold",
                                            // Class for the border around the input field
                                            "& .MuiOutlinedInput-notchedOutline": {
                                              borderColor: "#CD853F	",
                                              borderWidth: "2px",
                                            },
                                          },
                                          // Class for the label of the input field
                                          "& .MuiInputLabel-outlined": {
                                            color: "#FFA500",
                                            fontWeight: "bold",
                                          },
                                        }}
                                        renderInput={(params) => <TextField {...params} label="Select Course" />}
                                        />
      </Grid>
      <Grid item xs={4}>
      {subjectfield}
      </Grid>

      <Grid item xs={4}>
      <Autocomplete
                                        disablePortal
                                        options={sl}
                                        onInputChange={staffhandlechange}
                                        sx={{
                                          // Root class for the input field
                                          "& .MuiOutlinedInput-root": {
                                            color: "#FFFFF0",
                                            fontFamily: "Arial",
                                            fontWeight: "bold",
                                            // Class for the border around the input field
                                            "& .MuiOutlinedInput-notchedOutline": {
                                              borderColor: "#CD853F	",
                                              borderWidth: "2px",
                                            },
                                          },
                                          // Class for the label of the input field
                                          "& .MuiInputLabel-outlined": {
                                            color: "#FFA500",
                                            fontWeight: "bold",
                                          },
                                        }}
                                        renderInput={(params) => <TextField {...params} label="Select Staff" />}
                                        />
      </Grid>
    </Grid>
     <br></br>
    <Grid container spacing={2}>
      <Grid item xs={4}>
      {datefield}
      </Grid>
      <Grid item xs={4}>
     
      </Grid>

      <Grid item xs={4}>
    
      </Grid>

      <Grid item xs={4}>
    
      </Grid>

      <Grid item xs={4}>
      
      </Grid>

      <Grid item xs={4}>
     
      </Grid>

      <Grid item xs={4}>
      
      </Grid>
      
    </Grid>
    <center><button class="btn btn-primary" onClick={submit}>Save</button></center>
    </center>
      </Box>
      </Box>
    </div>
  )
}

export default Add
