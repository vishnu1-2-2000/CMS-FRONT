import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Card, Input } from 'semantic-ui-react'
import Box from '@mui/material/Box';
import Admin_Dashboard from '../Admin_Dashboard';
import { useNavigate } from "react-router"; 
import { DataGrid } from '@mui/x-data-grid';
import Navbarpage from './Navbarpage';

function CourseDetails() {
 const [data, setData] = useState([]);
 const [search,setSearch]=useState("");

 
 const navigate = useNavigate();    
 
 const navigatetoaddCourse=()=>{
        navigate("/addcourse/")
  }
 const deleteRow = (id) => { 

  axios
    .delete(`http://localhost:8000/adminapp/deletecourse/${id}`,
     )
    .then(() => {
      window.location.reload()
    });
};              

const columns = [
  { field: 'id', headerName: <b>ID</b>,  headerClassName: 'super-app-theme--header', width: 200 },
  { field: 'course_name', headerName:<b>Course Name</b> ,  headerClassName: 'super-app-theme--header', width: 270 },
  { field: 'fees', headerName:<b>Fees</b> ,  headerClassName: 'super-app-theme--header', width: 230 },
  { field: 'year', headerName:<b>YEAR</b> ,  headerClassName: 'super-app-theme--header', width: 210 },
  { field: 'description', headerName:<b>Description</b> ,  headerClassName: 'super-app-theme--header', width: 210 },
  { field: 'edit', headerName:<b>Edit</b> ,  headerClassName: 'super-app-theme--header', width: 210 ,
    renderCell: (params) => {
                                             
      return <div>
              <a class="btn btn-success" href={`/updatecourse/${params.row.id}/`}>Edit</a> 
            </div>
    } 
  },
  { field: 'delete', headerName:<b>Delete</b> ,  headerClassName: 'super-app-theme--header', width: 210 ,
    renderCell: (params) => {
                                             
      return <div>
          <button class ="btn btn-danger" onClick={() => deleteRow(params.row.id)}>Delete</button>
            </div>
    } 
  },
]
useEffect(() => {
                    fetch('http://localhost:8000/adminapp/coursedetail/')
                      .then(response => response.json())
                      .then(data => setData(data))
                      .catch(error => console.error('Error fetching data:', error));
                  }, []);
  return (
    <div style={{
      background: "linear-gradient(90deg, rgba(35,40,82,1) 25%, rgba(26,34,122,1) 55%, rgba(27,44,94,1) 89%)",
      
    }} 
>
                      
                    <Box sx={{ display: 'flex' }}>
                   
                    <Admin_Dashboard/>
                    
                    
                    <Box component="main2" sx={{ flexGrow: 4, p: 1 }}>
                 
                    <Navbarpage/>
                 
                   <button onClick={navigatetoaddCourse} class ="btn btn-success">Add Course</button>
                    <center>
                 
                  
                   
                     
                   
                   
                   <br/> 
                 
                    {/* <table  style={{ border: '3px solid black', width: '70%' }}>
                    
                      <thead>
                        <tr style={{border:"1px solid black"}}>
                          <th style={{ backgroundColor: '#f2f2f2' }}>ID</th>
                          <th style={{ backgroundColor: '#f2f2f2' }}>Course Name</th>
                          <th style={{ backgroundColor: '#f2f2f2' }}>Fees</th>
                          <th style={{ backgroundColor: '#f2f2f2' }}>YEAR</th>
                          <th style={{ backgroundColor: '#f2f2f2' }}>Description</th>
                          <th style={{ backgroundColor: '#f2f2f2' }}>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                     
                                
                     
                    

                                      
                         {data .filter((item)=>{
                                return search.toLowerCase () ===""?  item 
                                : item.course_name.toLowerCase().includes(search)  ;     
                         }).map(item => (
                          <tr key={item.id} style={{border:"2px solid black"}}>
                                        <td style={{ padding: '8px' }}>{item.id}</td>
                            <td style={{ padding: '8px' }}>{item.course_name}</td>
                            <td style={{ padding: '8px' }}>{item.fees}</td>
                            <td style={{ padding: '8px' }}>{item.year}</td>
                            <td style={{ padding: '8px' }}>{item.description}</td>
                            <td style={{ padding: '8px' }}><a class ="btn btn-primary" href={`/updatecourse/${item.id}/`}>update</a>
                            &nbsp;  <button class ="btn btn-danger" onClick={() => deleteRow(item.id)}>Delete</button></td>
                          </tr>
                        ))}
                      </tbody>
                    </table> */}
                    </center>
                   
                    <div style={{ height: 690, width: '95%' }}>
                     <DataGrid sx={{
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
                }} rows={data} columns={columns} getRowId={(row) => row.id}  />
                     </div>
                    
                    </Box>
                    </Box>
                  
                  </div>
  )
}

export default CourseDetails
