import React, { useContext, useState } from 'react'
import './LoginSignup.css';
import email_icon from '../../public/email.png'
import password_icon from '../../public/password.png'
import { Button, Modal } from 'antd';
import UserContext from './UserContext';
const Login = () => {

    const valueLogin ={
        email:"",
        password:""
      }

    const [open, setOpen] = useState(false);
    const {setLogin} = useContext(UserContext)
    const [loginData, setLoginData] = React.useState(valueLogin)
    const handleLogin = (e:any) => {
        setLoginData ({...loginData, [e.target.name]: e.target.value})
      }
  
      const onLogin = ()=>{
        const userArray = JSON.parse(localStorage.getItem('userData') || '') || [];
        for(let a=0; a< userArray.length; a++){
          if(userArray[a].email === loginData.email && userArray[a].password === loginData.password){
            localStorage.setItem('isUser', JSON.stringify(userArray[a]))
            setLogin(true)
            // setError(valueLogin)
            break;
          }
          // else{
          //   localStorage.removeItem('isUser')
          // }
        }
      }

    return (
        <div  onSubmit={onLogin} className='container'>
            <div className='header2'>
                <div className='text'>Login</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                <div className='input'>
                    <img src={email_icon} height={27} alt="" />
                    <input type="emaill" placeholder='Enter your email' />
                </div>
                <div className='input'>
                    <img src={password_icon} height={27} alt="" />
                    <input type="passwordd" placeholder='Enter password' />
                </div>
            </div>
            <div className='forget-pass'>Forget password? <span onClick={() => setOpen(true)}>Click here!</span>
                <Modal
                    title="Modal 1000px width"
                    centered
                    open={open}
                    onOk={() => setOpen(false)}
                    onCancel={() => setOpen(false)}
                    width={1000}
                >
                    <p>some contents...</p>
                    <p>some contents...</p>
                    <p>some contents...</p>
                </Modal>
            </div>

            <div className="submitt">
                <div className='submit'>Login</div>
            </div>
            <div className='link'>
                <p className="text-center mt-3">
                    Create new account <a href="/signup">SignUp here</a>
                </p>
            </div>
        </div>
    )
}

export default Login