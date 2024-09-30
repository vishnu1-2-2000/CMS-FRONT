import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useNavigate } from "react-router";
import { Link, useParams } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'; 
import Navbarpage from './Navbarpage';
import Admin_Dashboard from '../Admin_Dashboard';
import Grid from '@mui/material/Grid';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
function Updatecourse() {
  const [fees,setFees]=useState("");    
  const [course_name,setCname]=useState("");  
  const [description,setDescription]=useState("");  
  const [year,setYear]=useState(""); 
  const navigate = useNavigate(); 
  const {id} =useParams();

function individualdata(){
  // alert("hhhhh")
  var iid=id
//  alert(iid)
  axios
  .get("http://localhost:8000/adminapp/coursedetailind/"+iid)
  
.then((res) => {


    setCname(res.data[0].course_name)
    setFees(res.data[0].fees)
    setYear(res.data[0].year)
    setDescription(res.data[0].description)
}); 
}

  useEffect(() => {
    // alert(id)
      individualdata()
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    var iid=id
    axios
    
    .put(`http://localhost:8000/adminapp/updatecourse/${id}`,
       {
          "course_name":course_name,
          "fees":fees,
          "year":year,
          "description":description
       }                
     )
     .then(() => {
        navigate("/coursedetails/");
  });               

  } 
  return (
    <div  style={{
      background: "linear-gradient(90deg, rgba(4,6,22,1) 25%, rgba(10,11,22,1) 55%, rgba(29,40,73,1) 89%)",
     
    }} >
   <Box sx={{ display: 'flex' }}>
                   
                   <Admin_Dashboard/>
                   <Box component="main2" sx={{ flexGrow: 4, p: 1 }}>
                   <Navbarpage/>   

                   <br/>  <br/>  <br/>  <br/>
      <center style={{background: "linear-gradient(90deg, rgba(16,18,54,1) 25%, rgba(26,37,62,1) 55%, rgba(8,11,69,1) 84%)"}}>
      <h4 ><center><h4 style={{color:"#FFE4C4	"}}><font face="times new roman" size="6">Edit  Staff Details </font></h4></center></h4>  
      <br></br>             
      <Grid container spacing={2}>
      <Grid item xs={3}>
      <TextField id="outlined-cname" 
               onChange={(e) => setCname(e.target.value)} 
               label="Enter Course Name" variant="outlined" 
               value={course_name}
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
      </Grid>
      <Grid item xs={3}>
      <TextField id="outlined-fees" 
              onChange={(e) => setFees(e.target.value)} 
              label="Enter Fees" variant="outlined"
              value={fees} 
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
      </Grid>

      <Grid item xs={3}>
      <TextField id="outlined-year" 
              onChange={(e) => setYear(e.target.value)}  
              label="Enter Year" variant="outlined"
              value={year}
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
      </Grid>
      <Grid item xs={3}>
      <TextField id="outlined-desc" 
             onChange={(e) => setDescription(e.target.value)}  
             label="Enter Description" variant="outlined" 
             value={description}
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
   
      </Grid>
    </Grid>
    <br></br>
    <br></br>
      
    
      <center><button class ="btn btn-success" onClick={handleSubmit}>Save</button></center>
     
   
        <br></br>
      
        </center>
    
    
     
   
  
    </Box>
    </Box>
    </div>
  )
}

export default Updatecourse
