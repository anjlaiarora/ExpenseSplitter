import { Outlet } from "react-router-dom"
import NavbarCom from "./NavbarCom"
import Footer from "./Footer"

const MainLayout = () => {
  return (
    <>
        <NavbarCom/>
        <Outlet/>
        <Footer/>
    </>
  )
}
                                                                                                             
export default MainLayout