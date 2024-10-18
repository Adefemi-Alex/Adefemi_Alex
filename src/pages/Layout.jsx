import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
const Layout = () => {
  return (
    <div className="bg-zinc-900 h-full border-x-[0.4px] border-x-gray-700">
      <Navbar />
      <Outlet /> 
    </div>
  )
}

export default Layout
