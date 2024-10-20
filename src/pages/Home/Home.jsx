import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import Images from "../../assets/yep.webp"
const Home = () => {
  return (
    <main className=''>
    <section className="sm:px-8 mt-9">
        <div className="mx-auto max-w-7xl lg:px-8">
            <div className="relative px-4 sm:px-8 lg:px-6">
                <div className="mx-auto max-w-2xl lg:max-w-5xl">
                    <div className="max-w-2xl">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">Software Engineer and Tech Enthusiast in Ogun, NG.</h1>
                    <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
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
    <section className="mt-16 sm:mt-20 bg-zinc-900 relative h-screen">
        <div className=" flex justify-center gap-5  -left-24 py-4 sm:gap-8 absolute ">
            <div className=" w-72 sm:w-72 rotate-2 rounded-2xl">
                <img alt="" src={Images} className="h-full w-full object-cover rounded-2xl" loading="lazy" style={{color:"transparent"}}/>
            </div>
            <div className=" w-72 sm:w-72 -rotate-2 rounded-2xl">
                <img alt="" src={Images} className="h-full w-full object-cover rounded-2xl" loading="lazy" style={{color:"transparent"}}/>
            </div>
            <div className=" w-72 sm:w-72 rotate-2 rounded-2xl">
                <img alt="" src={Images} className="h-full w-full object-cover rounded-2xl" loading="lazy" style={{color:"transparent"}}/>
            </div>
            <div className=" w-72 sm:w-72 -rotate-2 rounded-2xl">
                <img alt="" src={Images} className="h-full w-full object-cover rounded-2xl" loading="lazy" style={{color:"transparent"}}/>
            </div>
            <div className=" w-72 sm:w-72 rotate-2 rounded-2xl">
                <img alt="" src={Images} className="h-full w-full object-cover rounded-2xl" loading="lazy" style={{color:"transparent"}}/>
            </div>
        </div>
    </section>
    
    <section className="sm:px-8 mt-24 md:mt-28">
        <div className="mx-auto max-w-7xl lg:px-8">
            <div className="relative px-4 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-2xl lg:max-w-5xl">
                    <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
                        <div className="space-y-10 lg:pl-16 xl:pl-24">
                            <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
                                <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                                    <svg viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" className="h-6 w-6 flex-none">
                                        <path d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z" className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"></path>
                                        <path d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5" className="stroke-zinc-400 dark:stroke-zinc-500"></path>
                                    </svg>
                                    <span className="ml-3">Work</span>
                                </h2>
                                <ol className="mt-6 space-y-4">
                                    <li className="flex gap-4">
                                        <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                                            <img alt="" src={Images} width="200" height="200" decoding="async" data-nimg="future" className="h-7 w-7 rounded-full" loading="lazy" style={{color:"transparent"}}/>
                                        </div>
                                        <dl className="flex flex-auto flex-wrap gap-x-2">
                                            <dt className="sr-only">Company</dt>
                                            <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">Royal Labs, LLC</dd>
                                            <dt className="sr-only">Role</dt>
                                            <dd className="text-xs text-zinc-500 dark:text-zinc-400">Lead Software Engineer</dd>
                                            <dt className="sr-only">Date</dt>
                                            <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500" aria-label="2024 until 2024">
                                                <time dateTime="2024">2024</time>
                                                <span aria-hidden="true">—</span>
                                                <time dateTime="2024">2024</time>
                                            </dd>
                                        </dl>
                                    </li>
                                   
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </section>
</main>
  )
}

export default Home
