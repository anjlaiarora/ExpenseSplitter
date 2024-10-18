// import { useEffect, useState } from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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
import UserContext from './Components/UserContext';
import { useContext, useState } from 'react';


function App() {
   
  const [userName , setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('')

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
    element:<About/>
  },
  // {
  //   path:'/blog',
  //   element:<Blog/>
  // },
  {
    path:'/contact',
    element:<Contact/>
  },
  
]
}
])
  return (
    <UserContext.Provider value={{userName , setUsername, email, setEmail}}>
    <>
    <div  className='mx-auto w-100 overflow-hidden'>
      
    <RouterProvider router={router} >
      
    </RouterProvider>
    </div>

    </>
    </UserContext.Provider>
  );
}

export default App;