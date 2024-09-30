import {React,useState,useEffect} from 'react';
import Login, { Render } from 'react-login-page';
import Logo from 'react-login-page/logo';
import axios from 'axios';
import { useNavigate } from "react-router";
function Siginin() {
   const[username,setUsername]=useState("") 
   const[password,setPassword]=useState("") 
   const navigate = useNavigate();

   const handleSubmit=(e)=>{ 
    
        e.preventDefault();
        axios.post("http://localhost:8000/loginapp/signin/",{
                    "username":  username,
                    "password": password               
            })
                .then((res) => {
                                
                                if(res.data == 100){
                                    window.localStorage.setItem('loggedInUsername', username);
                                    window.localStorage.setItem('loggedInUserPassword', password);
                                    window.localStorage.setItem('loggedInUserrole', "admin");
                                    navigate("admin-chart/");  
                                }      
                                else if(res.data == 200) {
                                    window.localStorage.setItem('loggedInUsername', username);
                                    window.localStorage.setItem('loggedInUserPassword', password);
                                    window.localStorage.setItem('loggedInUserrole', "staff");
                                    navigate("/staff_dashboard/")
                                 }
                                
                                else if(res.data == 300) {
                                    window.localStorage.setItem('loggedInUsername', username);
                                    window.localStorage.setItem('loggedInUserPassword', password);
                                    window.localStorage.setItem('loggedInUserrole', "student");
                                    navigate("/student_dashboard/")
                                 }
                                else if(res.data=="User Does Not Exist"){
                                    alert("no")
                                } 
                                else if(res.data=="Incorrect Password"){
                                    alert("Incorrect Password")
                                } 

                              });
   }

  return (
                  
                    // <Login>
                    //                     <Render>
                    //                         {({ fields, buttons, blocks, $$index }) => {
                    //                           return (
                    //                             <div>
                    //                               <header>
                    //                                 {blocks.logo} {blocks.title}
                    //                               </header>
                    //                               <div>
                    //                                 <label>{fields.username}</label>
                    //                               </div>
                    //                               <div>
                    //                                 <label>{fields.password}</label>
                    //                               </div>
                    //                               <div>
                    //                                 {buttons.submit}
                    //                                 {buttons.reset}
                    //                               </div>
                    //                             </div>
                    //                           );
                    //                         }}
                    //                       </Render>
                    //                       <Login.Block keyname="logo" tagName="span">
                    //                         <Logo />
                    //                       </Login.Block>
                    //                       <Login.Block keyname="title" tagName="span">
                    //                         Login
                    //                       </Login.Block>
                    //                       <Login.Input keyname="username" placeholder="Please input Username" />
                    //                       <Login.Input keyname="password" placeholder="please enter password" />
                    //                       <Login.Button keyname="submit" type="submit" onClick={handleSubmit}>
                    //                         Submit
                    //                       </Login.Button>
                    //                       <Login.Button keyname="reset" type="reset">
                    //                         Reset
                    //                       </Login.Button>
                    //                     </Login>
                    
                    <div class="row">
                    <div class="colm-logo">
                      
                      
                    </div>
                    <div class="colm-form">
                        <div class="form-container">
                            <input type="text" placeholder="Email address or phone number"  onChange={(e) => setUsername(e.target.value)}></input>
                            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
                            <button class="btn-login"  onClick={handleSubmit}>Login</button>
                            <a href="#">Forgotten password?</a>
                            <button class="btn-new">Create new Account</button>
                        </div>
                        <p><a href="#"><b>Create a Page</b></a> for a celebrity, brand or business.</p>
                    </div>
                    </div>
               
           
           
              
  )
}

export default Siginin
