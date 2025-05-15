import React from 'react';
import portraitImage from '../assets/img1.jpg'; // Adjust the import based on your setup
import { CiWavePulse1 } from 'react-icons/ci';
import 'aos/dist/aos.css';
import DecryptedText from '../blocks/DecryptedText';
import ScrollReveal from '../blocks/ScrollReveal';
const About = () => {
  return (
    <main className='pt-40 px-6 md:px-12' id='about'>
     
      <div className="flex space-x-2 justify-center">
        <CiWavePulse1 size={23} className='text-theme' />
        <h4 className='text-3xl text-theme'>About me</h4>
        {/* <CiWavePulse1 size={23} /> */}
      </div>
        <div className="text-lg my-6">
          <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={5}
            blurStrength={10}
          >
            Highly skilled Software Engineering professional with 2+ years of experience building dynamic and responsive websites. Proven ability to develop parallel processing applications and 
            integrating DevOps practices to streamline workflows. Holds a Certificate of Advanced Diploma in Software Engineering from Aptech Computer Education.
          </ScrollReveal>
          
        </div>
    </main>
  );
};

export default About;


