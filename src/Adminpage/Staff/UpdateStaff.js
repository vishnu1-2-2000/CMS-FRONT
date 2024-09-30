import{React,useState,useEffect} from 'react'
import axios from "axios"
import { Link, useParams } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'; 
import Navbarpage from '../Course/Navbarpage';
import Admin_Dashboard from '../Admin_Dashboard';
import { useNavigate } from "react-router";
import Grid from '@mui/material/Grid';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
function UpdateStaff() {
   const[staffname,setStaffname]=useState("")
   const[address,setAddress]=useState("")
   const[age,setAge]=useState("")
   const[quf,setQuf]=useState("")
   const[phone,setPhone]=useState("")
   const[staff_username,setStaff_Username] =useState("") ; 
   const[staff_password,setStaff_Password] =useState("") ; 
   const[regno,setRegno] =useState("") ; 
   const {id}=useParams()
   const navigate=useNavigate()
   var iid=id

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
   function getstaffdata(){
         axios.get("http://localhost:8000/adminapp/staffindividual/"+iid) 
          .then((res)=>{
                    setStaffname(res.data[0].staff_name)
                    setAddress(res.data[0].address)
                    setAge(res.data[0].age)
                    setQuf(res.data[0].qualification)
                    setPhone(res.data[0].phone)
                    setStaff_Username(res.data[0].staff_uname)
                    setStaff_Password(res.data[0].staff_pwd)
                    setRegno(res.data[0].staff_registerid)
                    
          })         
   }

   useEffect(()=>{
                    getstaffdata()
   },[])
var regfield=  <TextField id="outlined-basic" 

                onChange={ (e)=>setRegno(e.target.value)} value={regno} label="Enter Registernumber"
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
                 />                           
var namefield=<TextField required
                    label="Staff Name"

                    id="Staff Name"
                    value={staffname}
                    onChange={(e)=>setStaffname(e.target.value)}
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
/>

var addressfield=<TextField required
                    label="Address"

                    id="Address"
                    value={address}
                    onChange={(e)=>setAddress(e.target.value)}
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
/>

var agefield=<TextField required
                    label="Age"

                    id="Age"
                    value={age}
                    onChange={(e)=>setAge(e.target.value)}
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
/>

var qualificationfield=<TextField required
                    label="Qualification"

                    id="Qualification"
                    value={quf}
                    onChange={(e)=>setQuf(e.target.value)}
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
/>
var phonefield=<TextField required
                    label="Phone"

                    id="Phone"
                    value={phone}
                    onChange={(e)=>setPhone(e.target.value)}
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
/>
 var usernamefield=<TextField 
                   id="outlined-basic" 
                   onChange={(e)=>setStaff_Username(e.target.value)} 
                   value={staff_username} label="Enter Staff Username"
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
 var passwordfield=<TextField 
                    id="outlined-basic" 
                    onChange={(e)=>setStaff_Password(e.target.value)} 
                    value={staff_password} label="Enter Staff Password"
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

const handleSubmit=(e)=>{
e.preventDefault()
var iid=id
alert(address)
axios.put(`http://localhost:8000/adminapp/updatestaff/${iid}`,
  {
    'staff_registerid':regno,
    'staff_name':staffname,
    'address':address,
    "age":age,
    "qualification":quf,
    "phone":phone
  }
)
.then(()=>{
  navigate("/staffdetails")
 

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
                   
                   <br/>  <br/>  <br/>  
<h4 ><center><h4 style={{color:"#FFE4C4"}}><font face="times new roman" size="6">Edit  Staff Details </font></h4></center></h4>  
<br></br>  

<center style={{background: "linear-gradient(90deg, rgba(16,18,54,1) 25%, rgba(26,37,62,1) 55%, rgba(8,11,69,1) 84%)"}}>
  <Grid container spacing={2}>
      <Grid item xs={4}>
          {regfield}
      </Grid>                
  <Grid item xs={4}>
      { namefield}
  </Grid>
  <Grid item xs={4}>
      {addressfield}
  </Grid>
  
    </Grid>
     <br></br>
    <Grid container spacing={2}>
      <Grid item xs={4}>
      {addressfield}
      </Grid>
      <Grid item xs={4}>
      {qualificationfield}
      </Grid>

      <Grid item xs={4}>
      {phonefield}
      </Grid>
      <Grid item xs={4}>
      {agefield}
      </Grid>
      <Grid item xs={4}>
      {usernamefield}
      </Grid>

      <Grid item xs={4}>
      {passwordfield}
      </Grid>

     
    </Grid>
    <br></br>
    <button class="btn btn-primary" onClick={handleSubmit}>Update</button>
    <br></br>
    </center>
    
   
    </Box> 
  </Box>
    </div>
  )
}

export default UpdateStaff
