// import { useEffect, useState } from 'react'
import { Nav } from 'react-bootstrap';
import { RiAccountCircleLine } from 'react-icons/ri';
import { FaBookOpen } from "react-icons/fa";
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown'
import { NavLink, useNavigate } from 'react-router-dom';
import { HomeOutlined } from '@ant-design/icons';
import { IoMdContacts } from "react-icons/io";



const NavbarCom = () => {
  const navigate2 = useNavigate(); //const variable for useNavigate.

  const handleButtonClick = () => {//function to navigate splitter by routing.
    navigate2('/Splitter');
  };

  const nav1 = useNavigate();

  const handleprofile = () =>{
      nav1('/profile')
  }

  // const navStyle = {color:'blue',textAlign:'center',borderRadius:'15px', marginTop:'20px'};

  return (
    <div>

      <Nav>
        <Navbar collapseOnSelect expand="lg" className="bg-body-dark navbar-expand-xxl w-100">
          
            <Navbar.Brand className='text-primary ps-5 mt-2'><h2>Splitify<img src='https://cdn-icons-png.freepik.com/512/8436/8436281.png' width={40} className="ps-1" /></h2></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className='float-sm-left' />
            <Navbar.Collapse id="responsive-navbar-nav" className='w-25'>
              <Nav className="bg-body-light text-center ms-lg-5">
              <NavLink to="/" className={({ isActive }) =>
                    isActive
                      ? 'nav-link bg-primary rounded-4 mt-4 ms-lg-3 mb-3 ps-3 pe-3 text-light active'
                      : 'nav-link text-primary mt-4'
                  }><HomeOutlined className='pe-2'/> 
                  Home
                </NavLink>
                <NavLink to="/aboutus" className={({ isActive }) =>
                    isActive
                      ? 'nav-link bg-primary mt-4 rounded-4 ms-lg-5 mb-3 ps-3 pe-3 text-light active'
                      : 'nav-link text-primary mt-4 ms-5'
                  }><FaBookOpen className='pe-2 fs-3' />
                  About
                </NavLink>
                <NavLink to="/blog" className={({ isActive }) =>
                    isActive
                      ? 'nav-link bg-primary rounded-4  ms-lg-5 mt-4 mb-3 ps-3 pe-3 text-light active'
                      : 'nav-link text-primary mt-4 ms-5'
                  }>
                  Blog
                </NavLink>
                <NavLink to="/contact" className={({ isActive }) =>
                    isActive
                      ? 'nav-link bg-primary rounded-4  ms-lg-5 mt-4 mb-3 ps-3 pe-3 text-light active'
                      : 'nav-link text-primary mt-4 ms-5'
                  }><IoMdContacts className='pe-2 fs-3'/>
                  Contact
                </NavLink>           
              <div style={{display:'flex',marginLeft:'500px'}}>
              <span className='d-flex flex-row pt-4'><p className='ps-2 fs-3' onClick={handleprofile}><RiAccountCircleLine /></p></span>
              <div>
                <button className='p-2 mt-4 ms-5 text-light bg-primary rounded' onClick={handleButtonClick}>Get Start</button>
              </div>
              </div>
              </Nav >
              <Nav>
              </Nav>
            </Navbar.Collapse>
          
        </Navbar>

      </Nav>



    </div>
  )
}

export default NavbarCom

{/* <div >
        <img src='/images.png' width={50} style={{ paddingTop: '5px', paddingLeft: '5px' }} />
        <p style={{ color: 'blue', fontSize: '38px' }}>Splitify</p>
      </div> */}
{/* <NavLink to='/register' style={navStyle} className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Register</NavLink> */ }
{/* <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px', fontSize: '20px', color: 'black',marginRight:'-150px' }}>
        <p style={{ fontSize: '20px', paddingTop: '15px' }}><RiAccountCircleLine /></p>
        <p style={{ cursor: 'pointer', paddingTop: '15px' }} >Logout</p>
        
      </div> */}