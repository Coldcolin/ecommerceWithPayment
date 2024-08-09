import { Outlet } from "react-router-dom"
import "./Layout.css"
import Header from "../Header"
import Hero from "../Hero"

const Layout = () => {
  return (
    <div className="Layout">
      <div className="LayoutHolder">
        <Header/>
        <Hero/>
        <Outlet/>
      </div>
    </div>
  )
}

export default Layout