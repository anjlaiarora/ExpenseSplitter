import React, { useState } from 'react'
import email_icon from '../../public/email.png'
import password_icon from '../../public/password.png'
import user_icon from '../../public/user.png'
import './LoginSignup.css';
const Signup = () => {


  return (
    <div className='container'>


      <div className='header2'>
        <div className='text'>Sign Up</div>
        <div className='underline'></div>
      </div>



      <div className='inputs'>

        <div className='input'>
          <img src={user_icon} height={27} alt="" />
          <input type="text" placeholder='Enter your name' />
        </div>





        <div className='input'>
          <img src={email_icon} height={27} alt="" />
          <input type="emaill" placeholder='Enter your email' />
        </div>


        <div className='input'>
          <img src={password_icon} height={27} alt="" />
          <input type="passwordd" placeholder='Enter password' />
        </div>

      </div>



      <div className="submitt">
        <div className='submit'>Sign Up</div>
      </div>

      <div className='link'>

      <p className="text-center mt-6">
         Already have an account? <a href="/login">Login here</a>
         </p>
      </div>


    </div>
  )
}

export default Signup;