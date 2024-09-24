import { useEffect, useState } from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import MainLayout from './Components/MainLayout';
import Register from './Components/Register';
import Login from './Components/Login';
import About from './Components/About';
import Contact from './Components/Contact';
import Splitter from './Components/Splitter';
// import Footer from './Components/Footer';
import Blog from './Components/Blog';



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
// {
//   path:'footer',
//   element:<Footer/>
// },
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
    path:'/blog',
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