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
  const navigate2 = useNavigate();
  const handleButtonClick = () => {
    const loggedInUser = localStorage.getItem('loggedInUser');

    if (loggedInUser) {
      navigate2('/splitter');
    } else {
      navigate2('/login');
    }
  };

  const navStyle = { textDecorationLine: 'none', marginLeft: '30px' };

  return (
    <div className='card1 container' style={{ flexDirection: 'row', display: 'flex', gap: '200px',justifyContent:'center', marginTop:'20px', padding:'18px'}}>
      <div >
        {/* <img src='/images.png' width={50} style={{ paddingTop: '5px', paddingLeft: '5px' }} /> */}
        <p style={{ color: 'blue', float: 'left', fontSize: '38px' }}>Splitify</p>
      </div>
      <Nav style={{ textAlign: 'center', paddingTop: '25px' }}>
        <NavLink to='/' style={navStyle} className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home</NavLink>
        <NavLink to='/aboutus' style={navStyle} className={({ isActive }) => (isActive ? 'active' : 'inactive')}>About Us</NavLink>
        <NavLink to='/blog' style={navStyle} className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Blog</NavLink>
        <NavLink to='/Contact' style={navStyle} className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Contact</NavLink>
        {/* <NavLink to='/register' style={navStyle} className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Register</NavLink> */}
      </Nav>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px', fontSize: '20px', color: 'black',marginRight:'-150px' }}>
        <p style={{ fontSize: '20px', paddingTop: '30px' }}><RiAccountCircleLine /></p>
        <p style={{ cursor: 'pointer', paddingTop: '25px' }} onClick={handleLogout}>Logout</p>

      </div>
      <div>
        <button style={{ borderRadius: '20px', borderColor:'slategray', fontSize: '15px', backgroundColor:'transparent', color: 'black', padding:'10px 15px 10px 15px', marginTop:'20px'}} onClick={handleButtonClick}>Get Start</button>
      </div>

    </div>
  )
}

export default NavbarCom