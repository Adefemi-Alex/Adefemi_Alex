import React from 'react'
import { navs } from '../api/navs'
import { useLocation } from 'react-router';

import { FaTimes } from "react-icons/fa";

import "aos/dist/aos.css";
const MobileNav = (props) => {
    const location = useLocation();
  return (
    <>
      <div className='flex fixed top-0 left-0 w-full h-screen md:hidden  font-medium  shadow-lg shadow-zinc-800 ring-1 z-50 '>  
        {/* bg-white/90 ring-zinc-900/5 text-zinc-800*/}
        <ul className="w-1/2 flex z-20 flex-col justify-center space-y-12 items-center bg-zinc-800 text-zinc-200"
         data-aos="fade-right"
        >
          {navs.map(({name, link}, index) =>{
            return (
              <li key={link}
              onClick={() => props.setModal(false)}
              data-aos="zoom-in"
              data-aos-delay={150 * index}>
                <a href={link} className={`relative block px-3 text-sm py-2 transition  
                  ${location.pathname == link && "text-teal-400"}`}>{name}
                </a>
              </li>
            )
          })}
        </ul>
        <div className="bg-black/75 w-1/2 h-full relative" onClick={() => props.setModal(false)}
        data-aos="fade-right"
        data-aos-delay="150">
        <FaTimes size={26} className='text-zinc-100 absolute top-6 right-5'/>
        </div>
        </div>
    </>
  )
}

export default MobileNav
