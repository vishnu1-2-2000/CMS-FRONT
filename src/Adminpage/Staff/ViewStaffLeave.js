import {React,useState,useEffect} from 'react'
import axios from 'axios'
import { Card, Input } from 'semantic-ui-react'
import Navbarpage from '../Course/Navbarpage'
import Admin_Dashboard from '../Admin_Dashboard'
import Box from '@mui/material/Box';
import { useNavigate } from "react-router";
import { DataGrid } from '@mui/x-data-grid';
function ViewStaffLeave() {
    const[data,setData]=useState([]);
    const[search,setSearch]=useState("");
    const navigate=useNavigate()

    const columns = [
                      { field: 'id', headerName: <b>ID</b>, headerClassName: 'super-app-theme--header', width: 100 },
                      { field: 'regno', headerName:<b>Register Number</b> , headerClassName: 'super-app-theme--header', width: 230 },
                      { field: 'name', headerName:<b>Name</b> , headerClassName: 'super-app-theme--header', width: 130 },
                      // { field: 'course', headerName:<b>Course</b> , width: 210 },
                      { field: 'date_on', headerName:<b>Date On</b> , headerClassName: 'super-app-theme--header', width: 210 },
                      { field: 'date_to', headerName:<b>Date To</b> , headerClassName: 'super-app-theme--header', width: 210 },
                      { field: 'message', headerName:<b>Message</b> , headerClassName: 'super-app-theme--header', width: 200 },
                      { field: 'status', headerName:<b>Status</b> , headerClassName: 'super-app-theme--header', width: 110 },
                      { field: '', headerName:<b>Actions</b> , headerClassName: 'super-app-theme--header', width: 210 ,
                        renderCell: (params) => {
                                                                 
                          return <div>
                                 <button class ="btn btn-success" onClick={() => ApprovedLeave(params.row)}>Approve</button>&nbsp; &nbsp;  <button class ="btn btn-danger" onClick={() => RejectLeave(params.row)}>Reject</button>
                                </div>
                        } 
                      },
          ]       
                    
  useEffect(()=>{
                      
                    axios.get("http://localhost:8000/staffapp/staff_leave/")
                        .then(response => {
                                            setData(response.data);
                                                          
                                })
                                                                 
                    },[])  
  function ApprovedLeave(rowid){
                    
                                axios
                                        
                                .put(`http://localhost:8000/staffapp/update_staff_leave/${rowid.id}`,{
                                              "regno": rowid.regno,
                                              "status" :"Approved"    
                                })
                                .then(() => {
                                                  window.location.reload()
                                        });
                                        
                        }   

  function RejectLeave(rowid){
                    
                              axios
                              .put(`http://localhost:8000/staffapp/update_staff_leave/${rowid.id}`,{
                                          "regno": rowid.regno,
                                          "status" :"Rejected"    
                              })
                              .then(() => {
                                                window.location.reload()
                                          });
                                                            
                                                            }                       
const createpage=()=>navigate("/applystaff_leave")                                  
  return (
    <div style={{
      background: "linear-gradient(90deg, rgba(35,40,82,1) 25%, rgba(26,34,122,1) 55%, rgba(27,44,94,1) 89%)",
      
    }} 
>
                <Box sx={{ display: 'flex' }}>
                  <Admin_Dashboard/>
                    <Box component="main2" sx={{ flexGrow: 4, p: 1 }}>
                      <Navbarpage/>
                          <br/> 
                             
                    <div style={{ height: 500, width: '93%' }}>
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

export default ViewStaffLeave
