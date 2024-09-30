import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import Student_Dashboard from './Student_Dashboard';
import Navbarpage from '../Adminpage/Course/Navbarpage';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router";


function Viewattendance() {

//   const [rows, setRows] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const[name,setName]=useState("")
  const navigate=useNavigate()
  var loggedInUsername=window.localStorage.getItem('loggedInUsername')
  var loggedInPassword=window.localStorage.getItem('loggedInUserPassword')
  var loggedInUserrole=window.localStorage.getItem('loggedInUserrole')

  function getStudentdetails(nameprops){
           axios.get("http://localhost:8000/adminapp/studentdetail/")
           .then((res)=>{
                res.data.map(data =>{
                    if(data.student_uname==loggedInUsername){
                                        // alert(data.student_name)
                           setName(data. student_name) 
                    //        window.localStorage.setItem('Name', data.student_name);            
                    }

                } )   
           })         
  }
//   var Name=window.localStorage.getItem('Name')

  useEffect((nameprops) => {

                    
                    axios.get('http://localhost:8000/staffapp/attendance_view/')
                     
                      .then((res)=>{
                                                   
                               
                    //     setRows(res.data)
                        setData(res.data)
                      })
                  
                    getStudentdetails()
                  
                  
                    
                  }, []);

                  const filteredData = data.filter(item =>
                    item.name== name.toLowerCase()
                  );          
                  const columns = [
                    { field: 'id', headerName: <b>ID</b>, width: 90 },
                    { field: 'name', headerName:<b>Name</b> , width: 230 },
                    { field: 'regno', headerName:<b>Register Number</b> , width: 190 },
                    { field: 'course', headerName:<b>Course</b> , width: 210 },
                    { field: 'subject', headerName:<b>Subject</b> , width: 190 },
                    { field: 'date', headerName:<b>Date</b> , width: 190 },
                    { field: 'status', headerName: <b>Status</b> , width: 180 },
                    // { field: 'actions', headerName:<b>Actions</b> , width: 400,
                    //    renderCell: (params) => {
                                                            
                    //                                         return <a
                    //                                         className="btn btn-danger" href ={`/addstudent/edit/${params.id}`} 
                    //                                       >Edit</a>;

                                       
                                         
                    //                     }

                    // },
                    
                    // Add more columns as needed
                    
                  ];
                  
                  return (
                    <Box sx={{ display: 'flex' }}>
                                                
                    <Student_Dashboard/>
                    
                    
                    <Box component="main2" sx={{ flexGrow: 4, p: 1 }}>
                 
                    <Navbarpage/>
                
                    <div style={{ height: 600, width: '90%' }}>
                         
                      <DataGrid rows={filteredData} columns={columns} getRowId={(row) => row.id}  />
                     
                    </div>
                    </Box>
                    </Box>
                  );
}

export default Viewattendance
