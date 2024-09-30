import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import Staff_Dashboard from './Staff_Dashboard';
import Navbarpage from '../Adminpage/Course/Navbarpage';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router";
function AttendanceView() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate=useNavigate()
  useEffect(() => {

    axios.get('http://localhost:8000/staffapp/attendance_view/')
     
      .then((res)=>{
        setRows(res.data)
      })
  
    
  
  
    
  }, []);

  const columns = [
    { field: 'id', headerName: 'ID', headerClassName: 'super-app-theme--header', width: 90 },
    { field: 'name', headerName: 'Name', headerClassName: 'super-app-theme--header', width: 230 },
    { field: 'regno', headerName: 'Register Number', headerClassName: 'super-app-theme--header', width: 190 },
    { field: 'course', headerName: 'Course', headerClassName: 'super-app-theme--header', width: 210 },
    { field: 'subject', headerName: 'Subject', headerClassName: 'super-app-theme--header', width: 190 },
    { field: 'date', headerName: 'Date', headerClassName: 'super-app-theme--header', width: 190 },
    { field: 'status', headerName: 'Status', headerClassName: 'super-app-theme--header', width: 180 },
    // Add more columns as needed
  ];
  const createpage=()=>navigate("/attendance/")    
  return (
    <div style={{
      background: "linear-gradient(90deg, rgba(35,40,82,1) 25%, rgba(26,34,122,1) 55%, rgba(27,44,94,1) 89%)",
      
    }} 
>
    <Box sx={{ display: 'flex' }}>
                                
    <Staff_Dashboard/>
    
    
    <Box component="main2" sx={{ flexGrow: 4, p: 1 }}>
 
    <Navbarpage/>

    <div style={{ height: 600, width: '90%' }}>
          <button class="btn btn-primary" onClick={createpage}>Create</button>
      <DataGrid
      sx={{
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
}} 
       rows={rows} columns={columns}  />
    </div>
    </Box>
    </Box>
    </div>
  );

}

export default AttendanceView
