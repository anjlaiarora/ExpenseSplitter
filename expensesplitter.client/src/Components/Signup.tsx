import React, { useEffect, useState } from 'react'

import axios from "axios";
import {useNavigate } from 'react-router-dom';
import email_icon from '../../public/email.png'
import password_icon from '../../public/password.png'
import user_icon from '../../public/user.png'

import facebook_icon from '../../public/facebook.png';
import linkedin_icon from '../../public/linkedin.png';
import goggle_icon from '../../public/google.png';

import './LoginSignup.css';
import { Link } from 'react-router-dom';
const Signup = () => {

    const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://localhost:7194/api/User/register", formData);
      alert(response.data);
      navigate("/splitter")
    } catch (error:any) {
      alert(error.response.data);
    }
    // navigate("/splitter")
  
  };


  return (
    <>

    <form onSubmit={handleSubmit}>

      <div className='container'>


        <div className='header2'>
          <div className='text'>Sign Up</div>
          <div className='underline'></div>
        </div>



        <div className='inputs'>

          <div className='input'>
            <img src={user_icon} height={27} alt="" />
            <input type="text" placeholder='Enter your name' name='username' onChange={handleChange}/>
          </div>





          <div className='input'>
            <img src={email_icon} height={27} alt="" />
            <input type="email" placeholder='Enter your email' name='email' onChange={handleChange}/>
          </div>


          <div className='input'>
            <img src={password_icon} height={27} alt="" />
            <input type="passwordd" placeholder='Enter password' name='password' onChange={handleChange}/>
          </div>

        </div>



        <div className="submitt">


          <button type='submit' className='submit ms-5' >Sign Up</button>

        </div>

        <div className='social'>
         
          <img src={facebook_icon} height={24}  alt="" />
          
          <img src={goggle_icon} height={24} style={{paddingLeft:'9px'}} alt="" />
          <img src={linkedin_icon} height={24} style={{paddingLeft:'9px'}} alt="" />
        

        </div>


        <div className='link'>

          <p className="">
            Already have an account? <Link to={'/login'} style={{ fontSize: '15px' }} >Login here</Link>
          </p>
        </div>


      </div>
    </form>

    </>

  )
}

export default Signup;