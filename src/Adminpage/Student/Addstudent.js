import {React,useState,useEffect} from 'react'
import {useParams} from  'react-router-dom'
import {useNavigate} from 'react-router'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from 'axios'
import Navbarpage from '../Course/Navbarpage';
import Admin_Dashboard from '../Admin_Dashboard';
import Autocomplete from '@mui/material/Autocomplete';
import Grid from '@mui/material/Grid';
function Addstudent() {
                    const[studentname,setStudentName]=useState("");
                    const[address,setAddress]=useState("");
                    const[age,setAge]=useState("");
                    const[qualification,setQuf]=useState("");
                    const[phone,setPhone]=useState("");   
                    const[grade,setGrade]=useState("");  
                    const[course,setCourse]=useState([])
                    const[courselabel,setCourselabel]=useState("")
                    const[register_no,setRegister_no]=useState("")
                    const[student_username,setStudent_Username] =useState("") ; 
                    const[student_password,setStudent_Password] =useState("") ; 
                    const navigate=useNavigate() 
                    const {operation}=useParams()
                    const {id}=useParams()

  function getstudentdata(){
        axios.get("http://localhost:8000/adminapp/studentindividual/"+id) 
        .then((res)=>{
            setStudentName(res.data[0].student_name)
            setAddress(res.data[0].address)
            setAge(res.data[0].age) 
            setQuf(res.data[0].qualification)
            setGrade(res.data[0].grade)  
            setPhone(res.data[0].phone)  
            setCourselabel(res.data[0].course)
            setRegister_no(res.data[0].registerno)
            setStudent_Username(res.data[0].student_uname)
            setStudent_Password(res.data[0].student_pwd)
            
               
        })           
  } 

  function getCoursedetails(){
    axios.get("http://localhost:8000/adminapp/coursedetail/")
    .then((res)=>{
     setCourse(res.data) 
    })
  }
  const a = course.map(option =>({
    label:option.course_name.toUpperCase()
  }))
useEffect(() => {
                    if(operation === 'edit') {
                     getstudentdata()
                     getCoursedetails()
                   
                    }
                    getCoursedetails()
                  }, []);

const handleChange=(event,value)=>{
              setCourselabel(value)
                  }

  if(operation =='create') {
      var registerfield= <TextField id="outlined-regi" onChange={ (e)=>setRegister_no(e.target.value)}  label="Enter Student Register Number"
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
      var namefield= <TextField id="outlined-stname" 
                                    onChange={ (e)=>setStudentName(e.target.value)}  
                                    label="Enter Student Name"
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
      var addressfield= <TextField id="outlined-address" 
                                      onChange={ (e)=>setAddress(e.target.value)}  
                                      label="EnterStudent Address"
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
      var agefield= <TextField id="outlined-stage" 
                                   onChange={ (e)=>setAge(e.target.value)}  
                                   label="Enter Student Age"
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
      var quffield= <TextField id="outlined-quf" 
                                  onChange={ (e)=>setQuf(e.target.value)}  
                                  label="Enter Student Qualification"
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
      var gradefield= <TextField id="outlined-stgrade" 
                                    onChange={ (e)=>setGrade(e.target.value)} 
                                    label="Enter Student Grade"
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
      var phonefield= <TextField id="outlined-phone" 
                                    onChange={ (e)=>setPhone(e.target.value)} 
                                     label="Enter Student Phone"
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
      var usernamefield= <TextField id="outlined-usern" 
                                        onChange={ (e)=>setStudent_Username(e.target.value)} 
                                        label="Enter Student Username"
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
      var passwordfield= <TextField id="outlined-passw"
                                         onChange={ (e)=>setStudent_Password(e.target.value)} 
                                          label="Enter Student Password"
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
      var coursefield= <Autocomplete
                                  disablePortal
                                  options={a}
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
                                                           
  }  
  else{
      var registerfield= <TextField id="outlined-basic" 
                                        onChange={ (e)=>setRegister_no(e.target.value)}
                                         value={register_no} 
                                         label="Student Register Number"
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
      var namefield= <TextField id="outlined-basic" 
                      onChange={ (e)=>setStudentName(e.target.value)} 
                      value={studentname}  
                      label="Student Name"
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
      var addressfield= <TextField id="outlined-basic" 
                        onChange={ (e)=>setAddress(e.target.value)} 
                        value={address} 
                        label="Student Address"
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
      var agefield= <TextField id="outlined-basic" 
                    onChange={ (e)=>setAge(e.target.value)} 
                    value={age}  
                    label="Student Age"
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
      var quffield= <TextField id="outlined-basic" 
                     onChange={ (e)=>setQuf(e.target.value)}
                      value={qualification} 
                      label="Student Qualification"
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
      var gradefield= <TextField id="outlined-basic" 
                      onChange={ (e)=>setGrade(e.target.value)} 
                      value={grade}  
                      label="Student Grade"
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
      var phonefield= <TextField id="outlined-basic" 
                        onChange={ (e)=>setPhone(e.target.value)} 
                        value={phone} 
                        label=" Student Phone"
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
      var usernamefield= <TextField id="outlined-basic" 
                          onChange={ (e)=>setStudent_Username(e.target.value)}
                          value={student_username} 
                          label="Student Username"
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
      var passwordfield= <TextField id="outlined-basic" 
                          onChange={ (e)=>setStudent_Password(e.target.value)} 
                          value={student_password} 
                          label="Student Password"
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
      var coursefield= <Autocomplete
                                      disablePortal
                                      options={a}
                                      value={courselabel}
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
                                      renderInput={(params) => <TextField {...params} label="Course" />}
                                    />                    
  }
  
   
   const Handlesubmit = (e) => {
    e.preventDefault()
    if(operation =="create"){
             axios.post("http://localhost:8000/adminapp/studentdetail/",
                    {
                    "student_name":studentname,
                    "address":address,
                    "age":age,
                    "qualification":qualification,
                    "grade":grade,
                    "phone":phone,
                    "course":courselabel,
                    "registerno":register_no,
                    "student_uname":student_username,
                    "student_pwd":student_password


             }) 
             .then(()=>{
                    // navigate("/studentdetails")
                    axios.post("http://localhost:8000/loginapp/register/",
                      {
                        "name" :studentname,
                        "age":age,
                        "address" :address,
                        "phone" :phone,
                        "username": student_username,
                        "password": student_password,
                        "staff_id":register_no,
                        "userrole":"student"  
                        
                  }
                  )
                  .then((res) => {
                    alert("saved")
                   navigate("/studentdetails")
                                  
                                });
             })      
    }
    else if(operation =='edit') {
                    axios.put(`http://localhost:8000/adminapp/updatestudent/${id}`,{
                                        "student_name":studentname,
                                        "address":address,
                                        "age":age,
                                        "qualification":qualification,
                                        "grade":grade,
                                        "phone":phone ,
                                        "course":courselabel,
                                        "registerno":register_no, 
                                        "student_uname":student_username,
                                        "student_pwd":student_password               
                    })
                    .then(()=>{
                           // navigate("/studentdetails")
                    axios.post("http://localhost:8000/loginapp/register/",
                      {
                        
                        "username":  student_username,
                        "password": student_password,
                        "staff_id":register_no,
                        
                        
                  }
                  )
                  .then((res) => {
                    alert("saved")
                   navigate("/studentdetails")
                                  
                                });       
                    })
    }
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
       {/* <Box
    component="form"
    sx={{ '& > :not(style)': { m: 1} }}
    noValidate
    autoComplete="off"
  >
      {registerfield}
      {namefield}
      {agefield}
      {addressfield}
      {quffield}
      {gradefield}
      {phonefield}
      {coursefield}
      {usernamefield}
      {passwordfield}
     
      </Box> */}
      <br/><br/><br/><br/>
<center style={{background: "linear-gradient(90deg, rgba(16,18,54,1) 25%, rgba(26,37,62,1) 55%, rgba(8,11,69,1) 84%)"}}>
      <Grid container spacing={2}>
      <Grid item xs={4}>
      {registerfield}
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
      {gradefield}
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

      <Grid item xs={4}>
      {coursefield}
      </Grid>
      
    </Grid>
    <center><button class="btn btn-primary" onClick={Handlesubmit}>Save</button></center>
    </center>
     
      </Box>
      </Box>
    </div>
  )
}

export default Addstudent
