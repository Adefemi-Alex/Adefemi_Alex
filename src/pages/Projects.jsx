import React from 'react';
import projectsData from '../api/projects';

import { FaGithub } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";

import 'aos/dist/aos.css';
const Projects = () => {
  return (
    <section className='relative' id='projects'>
      <h2 className='pl-9 text-4xl font-bold text-center text-zinc-100'>Projects</h2>
      <div className="px-9 py-2 md:py-16 mt-10 md:mt-0 h-full">
        <div className="mt-6 space-y-12">  {/* grid md:grid-cols-2 lg:grid-cols-3 gap-8 */}
          {projectsData.map((item, index) => (
            <div key={item.name} className="w-full relative flex" data-aos="fade-up" data-aos-delay={150 *index}>
              <div className="w-1/2 h-full ">
                <img src={item.screenshot} alt={item.name} className='w-full h-full object-contain  ' />
              </div>
              <div className="w-12 h-12 rounded-full ring-1 ring-zinc-500 absolute -top-2 -left-4">
                <img src={item.img} className='w-full h-full p-2 object-cover rounded-full bg-zinc-700' alt={item.name} />
              </div>
              
              <div className="text-zinc-300 bg-zinc-800 px-5 py-5 w-1/2">
                <p className='font-semibold text-md'>{item.name}</p>
                <p className='font-semibold text-md text-zinc-400 text-sm'>{item.info}</p>
                <div className="flex justify-between mt-2">
                <a href={item.link} target="_blank" rel="noopener noreferrer" className='font-semibold text-md text-zinc-500  hover:text-white flex space-x-2'>
                  {/* <p className="text-nowrap">Code</p> */}
                  <FaGithub size={20} />
                  
                </a>
                <a href={item.link} target="_blank" rel="noopener noreferrer" className='font-semibold text-md text-zinc-500  hover:text-white flex space-x-2'>
                  <p className="text-nowrap">View </p>
                  <IoEyeSharp size={24} />
                  
                  
                </a>

                </div>
              </div>
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