import {React,useState,useEffect} from 'react'
import {useParams} from  'react-router-dom'
import {useNavigate} from 'react-router'
import Grid from '@mui/material/Grid';
import axios from 'axios'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';  
import Admin_Dashboard from '../Admin_Dashboard';
import Navbarpage from '../Course/Navbarpage';
import * as  AiIcons from "react-icons/ai";

function AddStaffNotification() {
                    const[reg_number,setReg_Number]=useState("");
                    const[name,setName]=useState("") 
                    const[course,setCourse]=useState("");
                    const[message,setMessage]=useState("")   
                    const[date,setDate]=useState("")   
                    const navigate=useNavigate()
                
                
                    const GETSubmit = (e) => {
                          e.preventDefault()
                          axios.get("http://localhost:8000/adminapp/staff_notification_individual/"+reg_number+"/")
                              .then((res)=>{
                               
                                        setName(res.data[0].staff_name)
                                        setCourse(res.data[0].subject)
                                      })
                                   
                        }
  var reg_field= <TextField id="outlined-basic" 
                  onChange={ (e)=>setReg_Number(e.target.value)}  
                  label="Enter Register Number"
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
  var name_field= <TextField id="outlined-basic"
                  onChange={ (e)=>setName(e.target.value)} 
                  value={name} label="Enter Name"
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
  var course_field= <TextField id="outlined-basic" 
                      onChange={ (e)=>setCourse(e.target.value)} 
                      value={course}  
                      label="Enter Course"
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
  var message_field= <TextField id="outlined-basic" 
                      onChange={ (e)=>setMessage(e.target.value)} 
                      label="Enter Message"
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
                      > </TextField>  
  var date_field= <TextField id="outlined-basic" 
                    type="date" 
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
                    onChange={ (e)=>setDate(e.target.value)}  > </TextField>                                                                                
                    const handleSubmit = (e) => {
                                                e.preventDefault()
                                                axios.post("http://localhost:8000/adminapp/staff_notification/",
                                                      {
                                                          "registerno":reg_number,
                                                          // "course":course,
                                                          "name":name,
                                                          "message":message,
                                                          'date':date,
                                                          "status":"Sended"
                                                      }
                                                      )
                                                    .then(()=>{
                                                        navigate("/staff_notification/")
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
                                <br></br>  <br></br>  <br></br><br></br><br></br>
                                <center style={{background: "linear-gradient(90deg, rgba(16,18,54,1) 25%, rgba(26,37,62,1) 55%, rgba(8,11,69,1) 84%)"}}>                
                                  <Box
                                      component="form"
                                      sx={{ '& > :not(style)': { m: 1} }}
                                      noValidate
                                      autoComplete="off"
                                  >
                                    
                              {reg_field}
                                <button className="btn btn-primary"
                                        onClick={ GETSubmit }>
                                        <AiIcons.AiOutlineCloudDownload size={35}/>
                                </button>
                                {name_field}
                                {/* {course_field} */}
                                {date_field}
                                {message_field}
                               
                              </Box>
                              <br></br>
                              <center><button class="btn btn-primary" onClick={handleSubmit}>Save</button></center> 
                              </center>
                              <br></br>  
                           
                        </Box>
                  </Box>
              </div>
  )
}

export default AddStaffNotification
