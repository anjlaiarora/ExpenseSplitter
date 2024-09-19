import { useEffect, useState } from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './Components/DashBoard';
import MainLayout from './Components/MainLayout';
import Register from './Components/Register';
import Login from './Components/Login';
import About from './Components/About';
import Explore from './Components/Explore';
import Contact from './Components/Contact';
import Splitter from './Components/Splitter';
import Footer from './Components/Footer';

// interface Forecast {
//     date: string;
//     temperatureC: number;
//     temperatureF: number;
//     summary: string;
// }

interface User {
    id: number;
    name: string;
    email: string;
    // Add any other properties your user might have
  };
function App() {
   
    const [userLogged, setUserLogged] = useState<User | null>(() => {
        const savedUser = localStorage.getItem("userLogged");
        return savedUser ? JSON.parse(savedUser) : null;
      });

  useEffect(() => {
    localStorage.setItem("userLogged", JSON.stringify(userLogged));
  }, [userLogged]);

//   const logIn = () => setUserLogged(true);
//   const logOut = () => setUserLogged(false);
  
const router = createBrowserRouter([
{
  path:'/register',
  element: <Register/>
},
{
  path:'/login',
  element:<Login/>
},
{
  path:'splitter',
  element:<Splitter/>
},
{
  path:'footer',
  element:<Footer/>
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
    element:<Explore/>
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
    <RouterProvider router={router}>
      
    </RouterProvider>
      

    </>
  );
}

export default App;