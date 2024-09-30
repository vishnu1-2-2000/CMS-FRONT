import {React,useState,useEffect} from 'react'
import {useNavigate} from 'react-router'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import Navbarpage from '../Adminpage/Course/Navbarpage'
import Student_Dashboard from './Student_Dashboard';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { PieChart } from 'react-minimal-pie-chart';
import { Card, CardContent, Typography } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { experimentalStyled as styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';


function Student_Chart() {
    const[data,setData]= useState([])   
    const[attendanc_data,setAttendanceData]=useState([])          
     const[pass,setPass]=useState("")
     const[fail,setFail]=useState("")
     const[present,setPresent]=useState("") 
     const[absent,setAbsent]=useState("")
     const [chartData, setChartData] = useState({});

     var loggedInUsername=window.localStorage.getItem('loggedInUsername')
     var loggedInPassword=window.localStorage.getItem('loggedInUserPassword')
     var loggedInUserrole=window.localStorage.getItem('loggedInUserrole')

function getStudent(nameprops){
   axios.get("http://localhost:8000/adminapp/studentdetail/")
   .then((res)=>{
        res.data.map(option=>{

              if(option.student_uname==loggedInUsername){
                    window.localStorage.setItem('Name', option.student_name);
                    
              }    
        })            
   })                 
}
var NAME=window.localStorage.getItem('Name')
     function getResultCount(){
                    axios
                    .get("http://localhost:8000/staffapp/addresult/")
                    .then((res)=>{
                        
                                   
                          
                        setData(res.data)

                    })
 }

 function getAttendance(nameprops){

 axios.get("http://localhost:8000/staffapp/attendance_view/")
           .then((res)=>{
                res.data.map(data =>{
                 
                                       
                           setAttendanceData(res.data) 
                            
                  

                } )   
           })         
 }

 

  useEffect(()=>{
                    getStudent() 
                    getResultCount()
                    getAttendance()
                             
               },[])

const filterresult=data.filter(item=>
                    item.name == NAME & item.mark>40 
                    )  
const filtetfail_count=data.filter(item=>
                    item.name ==NAME & item.mark<40
) 
const filtetfail_present_count=attendanc_data.filter(item=>
     item.name ==NAME &  item.status=="Present"
     
)
const filtetfail_absent_count=attendanc_data.filter(item=>
     item.name ==NAME &   item.status=="Absent"
) 

const malayalam_attendance_presentcount=attendanc_data.filter(item=>
                    item.name ==NAME & item.subject =="Malayalam" & item.status=="Present"
                    
)
const malayalam_attendance_absentcount=attendanc_data.filter(item=>
                    item.name ==NAME &  item.subject =="Malayalam" & item.status=="Absent"
) 
const english_attendance_presentcount=attendanc_data.filter(item=>
     item.name ==NAME & item.subject =="English" & item.status=="Present"
     
)
const english_attendance_absentcount=attendanc_data.filter(item=>
     item.name ==NAME &  item.subject =="English" & item.status=="Absent"
) 

const physics_attendance_presentcount=attendanc_data.filter(item=>
     item.name ==NAME & item.subject =="PHYSICS" & item.status=="Present"
     
)
const physics_attendance_absentcount=attendanc_data.filter(item=>
     item.name ==NAME &  item.subject =="PHYSICS" & item.status=="Absent"
) 

const maths_attendance_presentcount=attendanc_data.filter(item=>
     item.name ==NAME & item.subject =="MATHS" & item.status=="Present"
     
)
const maths_attendance_absentcount=attendanc_data.filter(item=>
     item.name ==NAME &  item.subject =="MATHS" & item.status=="Absent"
) 

const Chemistry_attendance_presentcount=attendanc_data.filter(item=>
     item.name ==NAME & item.subject =="CHEMISTRY" & item.status=="Present"
     
)
const Chemistry_attendance_absentcount=attendanc_data.filter(item=>
     item.name ==NAME &  item.subject =="CHEMISTRY" & item.status=="Absent"
) 

const history_attendance_presentcount=attendanc_data.filter(item=>
     item.name ==NAME & item.subject =="HISTORY" & item.status=="Present"
     
)
const history_attendance_absentcount=attendanc_data.filter(item=>
     item.name ==NAME &  item.subject =="HISTORY" & item.status=="Absent"
) 

const accountcy_attendance_presentcount=attendanc_data.filter(item=>
     item.name ==NAME & item.subject =="ACCOUNTANCY" & item.status=="Present"
     
)
const accountcy_attendance_absentcount=attendanc_data.filter(item=>
     item.name ==NAME &  item.subject =="ACCOUNTANCY" & item.status=="Absent"
) 


var passfield=
{/* <input type="textbox" value={filterresult.length}></input>  */}

var failfield=<input type="textbox" value={filtetfail_count.length}></input> 
var presentfield=<input type="textbox" value={filtetfail_present_count.length}></input> 
var absentfield=<input type="textbox" value={filtetfail_absent_count.length}></input> 
// var malfield=<input type="textbox" value={filtetf_malayalam_attendance_presentcount.length}></input> 



const datapie = [
                      { title: 'Pass Subjects', value: filterresult.length, color: '#008000' },
                      { title: 'Failed Subjects', value: filtetfail_count.length, color: '#FF0000' },
                     
                    ];


const barchart_data = [
                         { name: 'MALAYALAM', Present: malayalam_attendance_presentcount.length, Absent:malayalam_attendance_absentcount.length,  },
                         { name: 'ENGLISH', Present: english_attendance_presentcount.length, Absent: english_attendance_absentcount.length,  },
                         { name: 'MATHS', Present: maths_attendance_presentcount.length, Absent: maths_attendance_absentcount.length,  },
                         { name: 'PHYSICS', Present: physics_attendance_presentcount.length, Absent: physics_attendance_absentcount.length,  },
                         { name: 'CHEMISTRY', Present: Chemistry_attendance_presentcount.length, Absent:Chemistry_attendance_absentcount.length,  },
                         { name: 'HISTORY', Present: history_attendance_presentcount.length, Absent: history_attendance_absentcount.length,  },
                         { name: 'ACCOUNTANCY', Present: accountcy_attendance_presentcount.length, Absent: accountcy_attendance_absentcount.length,  },
                       ];                 
const Item = styled(Paper)(({ theme }) => ({
                         backgroundColor: '#fff',
                         ...theme.typography.body2,
                         padding: theme.spacing(2),
                         textAlign: 'center',
                         color: theme.palette.text.secondary,
                         ...theme.applyStyles('dark', {
                           backgroundColor: '#1A2027',
                         }),
                       }));
 
  return (
     <>
         <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4}>
        <Grid size="grow">
          <Item>
          <div class="card" style={{backgroundColor:"#3CB371"}}>

  <div class="card-body">
  <h5 class="card-title">Total Pass Subjects</h5>
   <h3> <b class="card-text">{filterresult.length}</b></h3>
   
  </div>
</div>
          </Item>
        </Grid>
        <Grid size="grow">
          <Item>
          <div class="card" style={{backgroundColor:"#20B2AA"}}>

<div class="card-body">
<h5 class="card-title">Total Failed Subject</h5>
<h3> <b class="card-text">{filtetfail_count.length}</b></h3>
 
</div>
</div> 

          </Item>
        </Grid>
        <Grid size="grow">
          <Item>
          <div class="card" style={{backgroundColor:"#6A5ACD"}}>

<div class="card-body">
<h5 class="card-title">Total Attendance Present</h5>
  <h3><b class="card-text">{filtetfail_present_count.length}</b></h3>
 
</div>
</div>
          </Item>
        </Grid>
        <Grid size="grow">
          <Item>
          <div class="card" style={{backgroundColor:"#FF69B4"}}>

<div class="card-body">
<h5 class="card-title">Total Attendance Absent</h5>
 <h3> <b class="card-text">{filtetfail_absent_count.length}</b></h3>
 
</div>
</div>
          </Item>
        </Grid>


      </Grid>
    </Box>

    <br></br> <br></br> <br></br> <br></br> <br></br> 

    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
      <Grid size={6}>
      
          <Item>
        
          <div  id="pie">
          <div class="card" style={{backgroundColor:"#48D1CC"}}>

<div class="card-body">
<h5 class="card-title">Student Panel-{NAME} Result Pie Chart</h5>
<PieChart 
      data={datapie}
      label={({ dataEntry }) => dataEntry.title}
      labelStyle={{
        fill: 'white',
        fontSize: '4px',
        fontFamily: 'Helvetica Neue, sans-serif',
         textShadow: '1px 1px 4px #000',
       
      }}
      labelPosition={25}
    />
</div>
</div>
               
    
     </div>
  
          </Item>
        </Grid>
    
        <Grid size={6}>
        
          <Item>
         
     <div  id="bar">
     <div class="card" style={{backgroundColor:"#FFB6C1"}}>

<div class="card-body">
<h5 class="card-title">Student Panel-{NAME} Attendance Per Subjects</h5>
<BarChart width={698} height={350} data={barchart_data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis domain={[0, 100]} />
   
    <Tooltip />
    <Legend />
    <Bar dataKey="Present" fill="#191970" />
    <Bar dataKey="Absent" fill="#DC143C" />
  </BarChart>
 
</div>
</div>
         
    
     </div>
          </Item>
        </Grid>
        
      </Grid>
    </Box>
     </>  



                
  )
}

export default Student_Chart
