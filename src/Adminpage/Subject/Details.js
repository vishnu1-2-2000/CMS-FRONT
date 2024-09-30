import {React,useState,useEffect} from 'react'
import axios from 'axios'
import { Card, Input } from 'semantic-ui-react'
import Admin_Dashboard from '../Admin_Dashboard';
import Navbarpage from '../Course/Navbarpage';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router";
import TablePagination from "@mui/material/TablePagination";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
function Details() {
const[data,setData]=useState([]);
const[search,setSearch]=useState("");
const navigate=useNavigate()

const [page, setPage] = useState(0);
const [rowsPerPage, setRowsPerPage] = useState(10);

useEffect(()=>{
  
                    axios.get("http://localhost:8000/adminapp/subjectdetail/")
                     .then(response => {
                                        setData(response.data);
                                        // alert(data)
                                        })
                                             
                    },[])  
                    
function deleteRow(rowid){

                    axios
                    
                            .delete(`http://localhost:8000/adminapp/deletesubject/${rowid}`)
                            .then(() => {
                                        window.location.reload()
                                      });
                    
                    }   
const createpage=()=>navigate("/addsubject")

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
                         placeholder="Enter Subject Name For Search..."
                         className="search-input"
                        />
                      </div>
                </center> 
                <div>
                <button class="btn btn-primary" onClick={createpage}>Create</button>
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
                    <TableCell style={{background:"#29054f",color:"white"}}><b>Course</b></TableCell>
                    <TableCell style={{background:"#29054f",color:"white"}}><b>Subject</b></TableCell>
                    <TableCell style={{background:"#29054f",color:"white"}}><b>Staff</b></TableCell>
                    <TableCell style={{background:"#29054f",color:"white"}}><b>Date&Time</b></TableCell>
                 
                    
                    <TableCell style={{background:"#29054f",color:"white"}}><b>Action</b></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .filter((item)=>{
                      return search.toLowerCase () ===""?  item 
                      : item.subject.toLowerCase().includes(search)  ;     
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
                          <TableCell style={{color:"white"}}>{row.course}</TableCell>
                          <TableCell style={{color:"white"}}>{row.subject}</TableCell>
                          <TableCell style={{color:"white"}}>{row.staff}</TableCell>
                          <TableCell style={{color:"white"}}>{row.time}</TableCell>
                       
                         
                          <TableCell style={{color:"white"}}>
                          <a class ="btn btn-primary" href={`/updatesubject/${row.id}/`}>Edit</a>
                          &nbsp;  <button class ="btn btn-danger" onClick={() => deleteRow(row.id)}>Delete</button>
                                    
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

export default Details
