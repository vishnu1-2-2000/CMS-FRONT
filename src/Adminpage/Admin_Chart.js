import {React,useState,useEffect} from 'react'
import {useNavigate} from 'react-router'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import Navbarpage from '../Adminpage/Course/Navbarpage'
import Admin_Dashboard from './Admin_Dashboard'
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
// import { PieChart } from 'react-minimal-pie-chart';
import { Card, CardContent, Typography } from '@mui/material';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { experimentalStyled as styled } from '@mui/material/styles';
import { PieChart } from '@mui/x-charts/PieChart';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import { BarChart } from '@mui/x-charts/BarChart';
import { useMediaQuery } from 'react-responsive';

function Admin_Chart() {
                    const[data,setData]=useState([])
                    const[staff_data,setStaff_Data]= useState([])  
                    const[student_data,setStudent_Data]= useState([])   
                    const[subject_data,setSubject_Data]= useState([]) 
                    const[result,setResult]= useState([]) 
                    const[course,setCourse] =useState({}) 
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

function getAdmin(nameprops){
                    axios.get("http://localhost:8000/loginapp/signin/")
                    .then((res)=>{
                                        res.data.map(option=>{
                                                         
                                                            if(option.username==loggedInUsername){
                                                                             window.localStorage.setItem('Name', option.name);
                                                                       }    
                                                                 })            
                                                            })                 
                                                         }                               
var NAME=window.localStorage.getItem('Name')
function getStaffCount(){
                    axios
                    .get("http://localhost:8000/adminapp/staffdetail/")
                    .then((res)=>{
                                    
                                               
                                      
                                    setStaff_Data(res.data)
            
                                })
             } 
function getStudent_Count(){
                    axios
                    .get("http://localhost:8000/adminapp/studentdetail/")
                    .then((res)=>{
                                    
                                               
                                      
                                    setStudent_Data(res.data)
            
                                })
             } 

function getCourse_Count(){
                    axios
                    .get("http://localhost:8000/adminapp/coursedetail/")
                    .then((res)=>{
                                    
                                               
                                      
                                    setCourse(res.data)
            
                                })
             } 
             
  function getResult(){
              axios
              .get("http://localhost:8000/staffapp/addresult/")
              .then((res)=>{
                              
                                         
                                
                              setResult(res.data)
      
                          })
       }    
  function getSubject(){
        axios
        .get("http://localhost:8000/adminapp/subjectdetail/")
        .then((res)=>{
                        
                                   
                          
                        setSubject_Data(res.data)

                    })
 }                    
             
             
useEffect(()=>{
                    getStaffCount()
                   getStudent_Count()
                   getAdmin()
                   getCourse_Count()
                   getResult()
                   getSubject()
                   
                             
               },[]) 

  const count_maths=student_data.filter(item=>
                    item. course =="BSC MATHS"
                    )  
  const count_bcom=student_data.filter(item=>
                      item. course =="BCOM"
                      )  
  const count_mcom=student_data.filter(item=>
                        item. course =="MCOM"
                        )  
  const count_mscmaths=student_data.filter(item=>
                          item. course =="MSC MATHS"
                          )  
  const count_computer=student_data.filter(item=>
                            item. course =="BSC COMPUTER SCIENCE"
                            )  
  const count_mca=student_data.filter(item=>
                              item. course =="MCA"
                              )  
  const count_englisg=student_data.filter(item=>
                                item. course =="BSC ENGLISG"
                                )  
  const count_malayalam=student_data.filter(item=>
                                  item. course =="BA MALAYALAM"
                                  )  
  const count_history=student_data.filter(item=>
                                    item. course =="BA HISTORY"
                                    )  
  const count_physics=student_data.filter(item=>
                                      item. course =="BSC PHYSICS"
                                      )  
  const count_mamalayalam=student_data.filter(item=>
                                        item. course =="MA MALAYALAM"
                                        )  

  const filter_pass_bscmaths_result=result.filter(item=>item.status=="Pass" & item.course =="BSC MATHS") 
  const filter_fail_bscmaths_result=result.filter(item=>item.status=="Failed" & item.course =="BSC MATHS") 

  const filter_pass_MSCmaths_result=result.filter(item=>item.status=="Pass" & item.course =="MSC MATHS") 
  const filter_fail_MSCcmaths_result=result.filter(item=>item.status=="Failed" & item.course =="MSC MATHS") 

  const filter_pass_BSCCOMP_result=result.filter(item=>item.status=="Pass" & item.course =="BSC COMPUTER SCIENCE") 
  const filter_fail_BSCCOMP_result=result.filter(item=>item.status=="Failed" & item.course =="BSC COMPUTER SCIENCE") 

  const filter_pass_MCA_result=result.filter(item=>item.status=="Pass" & item.course =="MCA") 
  const filter_fail_MCA_result=result.filter(item=>item.status=="Failed" & item.course =="MCA") 

  const filter_pass_PHY_result=result.filter(item=>item.status=="Pass" & item.course =="BSC PHYSICS") 
  const filter_fail_PHY_result=result.filter(item=>item.status=="Failed" & item.course =="BSC PHYSICS") 

  const filter_pass_MAL_result=result.filter(item=>item.status=="Pass" & item.course =="MA MALAYALAM") 
  const filter_fail_MAL_result=result.filter(item=>item.status=="Failed" & item.course =="MA MALAYALAM") 

  const filter_pass_BAMALY_result=result.filter(item=>item.status=="Pass" & item.course =="BA MALAYALAM") 
  const filter_fail_MAMALY_result=result.filter(item=>item.status=="Failed" & item.course =="BA MALAYALAM") 

  const filter_pass_BCOM_result=result.filter(item=>item.status=="Pass" & item.course =="BCOM") 
  const filter_fail_BCOM_result=result.filter(item=>item.status=="Failed" & item.course =="BCOM") 

  const filter_pass_MCOM_result=result.filter(item=>item.status=="Pass" & item.course =="MCOM") 
  const filter_fail_MCOM_result=result.filter(item=>item.status=="Failed" & item.course =="MCOM") 

  const filter_pass_HISTORY_result=result.filter(item=>item.status=="Pass" & item.course =="BA HISTORY") 
  const filter_fail_HISTORY_result=result.filter(item=>item.status=="Failed" & item.course =="BA HISTORY") 

  const filter_pass_ENG_result=result.filter(item=>item.status=="Pass" & item.course =="BA ENGLISH") 
  const filter_fail_ENG_result=result.filter(item=>item.status=="Failed" & item.course =="BA ENGLISH") 

  
  
  const piedata1 = [
                { label: 'Staff', value: staff_data.length ,color:"#00BFFF"},
                { label: 'Student', value: student_data.length,color:"#4682B4" },
                
              ];  
              
  const uData = [count_bcom.length, count_maths.length, count_computer.length,count_physics.length, 
   count_malayalam.length, count_englisg.length, count_history.length,count_mamalayalam.length,count_mcom.length,count_mca.length,count_mscmaths.length];
 
  const xLabels = [
                'BCOM',
                'BSC MATHS',
                'BSC COMPUTER',
                'BSC PHY',
                'BA MAL',
                'BA ENG',
                'BA HIST',
                'MA MAL',
                'MCOM',
                'MCA',
                'MSC MATHS',
              ];  
              
  const pass_piedata = [

                { label: 'BCOM', value: filter_fail_BCOM_result.length,color:"#0000FF" },
                { label: 'BSC COMPUTER SCIENCE', value: filter_fail_BSCCOMP_result.length,color:"#FFFF00" },
                { label: 'BA ENGLISH', value: filter_fail_ENG_result.length,color:"#00FFFF" },
                { label: 'BA HISTORY', value: filter_fail_HISTORY_result.length,color:"#C0C0C0" },
                { label: 'BA MALAYALAM', value: filter_fail_MAL_result.length,color:"#800000" },
                { label: 'MA MALAYALAM', value: filter_fail_MAMALY_result.length,color:"#DC143C" },
                { label: 'MCA', value: filter_fail_MCA_result.length,color:"#FFD700" },
                { label: 'MCOM', value: filter_fail_MCOM_result.length,color:"#00CED1" },
                { label: 'MSC MATHS', value: filter_fail_MSCcmaths_result.length,color:"#F5DEB3	" },
                { label: 'BSC PHYSICS', value: filter_fail_PHY_result.length,color:"#BC8F8F	" },
                { label: 'BSC MATHS', value: filter_fail_bscmaths_result.length,color:"#000000" },
                
              ]

  const fail_pie_chart=[

                { label: 'BCOM', value: filter_pass_BAMALY_result.length,color:"#98FB98" },
                { label: 'BSC COMPUTER SCIENCE', value: filter_pass_BCOM_result.length,color:"#40B5AD" },
                { label: 'BA ENGLISH', value: filter_pass_BSCCOMP_result.length,color:"#8A9A5B" },
                { label: 'BA HISTORY', value: filter_pass_ENG_result.length,color:"#FBCEB1"},
                { label: 'MALAYALAM', value: filter_pass_HISTORY_result.length,color:"#FFAC1C"},
                { label: 'MA MALAYALAM', value: filter_pass_MAL_result.length,color:"#9F2B68"},
                { label: 'MCA', value: filter_pass_MCA_result.length,color:"#FF69B4"},
                { label: 'MCOM', value: filter_pass_MCOM_result.length,color:"#301934"},
                { label: 'MSC MATHS', value: filter_pass_MSCmaths_result.length,color:"#FF4500"},
                { label: 'BSC PHYSICS', value: filter_pass_PHY_result.length,color:"#023020"},
                { label: 'BSC MATHS', value:filter_pass_bscmaths_result.length,color:"#5F9EA0"},
              ]             

const filter_subject_count=subject_data.filter(item=>
                    item.subject  
                    )  

// const filtet_Course_count=data.filter(item=>
//                                         item.name ==NAME & item. status=="Rejected"

                                        // )       
// const filtet_subject_count=subject_data.filter(item=>
//                     item.staff ==NAME 
                                                            
//                     )  
const style = {};
const isDesktop = useMediaQuery({ minWidth: 1224 });
const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1224 });
const isMobile = useMediaQuery({ maxWidth: 767 });


  return (
    <>
      <Box sx={{ display: 'flex' }} >
                
        <Admin_Dashboard/>
            <Box component="main2" sx={{ flexGrow: 4, p: 1 }}>
                <Navbarpage/>
    <Box sx={{ flexGrow: 1 }} style={style}>
      <Grid container spacing={4}>
        <Grid size="grow">
          <Item>
          <div class="card" style={{backgroundColor:"#3CB371"}}>

  <div class="card-body">
  <h5 class="card-title">Total Staff</h5>
   <h3> <b class="card-text">{staff_data.length}</b></h3>
   
  </div>
</div>
          </Item>
        </Grid>
        <Grid size="grow">
          <Item>
          <div class="card" style={{backgroundColor:"#20B2AA"}}>

<div class="card-body">
<h5 class="card-title">Total Student</h5>
<h3> <b class="card-text">{student_data.length}</b></h3>
 
</div>
</div> 

          </Item>
        </Grid>
        <Grid size="grow">
          <Item>
          <div class="card" style={{backgroundColor:"#6A5ACD"}}>

<div class="card-body">
<h5 class="card-title">Total Course</h5>
  <h3><b class="card-text">{course.length}</b></h3>
 
</div>
</div>
          </Item>
        </Grid>
        <Grid size="grow">
          <Item>
          <div class="card" style={{backgroundColor:"#FF69B4"}}>

<div class="card-body">
<h5 class="card-title">Total Subject Taken</h5>
 <h3> <b class="card-text">{filter_subject_count.length}</b></h3>
 
</div>
</div>
          </Item>
        </Grid>


      </Grid>
    </Box>
    <br></br> <br></br> 

<Box sx={{ flexGrow: 1 }}>
  <Grid container spacing={2}>
  <Grid size={5}>
  
      <Item>
    
    <div  >
      <div class="card" style={{backgroundColor:"#66CDAA"}}>

<div class="card-body">
<h5 class="card-title">Admin Panel- Staff-Student Pie Chart</h5>
<PieChart 
   
   series={[
     {
       outerRadius: 140,
       data: piedata1,
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

    <Grid size={7}>
    
      <Item>
     
 <div  >
 <div class="card" style={{backgroundColor:"#ADD8E6"}}>

<div class="card-body">
<h5 class="card-title">Total Students In Each Course</h5>
<BarChart
      // width={880}
      height={300}
      series={[
       
        { data: uData,color:"#2F4F4F" },
      ]}
      xAxis={[{ data: xLabels, scaleType: 'band' }]}
    />

</div>
</div>
     

 </div>
      </Item>
    </Grid>
    
  </Grid>
  </Box>
  <br/>
  <Box sx={{ flexGrow: 1 }}>
  <Grid container spacing={2}>
  <Grid size={6}>
  
      <Item>
    
    <div  >
      <div class="card" style={{backgroundColor:"#8B0000	"}}>

<div class="card-body">
<h5 class="card-title">Admin Panel- Staff-Student Pie Chart</h5>
<PieChart 
   
   series={[
     {
       outerRadius: 140,
       data: pass_piedata,
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

    <Grid size={6}>
    
      <Item>
     
 <div  >
 <div class="card" style={{backgroundColor:"#4B0082"}}>

<div class="card-body">
<h5 class="card-title">Total Students Failed In Each Course</h5>
<PieChart 
   
   series={[
     {
      data: fail_pie_chart,
      
      innerRadius: 60,
      outerRadius: 140,
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
    
  </Grid>
  </Box>
  </Box>
  </Box>




    </>
  )
}

export default Admin_Chart
