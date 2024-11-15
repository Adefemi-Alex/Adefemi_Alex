import React from 'react'
import skillsData from '../api/skillsData'

const Projects = () => {
  return (
    <section className=' relative' id='projects'>
    <h2 className='pl-9 text-4xl font-bold text-center text-zinc-100'>Projects</h2>
    <div className="px-9 py-16 mt-24 md:mt-0 h-full ">
        <div className="mt-6 grid grid-cols-3  gap-8">
          {skillsData.map(item => (
            <div key={item.name} className="w-full  text-zinc-300 bg-zinc-800 py-4 px-3 ">
              <div className="w-12 h-auto rounded-full ring-1 ring-zinc-500  ">
                <img src={item.img} className='w-full h-full p-2 object-cover rounded-full bg-zinc-700 ' alt="" />
              </div>
              <div className="flex justify-between mt-4">
              <p className='font-semibold text-md '>{item.name}</p>
              <p className='font-semibold text-[0.75rem] text-zinc-500'>{item.date}</p>
              </div>
              <div className="py-6 px-2">
              {item.info}
              </div>
            </div>
          ))}
        </div>
    </div>
  </section>
  )
}

export default Projects
