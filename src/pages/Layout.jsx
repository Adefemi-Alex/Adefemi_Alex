import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
const Layout = () => {
  return (
    <div className="bg-slate-900 ">
      <Navbar />
      <Outlet />
    </div>
  )
}

export default Layout
