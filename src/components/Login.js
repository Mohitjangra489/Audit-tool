import React, { useState } from 'react';
import Css from '../styles/login.module.css';
import BackgroundImage from '../images/658d2061d0f14ac79b34ee7c_Inventory Management Strategies.jpg';
import { useNavigate } from 'react-router-dom';
import { Person, Key,AdminPanelSettings,Security } from '@mui/icons-material';

const Login = () => {
  const [username,setusername]=useState("");
  const [password,setpassword]=useState("");
  const navigate=useNavigate();

  function handleLogin(e){
  e.preventDefault();
    if(username && password){
      if(username=="testuser" && password=="testpassword"){
        setusername("");
        setpassword("");
        navigate("/dashboard");
      }
      else{
        alert("Wrong Credentials!");
      }
    }
    else{
      alert("Enter all fields!");
    }
  
  }

  return (
    <div className={Css.login_mainContainer}>
       <div className={Css.BackgroundImageDiv}>
        <img className={Css.BackgroundImage} src={BackgroundImage} alt="image_here" />
      </div>

     <form className={Css.login_form} onSubmit={handleLogin} >
      <div className={Css.login_form_container}>
        <div className={Css.label_div_heading}>
        <h1 style={{textAlign:"center",letterSpacing:"2px",fontSize:"3rem"}}>User Login </h1>
        <Security className={Css.label_image}/>
          </div>
      <div  className={Css.label_div} >
        <div className={Css.label_div_div}>
          <Person className={Css.label_image}/>
        <label  className={Css.label}>Username:</label>
        </div>
        <input type='text' placeholder='Enter email' className={Css.input} value={username} onChange={(e)=>setusername(e.target.value)}/>
      </div>
      <div className={Css.label_div}>
        <div className={Css.label_div_div}>
          <Key className={Css.label_image}/>
          <label className={Css.label}>Password:</label>
        </div>
        <input type='password' placeholder='Enter password'className={Css.input} value={password} onChange={(e)=>setpassword(e.target.value)}/>
      </div>
      <div className={Css.label_div}>
        <input type='submit' value="Login" className={Css.submitbtn}/>
      </div>
      </div>
     
     </form>
    </div>
  )
}

export default Login
