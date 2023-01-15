import { Outlet } from "react-router-dom"
import Header from "./Header/Header"
import SideNav from "./SideNav/SideNav"
import "./Layout.scss"

export default function Layout() {
  return (
    <div className="layout">
      <div className="layout__topbar">
        <Header />
      </div>
      <div className="layout__navbar">
        <SideNav />
      </div>
      <main className="layout__main-container">
        <Outlet />
      </main>
    </div>
  )
}