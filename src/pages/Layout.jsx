import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Layout = () => {
  return (
    <div className="bg-zinc-900 h-full border-x-[0.4px] border-x-gray-500">
      <Navbar />
      <Outlet /> 
      <Footer />
    </div>
  )
}

export default Layout
