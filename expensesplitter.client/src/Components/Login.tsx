import React from 'react'
import './LoginSignup.css';
import email_icon from '../../public/email.png'
import password_icon from '../../public/password.png'

const Login = () => {
    return (
        <div className='container'>


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


            <div className='forget-pass'>Forget password? <span>Click here!</span> </div>

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