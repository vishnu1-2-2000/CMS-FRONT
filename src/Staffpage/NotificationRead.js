import {React,useState,useEffect} from 'react'
import axios from 'axios'
import { Card, Input } from 'semantic-ui-react'
import Navbarpage from '../Adminpage/Course/Navbarpage'
import Staff_Dashboard from './Staff_Dashboard';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router";
import { DataGrid,GridColDef } from '@mui/x-data-grid';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
function NotificationRead() {
  const[data,setData]=useState([]);
  const[search,setSearch]=useState("");
  const navigate=useNavigate()
                 
  const [open, setOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const[name,setName]=useState("");
  var loggedInUsername=window.localStorage.getItem('loggedInUsername')
  var loggedInPassword=window.localStorage.getItem('loggedInUserPassword')
  var loggedInUserrole=window.localStorage.getItem('loggedInUserrole')

  function deleteRow(rowid){
    setOpen("true");
    axios
    
            .put(`http://localhost:8000/adminapp/update_staff_notification/${rowid.id}`,{

               'registerno':rowid.registerno,
               'status' :"Viewed"        
            })
            .then(() => {
                        window.location.reload()
                        
                      });
    
    } 


  const handleClickOpen = (row) => {
    setSelectedRow(row);
    setOpen(true);
  
    
  };

  const handleClose = (row) => {
    setOpen(false);
    setSelectedRow(null);
    deleteRow(row)
  
  };


  const columns: GridColDef[] = [
                      { field: 'id', fontSize: '18px', headerName: <b>ID</b>, headerClassName: 'super-app-theme--header',headerAlign: 'center', width: 90  },
                      { field: 'name', headerName: <b>Name</b>,headerClassName: 'super-app-theme--header',headerAlign: 'center', width: 200 },
                      { field: 'registerno', headerName: <b>Register Number</b> , headerClassName: 'super-app-theme--header',headerAlign: 'center', width: 210 },
                      { field: 'course', headerName: <b>Course</b> , headerClassName: 'super-app-theme--header',headerAlign: 'center', width: 150 },
                                     
                      // { field: 'date_on', headerName: 'Date On', headerClassName: 'super-app-theme--header',headerAlign: 'center', width: 190 },
                      // { field: 'date_to', headerName: 'Date To', headerClassName: 'super-app-theme--header',headerAlign: 'center', width: 180 },
                      { field: 'message', headerName: <b>message</b> , headerClassName: 'super-app-theme--header',headerAlign: 'center', width: 140},
                      { field: 'status', headerName: <b>Status</b> , headerClassName: 'super-app-theme--header',headerAlign: 'center', width: 270},
                      { field: 'actions', headerName: <b>Actions</b> , headerClassName: 'super-app-theme--header',headerAlign: 'center', width: 200,
                      renderCell: (params) => {
                        if(params.row.status === "Sended" ) {
                            return <div>
                          <button
                            className="btn btn-danger" 
                            id="notificationbutton"
                            onClick={() => handleClickOpen(params.row)}>New Notification</button>
                            <Dialog open={open} onClick={() => handleClose(params.row)}>
                            <DialogTitle>Notification For You</DialogTitle>
                            <DialogContent>
                              <DialogContentText>
                                {selectedRow ? `${selectedRow.message},` : ''}
                              </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                              <Button onClick={() => handleClose(params.row)} color="primary">
                                Close
                              </Button>
                            </DialogActions>
                          </Dialog>
                          </div> 
                        }
                        else if(params.row.status === "Viewed" ){
                          return <div>
                            <button
                            className="btn btn-danger" 
                           
                            onClick={() => handleClickOpen(params.row)}>View Notification</button>
                            
                            <Dialog open={open} onClick={() => handleClose(params.row)}>
                            <DialogTitle>Notification For You</DialogTitle>
                            <DialogContent>
                              <DialogContentText>
                                {selectedRow ? `${selectedRow.message},` : ''}
                              </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                              <Button onClick={() => handleClose(params.row)} color="primary">
                                Close
                              </Button>
                            </DialogActions>
                          </Dialog>
                          </div> 
                        }
                                                                                   
                    
                                                           
                      }
                    },
              ];
function getStaffdetails(){
  axios.get("http://localhost:8000/adminapp/staffdetail/")
.then((res)=>{
 res.data.map(item=>{
  if(item.staff_uname ==loggedInUsername){
    window.localStorage.setItem('NAME', item.staff_name);
  }
 })
})
  
}
var Name=window.localStorage.getItem("Name")                    
  useEffect(()=>{
                      
              axios.get("http://localhost:8000/adminapp/staff_notification/")
                .then(res => {
              
               
                  setData(res.data);
                                                          
            })
               getStaffdetails()                                                  
                },[])  
                                        
                
  const createpage=()=>navigate("/addresult")  
  var NAME=window.localStorage.getItem('NAME')                                 
  const filterresult=data.filter(item=>
                  item.name == NAME 
                                  
                    )                     
                  
                    
                    // const handleClickOpen = () => {
                    //                     setOpen(true);
                                       
                    //                   };
                                    
                    //                   const handleClose = () => {
                    //                     setOpen(false);
                    //                     window.location.reload()
                                       
                                        
                    //                   };
                                    
  return (
            <div>
                <Box sx={{ display: 'flex' }}>
                                                    
                    <Staff_Dashboard/>
                      <Box component="main2" sx={{ flexGrow: 4, p: 1 }}>
                          <Navbarpage/>
                          <br/>                           
                       
                                       {/* <table  style={{ border: '3px solid black', width: '70%' }}>
                                                     
                                                     <thead>
                                                       <tr style={{border:"1px solid black"}}>
                                                         <th style={{ backgroundColor: '#f2f2f2' }}>ID</th>
                                                         <th style={{ backgroundColor: '#f2f2f2' }}>Register Number</th>
                                                         <th style={{ backgroundColor: '#f2f2f2' }}>Name</th>
                                                         <th style={{ backgroundColor: '#f2f2f2' }}>Course</th>
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
                                                             <td style={{ padding: '8px' }}>{item.message}</td>
                                                             <td style={{ padding: '8px' }}>{item.status}</td>
                                                            
                                                           
                                                             <td style={{ padding: '8px' }}>

                                                             <Button variant="outlined"  onClick={() => deleteRow(item)}>
       View Notification
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Dialog Title</DialogTitle>
        <DialogContent>
          <p>{item.message}</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
                                                             
                                                             </td>
                                                             
                                                           </tr>
                                                         ))}
                                                       </tbody>
                                                     </table> */}

  
      <div style={{ height: 500, width: '100%' }}>

          <DataGrid sx={{
            boxShadow: 6,
            border: 4,
            borderColor: 'rgb(14,44,51)',
            '& .MuiDataGrid-cell:hover': {
              color: 'primary.main',
            },
          }} rows={filterresult} columns={columns} getRowId={(row) => row.id}  />
              
          </div>            
        </Box>
      </Box>           
    </div>
                      )
}

export default NotificationRead
