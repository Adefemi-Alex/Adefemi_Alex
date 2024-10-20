import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './pages/Layout'
import Home from './pages/Home/Home'
import About from './pages/About'


function App() {
  return (
    <div className='App bg-black px-14 overflow-hidden'>
      <Routes>
        <Route  path='/' element={<Layout />}
        >
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
