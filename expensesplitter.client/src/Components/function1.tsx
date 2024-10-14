import { Nav, OverlayTrigger, Popover } from 'react-bootstrap';
import { RiLogoutCircleRFill } from 'react-icons/ri';
import { FaBookOpen } from "react-icons/fa";
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { HomeOutlined } from '@ant-design/icons';
import { IoMdContacts } from "react-icons/io";
import { useContext, useState, useEffect } from 'react';
import UserContext from './UserContext';
import { CgProfile } from 'react-icons/cg';
import { message } from 'antd';

const NavbarCom = () => {
  const navigate = useNavigate(); 
  const { login, setLogin } = useContext(UserContext);
  const [userId, setUserId] = useState<string | null>(null);

  // Check for userId in localStorage to determine if the user is logged in
  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setUserId(storedUserId);
      setLogin(true); // Mark as logged in if userId exists
    } else {
      setLogin(false); // Mark as logged out
    }
  }, [setLogin]);

  const handleGetStarted = () => {
    if (userId) {
      // If the user is logged in, navigate to the splitter page
      navigate('/splitter');
    } else {
      // If the user is not logged in, navigate to the login page
      navigate('/login');
    }
  };

  const handleLogout = () => {
    // Clear localStorage and mark as logged out
    localStorage.removeItem('userId');
    setUserId(null);
    setLogin(false);
    message.success('Logged out successfully');
    navigate('/login');
  };

  const popover = (
    <Popover id='popover-basic'>
      <Popover.Body>
        <Link className='d-block btn d-flex' to='/profile'>
          <p className='pe-2'><CgProfile /></p>Profile
        </Link>
        <span className='d-block btn d-flex' onClick={handleLogout}>
          <p className='pe-2'><RiLogoutCircleRFill /></p>Logout
        </span>
      </Popover.Body>
    </Popover>
  );

  return (
    <div>
      <Nav>
        <Navbar collapseOnSelect expand="lg" className="bg-body-dark navbar-expand-xxl w-100">
          <Navbar.Brand className='text-primary ps-5 mt-2'>
            <h2>Splitify<img src='https://cdn-icons-png.freepik.com/512/8436/8436281.png' width={40} className="ps-1" /></h2>
          </Navbar.Brand>
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
              <NavLink to="/contact" className={({ isActive }) =>
                isActive
                  ? 'nav-link bg-primary rounded-4 ms-lg-5 mt-4 mb-3 ps-3 pe-3 text-light active'
                  : 'nav-link text-primary mt-4 ms-5'
              }><IoMdContacts className='pe-2 fs-3' />
                Contact
              </NavLink>
              <div style={{ display: 'flex', marginLeft: '550px' }}>
                <OverlayTrigger trigger="click" placement='bottom' overlay={popover}>    
                  <div className='d-flex' style={{ height: 40, marginTop: '25px' }}>
                    <img src='' style={{ borderRadius: 25, width: 40, backgroundColor: 'grey' }} />
                  </div> 
                </OverlayTrigger>
                
                <div>
                  <button className='p-2 mt-4 ms-5 text-light bg-primary rounded' onClick={handleGetStarted}>
                    Get Started
                  </button>
                </div>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Nav>
    </div>
  );
};

export default NavbarCom;
