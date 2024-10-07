import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import email_icon from '../../public/email.png';
import password_icon from '../../public/password.png';
import linkedin_icon from '../../public/linkedin.png';
import goggle_icon from '../../public/google.png';
import { Button, Modal } from 'antd';
import { Link, Navigate } from 'react-router-dom';
import './Login.css';
import UserContext from './UserContext';

const Login = () => {
  const {setLogin} = useContext(UserContext)
  // const [loginData, setLoginData] = React.useState('')
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  // useEffect(() => {
  //   // Check if the user is authenticated
  //   const checkAuthentication = async () => {
  //     try {
  //       const response = await fetch('https://localhost:7194/api/User/login'); 
  //       if (response.ok) {
  //         setIsAuthenticated(true);
  //       }
  //     } catch (error) {
  //       console.error('Error checking authentication:', error);
  //     }
  //   };

  //   checkAuthentication();
  // }, []);

  // if (isAuthenticated) {
  //   // Redirect to the home page or another protected route
  //   return <Navigate to="/" />; 
  // }
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://localhost:7194/api/User/login", formData);
      
      const userId = `user_${Math.random().toString(36).substr(2, 9)}`;
      
      localStorage.setItem('userId', userId); 
      alert("User logged in successfully. ID stored in localStorage: " + userId);
      setLogin(true)
      
    } catch (error: any) {
      alert(error.response.data);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='container2'>
        <div className='header23'>
          <div className='text1'>Login</div>
          <div className='underline1'></div>
        </div>
        <div className='inputss'>
          <div className='inputt'>
            <img src={email_icon} height={27} alt="" />
            <input type="email" name="email" placeholder='Enter your email' onChange={handleChange} />
          </div>
          <div className='inputt'>
            <img src={password_icon} height={27} alt="" />
            <input type="password" name="password" placeholder='Enter password' onChange={handleChange} />
          </div>
        </div>
        <div className='forget-passw'>Forget password? <span onClick={() => setOpen(true)}>Click here!</span>
          <Modal
            title="Reset Password"
            centered
            open={open}
            onOk={() => setOpen(false)}
            onCancel={() => setOpen(false)}
            width={800}
          >
            <form>
              Email: <input type="email" placeholder='Enter email' /><br /><br />
              New Password: <input type="password" placeholder='Enter new password' /><br /><br />
              Confirm Password: <input type="password" placeholder='Confirm new password' />
            </form>
          </Modal>
        </div>
        <div className="submitt1">
          <button className='submit1' type='submit'>Login</button>
        </div>
        <div className='social1'>
          <img src={goggle_icon} height={24} style={{ paddingLeft: '9px' }} alt="" />
          <img src={linkedin_icon} height={24} style={{ paddingLeft: '9px' }} alt="" />
        </div>
        <div className='link1'>
          <p className="">
            Create a new account? <Link to={'/signup'} style={{ fontSize: '15px' }}>SignUp here</Link>
          </p>
        </div>
      </div>
    </form>
  );
};

export default Login;
