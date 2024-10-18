import { Outlet } from "react-router-dom"
// import NavbarCom from "./NavbarCom"
import Footer from "./Footer"
import NavBar from "./NavBar"

const MainLayout = () => {
  return (
    <>
        {/* <NavbarCom/> */}
        <NavBar/>
        <Outlet/>
        <Footer/>
    </>
  )
}
                                                                                                             
export default MainLayout