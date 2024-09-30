import {React,useState,useEffect} from 'react'
import {useNavigate} from 'react-router'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import Staff_Dashboard from './Staff_Dashboard'
import Navbarpage from '../Adminpage/Course/Navbarpage'
import Box from '@mui/material/Box';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
// import Select from "react-select";  
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox'
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import { DataGrid } from '@mui/x-data-grid';
import Grid from '@mui/material/Grid';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
function Attendance() {
   const[data,setData]=useState([])
   const[search,setSearch]=useState("")  
   const navigate=useNavigate()
   const{id}=useParams()
   const [checkedItems, setCheckedItems] = useState({});
   const [uncheckedItems, setUnCheckedItems] = useState({});
   const[couse,setCourse]=useState([]);
   const[course_lable,setCourselabel]=useState("")
   const[today_date,setToday_Date]=useState("")
   const[temp,setTemp]=useState("")
  const[subject,setSubject]=useState("")
  const[subject_label,setSubject_label]=useState("")
   const [isChecked, setIsChecked] = useState(false);
   const[attendancedata,setAttdata]=useState("")

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
   
  





   
   function getCourse(){
    axios.get('http://localhost:8000/adminapp/coursedetail/')
    .then((res)=>{
      setCourse(res.data)
      

    })                
   }

   function getsetCourse(courseparam) {
   
    axios.get("http://localhost:8000/adminapp/studentdetail/")
                    .then((resp)=>{
                      resp.data.map(opdata => {
                        // alert(opdata.course)
                        //  alert(course_lable)
                        if(opdata.course == courseparam){
                        //  alert(opdata[0].name)
                          setTemp(opdata. student_name)
                          // setData(resp.data)  
                        }
                          
                      })
           
                                 
                    })
   }
  

   function getSubjectdetails(indparams){

    axios.get("http://localhost:8000/adminapp/student_course/"+ indparams +"/")
    .then((resp)=>{
      setData(resp.data)  
    })

    .catch(error => {
      if (error.response && error.response.status === 404) {
        console.error('Resource not found');
      } else {
        console.error('An error occurred:', error.message);
      }
    });
   
   }
   
   

  

     
     useEffect(()=>{
                   
            getCourse()
        },[])  

const k=couse.map (option => ({
  
                    label: option.course_name.toUpperCase(), // Example transformation
                  })); 

function navigatetocreatepage(){
              navigate("/addstudent/create/create")
        }  
// const handleChange = (event) => {
//                     setCheckedItems({
//                       ...checkedItems,
                 
//                         // [event.target.name]: event.target.checked 
//                          options 
                       
                     
                     
                     
//                     });

                    
//                   };


 const handleCourse = (event,value) =>{
 
        // alert(value)
        // getstuentdata()
        getSubjectdetails(value)
        // getsetCourse(value)
        setCourselabel(value)
   } 
  
 
var coursefield = 
                    <Autocomplete
                      options={k}
                      onInputChange={handleCourse}
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
 var datefield=   <TextField id="outlined-basic" 
                  type="date" 
                  value={today_date} 
                  onChange={ (e)=>setToday_Date(e.target.value)}
                  sx={{
                    // Root class for the input field
                    "& .MuiOutlinedInput-root": {
                      color: "#FFFFF0",
                      fontFamily: "Arial",
                      fontWeight: "bold",
                      width:"300px",
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
 var tempfield=   <TextField id="outlined-basic"  onChange={ (e)=>setTemp(e.target.value)} value={temp} label="Enter Date"></TextField>    
//  var subjectfield=   <TextField id="outlined-basic"  onChange={ (e)=>setSubject(e.target.value)} value={subject} label="Enter Subject"></TextField> 
 var subjectfield=  
            // <Box sx={{ m: 1, minWidth: 220 }}>
            <FormControl  sx={{
              // Root class for the input field
              "& .MuiOutlinedInput-root": {
                color: "#FFFFF0",
                fontFamily: "Arial",
                fontWeight: "bold",
                width:"300px",
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
            }} >
            <InputLabel id="demo-simple-select-label">Select Subject</InputLabel>
            <Select
                    input={<OutlinedInput label="Name" />} 
                    label="Subject"
                    value={subject}
                    placeholder="select"
                   
                    onChange={ (e)=>setSubject(e.target.value)}
            >
            <MenuItem  value={"Malayalam"}>Malayalam</MenuItem>
            <MenuItem value={"English"}>English</MenuItem>
            <MenuItem value={"MATHS"}>MATHS</MenuItem>
            <MenuItem value={"HISTORY"}>HISTORY</MenuItem>
            <MenuItem value={'PHYSICS'}>PHYSICS</MenuItem>
            <MenuItem value={"CHEMISTRY"}>CHEMISTRY</MenuItem>
            <MenuItem value={"ACCOUNTANCY"}>ACCOUNTANCY</MenuItem>
          </Select>
          
      </FormControl> 
    // </Box>    
    
    const columns = [
      { field: 'id', headerName: <b>ID</b>, headerClassName: 'super-app-theme--header', width: 190 },
      { field: 'student_name', headerName:<b>Name</b> , headerClassName: 'super-app-theme--header', width: 230 },
      { field: 'registerno', headerName:<b>Register Number</b> , headerClassName: 'super-app-theme--header', width: 230 },
      { field: 'course', headerName:<b>Course</b> , headerClassName: 'super-app-theme--header', width: 210 },
    
      { field: 'actions', headerName:<b>Actions</b> , headerClassName: 'super-app-theme--header', width: 400,
         renderCell: (params) => {
                                             
          return <div>
                  <button class="btn btn-success" onClick={() => handleSubmit(params.row)}>Present</button> &nbsp;&nbsp;&nbsp;  <button class="btn btn-danger" onClick={() => AbsenthandleSubmit(params.row)}>Absent</button> &nbsp;&nbsp;&nbsp; <button class="btn btn-info" onClick={()=>Deleterow(params.row)}>Clear</button>
                </div>
        }

      },
      
      // Add more columns as needed
      
    ];

     
  const handleSubmit=(row)=>{
    
      
      axios.post("http://localhost:8000/staffapp/all_attendance/",{
    
        'course':course_lable,
        "date":today_date,
        // "attendance":row.student_name,
         "name":row.student_name,
         "status":"Present",
         "subject":subject,
         "regno":row.registerno
    
    })
      .then((res)=>{
          if(res.data =="allready exist"){
            alert("allredy esist")
          }
          else{
            alert("attendance saved")
          }
      })
      }

 const AbsenthandleSubmit=(row)=>{
 
  // if(subject==10){
      axios.post("http://localhost:8000/staffapp/all_attendance/",{
    
        'course':course_lable,
        "date":today_date,
        "name":row.student_name,
        "status":"Absent",
        "subject":subject,
        "regno":row.registerno
        // "attendance":row.student_name,
         
})
.then((res)=>{



    if(res.data =="allready exist"){
        alert("allredy esist")
    }
    else{
        alert("saved")
    }


     })
    }
// else if(subject==20){

//   axios.post("http://localhost:8000/staffapp/all_attendance/",{
    
//     'course':course_lable,
//     "date":today_date,
//     "name":row.student_name,
//     "status":"Absent",
//     "subject":subject,
//     "regno":row.registerno
//     // "attendance":row.student_name,
     
// })
// .then((res)=>{



// if(res.data =="allready exist"){
//     alert("allredy esist")
// }
// else{
//     alert("eng saved")
// }


// })
// }

// else if(subject== 30){

//   axios.post("http://localhost:8000/staffapp/all_attendance/",{
    
//     'course':course_lable,
//     "date":today_date,
//     "name":row.student_name,
//     "status":"Absent",
//     "subject":subject,
//     "regno":row.registerno
//     // "attendance":row.student_name,
     
// })
// .then((res)=>{



// if(res.data =="allready exist"){
//     alert("allredy esist")
// }
// else{
//     alert("maths saved")
// }


// })
// }

// else if(subject==40){

//   axios.post("http://localhost:8000/staffapp/all_attendance/",{
    
//     'course':course_lable,
//     "date":today_date,
//     "name":row.student_name,
//     "status":"Absent",
//     "subject":subject,
//     "regno":row.registerno
//     // "attendance":row.student_name,
     
// })
// .then((res)=>{



// if(res.data =="allready exist"){
//     alert("allredy esist")
// }
// else{
//     alert("history saved")
// }


// })
// }
 
// else if(subject==50){

//   axios.post("http://localhost:8000/staffapp/all_attendance/",{
    
//     'course':course_lable,
//     "date":today_date,
//     "name":row.student_name,
//     "status":"Absent",
//     "subject":subject,
//     "regno":row.registerno
//     // "attendance":row.student_name,
     
// })
// .then((res)=>{



// if(res.data =="allready exist"){
//     alert("allredy esist")
// }
// else{
//     alert("phy saved")
// }


// })
// }
// else if(subject==60){

//   axios.post("http://localhost:8000/staffapp/all_attendance/",{
    
//     'course':course_lable,
//     "date":today_date,
//     "name":row.student_name,
//     "status":"Absent",
//     "subject":subject,
//     "regno":row.registerno
//     // "attendance":row.student_name,
     
// })
// .then((res)=>{



// if(res.data =="allready exist"){
//     alert("allredy esist")
// }
// else{
//     alert("che saved")
// }


// })
// }

// else if(subject==70){

//   axios.post("http://localhost:8000/staffapp/all_attendance/",{
    
//     'course':course_lable,
//     "date":today_date,
//     "name":row.student_name,
//     "status":"Absent",
//     "subject":subject,
//     "regno":row.registerno
//     // "attendance":row.student_name,
     
// })
// .then((res)=>{



// if(res.data =="allready exist"){
//     alert("allredy esist")
// }
// else{
//     alert("account saved")
// }


// })
// }
//    }
function Deleterow(row){


  axios.delete(`http://localhost:8000/staffapp/deleteattendance/${row.registerno}`)
  .then((res)=>{
      window.location.reload()
  })
}
 

  return (
    <div style={{
      background: "linear-gradient(90deg, rgba(35,40,82,1) 25%, rgba(26,34,122,1) 55%, rgba(27,44,94,1) 89%)",
      
    }} 
>
        <Box sx={{ display: 'flex' }}>
                   
                   <Staff_Dashboard/>
                   
                   
                   <Box component="main2" sx={{ flexGrow: 4, p: 1 }}>
                
                   <Navbarpage/>
<div class="container">
    <Box sx={{ flexGrow: 1 ,  background:"linear-gradient(90deg, rgba(16,18,54,1) 25%, rgba(26,37,62,1) 55%, rgba(8,11,69,1) 84%)"}}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
         {coursefield}
        </Grid>
        <Grid item xs={3}>
        {datefield}
        </Grid>
        <Grid item xs={4}>
         {subjectfield}
        </Grid>
        <Grid item xs={4}>
         
        </Grid>
      
      </Grid>
    </Box>
    <br/>
                  
                   {/* {coursefield}{datefield}{tempfield}{subjectfield} */}
                 
                  
                 
                    {/* <table  style={{ border: '3px solid black', width: '70%' }}>
                    <thead>
                      <tr style={{border:"1px solid black"}}>
                        <th style={{ backgroundColor: '#f2f2f2' }}>ID</th>
                        <th style={{ backgroundColor: '#f2f2f2' }}>Register Number</th>
                        <th style={{ backgroundColor: '#f2f2f2' }}>Student Name</th>
                        <th style={{ backgroundColor: '#f2f2f2' }}>Address</th>
                        <th style={{ backgroundColor: '#f2f2f2' }}>Age</th>
                        <th style={{ backgroundColor: '#f2f2f2' }}>Qualification</th>
                        <th style={{ backgroundColor: '#f2f2f2' }}>Grade</th>
                        <th style={{ backgroundColor: '#f2f2f2' }}>Course</th>
                        <th style={{ backgroundColor: '#f2f2f2' }}>Phone</th>
                        <th style={{ backgroundColor: '#f2f2f2' }}>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                    {data.filter((item)=>{
                                return search.toLowerCase () ===""?  item 
                                : item.student_name.toLowerCase().includes(search)  ;     
                    })
                    .map(item=>(<tr key= {item.id}> 
                    <td style={{ padding: '8px' }}>{item.id}</td>
                    <td style={{ padding: '8px' }}>{item.registerno}</td>
                    <td style={{ padding: '8px' }}>{item.student_name}</td>
                    <td style={{ padding: '8px' }}>{item.address}</td>
                    <td style={{ padding: '8px' }}>{item.age}</td>
                    <td style={{ padding: '8px' }}>{item.qualification}</td>
                    <td style={{ padding: '8px' }}>{item.grade}</td>
                    <td style={{ padding: '8px' }}>{item.course}</td>
                    <td style={{ padding: '8px' }}>{item.phone}</td>
                    <td>
                   
       
          <label>{item.name}</label>&nbsp;&nbsp;&nbsp;
          
          <button class="btn btn-primary" onClick={() => handleSubmit(item)}>Present</button>&nbsp;&nbsp;&nbsp;
          <button class="btn btn-danger" onClick={()=>AbsenthandleSubmit(item)}>Absent</button>&nbsp;&nbsp;&nbsp;
          <button class="btn btn-danger" onClick={()=>Deleterow(item)}>Clear</button>
         
          
                                      
                    </td>
                    </tr>            
                  
                    ))
                  
}
                    </tbody>
                    </table> */}
                     <div style={{ height: 500, width: '96%' }}>
                     <DataGrid  sx={{
        boxShadow: 6,
        border: 4,
        borderColor: 'black',
        '& .MuiDataGrid-cell:hover': {
          color: 'primary.main',
        },
        '& .super-app-theme--header': {
          backgroundColor: ' #1b0720',
        },
        color:"white",
        background:"linear-gradient(90deg, rgba(14,16,33,1) 25%, rgba(3,8,41,1) 55%, rgba(0,1,1,1) 89%)"
}}  rows={data} columns={columns} getRowId={(row) => row.id}  />
                     </div>
                     </div>
                  
                    </Box>
                    </Box>
    </div>
  )
}

export default Attendance
