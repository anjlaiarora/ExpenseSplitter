import { useEffect, useState } from 'react'
import { Nav } from 'react-bootstrap';
import { RiAccountCircleLine } from 'react-icons/ri';
import { NavLink, useNavigate } from 'react-router-dom';

interface User {
    id: number;
    name: string;
    email: string;
    // Add other relevant user fields
  };
  
  type LoggedInUserState = User | null;
const NavbarCom = () => {
    const [loggedInUser, setLoggedInUser] = useState<LoggedInUserState>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is logged in, otherwise redirect to login page
    if (!loggedInUser) {
      const savedUser = JSON.parse(localStorage.getItem('loggedInUser') || 'null') as User | null;
      if (savedUser) {
        setLoggedInUser(savedUser);
      } else {
        navigate('/login');
      }
    }
  }, [loggedInUser, navigate, setLoggedInUser]);
  
    const handleLogout = () => {
      localStorage.removeItem('loggedInUser');
      setLoggedInUser(null);
      navigate('/login');
    };

  const navStyle = { textDecorationLine: 'none', color:'white'};

  return (
    <div style={{ flexDirection: 'row', display: 'flex', gap: '340px', backgroundColor: 'black' }}>
       <div style={{ paddingLeft: '20px' }}>
          <img src='/images.png' width={50} style={{ paddingTop: '11px', paddingLeft: '5px' }} />
          <p style={{ float: 'left', fontFamily: 'cursive', color: 'white', fontSize: '25px', paddingLeft: '40px',paddingTop:'11px' }}>Splitify</p>
        </div>
        <Nav className='sticky-top flex-row' style={{gap:'50px', paddingTop:'5px', alignItems:'center'}}>
        <NavLink to='/' style={navStyle} className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home</NavLink>
        <NavLink to='/aboutus' style={navStyle} className={({ isActive }) => (isActive ? 'active' : 'inactive')}>About Us</NavLink>
        <NavLink to='/explore' style={navStyle} className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Explore</NavLink>
        <NavLink to='/Contact' style={navStyle} className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Contact</NavLink>
        {/* <NavLink to='/register' style={navStyle} className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Register</NavLink> */}
        </Nav>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px', fontSize: '20px', color: 'white', paddingRight:'5px' }}>
          <p style={{ fontSize: '20px', paddingTop: '18px' }}><RiAccountCircleLine /></p>
          <p style={{ cursor: 'pointer', paddingTop:'18px' }} onClick={handleLogout}>Logout</p>
        </div>
        </div>
  )
}

export default NavbarCom