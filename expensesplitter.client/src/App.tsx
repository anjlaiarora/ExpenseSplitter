// import { useEffect, useState } from 'react';
import './index.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import MainLayout from './Components/MainLayout';
// import About from './Components/About';
// import Blog from './Components/Blog';
import Signup from './Components/Signup';
import Login from './Components/Login';
// import Splitter  from './Components/Splitter';
import Profile from './Components/Profile';
import CheckNavRes from './Components/CheckNavRes';
import UserContext from './Components/UserContext';
import { useContext, useState } from 'react';
import AboutUs from './Components/AboutUs';
import ContectUs from './Components/ContectUs';





function App() {
  const [userData, setUserData] = useState({
    userName: '',
    email: '',
  });
  // const [userName , setUsername] = useState<string>('');
  // const [email, setEmail] = useState<string>('')

  //  const {form} = useContext(UserContext);
const router = createBrowserRouter([

// {
//   path:'footer',
//   element:<Footer/>
// },

{
  path:'signup',
  element:<Signup/>
},

{
  path:'/login',
  element:<Login />
},
{
  path:'/profile',
  element:<Profile/>
},
{
path:'/checkNavRes',
element:<CheckNavRes/>
},

{
  path:'/',
  element:<MainLayout/>,
  children:[{
    path:"/",
    element:<Dashboard/>
  },
  {
    path:'/aboutus',
    element:<AboutUs/>
  },
  // {
  //   path:'/blog',
  //   element:<Blog/>
  // },
  {
    path:'/contectus',
    element:<ContectUs/>
  },
  
]
}
])
  return (
    <UserContext.Provider value={{userData,setUserData}}>
    <>
    <div  className='mx-auto w-100 overflow-hidden font-semibold'>
      
    <RouterProvider router={router} >
      
    </RouterProvider>
    </div>

    </>
    </UserContext.Provider>
  );
}

export default App;