import {React,useState,useEffect} from 'react'
import axios from 'axios'
import { Card, Input } from 'semantic-ui-react'
import Navbarpage from '../Adminpage/Course/Navbarpage'
import Staff_Dashboard from './Staff_Dashboard';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router";
import TablePagination from "@mui/material/TablePagination";
function LeaveGet() {
        const[data,setData]=useState([]);
        const[search,setSearch]=useState("");
        const navigate=useNavigate()
        const [page, setPage] = useState(0);
        const [rowsPerPage, setRowsPerPage] = useState(5); 
        
  var loggedInUsername=window.localStorage.getItem('loggedInUsername')
  var loggedInPassword=window.localStorage.getItem('loggedInUserPassword')
  var loggedInUserrole=window.localStorage.getItem('loggedInUserrole')

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
  var Name=window.localStorage.getItem("NAME")      

        useEffect(()=>{
                      
                          axios.get("http://localhost:8000/staffapp/staff_leave/")
                                .then(response => {
                                                  setData(response.data);
                                                          
                                                })
                                                getStaffdetails()
                                                                 
                                        },[])  
                                        
                    function deleteRow(rowid){
                    
                                        axios
                                        
                                                .delete(`http://localhost:8000/staffapp/delete_staff_leave/${rowid}`)
                                                .then(() => {
                                                            window.location.reload()
                                                          });
                                        
                                        }   
                    const createpage=()=>navigate("/applystaff_leave")  
                    
                    const handleChangePage = (event, newPage) => {
                      setPage(newPage);
                  };
    const handleChangeRowsPerPage = (event) => {
                      setRowsPerPage(+event.target.value);
                      setPage(0);
    }
    const filter_leave=data.filter(item=>item. name == Name)


                    return (
                                        <div>
                                        <Box sx={{ display: 'flex' }}>
                                                    
                                                    <Staff_Dashboard/>
                                                    
                                                    
                                                    <Box component="main2" sx={{ flexGrow: 4, p: 1 }}>
                                                 
                                                    <Navbarpage/>
                                                      <br/> 
                                                   <center>
                                                   <div className="search-box">
                        
                        <input
                          type="text"
                        
                          onChange={(e) => setSearch(e.target.value)}
                          placeholder="Enter Name For Search..."
                          className="search-input"
                        />
                      </div>
                             </center> 
                                                    
                              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  <button class="btn btn-primary" onClick={createpage}>Create</button>
                              <br></br>
                                <div>
                                  <center>

                                                      <table  style={{ border: '3px solid black', width: '90%' }}>
                                                     
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
                                                    {filter_leave  .filter((item)=>{
                                                                 return search.toLowerCase () ===""?  item 
                                                                 : item.subject.toLowerCase().includes(search)  ;     
                                                          })
                                                          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
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
                                                              {item.status =="sended" ?  <button class ="btn btn-danger" onClick={() => deleteRow(item.id)}>Delete</button> : <button class ="btn btn-danger" disabled={true} onClick={() => deleteRow(item.id)}>Delete</button> }            
                                                             {/* &nbsp;  <button class ="btn btn-danger" onClick={() => deleteRow(item.id)}>Delete</button> */}
                                                             </td>
                                                           </tr>
                                                         ))}

<TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              // component="div"
              count={data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
                                                       </tbody>
                                                     </table>
                                                     </center>
                                                      </div>
                                     
                                         </Box>
                                         </Box>           
                                     </div>
                      )
}

export default LeaveGet
