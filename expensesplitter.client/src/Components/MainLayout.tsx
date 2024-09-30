import { Outlet } from "react-router-dom"
import NavbarCom from "./NavbarCom"
import Footer from "./Footer"

const MainLayout = () => {
  return (
    <>
    
        <NavbarCom/>
        <hr/>
        <Outlet/>
        <Footer/>
        
        {/* <CheckNavRes
        /> */}
    </>
  )
}

export default MainLayout