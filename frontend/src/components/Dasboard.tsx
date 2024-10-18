
import { Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import AboutUs from './AboutUs'
import '../App.css'
import ContectUs from './ContectUs'
import Footer from './Footer'



const Dasboard = () => {
  return (
    <>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about-us' element={<AboutUs/>}/>
          <Route path='/contect-us' element={<ContectUs/>}/>
        </Routes>
      <Footer/>
      </>
  )
}

export default Dasboard