import {React,useState,useEffect} from 'react'
import {useParams} from  'react-router-dom'
import {useNavigate} from 'react-router'
import axios from 'axios'
import Admin_Dashboard from '../Admin_Dashboard'
import Navbarpage from '../Course/Navbarpage'
import Box from '@mui/material/Box';
import { Card, Input } from 'semantic-ui-react'
import { DataGrid } from '@mui/x-data-grid';
function StudentNotificationGet() {
                    const[ data,setData]=useState([]) 
                    const[search,setSearch]=useState("")
                    const navigate=useNavigate()
                    function  getStudentNotification(){
                       axios.get("http://localhost:8000/adminapp/student_notification/")
                       .then((res)=>{
                                      
                              setData(res.data)       
                       })
                  
                    } 

  const columns = [
                      { field: 'id', headerName: <b>ID</b>, headerClassName: 'super-app-theme--header', width: 190 },
                      { field: 'registerno', headerName:<b>Register Number</b> , headerClassName: 'super-app-theme--header', width: 230 },
                      { field: 'name', headerName:<b>Name</b> , headerClassName: 'super-app-theme--header', width: 230 },
                      { field: 'course', headerName:<b>Course</b> , headerClassName: 'super-app-theme--header', width: 210 },
                      { field: 'date', headerName:<b>Date</b> , headerClassName: 'super-app-theme--header', width: 210 },
                      { field: 'message', headerName:<b>Message</b> , headerClassName: 'super-app-theme--header', width: 210 },
                      { field: 'status', headerName:<b>Status</b> , headerClassName: 'super-app-theme--header', width: 110 },
                      { field: '', headerName:<b>Actions</b> , headerClassName: 'super-app-theme--header', width: 210 ,
                        renderCell: (params) => {
                                                                 
                          return <div>
                                  <button class ="btn btn-danger" onClick={() => Deletemessage(params.row.id)}>Delete</button>
                                </div>
                        } 
                      },
                    ]                   

 function Deletemessage(rowdata){
                    axios.delete(`http://localhost:8000/adminapp/delete_student_notification/${rowdata}`)
                    .then((res)=>{
                      window.location.reload()
                    })
 }                   
                    useEffect(()=>{
                          getStudentNotification()            
                    },[])   
                    const navigatenotifcreatepage =()=>{
                                      navigate("/addnotifiction_student/")
                    } 


                  
  return (
                    <div>
                                          <Box sx={{ display: 'flex' }}>
                                
                                <Admin_Dashboard/>
                                
                                
                                <Box component="main2" sx={{ flexGrow: 4, p: 1 }}>
                             
                                <Navbarpage/>
                                  <br/> 
                              <div>
                              <button class="btn btn-primary" onClick={navigatenotifcreatepage}>create</button> 
                              </div>
                              <br/> 
                                
                                      
                                                       
                    {/* <table  style={{ border: '3px solid black', width: '70%' }}>
                               
                               <thead>
                                 <tr style={{border:"1px solid black"}}>
                                   <th style={{ backgroundColor: '#f2f2f2' }}>ID</th>
                                   <th style={{ backgroundColor: '#f2f2f2' }}>Register Number</th>
                                   <th style={{ backgroundColor: '#f2f2f2' }}>Name</th>
                                   <th style={{ backgroundColor: '#f2f2f2' }}>Course</th>
                                   <th style={{ backgroundColor: '#f2f2f2' }}>Date</th>
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
                                                   <td style={{ padding: '8px' }}>{item.registerno}</td>
                                                   <td style={{ padding: '8px' }}>{item.name}</td>
                                                   <td style={{ padding: '8px' }}>{item.course}</td>
                                                   <td style={{ padding: '8px' }}>{item.date}</td>
                                                   <td style={{ padding: '8px' }}>{item.message}</td>
                                                   <td style={{ padding: '8px' }}>{item.status}</td>
                                       
                                      
                                        <button class="btn btn-danger" onClick={()=>Deletemessage(item.id)}>Delete</button>
                                       </tr>
                                     ))}
                                   </tbody>
                               </table> */}

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

export default StudentNotificationGet
