import React from 'react'
import { useNavigate } from "react-router";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Box from '@mui/material/Box';
import { useMediaQuery } from 'react-responsive';
function Navbarpage() {
  var loggedInUsername=window.localStorage.getItem('loggedInUsername')
  var loggedInPassword=window.localStorage.getItem('loggedInUserPassword')
  var loggedInUserrole=window.localStorage.getItem('loggedInUserrole')
  const isMobile = useMediaQuery({ query: '(max-width: 600px)' });

  const isDesktop = useMediaQuery({ minWidth: 1224 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1224 });
  const style = {};

  if (isMobile) {
    style.marginLeft = '8px';
  } else if (isDesktop) {
    style.marginLeft = '950px';
  } else if(isTablet) {
    style.marginLeft = '400px';
  }
const navigate=useNavigate()
  function handleLogout(){
    window.localStorage.removeItem('loggedInUsername');

    window.localStorage.removeItem('loggedInUserPassword');
  
    window.localStorage.removeItem('loggedInUserrole');
    navigate("/");
             
}     
  return (
    
                 
      <Navbar 
    
    style={{  background: " linear-gradient(90deg, rgba(0,6,62,1) 25%, rgba(12,16,51,1) 55%, rgba(28,52,126,1) 89%)" }}
     variant="dark" >
    
          <Navbar.Brand href="#home">Welcome {loggedInUsername}</Navbar.Brand>
          <Nav className="me-auto" style={style}>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing" ><button id="logout1" 
                type="submit"
                className="btn btn-danger"
                onClick={handleLogout}
              >
                Logout
            </button></Nav.Link>
          </Nav>
     
      </Navbar> 
      
    
  )
}

export default Navbarpage
