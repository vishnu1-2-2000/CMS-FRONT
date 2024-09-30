import {React,useState,useEffect} from 'react'
import axios from 'axios'
import { Card, Input } from 'semantic-ui-react'
import Navbarpage from '../Course/Navbarpage'
import Admin_Dashboard from '../Admin_Dashboard'
import Box from '@mui/material/Box';
import { useNavigate } from "react-router";
import { DataGrid } from '@mui/x-data-grid';
function View_Student_Leave() {
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
                      
                    axios.get("http://localhost:8000/staffapp/student_leave/")
                        .then(response => {
                                            setData(response.data);
                                                          
                                          })
                                                                 
                },[])  
function ApprovedLeave(rowid){
                    
                                        axios
                                        
                                                .put(`http://localhost:8000/staffapp/update_student_leave/${rowid.id}`,{
                                                      "regno": rowid.regno,
                                                      "status" :"Approved"    
                                                })
                                                .then(() => {
                                                            window.location.reload()
                                                          });
                                        
                                        }   

                                        function RejectLeave(rowid){
                    
                                                            axios
                                                            
                                                                    .put(`http://localhost:8000/staffapp/update_student_leave/${rowid.id}`,{
                                                                          "regno": rowid.regno,
                                                                          "status" :"Rejected"    
                                                                    })
                                                                    .then(() => {
                                                                                window.location.reload()
                                                                              });
                                                            
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
                     
                                                   {/* <center>
                                                   <Input icon='search' style={{width:"50%"}}
                                                                         placeholder='Enter Course Name Search...'
                                                                         onChange={(e) => setSearch(e.target.value)}
                                                     />
                                                     </center> 
                                                    
                                                      
                                       <table  style={{ border: '3px solid black', width: '70%' }}>
                                                     
                                                     <thead>
                                                       <tr style={{border:"1px solid black"}}>
                                                         <th style={{ backgroundColor: '#f2f2f2' }}>ID</th>
                                                         <th style={{ backgroundColor: '#f2f2f2' }}>Register Number</th>
                                                         <th style={{ backgroundColor: '#f2f2f2' }}>Name</th>
                                                         <th style={{ backgroundColor: '#f2f2f2' }}>Course</th>
                                                         <th style={{ backgroundColor: '#f2f2f2' }}>Date On</th>
                                                         <th style={{ backgroundColor: '#f2f2f2' }}>Date To</th>
                                                         <th style={{ backgroundColor: '#f2f2f2' }}>Message</th>
                                                         <th style={{ backgroundColor: '#f2f2f2' }}>Status</th>
                                                        
                    
                                                         <th style={{ backgroundColor: '#f2f2f2' }}>Actions</th>
                                                       </tr>
                                                     </thead>
                                                     <tbody>
                                                    {data  .filter((item)=>{
                                                                 return search.toLowerCase () ===""?  item 
                                                                 : item.subject.toLowerCase().includes(search)  ;     
                                                          })
                                                          .map(item => (
                                                           <tr key={item.id} style={{border:"2px solid black"}}>
                                                                         <td style={{ padding: '8px' }}>{item.id}</td>
                                                             <td style={{ padding: '8px' }}>{item.regno}</td>
                                                             <td style={{ padding: '8px' }}>{item.name}</td>
                                                             <td style={{ padding: '8px' }}>{item.course}</td>
                                                          
                                                             <td style={{ padding: '8px' }}>{item. date_on}</td>
                                                           
                                                             <td style={{ padding: '8px' }}>{item.date_to}</td>
                                                             <td style={{ padding: '8px' }}>{item.message}</td>
                                                             <td style={{ padding: '8px' }}>{item.status}</td>
                                                           
                                                             <td style={{ padding: '8px' }}>
                                                             &nbsp;  <button class ="btn btn-success" onClick={() => ApprovedLeave(item)}>Approve</button>
                                                             &nbsp;  <button class ="btn btn-danger" onClick={() => RejectLeave(item)}>Reject</button>
                                                             </td>
                                                           </tr>
                                                         ))}
                                                       </tbody>
                                                     </table> */}

                   
                                         </Box>
                                         </Box>           
                                     </div>
                      )
}

export default View_Student_Leave
