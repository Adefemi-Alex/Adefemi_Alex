import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import Img1 from "../../assets/img1.jpg";
import Img2 from "../../assets/img2.jpg";
import HomeWorks from './HomeWorks';


const Home = () => {
    const images =[
        Img1,
        Img2,
        Img1,
        Img2,
        Img1
        
    ]
  return (
    <main>
      <section className="sm:px-8 mt-9">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-6">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className="max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
                  Software Engineer and Tech Enthusiast in Ogun, NG.
                </h1>
                <p className="mt-6 text-base  text-zinc-400"> {/* text-zinc-600 */}
                  I&#x27;m Alex Adefemi, a full stack developer and software engineer. Passionate about crafting digital solutions, I have been honing my skills and expanding my knowledge in web development, from frontend design to backend architecture. I'm driven by the ever-evolving tech landscape and love building products that make a difference.
                </p>

                <div className="mt-6 flex gap-6">
                  <FaGithub size={23} className='text-zinc-400 ' />
                  <FaLinkedin size={23} className='text-zinc-400 ' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16 sm:mt-20 bg-zinc-900 relative h-80 md:h-96">
        <div className="flex justify-center gap-5 -left-24 py-4 sm:gap-8 absolute ">
          {[...Array(images.length)].map((_, index) => (
            <div key={index} className={` w-52 md:w-72 ${index % 2 === 0 ? '-rotate-2' : 'rotate-2'} rounded-2xl transition-all duration-300 hover:scale-105 hover:rotate-0`}>
              <img alt="" src={images[index]} className="h-full w-full object-cover rounded-2xl" loading="lazy" style={{ color: "transparent" }} />
            </div>
          ))}
        </div>
      </section>

      <HomeWorks />
    </main>
  );
};

export default Home;