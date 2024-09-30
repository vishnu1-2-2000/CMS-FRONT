import {React,useState,useEffect} from 'react'
import {useNavigate} from 'react-router'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';  
import Navbarpage from '../Course/Navbarpage';
import Admin_Dashboard from '../Admin_Dashboard';
import Autocomplete from '@mui/material/Autocomplete';
// import Select from "react-select";
import Grid from '@mui/material/Grid';

function Edit() {
      const[subject,setSubject]=useState("");
      const[course,setCourse]=useState([]);
      const[stafflabel,setStafflabel]=useState([]);
      const[date,setDate]=useState("");

      const[couselabel,setCourselabel]=useState("")
      const[selectedcouese,setSelectedcourse]=useState("");
      const[selected_staff,setSelected_Staff]=useState("")
                
      const navigate=useNavigate()
      const {id}=useParams()
     
                    

function getselecteboxCouseData(){
      axios.get("http://localhost:8000/adminapp/coursedetail/")
            .then((res) => {
               setCourse(res.data)
                  
            })

   }

function getStaffname(){
       axios
            .get("http://localhost:8000/adminapp/staffdetail/")
            .then ((res)=>{
                    setStafflabel(res.data)
            })        
}


function  getSubjectdetails(){
      axios
         .get("http://localhost:8000/adminapp/subjectindividual/"+id)
            .then((res)=>{
                           setSubject(res.data[0].subject)
                           setSelectedcourse(res.data[0].course)
                           setSelected_Staff(res.data[0].staff)
                                     
                           })
      }                                         

const tl=course.map(option => ({
  
                    label: option.course_name.toUpperCase(), // Example transformation
                  }));
 
const t2 = stafflabel.map(option => ({
     label:option.staff_name
}));                  
             
   useEffect(() => {
                    
       getSubjectdetails()
       getselecteboxCouseData()
       getStaffname()
       
   },[])  
   
   const handleChange = (event,value) => {
                    setSelectedcourse(value);
                   
                  };

   const handleStaff =(event,value)=>{
      setSelected_Staff(value)
   }               
   var subjectfield=  <TextField id="outlined-basic"
                    value={subject} onChange={ (e)=>setSubject(e.target.value)}  
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
   
   var datefield=<input type="date" onChange={(e)=>setDate(e.target.value)}></input> 

   function submit(e){
                    e.preventDefault()
                  
                    axios.put(`http://localhost:8000/adminapp/updatesubject/${id}`,
                                     
                         {
                              'subject':subject,
                              'course':selectedcouese,
                              "staff":selected_staff,
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
                           options={tl}
                           value={selectedcouese}
                      
                           onInputChange={handleChange}
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
                        options={t2}
                        value={selected_staff}
                      
                        onInputChange={handleStaff}
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

export default Edit
