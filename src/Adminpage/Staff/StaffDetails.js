import {React,useState,useEffect} from 'react'
import axios from 'axios'
import { Card, Input } from 'semantic-ui-react'
import Admin_Dashboard from '../Admin_Dashboard';
import Navbarpage from '../Course/Navbarpage';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router";
import { DataGrid } from '@mui/x-data-grid';
function StaffDetails() {
const[data,setData]=useState([]);
const[search,setSearch]=useState("");
const navigate=useNavigate()

const columns = [
  { field: 'id', headerName: <b>ID</b>,   headerClassName: 'super-app-theme--header', width: 190},
  { field: 'staff_name', headerName:<b>Staff Name</b> ,    headerClassName: 'super-app-theme--header', width: 230 },
  { field: 'address', headerName:<b>Address</b> ,    headerClassName: 'super-app-theme--header', width: 230 },
  { field: 'age', headerName:<b>Age</b> ,    headerClassName: 'super-app-theme--header',width: 210 },
  { field: 'qualification', headerName:<b>Qualification</b> ,  headerClassName: 'super-app-theme--header', width: 210 },
  { field: 'phone', headerName:<b>Phone</b> , headerClassName: 'super-app-theme--header',width: 210 },
  { field: 'action', headerName:<b>Actions</b> , headerClassName: 'super-app-theme--header', width: 210 ,
    renderCell: (params) => {
                                             
      return <div>
              <a class="btn btn-success" href={`/updatestaff/${params.row.id}/`}>Edit</a> &nbsp;&nbsp;&nbsp;<button class ="btn btn-danger" onClick={() => deleteRow(params.row.id)}>Delete</button>
            </div>
    } 
  },
]
useEffect(()=>{
  
                    axios.get("http://localhost:8000/adminapp/staffdetail/")
                    .then(response => {
                    setData(response.data);
                    })
                         
},[])
function deleteRow(rowid){

                    axios

        .delete(`http://localhost:8000/adminapp/deletestaff/${rowid}`)
        .then(() => {
                    window.location.reload()
                  });

}
const createpage=()=>navigate("/addstaff")

  return (
    <div style={{
      background: "linear-gradient(90deg, rgba(35,40,82,1) 25%, rgba(26,34,122,1) 55%, rgba(27,44,94,1) 89%)",
      
    }} 
>
       <Box sx={{ display: 'flex' }}>
                   
                   <Admin_Dashboard/>
                   
                   
                   <Box component="main2" sx={{ flexGrow: 4, p: 1 }}>
                
                   <Navbarpage/>
                   
                 
                   <div>
                   <button class="btn btn-primary" onClick={createpage}>Create</button>
                   </div>
                   
                   <br></br>
                    

                    <div style={{ height: 1060, width: '100%' }}>
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
                }} rows={data} columns={columns} getRowId={(row) => row.id} 
               
                 />
                     </div>
        </Box>
        </Box>           
    </div>
  )
}

export default StaffDetails
