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

function Student_Dashboard() {
                    const[isOpen ,setIsOpen] = useState(false);
                    const toggle = () => setIsOpen (!isOpen);
                    const menuItem=[
                        {
                            path:"/student-chart/",
                            name:"Dashboard",
                            icon:<FaTh/>
                        },
                        {
                            path:"/view_student_attendance",
                            name:"View Attendance",
                            icon:<FaUserAlt/>
                        },
                        {
                            path:"/view-student_result/",
                            name:"View Result",
                            icon:<FaRegChartBar/>
                        },
                        {
                            path:"/view-student_notifications/",
                            name:"View Notification",
                            icon:<FaCommentAlt/>
                        },
                        {
                            path:"/get-student-leave/",
                            name:"Apply Leave",
                            icon:<FaShoppingBag/>
                        }
                       
                    ]
                  return (
                    <div>
                         
                    <div style={{width: isOpen ? "200px" : "50px",backgroundColor: " rgb(14,44,51)"}} className="sidebar">
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

export default Student_Dashboard
