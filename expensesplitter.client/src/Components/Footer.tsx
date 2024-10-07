import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { LiaFacebook } from "react-icons/lia";
import { FiTwitter } from "react-icons/fi";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';


const Footer = () => {
  // const navi = useNavigate();

  // const handlefaq = ()=>{
  //   navi('/aboutus')
  // }
    
  return (
    <div className='bg-light border border-primary rounded mb-3 table-responsive-sm ps-5'>
      <div className='mt-5 mb-5 d-flex flex-row justify-content-center'>
        <div className='w-25 ms-5'>
            <p className='text-primary fs-2 p-2 font-monospace'><u>Splitify</u></p>

           
        </div > 
        <div className='w-25 ms-5'>
        <p><a className='text-dark fs-5 p-5 text-decoration-none'>Home</a></p>
            <p><a className='text-dark fs-5 p-5 text-decoration-none'>About Us</a></p>
            {/* <p><a href='/blog' className='text-dark fs-5 p-5 text-decoration-none'>Blog</a></p> */}
            <p><a href='/' className='text-dark fs-5 p-5 text-decoration-none'>Contact</a></p>
        </div>
          {/* <div className='w-25'>
              <p className='text-light fs-3 p-5'>Downloading</p>
              <p className='text-dark fs-5 pt-4 ps-5'>Free Download</p>
          </div> */}
        </div>
        
          <div>
          <div className='w-25 ms-5 d-flex flex-row ps-5'>
           
            <p className='text-dark fs-5 pt-2 ps-5'> <FaInstagram/></p>
            <p className='text-dark fs-5 pt-2 ps-5'> <LiaFacebook className="fs-4"/></p>
            <p className='text-dark fs-5 pt-2 ps-5'> <FiTwitter/></p>
            <p className='text-dark fs-5 pt-2 ps-5'> <TiSocialLinkedinCircular className='fs-4'/></p>
          </div>
            <div style={{borderBottom:'100%', backgroundColor:'black', width:'90%', height:'2px',marginLeft:'50px'}}></div>
          </div>
      
    </div>
  )
}

export default Footer