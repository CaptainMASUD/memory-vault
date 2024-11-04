
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Navbar/Header'
import Footer from "../Footer/Footer"

function Layout() {
  return (
    <div>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
