import React from 'react'
import { navs } from '../api/navs'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='px-6 flex justify-between items-center py-4'>
      <div className="w-9 h-9 bg-green-700 rounded-full"></div>
        <ul className='flex list-none w-fit bg-gray-700 rounded-full'>
            {navs.map(({name, link}) =>{
              return (

                <li className='px-2 text-sm py-1 text-zinc-300'>
                    <NavLink href={link}>{name}</NavLink>
                </li>
          )
            })}
        </ul>
    </nav>
  )
}

export default Navbar
