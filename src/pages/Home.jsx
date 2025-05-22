import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";
import { IoSparklesOutline } from 'react-icons/io5';
import About from './About';
import Img1 from "../assets/img1.jpg";
import Img2 from "../assets/img2.jpg";
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import SplitText from '../blocks/SplitText';
import 'aos/dist/aos.css';
import Typewriter from 'typewriter-effect';
import DecryptedText from '../blocks/DecryptedText';
import RotatingText from '../blocks/RotatingText';
import { Roles } from './Roles';
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
        
        <div className="px-6 md:px-12 pt-11 flex justify-between items-center w-full">
          <div className="w-1/2">

          
            <h1 className="text-5xl font-bold tracking-tight text-zinc-100 sm:text-5xl ">
            <span className='text-[1.2rem] text-zinc-500 tracking-wide'>Hi,i&#x27;m</span> <span className="text-theme">
            <SplitText
              text="Alex Adefemi"
              className=""
              delay={150}
              animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
              animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
              // onLetterAnimationComplete={handleAnimationComplete}
            />
            </span>
            </h1>
            {/* <Typewriter
              options={{
                strings: ["Software Developer", "Mobile Developer", "Designer"],
                
                autoStart: true,
                loop: true,
                delay: 100,
                deleteSpeed: 2,
              }} /> */}
            
          <p className="mt-6 text-2xl text-zinc-200"> 
    I'm a software 
    <span className='inline-block mx-1'>
        <RotatingText
            texts={['Developer', 'Software Engineer', 'Problem Solver']}
            mainClassName="inline px-1 bg-theme text-black overflow-hidden py-0.5 justify-center rounded-lg w-[200px]"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
        />
    </span>
    with a passion for creating innovative solutions and pushing the <span className='text-theme'>boundaries</span> of what's possible<span className='text-theme'>.</span>
</p>

            <div className="mt-6 flex items-center space-x-5">
              <a href="https://github.com/Adefemi-Alex" target='_blank'>
                <FaGithub size={23} className='text-zinc-200 ' />
              </a>
              <a href="https://www.linkedin.com/in/alex-adefemi-848abb269" target='_blank'>
                <FaLinkedin size={23} className='text-zinc-200 ' />
              </a>
              <div className="cursor-pointer hover:bg-theme hover:scale-95 transition-all ease-in-out  flex items-center relative text-zinc-950 px-3 py-1 bg-slate-100 before:absolute before:border-b-2 before:border-r-2 before:border-slate-100 before:w-full before:h-full before:-z-20 before:-bottom-2 before:left-2">
                <p className='text-lg'>Download CV</p>
                <GoArrowUpRight size={20} />
              </div>
            </div>
          </div>
          <div className="flex justify-end w-1/2 ">
              
            <div className="w-[350px] h-[350px] relative  rounded-full outline outline-1 outline-theme bg-zinc-900 " data-aos="fade-down">
              <IoSparklesOutline size={20} className='text-theme absolute -left-8 top-1' data-aos="fade-left" data-aos-delay="200" />
              <IoSparklesOutline size={20} className='text-theme absolute -right-8 bottom-1' data-aos="fade-right" data-aos-delay="300"/>
              <div className="absolute space-y-16 w-full h-full top-10 -left-8 -z-20">
                <div className=" bg-theme w-[calc(100%+50px)] h-1 -rotate-45  rounded-3xl"></div>
                <div className=" bg-theme w-[calc(100%+60px)] h-1 -rotate-45  rounded-3xl"></div>
                <div className=" bg-theme w-[calc(100%+70px)] h-1 -rotate-45  rounded-3xl"></div>
                <div className=" bg-theme w-[calc(100%+50px)] h-1 -rotate-45  rounded-3xl"></div>
                <div className=" bg-theme w-[calc(100%+50px)] h-1 -rotate-45  rounded-3xl"></div>

              </div>
              {/* <div className="absolute bg-theme w-1 rotate-45 h-[370px] bottom-16 right-60 rounded-3xl -z-20"></div>
              <div className="absolute bg-theme w-1 rotate-45 h-[400px] bottom-16 right-44 rounded-3xl -z-20"></div>
              <div className="absolute bg-theme w-1 rotate-45 h-[400px] -bottom-9 right-44 rounded-3xl -z-20"></div>
              <div className="absolute bg-theme w-1 rotate-45 h-[600px] -bottom-16 right-44 rounded-3xl -z-20"></div> */}
              <img src={Img2} alt="Alex" className='w-full h-full rounded-full  object-cover' />
            </div>
          </div>
        </div>
      </section>

      {/* <section className="mt-16 sm:mt-20  relative h-80 md:h-72">
        <div className="flex justify-center gap-5 -left-24  py-4 sm:gap-8 absolute animate-scroll">
          {[...Array(images.length)].map((_, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={150 * index} className={` w-52 md:w-64 ${index % 2 === 0 ? '-rotate-4' : 'rotate-2'} rounded-2xl transition-all duration-300 hover:scale-125 cursor-pointer hover:z-20 hover:rotate-0`}>
              <img alt="My Pictures" src={images[index]} className="h-full w-full object-cover rounded-2xl" loading="lazy" style={{ color: "transparent" }} />
            </div>
          ))}
        </div>
      </section> */}

      <About />
      <Roles />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
};

export default Home;