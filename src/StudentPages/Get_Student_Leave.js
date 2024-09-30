import {React,useState,useEffect} from 'react'
import axios from 'axios'
import { Card, Input } from 'semantic-ui-react'
import Navbarpage from '../Adminpage/Course/Navbarpage'
import Student_Dashboard from './Student_Dashboard'
import Box from '@mui/material/Box';
import { useNavigate } from "react-router";
import { DataGrid,GridColDef } from '@mui/x-data-grid';
function Get_Student_Leave() {
    const[data,setData]=useState([]);
    const[search,setSearch]=useState("");
    const navigate=useNavigate()            
    useEffect(()=>{
                                  
                    axios.get("http://localhost:8000/staffapp/student_leave/")
                      .then(response => {
                                          setData(response.data);
                                                                      
                                      })                           
                    },[])  
                                                    
    function deleteRow(rowid){
                                
                              axios
                              .delete(`http://localhost:8000/staffapp/delete_student_leave/${rowid}`)
                              .then(() => {
                                            window.location.reload()
                                          });
                                                    
                            }   
    const createpage=()=>navigate("/apply_student-leave/") 
                                
    const columns: GridColDef[] = [
                      { field: 'id', fontSize: '18px', headerName: 'ID', headerClassName: 'super-app-theme--header',headerAlign: 'center', width: 90  },
                      { field: 'name', headerName: 'Name',headerClassName: 'super-app-theme--header',headerAlign: 'center', width: 200 },
                      { field: 'regno', headerName: 'Register Number', headerClassName: 'super-app-theme--header',headerAlign: 'center', width: 210 },
                      { field: 'course', headerName: 'Course', headerClassName: 'super-app-theme--header',headerAlign: 'center', width: 150 },
                                     
                      { field: 'date_on', headerName: 'Date On', headerClassName: 'super-app-theme--header',headerAlign: 'center', width: 190 },
                      { field: 'date_to', headerName: 'Date To', headerClassName: 'super-app-theme--header',headerAlign: 'center', width: 180 },
                      { field: 'message', headerName: 'message', headerClassName: 'super-app-theme--header',headerAlign: 'center', width: 140},
                      { field: 'status', headerName: 'Status', headerClassName: 'super-app-theme--header',headerAlign: 'center', width: 170},
                      { field: 'actions', headerName: 'Actions', headerClassName: 'super-app-theme--header',headerAlign: 'center', width: 100,
                      renderCell: (params) => {
                        if(params.row.status === "sended" ) {
                          return <button
                            className="btn btn-danger" 
                           
                            onClick={() => deleteRow(params.id)}>delete</button>;
                        }
                        else if(params.row.status === "Rejected"){
                          return <button
                            className="btn btn-danger"
                            disabled={true} 
                            onClick={() => deleteRow(params.id)}>delete</button>;
                        }
                        else if(params.row.status === "Approved"){
                          return <button
                            className="btn btn-danger"
                            disabled={true} 
                            onClick={() => deleteRow(params.id)}>delete</button>;
                        }
                                                                                         
                      // return  {...params.status =="sended" ?  <button class ="btn btn-danger" onClick={() => deleteRow(params.id)}>Delete</button> : <button class ="btn btn-danger" disabled={true} onClick={() => deleteRow(params.id)}>Delete</button> }            
                                                           
                      }
                    },
                    ];

                  
                            
        return (
                  <div>
                    <Box sx={{ display: 'flex' }}>
                      <Student_Dashboard/>
                        <Box component="main2" sx={{ flexGrow: 4, p: 1, height: 300,
        width: '100%',
        '& .super-app-theme--header': {
          backgroundColor: '#5F9EA0	',} }}>
                          <Navbarpage/>
                            <br/> 
                            <button class="btn btn-primary" onClick={createpage}>Create</button>
                            <center>
                            </center> 
                         
                            <br/> 
                            <div style={{ height: 500, width: '92%' }}>

                              <DataGrid sx={{
                                boxShadow: 6,
                                border: 4,
                                borderColor: '#008B8B	',
                                '& .MuiDataGrid-cell:hover': {
                                  color: 'primary.main',
                                },
                }} rows={data} columns={columns} getRowId={(row) => row.id}  />
                                            
                            </div>
                        </Box>
                    </Box>           
                </div>
                                                   
                                                                
                                  )
}

export default Get_Student_Leave
