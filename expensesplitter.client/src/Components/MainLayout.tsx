import { Outlet } from "react-router-dom"
import NavbarCom from "./NavbarCom"

const MainLayout = () => {
  return (
    <div>
        <NavbarCom/>
        <Outlet/>
        </div>
  )
}

export default MainLayout