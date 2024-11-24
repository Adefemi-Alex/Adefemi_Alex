import React from 'react';
import skillsData from '../api/skillsData';
import { useWindowSize } from 'react-haiku';
const Skills = () => {
  const { width } = useWindowSize();
  return (
    <section className={`${width >= 768 && "gradient-sides"}  relative py-16 md:py-0`} id='skills'>
      <h2 className='pl-9 text-4xl font-bold text-center text-zinc-100'>Skills</h2>
      <div className="px-9  md:py-16 mt-7 md:mt-0 h-full overflow-hidden">
        <div className={`${width >= 768 && "scrolling-carousel"} grid md:flex grid-cols-2 gap-4 whitespace-nowrap md:space-x-10 animate-scroll`}>
          {skillsData.slice(0, 8).map(item => (
            <div key={item.name} className="inline-block md:rounded-full text-zinc-300 bg-zinc-800 py-3 px-5  transition-transform transform hover:scale-105"
            >
              <div className="flex justify-start items-center">
                <div className="w-9 h-9  overflow-hidden">
                  <img src={item.img} className='w-full h-full p-1 object-cover' alt={item.name} />
                </div>
                <p className='font-semibold text-md'>{item.name}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={`${width >= 768 && "scrolling-carousel-rev"} grid md:flex grid-cols-2 gap-4 whitespace-nowrap md:space-x-10 mt-2 animate-scroll`}>
          {skillsData.slice(8, skillsData.length).map(item => (
            <div key={item.name} className="inline-block md:rounded-full text-zinc-300 bg-zinc-800 py-3 px-5  transition-transform transform hover:scale-105">
              <div className="flex justify-start items-center">
                <div className="w-9 h-9  overflow-hidden">
                  <img src={item.img} className='w-full h-full p-1 object-cover' alt={item.name} />
                </div>
                <p className='font-semibold text-md'>{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrolling-carousel {
          animation: scroll 20s linear infinite;
        }
        .scrolling-carousel-rev {
          animation: scrollRev 20s linear infinite;
        }

        .scrolling-carousel:hover, .scrolling-carousel-rev:hover{
          animation-play-state: paused; /* Pause on hover */
        }
       
        @keyframes scroll{
          0% { transform: translateX(70%); }
          100% { transform: translateX(-40%); }
        }
        @keyframes scrollRev{
          0% { transform: translateX(-20%); }
          100% { transform: translateX(60%); }
        }
      `}</style>
    </section>
  );
}

export default Skills;