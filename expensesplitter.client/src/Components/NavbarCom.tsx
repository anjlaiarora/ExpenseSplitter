// import { useEffect, useState } from 'react'
import { Nav, OverlayTrigger, Popover } from 'react-bootstrap';
import {RiLogoutCircleRFill } from 'react-icons/ri';
import { FaBookOpen } from "react-icons/fa";
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { HomeOutlined } from '@ant-design/icons';
import { IoMdContacts } from "react-icons/io";
import { useContext, useState } from 'react';
import UserContext from './UserContext';
import { CgProfile } from 'react-icons/cg';



const NavbarCom = () => {
  const navigate2 = useNavigate(); //const variable for useNavigate.
  const navigate = useNavigate();
  const [userExist, setUserExist] = useState();
  const {setLogin} = useContext(UserContext)


  const handleButtonClick = () => {
      if(!userExist){
        navigate('/checkNavRes')
      }else{
        navigate2("/signup")
      }
  };

  const nav1 = useNavigate();

  const handleprofile = () => {
    nav1('/signup')
  }
  const popover =(
    <Popover id='popover-basic'>
        <Popover.Body>
            <Link className='d-block btn d-flex' to='/profile'><p className='pe-2'><CgProfile /></p>Profile</Link>
            <span className='d-block btn d-flex'onClick={()=>{
              // localStorage.removeItem('isUser')
              setLogin(false)
            }}><p className='pe-2' onClick={handleprofile}><RiLogoutCircleRFill /></p>Logout</span>
        </Popover.Body>
    </Popover>
    )



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
              }><HomeOutlined className='pe-2' />
                Home
              </NavLink>
              <NavLink to="/aboutus" className={({ isActive }) =>
                isActive
                  ? 'nav-link bg-primary mt-4 rounded-4 ms-lg-5 mb-3 ps-3 pe-3 text-light active'
                  : 'nav-link text-primary mt-4 ms-5'
              }><FaBookOpen className='pe-2 fs-3' />
                About
              </NavLink>
              {/* <NavLink to="/blog" className={({ isActive }) =>
                isActive
                  ? 'nav-link bg-primary rounded-4  ms-lg-5 mt-4 mb-3 ps-3 pe-3 text-light active'
                  : 'nav-link text-primary mt-4 ms-5'
              }>
                Blog
              </NavLink> */}
              <NavLink to="/contact" className={({ isActive }) =>
                isActive
                  ? 'nav-link bg-primary rounded-4  ms-lg-5 mt-4 mb-3 ps-3 pe-3 text-light active'
                  : 'nav-link text-primary mt-4 ms-5'
              }><IoMdContacts className='pe-2 fs-3' />
                Contact
              </NavLink>
              <div style={{ display: 'flex', marginLeft: '550px' }}>
              <OverlayTrigger trigger="click" placement='bottom' overlay={popover}>    
           <div className='d-flex' style={{height:40,marginTop:'25px'}} >
        <img src='' style={{borderRadius:25, width:40, backgroundColor:'grey'}}/>
            </div> 
        </OverlayTrigger>
                
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
// export default NavbarCom

{/* <div >
        <img src='/images.png' width={50} style={{ paddingTop: '5px', paddingLeft: '5px' }} />
        <p style={{ color: 'blue', fontSize: '38px' }}>Splitify</p>
      </div> */}
{/* <NavLink to='/register' style={navStyle} className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Register</NavLink> */ }
{/* <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px', fontSize: '20px', color: 'black',marginRight:'-150px' }}>
        <p style={{ fontSize: '20px', paddingTop: '15px' }}><RiAccountCircleLine /></p>
        <p style={{ cursor: 'pointer', paddingTop: '15px' }} >Logout</p>
        
      </div> */}
      // <NavLink to="/" className={({ isActive }) =>
      //   isActive
      //     ? 'nav-link bg-primary rounded-4 mt-4 ms-lg-3 mb-3 ps-3 pe-3 text-light active'
      //     : 'nav-link text-primary mt-4'
      // }><HomeOutlined className='pe-2' />
      //   Home
      // </NavLink>
      // <div style={{ display: 'flex', marginLeft: '550px' }}>
      //         <OverlayTrigger trigger="click" placement='bottom' overlay={popover}>    
      //      <div className='d-flex' style={{height:40,marginTop:'25px'}} >
      //   <img src='' style={{borderRadius:25, width:40, backgroundColor:'grey'}}/>
      //       </div> 
      //   </OverlayTrigger>
                
      //           <div>
      //             <button className='p-2 mt-4 ms-5 text-light bg-primary rounded' onClick={handleButtonClick}>Get Start</button>
      //           </div>
      //         </div>