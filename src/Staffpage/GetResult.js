import {React,useState,useEffect} from 'react'
import axios from 'axios'
import { Card, Input } from 'semantic-ui-react'
import Navbarpage from '../Adminpage/Course/Navbarpage'
import Staff_Dashboard from './Staff_Dashboard';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router";
import TablePagination from "@mui/material/TablePagination";
function GetResult() {
    const[data,setData]=useState([]);
    const[search,setSearch]=useState("");
    const navigate=useNavigate()
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
      useEffect(()=>{
                      
                    axios.get("http://localhost:8000/staffapp/addresult/")
                        .then(response => {
                                          setData(response.data);
                                                          
                                          })
                                   
                              },[])  
                                        
  function deleteRow(rowid){
              axios
              .delete(`http://localhost:8000/staffapp/delete_result/${rowid}`)
                                                .then(() => {
                                                            window.location.reload()
                                                          });
                                         }   
  const createpage=()=>navigate("/addresult")   
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
                  <Staff_Dashboard/>
                    <Box component="main2" sx={{ flexGrow: 4, p: 1 }}>
                      <Navbarpage/>
                      
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
                  <button class="btn btn-primary" onClick={createpage}>Add New Result</button>
                  <div>
                    <br/>
                  <table  style={{ border: '3px solid black', width: '98%' }}>
                      <thead>
                        <tr style={{border:"1px solid black"}}>
                          <th style={{ backgroundColor: '#f2f2f2',width:"4%"  }}>ID</th>
                          <th style={{ backgroundColor: '#f2f2f2' }}>Register Number</th>
                          <th style={{ backgroundColor: '#f2f2f2' }}>Name</th>
                          <th style={{ backgroundColor: '#f2f2f2' }}>Course</th>
                          <th style={{ backgroundColor: '#f2f2f2' }}>Subject</th>
                          <th style={{ backgroundColor: '#f2f2f2' }}>Mark</th>
                          <th style={{ backgroundColor: '#f2f2f2' }}>Grade</th>
                          <th style={{ backgroundColor: '#f2f2f2' }}>Date</th>
                          <th style={{ backgroundColor: '#f2f2f2' }}>Status</th>
                    
                          <th style={{ backgroundColor: '#f2f2f2' }}>Actions</th>
                      </tr>
                </thead>
            <tbody>
                {data  .filter((item)=>{
                                          return search.toLowerCase () ===""?  item 
                                                : item.name.toLowerCase().includes(search)  ;     
                                      })
                                      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                      .map(item => (
                                        <tr key={item.id} style={{border:"2px solid black"}}>
                                            <td style={{ padding: '8px' }}>{item.id}</td>
                                            <td style={{ padding: '4px' }}>{item.regno}</td>
                                            <td style={{ padding: '8px' }}>{item.name}</td>
                                            <td style={{ padding: '8px' }}>{item.course}</td>
                                            <td style={{ padding: '8px' }}>{item.subject}</td>
                                            <td style={{ padding: '8px' }}>{item.mark}</td>
                                            <td style={{ padding: '8px' }}>{item.grade}</td>
                                            <td style={{ padding: '8px' }}>{item.date}</td>
                                    { item.status =="Pass"?<td style={{ padding: '8px',color:"green" }}>{item.status}</td>:<td style={{ padding: '8px',color:"red" }}>{item.status}</td> 
                                        
                                    }
                                           
                                                           
                                            <td style={{ padding: '8px' }}><a class ="btn btn-primary" href={`/updateresult/${item.id}/`}>Edit</a>
                                                          &nbsp;  <button class ="btn btn-danger" onClick={() => deleteRow(item.id)}>Delete</button></td>
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

                  </div>
                   
      </Box>
    </Box>           
  </div>
  )
}

export default GetResult
