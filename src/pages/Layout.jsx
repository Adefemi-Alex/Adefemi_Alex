import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Layout = () => {
  return (
    <div className="h-full w-full relative">
      <Navbar />
      <div className="pt-32">
        <Outlet /> 
      </div>
      <Footer />
    </div>
  )
}

export default Layout
