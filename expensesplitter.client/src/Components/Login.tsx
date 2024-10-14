// import email_icon from '../../public/email.png';
// import password_icon from '../../public/password.png';
import './Login.css';
import React, { useState } from 'react';
import { Button, Input, Form, message } from 'antd';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
      try {
          setLoading(true);
          const response = await axios.post('https://localhost:7194/api/User/login', values);
          const { data } = response;
          localStorage.setItem('userId', data.userId); 
          message.success('Login successful!');
          navigate('/groups');
      } catch (error) {
          message.error('Login failed. Please check your credentials.');
      } finally {
          setLoading(false);
      }
  };

  return (
      <Form onFinish={onFinish} className='head'>
        <div className='container2'>
        <div className='header23'>
        <div className='text1'>Login</div>
        <div className='underline1'></div>
          </div>
          <div className='inputss'>
          <Form.Item  name="Email" rules={[{ required: true, message: 'Please input your email!' }]}>
              <Input placeholder="Email" className='inputt'/>
          </Form.Item>
          <Form.Item name="Password" rules={[{ required: true, message: 'Please input your password!' }]}>
              <Input.Password placeholder="Password"  className='inputt'/>
          </Form.Item>
          </div>
          {/* <div className="submitt1"> */}
          <Button type="primary" htmlType="submit" loading={loading} className='w-25 fs-5 p-4 rounded-5 button'>
              Login
          </Button>
          {/* </div> */}
          <div className='link1'>
         <p className="mt-5">
             Create a new account? <Link to={'/signup'} style={{ fontSize: '15px' }}>SignUp here</Link>
          </p> 
                  </div>
        </div>
      </Form>
  );
};

export default Login;
// const Login = () => {
//   const [open, setOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e: { target: { name: string; value: string } }) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   }; 

//   const handleSubmit = async (e: { preventDefault: () => void }) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("https://localhost:7194/api/User/login", formData);
      
//       const userId = `user_${Math.random().toString(36).substr(2, 9)}`;
      
//       localStorage.setItem('userId', userId); 
//       alert("User logged in successfully. ID stored in localStorage: " + userId); 
      
//     } catch (error: any) {
//       alert(error.response.data);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className='container2'>
//         <div className='header23'>
//           <div className='text1'>Login</div>
//           <div className='underline1'></div>
//         </div>
//         <div className='inputss'>
//           <div className='inputt'>
//             <img src={email_icon} height={27} alt="" />
//             <input type="email" name="email" placeholder='Enter your email' onChange={handleChange} />
//           </div>
//           <div className='inputt'>
//             <img src={password_icon} height={27} alt="" />
//             <input type="password" name="password" placeholder='Enter password' onChange={handleChange} />
//           </div>
//         </div>
//         <div className='forget-passw'>Forget password? <span onClick={() => setOpen(true)}>Click here!</span>
//           <Modal
//             title="Reset Password"
//             centered
//             open={open}
//             onOk={() => setOpen(false)}   
//             onCancel={() => setOpen(false)}
//             width={800}
//           >
//             <form>
//               Email: <input type="email" placeholder='Enter email' /><br /><br />
//               New Password: <input type="password" placeholder='Enter new password' /><br /><br />
//               Confirm Password: <input type="password" placeholder='Confirm new password' />
//             </form>
//           </Modal>
//         </div>
//         <div className="submitt1">
//           <button className='submit1' type='submit'>Login</button>
//         </div>
//         <div className='link1'>
//           <p className="">
//             Create a new account? <Link to={'/signup'} style={{ fontSize: '15px' }}>SignUp here</Link>
//           </p> 
//         </div>
//       </div>
//     </form>
//   );
// };

// export default Login;








