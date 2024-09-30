
import './App.css';


import Siginin from './Loginpage/Siginin';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Admin_Dashboard from './Adminpage/Admin_Dashboard';
import Admin_Chart from './Adminpage/Admin_Chart';
import CourseDetails from './Adminpage/Course/CourseDetails';
import Updatecourse from './Adminpage/Course/Updatecourse';
import AddCourse from './Adminpage/Course/AddCourse';

import StaffDetails from './Adminpage/Staff/StaffDetails';
import UpdateStaff from './Adminpage/Staff/UpdateStaff';
import AddStaff from './Adminpage/Staff/AddStaff';

import Studentdetails from './Adminpage/Student/Studentdetails';
import Addstudent from './Adminpage/Student/Addstudent';

import Details from './Adminpage/Subject/Details';
import Add from './Adminpage/Subject/Add';
import Edit from './Adminpage/Subject/Edit';

import AddNotification from './Adminpage/Student-Notific/AddNotification';
import StudentNotificationGet from './Adminpage/Student-Notific/StudentNotificationGet';

import AddStaffNotification from './Adminpage/Staff/AddStaffNotification';
import StaffNotification from './Adminpage/Staff/StaffNotification';

import ViewStaffLeave from './Adminpage/Staff/ViewStaffLeave';
import View_Student_Leave from './Adminpage/Student/View_Student_Leave';
import Staff_Chart from './Staffpage/Staff_Chart';

import Staff_Dashboard from './Staffpage/Staff_Dashboard';
import Attendance from './Staffpage/Attendance';
import Demoatt from './Staffpage/Demoatt';
import AttendanceView from './Staffpage/AttendanceView';

import Addresult from './Staffpage/Addresult';
import GetResult from './Staffpage/GetResult';
import EditResult from './Staffpage/EditResult';

import NotificationRead from './Staffpage/NotificationRead';

import ApplyLeave from './Staffpage/ApplyLeave';
import LeaveGet from './Staffpage/LeaveGet';

import Student_Dashboard from './StudentPages/Student_Dashboard';
import Viewattendance from './StudentPages/Viewattendance';
import ResultView from './StudentPages/ResultView';
import View_Student_Notif from './StudentPages/View_Student_Notif';
import Apply_Student_Leave from './StudentPages/Apply_Student_Leave';
import Get_Student_Leave from './StudentPages/Get_Student_Leave';
import Student_Chart from './StudentPages/Student_Chart';
import D_GET from './StudentPages/D_GET';
function App() {
  return (
    <Router>
     
    <Routes>
    <Route path="/" element={<Siginin />} />
        <Route path="/admindashboard" element={<Admin_Dashboard />} />
        <Route path="/admin-chart/" element={<Admin_Chart/>} />

        <Route path="/coursedetails/" element={<CourseDetails />} />
        <Route path="/updatecourse/:id/" element={<Updatecourse />} />
        <Route path="/addcourse/" element={<AddCourse/>} />

        <Route path="/staffdetails" element={<StaffDetails/>} />
        <Route path="/updatestaff/:id/" element={<UpdateStaff/>} />
        <Route path="/addstaff" element={<AddStaff/>} />
        
        <Route path="/view_staff_leave" element={<ViewStaffLeave/>} />
        <Route path="/view_student_leave" element={<View_Student_Leave/>} />

        <Route path="/studentdetails" element={<Studentdetails/>} />
        <Route path="/addstudent/:operation/:id" element={<Addstudent/>} />

        <Route path="/subjectdetails" element={<Details/>} />
        <Route path="/addsubject" element={<Add/>} />
        <Route path="/updatesubject/:id/" element={<Edit/>} />

        <Route path="/student_notification/" element={<StudentNotificationGet/>} />
        <Route path="/addnotifiction_student/" element={<AddNotification/>} />

        <Route path="/staff_notification/" element={<StaffNotification/>} />
        <Route path="/add_staff_notification/" element={<AddStaffNotification/>} />

        <Route path="/staff_dashboard/" element={<Staff_Dashboard/>} />
        <Route path="/attendance/" element={<Attendance/>} />
        <Route path="/demoatt/" element={<Demoatt/>} />
        <Route path="/viewattendance/" element={<AttendanceView/>} />
        <Route path="/staff-chart/" element={<Staff_Chart/>} />

        <Route path="/addresult" element={<Addresult/>} />
        <Route path="/getresult" element={<GetResult/>} />
        <Route path="/updateresult/:id/" element={<EditResult/>} />

        <Route path="/notification_read" element={<NotificationRead/>} />

        <Route path="/applystaff_leave" element={<ApplyLeave/>} />
        <Route path="/get_staff_leave" element={<LeaveGet/>} />

        <Route path="/student_dashboard/" element={<Student_Dashboard/>} />

        <Route path="/view_student_attendance" element={<Viewattendance/>} />
        <Route path="/view-student_result/" element={<ResultView/>} />
        <Route path="/view-student_notifications/" element={<View_Student_Notif/>} />
        <Route path="/apply_student-leave/" element={<Apply_Student_Leave/>} />
        <Route path="/get-student-leave/" element={<Get_Student_Leave/>} />
        <Route path="/student-chart/" element={<D_GET/>} />
        
        
      </Routes>
      </Router>
  );
}

export default App;
