import React from 'react'
import Navbarpage from '../Adminpage/Course/Navbarpage'
import Student_Dashboard from './Student_Dashboard';

import Box from '@mui/material/Box';
import Student_Chart from './Student_Chart';
function D_GET() {
                    return (
                                        <Box sx={{ display: 'flex' }}>
                                                                                        
                                        <Student_Dashboard/>
                                        
                                        
                                        <Box component="main2" sx={{ flexGrow: 4, p: 1 }}>
                                     
                                        <Navbarpage/>
                                       
                                        <Student_Chart/>
                                        </Box>
                                        </Box>
                                       
                      )
}

export default D_GET
