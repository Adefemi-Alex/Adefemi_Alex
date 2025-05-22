import React, { useState } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import { roles } from '../api/roles';
import InfiniteDecryptedText from '../blocks/InfiniteDecryptedText';
import DecryptedText from '../blocks/DecryptedText';

export const Roles = () => {
  const [active, setActive] = useState(null);
    const word = "u trguerhgu  wj rfuer  rhf hr  rfjiroif  rjfgoeruf  ijr fgoerfgiuergerug9  rh fgoierug8erugerg 9  fgeurfh8 r foeirue8rug9rug  ueri ug8 erogu  rgjoiruger8u  irugoergui rigujir gferfgier g9 o  rgfu 9rufg9ergue r9guer9gur9guer9gu   erug8eryg9eru9ergui9rug9rgu9wrp   rger8gu9ery9 rfuer9ger9 g  rgye8ryg9ergy9erg9rig9rig   rg8eryg8erg9r g   rg"
  const toggle = (index) => {
    setActive(active === index ? null : index);
  };
   
//   const decryptedTexts = [];

//     for (let i = 0; i < 13; i++) {
//         decryptedTexts.push(
//         // <InfiniteDecryptedText
//         //     text="Hello, this is a secret message!"
//         //     speed={200}
//         //     characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+"
//         //     className="revealed"
//         //     parentClassName="text-container"
//         //   />

//             <DecryptedText
//                 text="Customize me"
//                 speed={100}
//                 maxIterations={20}
//                 characters="ABCD1234!?"
//                 className="revealed"
//                 parentClassName="all-letters"
//                 encryptedClassName="encrypted"
//                 animateOn="view"
//                 revealDirection="center"
//             />
//         );
//     }
  return (
    <section className='py-20 px-6 md:px-16'>
      <h3 className='py-4 relative text-4xl tracking-wide font-bold text-zinc-300 before:w-28 before:h-1 before:rounded-full before:absolute before:bg-theme before:bottom-3 before:left-2'>
        What do I offer <span className='text-theme'>?</span>
      </h3>

      <div className="flex justify-between space-x-10">
        <div className="w-1/2 space-y-7">
          {roles.map(({ title, description, icon: Icons }, index) => (
            <div key={index} 
              className="rounded-xl cursor-pointer transition-all ease-in-out  outline outline-1 outline-slate-600 hover:bg-zinc-900 bg-[#171616] px-3 py-4"
              onClick={() => toggle(index)}>
              <div className="sub flex justify-between">
                <div className="flex items-center space-x-1">
                  <Icons size={23} className='text-theme' />
                  <p className='text-zinc-300 text-xl'>{title}</p>
                </div>
                <MdKeyboardArrowDown size={27} className='text-zinc-200 font-bold' />
              </div>
              <div className={`overflow-hidden transition-max-height duration-300 ease-in-out ${active === index ? 'max-h-fit opacity-100' : 'max-h-0 opacity-0'}`}>
                {active === index && (
                  <p className='text-zinc-400 text-lg pt-3'>
                    {description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="w-1/2 text-lg text-theme ">
          {/* {decryptedTexts} */}
           <DecryptedText
                text={word}
                speed={100}
                maxIterations={20}
                characters="ABCD1234!?"
                className="revealed"
                parentClassName="all-letters"
                encryptedClassName="encrypted"
                animateOn="view"
                revealDirection="center"
            />
        </div>
      </div>
    </section>
  );
};