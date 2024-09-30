import React, { useState } from 'react';

import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';

function Admin_Dashboard() {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/admin-chart/",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/coursedetails/",
            name:"Course",
            icon:<FaUserAlt/>
        },
        {
            path:"/staffdetails",
            name:"Staff",
            icon:<FaRegChartBar/>
        },
        {
            path:"/studentdetails",
            name:"Student",
            icon:<FaCommentAlt/>
        },
        {
            path:"/subjectdetails",
            name:"Subjects",
            icon:<FaShoppingBag/>
        },
        {
            path:"/student_notification/",
            name:"Notification For Students",
            icon:<FaThList/>
        },
        {
            path:"/staff_notification/",
            name:"Notification For Staff",
            icon:<FaThList/>
        },
        {
            path:"/view_staff_leave",
            name:" Staff Leave",
            icon:<FaThList/>
        },
        {
            path:"/view_student_leave",
            name:"Students Leave",
            icon:<FaThList/>
        }
    ]
  return (
    <div>
         
    <div style={{width: isOpen ? "200px" : "50px", background: " linear-gradient(90deg, rgba(0,6,62,1) 25%, rgba(12,16,51,1) 55%, rgba(28,52,126,1) 89%)",height:"1300px"}} className="sidebar">
        <div className="top_section">
            <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
            <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                <FaBars onClick={toggle}/>
            </div>
        </div>
        {
            menuItem.map((item, index)=>(
                <NavLink to={item.path} key={index} className="link" activeclassName="active">
                    <div className="icon">{item.icon}</div>
                    <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                </NavLink>
            ))
        }
    </div>
   
 </div>
      
  )
}

export default Admin_Dashboard
