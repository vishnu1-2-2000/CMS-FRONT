import {React,useState,useEffect} from 'react'
import {useNavigate} from 'react-router'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import Navbarpage from '../Adminpage/Course/Navbarpage'
import Staff_Dashboard from './Staff_Dashboard'
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
// import { PieChart } from 'react-minimal-pie-chart';
import { Card, CardContent, Typography } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { experimentalStyled as styled } from '@mui/material/styles';
import { PieChart } from '@mui/x-charts/PieChart';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';

function Staff_Chart() {
                    const[data,setData]= useState([])   
                    const[subject_data,setSubject_Data]= useState([])   
                    const[attendanc_data,setAttendanceData]=useState([])          
                     const[pass,setPass]=useState("")
                     const[fail,setFail]=useState("")
                     const[present,setPresent]=useState("") 
                     const[absent,setAbsent]=useState("")
                     const [chartData, setChartData] = useState({});
                
                     var loggedInUsername=window.localStorage.getItem('loggedInUsername')
                     var loggedInPassword=window.localStorage.getItem('loggedInUserPassword')
                     var loggedInUserrole=window.localStorage.getItem('loggedInUserrole')
                
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
                
function getStaff(nameprops){
                    axios.get("http://localhost:8000/adminapp/staffdetail/")
                                        .then((res)=>{
                                             res.data.map(option=>{
                                     
                                                   if(option.staff_uname==loggedInUsername){
                                                         window.localStorage.setItem('Name', option.staff_name);
                                                   }    
                                             })            
                                        })                 
                                     }
var NAME=window.localStorage.getItem('Name')
                    function getStaffLeaveCount(){
                                        axios
                                        .get("http://localhost:8000/staffapp/staff_leave/")
                                        .then((res)=>{
                                                        
                                                                   
                                                          
                                                        setData(res.data)
                                
                                                    })
                                 }  
function getStaff_Subject_Count(){
                                        axios
                                        .get("http://localhost:8000/adminapp/subjectdetail/")
                                        .then((res)=>{
                                                        
                                                                   
                                                          
                                                        setSubject_Data(res.data)
                                
                                                    })
                                 }  

                                 useEffect(()=>{
                                        getStaff() 
                                        getStaffLeaveCount()
                                        getStaff_Subject_Count()
                                       
                                                 
                                   },[])                                
const filter_applyleave=data.filter(item=>
                    item.name == NAME  
                    )  
const filtetLeave_accept_count=data.filter(item=>
                    item.name ==NAME & item. status =="Approved"
                    ) 
const filtetLeave_reject_count=data.filter(item=>
                                        item.name ==NAME & item. status=="Rejected"

                                        )       
const filtet_subject_count=subject_data.filter(item=>
                    item.staff ==NAME 
                                                            
                    )    
                    
const data1 = [
                    { label: 'Approved Leave', value: filtetLeave_accept_count.length,color: '#DAA520' },
                    { label: 'Rejected Leave', value: filtetLeave_reject_count.length,color: '#8B0000' },
                   
                    ];                   
  return (
   <>
   <Box sx={{ display: 'flex' }}>
                                                                                        
                    <Staff_Dashboard/>
                                                                                        
                                                                                        
                    <Box component="main2" sx={{ flexGrow: 4, p: 1 }}>
                                                                                     
                    <Navbarpage/>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4}>
        <Grid size="grow">
          <Item>
          <div class="card" style={{backgroundColor:"#3CB371"}}>

  <div class="card-body">
  <h5 class="card-title">Total Leave Apply</h5>
   <h3> <b class="card-text">{filter_applyleave.length}</b></h3>
   
  </div>
</div>
          </Item>
        </Grid>
        <Grid size="grow">
          <Item>
          <div class="card" style={{backgroundColor:"#20B2AA"}}>

<div class="card-body">
<h5 class="card-title">Total Approved Leave</h5>
<h3> <b class="card-text">{filtetLeave_accept_count.length}</b></h3>
 
</div>
</div> 

          </Item>
        </Grid>
        <Grid size="grow">
          <Item>
          <div class="card" style={{backgroundColor:"#6A5ACD"}}>

<div class="card-body">
<h5 class="card-title">Total Rejected Leave</h5>
  <h3><b class="card-text">{filtetLeave_reject_count.length}</b></h3>
 
</div>
</div>
          </Item>
        </Grid>
        <Grid size="grow">
          <Item>
          <div class="card" style={{backgroundColor:"#FF69B4"}}>

<div class="card-body">
<h5 class="card-title">Total Subject Taken</h5>
 <h3> <b class="card-text">{filtet_subject_count.length}</b></h3>
 
</div>
</div>
          </Item>
        </Grid>


      </Grid>
    </Box>

    <br></br> <br></br> <br></br> <br></br> <br></br> 

    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
      <Grid size={7}>
      
          <Item>
        
          <div  id="pie">
          <div class="card" style={{backgroundColor:""}}>

<div class="card-body">
<h5 class="card-title">Staff Panel- Leave Details {NAME}  Pie Chart</h5>
<PieChart
      series={[
                    {
                                        outerRadius: 140,
                                        data: data1,
                                      },
                    
        
      ]}
      height={300}
      slotProps={{
        legend: { hidden: true },
      }}
    />
</div>
</div>
               
    
     </div>
  
          </Item>
        </Grid>
    
        <Grid size={5}>
        
          <Item>
         
     <div  id="bar">
     <div class="card" style={{backgroundColor:"#FFB6C1"}}>

<div class="card-body">
<h5 class="card-title">Student Panel-{NAME} Attendance Per Subjects</h5>

 
</div>
</div>
         
    
     </div>
          </Item>
        </Grid>
        
      </Grid>
    </Box>
    </Box>
    </Box>
   </>
  )
}

export default Staff_Chart
