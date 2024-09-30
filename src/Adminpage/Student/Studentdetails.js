import {React,useState,useEffect} from 'react'
import {useNavigate} from  'react-router'
import axios from 'axios'
import Admin_Dashboard from '../Admin_Dashboard'
import Navbarpage from '../Course/Navbarpage'
import Box from '@mui/material/Box';
import {useParams} from 'react-router-dom'
import TablePagination from "@mui/material/TablePagination";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
function Studentdetails() {
 const[data,setData]=useState([])
 const[search,setSearch]=useState("")  
 const navigate=useNavigate()
 const{id}=useParams()

 const [page, setPage] = useState(0);
 const [rowsPerPage, setRowsPerPage] = useState(10);

     function getstuentdata(){
                    axios.get("http://localhost:8000/adminapp/studentdetail/")
                    .then((resp)=>{
                        setData(resp.data)                
                    })
     } 

     function deletestudent(rowid){
      axios.delete(`http://localhost:8000/adminapp/deletestudent/${rowid}`)
     .then(() => {
      window.location.reload()
    });
  }
     useEffect(()=>{
                    getstuentdata()
     },[])  

   function navigatetocreatepage(){
    navigate("/addstudent/create/create")
   }  
   
   const handleChangePage = (event, newPage) => {
    setPage(newPage);
};
const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
};     

  return (
    <div>
                     <Box sx={{ display: 'flex' }}>
                   
                   <Admin_Dashboard/>
                   
                   
                   <Box component="main2" sx={{ flexGrow: 4, p: 1 }}>
                
                   <Navbarpage/>
                  
                   <center>
                        <div className="search-box">
                        <input
                         onChange={(e) => setSearch(e.target.value)}
                         placeholder="Enter Name For Search..."
                         className="search-input"
                        />
                      </div>
                </center> 
                <div>
                <button class="btn btn-primary" onClick={navigatetocreatepage}>Create</button>
                </div>
                
                 <br></br>                                    
      {data ? (
        // <Card sx={{ minWidth: 900, m: 8 }}>
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer sx={{
                               
                                background:"linear-gradient(90deg, rgba(14,16,33,1) 25%, rgba(3,8,41,1) 55%, rgba(0,1,1,1) 89%)",
                                maxHeight: 480
                }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead  >
                  <TableRow >
                  <TableCell style={{background:"#29054f",color:"white"}}  ><b>ID</b></TableCell>
                    <TableCell style={{background:"#29054f",color:"white"}}><b>Register Number</b></TableCell>
                    <TableCell style={{background:"#29054f",color:"white"}}><b>Student Name</b></TableCell>
                    <TableCell style={{background:"#29054f",color:"white"}}><b>Address</b></TableCell>
                    <TableCell style={{background:"#29054f",color:"white"}}><b>Age</b></TableCell>
                 
                    <TableCell style={{background:"#29054f",color:"white"}}><b>Qualification</b></TableCell>
                    <TableCell style={{background:"#29054f",color:"white"}}><b>Grade</b></TableCell>
                    <TableCell style={{background:"#29054f",color:"white"}}><b>Course</b></TableCell>
                    <TableCell style={{background:"#29054f",color:"white"}}><b>Phone</b></TableCell>
                    <TableCell style={{background:"#29054f",color:"white"}}><b>Action</b></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .filter((item)=>{
                      return search.toLowerCase () ===""?  item 
                      : item.student_name.toLowerCase().includes(search)  ;     
               })
                    .map((row) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.code}
                        >
                          <TableCell style={{color:"white"}}>{row.id}</TableCell>
                          <TableCell style={{color:"white"}}>{row.registerno}</TableCell>
                          <TableCell style={{color:"white"}}>{row.student_name}</TableCell>
                          <TableCell style={{color:"white"}}>{row.address}</TableCell>
                          <TableCell style={{color:"white"}}>{row.age}</TableCell>
                       
                          <TableCell style={{color:"white"}} >{row.qualification}</TableCell>              
                          <TableCell style={{color:"white"}} >{row.grade}</TableCell>
                          <TableCell style={{color:"white"}} >{row.course}</TableCell>
                          <TableCell style={{color:"white"}} >{row.phone}</TableCell>
                          <TableCell style={{color:"white"}}>
                          <a class="btn btn-primary" href ={`/addstudent/edit/${row.id}`}>Edit</a>&nbsp;&nbsp;&nbsp;&nbsp;
                  
                          <button class="btn btn-danger" onClick={()=>deletestudent(row.id)}>Delete</button>
                                    
              </TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              style={{background:"#29054f",color:"white"}}
            />
           </Paper>
        // </Card>
      ) : (
        <h3>Loading...</h3>
      )}
                    </Box>
                    </Box>
    </div>
  )
}

export default Studentdetails
