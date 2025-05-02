import React from 'react'
import NavbarPage from '../Navbar'
import Footer from '../Footer'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
    <>
      <NavbarPage/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout
