import { useContext, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import UserContext from './UserContext';

const NavBar = () => {

    const navigate2 = useNavigate(); //const variable for useNavigate.
  const navigate = useNavigate();
  const [userExist, setUserExist] = useState();
  // const { setLogin } = useContext(UserContext)


  
  const handleButtonClick = () => {
    let user: any = localStorage.getItem("userId")
    // console.log("user ",user);

    setUserExist(user)
    if (user != null) {
      navigate('/checkNavRes')
    } else {
      navigate2("/login")
    }
  };




  const nav1 = useNavigate();

  const handleprofile = () => {
    nav1('/signup')
  }
  return (
    

<nav className="bg-white  w-full z-20 sticky top-0  shadow-md  ">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <span className="self-center text-3xl font-semibold whitespace-nowrap text-black">SPLITIFY</span>
  </a>
  <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button type="button" className="text-white bg-black   focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center " onClick={handleButtonClick}>Get started</button>
      <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white   dark:border-gray-700">
      <li>
       <Link to={'/'}> <span className="block py-2 px-3 text-black bg-black  rounded md:bg-transparent md:text-black  md:p-0 " aria-current="page">Home</span></Link>
      </li>
      <li>
     <Link to={'/aboutus'}> <span className="block py-2 px-3 text-black bg-black  rounded md:bg-transparent md:text-black  md:p-0 " aria-current="page">AboutUs</span></Link>
      </li>
      <li> 
      <Link to={'/contectus'}><span className="block py-2 px-3 text-black bg-black  rounded md:bg-transparent md:text-black  md:p-0 " aria-current="page">Contact</span></Link>
      </li>
      
    </ul>
  </div>
  </div>
</nav>

  )
}

export default NavBar