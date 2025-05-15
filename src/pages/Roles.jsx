import React, { useState } from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
import { BiCalendarEdit } from 'react-icons/bi'
import { roles } from '../api/roles'
export const Roles = () => {
    const [active, setActive] = useState(null);

    const toggle = (index) => {
        setActive(active === index ? null : active !== null ? index : index); 
    }
  return (
    <section className='py-20 px-6 md:px-16'>

        <h3 className='py-4 relative text-4xl tracking-wide font-bold text-zinc-300 before:w-28 before:h-1 before:rounded-full before:absolute before:bg-theme before:bottom-3 before:left-2'>What do i offer<span className='text-theme'>?</span></h3>

        <div className="flex justify-between">
            <div className="w-1/2 space-y-7"> {/* wrapper for all items */}
                {roles.map(({ title, description, icon: Icons }, index) => {
                    return (
                        <div key={index} className="rounded-xl cursor-pointer transition-all ease-in-out h-fit outline outline-1 outline-slate-600 hover:bg-zinc-900 w-[500px] bg-[#171616] px-3 py-4"
                        onClick={() => toggle(index)}>
                            <div className="sub flex justify-between">
                                <div className="flex items-center space-x-1">
                                    {/* icon  */}
                                    <Icons size={23} className='text-theme' />
                                    {/* text */}
                                    <p className='text-zinc-300 text-xl'>{title}</p>
                                </div>
                                <MdKeyboardArrowDown size={27} className='text-zinc-200 font-bold' />
                            </div>
                            {active == index && <p className='text-zinc-400 text-lg pt-3'>{description}</p>}
                        </div>
                    );
                })}
            </div>
            <div className="w1/2"></div>
        </div>

    </section>
  )
}
