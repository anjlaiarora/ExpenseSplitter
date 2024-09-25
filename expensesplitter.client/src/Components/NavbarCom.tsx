// import { useEffect, useState } from 'react'
import { Nav } from 'react-bootstrap';
import { RiAccountCircleLine } from 'react-icons/ri';
import { NavLink} from 'react-router-dom';


const NavbarCom = () => {
  

  const navStyle = { textDecorationLine: 'none', marginLeft: '60px',marginBottom:'18px' };

  return (
    <div className='card1' style={{ display: 'flex', gap: '150px',justifyContent:'center', marginTop:'2px', width:'1350px'}}>
      <div >
        {/* <img src='/images.png' width={50} style={{ paddingTop: '5px', paddingLeft: '5px' }} /> */}
        <p style={{ color: 'blue', float: 'left', fontSize: '38px' }}>Splitify</p>
      </div>
      <Nav style={{ textAlign: 'center', paddingTop: '18px' }}>
        <NavLink to='/' style={navStyle} className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home</NavLink>
        <NavLink to='/aboutus' style={navStyle} className={({ isActive }) => (isActive ? 'active' : 'inactive')}>About Us</NavLink>
        <NavLink to='/blog' style={navStyle} className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Blog</NavLink>
        <NavLink to='/Contact' style={navStyle} className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Contact</NavLink>
        {/* <NavLink to='/register' style={navStyle} className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Register</NavLink> */}
      </Nav>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px', fontSize: '20px', color: 'black',marginRight:'-150px' }}>
        <p style={{ fontSize: '20px', paddingTop: '15px' }}><RiAccountCircleLine /></p>
        <p style={{ cursor: 'pointer', paddingTop: '15px' }} >Logout</p>

      </div>
      <div>
        <button style={{ borderRadius: '20px', borderColor:'slategray', fontSize: '15px', backgroundColor:'transparent', color: 'black', padding:'10px 15px 10px 15px', marginTop:'10px'}}>Get Start</button>
      </div>

    </div>
  )
}

export default NavbarCom