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
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
function AddStaff() {
        const[staffname,setName]=useState("");
        const[address,setAddress]=useState("");
        const[age,setAge]=useState("");
        const[qualification,setQuf]=useState("");
        const[phone,setPhone]=useState("");
        const[regno,setRegno] =useState("") ; 
        const[subject,setSubject] =useState("") ;
        const[subject_options,setSubject_Options] =useState([]) ; 
        const[staff_username,setStaff_Username] =useState("") ; 
        const[staff_password,setStaff_Password] =useState("") ; 
        const navigate=useNavigate() 

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
function getSubject(){
  axios.get("http://localhost:8000/adminapp/subjectdetail/")
  .then((res)=>{
    setSubject_Options(res.data)
  })
}
const suboption = subject_options.map(options=>({
  label:options.subject
}))  
const handleSubject =(value)=>{
     setSubject(value)
}

useEffect(()=>{
getSubject()
},[])
var regfield= <TextField id="outlined-reg"
                sx={{
                      // Root class for the input field
                      "& .MuiOutlinedInput-root": {
                        color: "#FFFFF0",
                        fontFamily: "Arial",
                        fontWeight: "bold",
                        // Class for the border around the input field
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#CD853F",
                          borderWidth: "2px",
                        },
                      },
                      // Class for the label of the input field
                      "& .MuiInputLabel-outlined": {
                        color: "#FFA500",
                        fontWeight: "bold",
                      },
                    }}
                  onChange={ (e)=>setRegno(e.target.value)} label="Enter Registernumber"   />                           
 var namefield=  <TextField id="outlined-basic" 
                        sx={{
                          // Root class for the input field
                          "& .MuiOutlinedInput-root": {
                            color: "#FFFFF0",
                            fontFamily: "Arial",
                            fontWeight: "bold",
                            // Class for the border around the input field
                            "& .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#CD853F",
                              borderWidth: "2px",
                            },
                          },
                          // Class for the label of the input field
                          "& .MuiInputLabel-outlined": {
                            color: "#FFA500",
                            fontWeight: "bold",
                          },
                        }}
                  onChange={ (e)=>setName(e.target.value)}  label="Enter Staff Name"></TextField> 
 var agefield=<TextField id="outlined-basic"
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
              onChange={(e)=>setAge(e.target.value)} label="Enter Staff Age"></TextField>
 var quffield=<TextField id="outlined-basic"
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
               onChange={(e)=>setQuf(e.target.value)} label="Enter Staff Qualification"></TextField>  
 var addressfield=<TextField id="outlined-basic"
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
              onChange={(e)=>setAddress(e.target.value)} label="Enter Staff Address"></TextField>  
 var phonefield=<TextField id="outlined-basic" 
                      sx={{
                        // Root class for the input field
                        "& .MuiOutlinedInput-root": {
                          color: "#CD853F	",
                          fontFamily: "Arial",
                          fontWeight: "bold",
                          // Class for the border around the input field
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#CD853F		",
                            borderWidth: "2px",
                          },
                        },
                        // Class for the label of the input field
                        "& .MuiInputLabel-outlined": {
                          color: "#FFA500",
                          fontWeight: "bold",
                        },
                      }}
                  onChange={(e)=>setPhone(e.target.value)} label="Enter Staff Phone"></TextField>  
//  var subjectfield=<TextField id="outlined-basic" onChange={(e)=>setSubject(e.target.value)} label="Enter Staff Subject"></TextField> 
 var usernamefield=<TextField id="outlined-basic"
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
              onChange={(e)=>setStaff_Username(e.target.value)} label="Enter Staff Username"></TextField>  
 var passwordfield=<TextField id="outlined-basic"
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
                onChange={(e)=>setStaff_Password(e.target.value)} label="Enter Staff Password"></TextField>   
 function submit(e){
                    e.preventDefault()
axios.post("http://localhost:8000/adminapp/staffdetail/",
     {
       'staff_name':staffname,
        'address':address,
        "age":age,
        "qualification":qualification,
        "phone":phone ,
        "staff_registerid" :regno,
        // "subject"  :subject,
        "staff_uname":staff_username,
        "staff_pwd":staff_password

     }               
)
.then((res)=>{
 
  
  axios.post("http://localhost:8000/loginapp/register/",
    {
      "name" :staffname,
      "age":age,
      "address" :address,
      "phone" :phone,
      "username":  staff_username,
      "password": staff_password,
      "staff_id":regno,
      "userrole":"staff"  
      
}
)
.then((res) => {
  alert("saved")
  navigate("/staffdetails")   
                
              });
                  
})
 }
                    
              
  return (
    <div style={{
      background: "linear-gradient(90deg, rgba(35,40,82,1) 25%, rgba(26,34,122,1) 55%, rgba(27,44,94,1) 89%)",
      
    }} 
>
                    <br/>
                    
                   
      <Box sx={{ display: 'flex'}} >
      {/* <div style={{
      background: "linear-gradient(90deg, rgba(134,148,152,1) 25%, rgba(150,190,193,1) 42%, rgba(102,119,114,1) 89%)",
      
    }}> */}
                   
                   <Admin_Dashboard/>
                   <Box component="main2" sx={{ flexGrow: 4, p: 1 }}>
                   <Navbarpage/>               
    
                   <br/>  <br/>  <br/>  <br/>
      <center style={{background: "linear-gradient(90deg, rgba(16,18,54,1) 25%, rgba(26,37,62,1) 55%, rgba(8,11,69,1) 84%)"}}>
      <h4 ><center><h4 style={{color:"#FFE4C4	"}}><font face="times new roman" size="6">Add New Staff </font></h4></center></h4>  
      <br></br>             
<Grid container spacing={2}>
      <Grid item xs={4}>
      {regfield}
      </Grid>
      <Grid item xs={4}>
      {namefield}
      </Grid>

      <Grid item xs={4}>
      {agefield}
      </Grid>
    </Grid>
     <br></br>
    <Grid container spacing={2}>
      <Grid item xs={4}>
      {addressfield}
      </Grid>
      <Grid item xs={4}>
      {quffield}
      </Grid>

      <Grid item xs={4}>
      {phonefield}
      </Grid>

      <Grid item xs={4}>
      {usernamefield}
      </Grid>

      <Grid item xs={4}>
      {passwordfield}
      </Grid>

     
    </Grid>
        <br></br>
        <center><button class="btn btn-primary" onClick={submit}>Save</button></center>
        </center>
      </Box>
      {/* </div> */}
      </Box>
    </div>
  )
}

export default AddStaff
