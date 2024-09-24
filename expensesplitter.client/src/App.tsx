import { useEffect, useState } from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import MainLayout from './Components/MainLayout';


import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Blog from './Components/Blog';
import Signup from './Components/Signup';
import Login from './Components/Login';




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
  path:'login',
  element:<Login/>
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
    element:<About/>
  },
  {
    path:'/explore',
    element:<Blog/>
  },
  {
    path:'/contact',
    element:<Contact/>
  }
]
}
])
  return (
    <>
    <div>
    <RouterProvider router={router}>
      
    </RouterProvider>
    </div>

    </>
  );
}

export default App;