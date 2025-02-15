import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
const Layout = () => {
  return (
    <div className="bg-black text-white ">
    <Navbar/>
    <Outlet/>
    <Footer/>
    </div>  
  )
}
export default Layout