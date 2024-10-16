// import { useEffect, useState } from 'react';
import './index.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import MainLayout from './Components/MainLayout';
import About from './Components/About';
import Contact from './Components/Contact';
// import Blog from './Components/Blog';
import Signup from './Components/Signup';
import Login from './Components/Login';
// import Splitter  from './Components/Splitter';
import Profile from './Components/Profile';
import CheckNavRes from './Components/CheckNavRes';
import AboutUs from './Components/AboutUs';
import ContectUs from './Components/ContectUs';





function App() {
   
   
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
  element:<Login/>
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
    <>
    <div  className='mx-auto w-100 overflow-hidden'>
      
    <RouterProvider router={router}>
      
    </RouterProvider>
    </div>

    </>
  );
}

export default App;