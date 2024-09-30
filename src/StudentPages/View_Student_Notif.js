import {React,useState,useEffect} from 'react'
import {useParams} from  'react-router-dom'
import {useNavigate} from 'react-router'
import axios from 'axios'
import Student_Dashboard from './Student_Dashboard'
import Navbarpage from '../Adminpage/Course/Navbarpage'
import Box from '@mui/material/Box';
import { Input } from 'semantic-ui-react'
// import Pagination from 'react-paginate';






import TablePagination from "@mui/material/TablePagination";

import Card from "@mui/material/Card";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
function View_Student_Notif( hideAgeColumn) {
                    const[data,setData]=useState([]);
                    const[search,setSearch]=useState("");
                    const [open, setOpen] = useState(false);
                    const [selectedRow, setSelectedRow] = useState(null);
                    const navigate=useNavigate()
                 
                    const [page, setPage] = useState(0);
                    const [rowsPerPage, setRowsPerPage] = useState(10);
                    useEffect(()=>{
                      
                                        axios.get("http://localhost:8000/adminapp/student_notification/")
                                         .then(response => {
                                                            setData(response.data);
                                                          
                                                            })
                                                                 
                                        },[])  
                                        const handleChangePage = (event, newPage) => {
                                          setPage(newPage);
                                        };
                                      
                                        const handleChangeRowsPerPage = (event) => {
                                          setRowsPerPage(+event.target.value);
                                          setPage(0);
                                        };               
                    function deleteRow(rowid){
                                        setOpen(true);
                                        axios
                                        
                                                .put(`http://localhost:8000/adminapp/update_student_notification/${rowid.id}`,{

                                                   'registerno':rowid.registerno,
                                                   'status' :"Viewed"        
                                                })
                                                .then(() => {
                                                            window.location.reload()
                                                            
                                                          });
                                        
                                        } 
                      
                    const createpage=()=>navigate("/addresult")  
                  
                    
                    const handleClickOpen = (row) => {
                      setSelectedRow(row);
                      setOpen(true);
                    
                      
                    };
                  
                    const handleClose = (row) => {
                      setOpen(false);
                      setSelectedRow(null);
                      deleteRow(row)
                    
                    };

                  
                                    
  return (
            <div>
                <Box sx={{ display: 'flex' }}>
                                                    
                    <Student_Dashboard/>
                      <Box component="main2" sx={{ flexGrow: 4, p: 1 }}>
                        <Navbarpage/>
                          <center>
                        <div className="search-box">
                        <input
                          type="date"
                        
                          onChange={(e) => setSearch(e.target.value)}
                          placeholder="Search..."
                          className="search-input"
                        />
                      </div>
                </center> 
    <button class="btn btn-primary" onClick={createpage}>Create</button>
                                                     
      {data ? (
        // <Card sx={{ minWidth: 900, m: 8 }}>
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                  <TableCell ><b>ID</b></TableCell>
                    <TableCell><b>Register Number</b></TableCell>
                    <TableCell><b>Name</b></TableCell>
                    <TableCell><b>Course</b></TableCell>
                    <TableCell><b>Date</b></TableCell>
                    {!hideAgeColumn && 
                    <TableCell><b>Message</b></TableCell>}
                    <TableCell><b>Status</b></TableCell>
                    <TableCell><b>Action</b></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .filter((item)=>{
                      return search.toLowerCase () ===""?  item 
                      : item.date.toLowerCase().includes(search)  ;     
               })
                    .map((row) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.code}
                        >
                          <TableCell>{row.id}</TableCell>
                          <TableCell>{row.registerno}</TableCell>
                          <TableCell>{row.name}</TableCell>
                          <TableCell>{row.course}</TableCell>
                          <TableCell>{row.date}</TableCell>
                          {!hideAgeColumn &&
                          <TableCell >{row.message}</TableCell>}              
                          <TableCell >{row.status}</TableCell>
                          <TableCell>
                                    {row.status =="Sended" ?   <Button variant="outlined" id="notificationbutton" onClick={() => handleClickOpen(row)}>
                                    New Notification
                                    </Button> :  <Button variant="outlined" onClick={() => handleClickOpen(row)}>
                                    View Notification
                                    </Button>}
                                    <Dialog open={open} onClick={() => handleClose(row)}>
        <DialogTitle>Notification For You</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {selectedRow ? `${selectedRow.message},` : ''}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose(row)} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
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

export default View_Student_Notif
