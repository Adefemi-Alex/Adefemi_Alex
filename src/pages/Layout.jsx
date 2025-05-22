import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ClickSpark from '../blocks/ClickSpark'
const Layout = () => {
  return (
    <div className="h-full w-full relative">
      <ClickSpark
        sparkColor='#B5FF6D'
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <Navbar />
        <div className="pt-32">
          <Outlet /> 
        </div>
        <Footer />
        {/* Your content here */}
      </ClickSpark>
    </div>
  )
}

export default Layout
