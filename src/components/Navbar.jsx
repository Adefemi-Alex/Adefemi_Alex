import React, { useState } from 'react'
import { navs } from '../api/navs'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { LuMoonStar } from "react-icons/lu";
import { IoMdArrowDropdown } from "react-icons/io";
import img1 from '../assets/img1.jpg'
const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className='px-6 md:px-12 lg:px-16 flex justify-between items-center py-6'>
      <Link to="/" className="block">
      <div className="flex space-x-1 items-center">
        <div className="w-11 h-11 bg-zinc-800 rounded-full">
          <img src={img1} className='rounded-full w-full p-1 border-zinc-500 object-cover' alt="" />
        </div>
        <h1 className='text-xl font-bold text-zinc-100'>Alex Adefemi</h1>

      </div>
      </Link>
        <ul className='hidden md:flex rounded-full  px-3 space-x-4 font-medium  shadow-lg shadow-zinc-800/5 ring-1  backdrop-blur bg-zinc-800/90 text-zinc-200 ring-white/10'>  
        {/* bg-white/90 ring-zinc-900/5 text-zinc-800*/}
            {navs.map(({name, link}) =>{
              return (

                <li key={link}>
                    <NavLink to={link} className={`relative block px-3 text-sm py-2 transition hover:text-teal-500 dark:hover:text-teal-400  ${location.pathname == link && "text-teal-400"}`}>{name}</NavLink>
                </li>
          )
            })}
        </ul>
        <div className="flex space-x-2 md:space-x-0">

        <div className='flex md:hidden space-x-1 items-center justify-between group cursor-pointer rounded-full  px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1  backdrop-blur transition text-zinc-400 bg-zinc-800/90 ring-white/10 hover:ring-white/20'
        onClick={toggleMenu}>
          <p>Menu</p>
          <IoMdArrowDropdown size={19} />
        </div>  {/*bg-white/90 ring-zinc-900/5 */}
        <div className='group cursor-pointer rounded-full  px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1  backdrop-blur transition bg-zinc-800/90 ring-white/10 hover:ring-white/20'>  {/*bg-white/90 ring-zinc-900/5 */}
          <LuMoonStar size={20} className='text-zinc-300' />
        </div>
        </div>
    
    </nav>
  )
}

export default Navbar
