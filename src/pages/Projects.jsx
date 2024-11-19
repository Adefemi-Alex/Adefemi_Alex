import React from 'react';
import projectsData from '../api/projects';

const Projects = () => {
  return (
    <section className='relative' id='projects'>
      <h2 className='pl-9 text-4xl font-bold text-center text-zinc-100'>Projects</h2>
      <div className="px-9 py-16 mt-24 md:mt-0 h-full">
        <div className="mt-6 grid grid-cols-2 gap-8">
          {projectsData.map(item => (
            <div key={item.name} className="w-full relative">
              <div className="w-full">
                <img src={item.screenshot} alt={item.name} className='w-full h-full object-contain rounded-[12px] rounded-b-none' />
              </div>
              <div className="w-12 h-12 rounded-full ring-1 ring-zinc-500 absolute -bottom-2 -left-4">
                <img src={item.img} className='w-full h-full p-2 object-cover rounded-full bg-zinc-700' alt={item.name} />
              </div>
              
              {/* <div className="flex justify-between mt-4  text-zinc-300 bg-zinc-800">
                <p className='font-semibold text-md'>{item.name}</p>
                <a href={item.link} target="_blank" rel="noopener noreferrer" className='font-semibold text-md text-zinc-500 hover:text-white'>
                  View
                </a>
              </div> */}
              {/* <div className="py-6  ">
                {item.info}
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;