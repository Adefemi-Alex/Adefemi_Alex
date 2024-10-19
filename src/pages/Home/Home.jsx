import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
const Home = () => {
  return (
    <main>
    <div className="sm:px-8 mt-9">
        <div className="mx-auto max-w-7xl lg:px-8">
            <div className="relative px-4 sm:px-8 lg:px-12">
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
                </div>2
            </div>
        </div>
    </div>
    {/* <div className="mt-16 sm:mt-20">
        <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
            <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
                <img alt="" sizes="(min-width: 640px) 18rem, 11rem" srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-1.56e26989.jpg&amp;w=16&amp;q=75 16w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-1.56e26989.jpg&amp;w=32&amp;q=75 32w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-1.56e26989.jpg&amp;w=48&amp;q=75 48w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-1.56e26989.jpg&amp;w=64&amp;q=75 64w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-1.56e26989.jpg&amp;w=96&amp;q=75 96w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-1.56e26989.jpg&amp;w=128&amp;q=75 128w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-1.56e26989.jpg&amp;w=256&amp;q=75 256w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-1.56e26989.jpg&amp;w=384&amp;q=75 384w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-1.56e26989.jpg&amp;w=640&amp;q=75 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-1.56e26989.jpg&amp;w=750&amp;q=75 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-1.56e26989.jpg&amp;w=828&amp;q=75 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-1.56e26989.jpg&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-1.56e26989.jpg&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-1.56e26989.jpg&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-1.56e26989.jpg&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-1.56e26989.jpg&amp;w=3840&amp;q=75 3840w" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-1.56e26989.jpg&amp;w=3840&amp;q=75" width="4032" height="3024" decoding="async" data-nimg="future" className="absolute inset-0 h-full w-full object-cover" loading="lazy" style="color:transparent"/>
            </div>
            <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl -rotate-2">
                <img alt="" sizes="(min-width: 640px) 18rem, 11rem" srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-7.ac70f9cd.jpg&amp;w=16&amp;q=75 16w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-7.ac70f9cd.jpg&amp;w=32&amp;q=75 32w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-7.ac70f9cd.jpg&amp;w=48&amp;q=75 48w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-7.ac70f9cd.jpg&amp;w=64&amp;q=75 64w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-7.ac70f9cd.jpg&amp;w=96&amp;q=75 96w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-7.ac70f9cd.jpg&amp;w=128&amp;q=75 128w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-7.ac70f9cd.jpg&amp;w=256&amp;q=75 256w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-7.ac70f9cd.jpg&amp;w=384&amp;q=75 384w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-7.ac70f9cd.jpg&amp;w=640&amp;q=75 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-7.ac70f9cd.jpg&amp;w=750&amp;q=75 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-7.ac70f9cd.jpg&amp;w=828&amp;q=75 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-7.ac70f9cd.jpg&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-7.ac70f9cd.jpg&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-7.ac70f9cd.jpg&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-7.ac70f9cd.jpg&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-7.ac70f9cd.jpg&amp;w=3840&amp;q=75 3840w" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-7.ac70f9cd.jpg&amp;w=3840&amp;q=75" width="1170" height="2052" decoding="async" data-nimg="future" className="absolute inset-0 h-full w-full object-cover" loading="lazy" style="color:transparent"/>
            </div>
            <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
                <img alt="" sizes="(min-width: 640px) 18rem, 11rem" srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.40477b62.jpg&amp;w=16&amp;q=75 16w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.40477b62.jpg&amp;w=32&amp;q=75 32w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.40477b62.jpg&amp;w=48&amp;q=75 48w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.40477b62.jpg&amp;w=64&amp;q=75 64w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.40477b62.jpg&amp;w=96&amp;q=75 96w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.40477b62.jpg&amp;w=128&amp;q=75 128w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.40477b62.jpg&amp;w=256&amp;q=75 256w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.40477b62.jpg&amp;w=384&amp;q=75 384w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.40477b62.jpg&amp;w=640&amp;q=75 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.40477b62.jpg&amp;w=750&amp;q=75 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.40477b62.jpg&amp;w=828&amp;q=75 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.40477b62.jpg&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.40477b62.jpg&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.40477b62.jpg&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.40477b62.jpg&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.40477b62.jpg&amp;w=3840&amp;q=75 3840w" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.40477b62.jpg&amp;w=3840&amp;q=75" width="3024" height="4032" decoding="async" data-nimg="future" className="absolute inset-0 h-full w-full object-cover" loading="lazy" style="color:transparent"/>
            </div>
            <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
                <img alt="" sizes="(min-width: 640px) 18rem, 11rem" srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-4.c907e390.jpg&amp;w=16&amp;q=75 16w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-4.c907e390.jpg&amp;w=32&amp;q=75 32w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-4.c907e390.jpg&amp;w=48&amp;q=75 48w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-4.c907e390.jpg&amp;w=64&amp;q=75 64w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-4.c907e390.jpg&amp;w=96&amp;q=75 96w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-4.c907e390.jpg&amp;w=128&amp;q=75 128w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-4.c907e390.jpg&amp;w=256&amp;q=75 256w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-4.c907e390.jpg&amp;w=384&amp;q=75 384w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-4.c907e390.jpg&amp;w=640&amp;q=75 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-4.c907e390.jpg&amp;w=750&amp;q=75 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-4.c907e390.jpg&amp;w=828&amp;q=75 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-4.c907e390.jpg&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-4.c907e390.jpg&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-4.c907e390.jpg&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-4.c907e390.jpg&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-4.c907e390.jpg&amp;w=3840&amp;q=75 3840w" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-4.c907e390.jpg&amp;w=3840&amp;q=75" width="3024" height="4032" decoding="async" data-nimg="future" className="absolute inset-0 h-full w-full object-cover" loading="lazy" style="color:transparent"/>
            </div>
            <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl -rotate-2">
                <img alt="" sizes="(min-width: 640px) 18rem, 11rem" srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-5.dcf361cd.jpg&amp;w=16&amp;q=75 16w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-5.dcf361cd.jpg&amp;w=32&amp;q=75 32w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-5.dcf361cd.jpg&amp;w=48&amp;q=75 48w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-5.dcf361cd.jpg&amp;w=64&amp;q=75 64w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-5.dcf361cd.jpg&amp;w=96&amp;q=75 96w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-5.dcf361cd.jpg&amp;w=128&amp;q=75 128w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-5.dcf361cd.jpg&amp;w=256&amp;q=75 256w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-5.dcf361cd.jpg&amp;w=384&amp;q=75 384w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-5.dcf361cd.jpg&amp;w=640&amp;q=75 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-5.dcf361cd.jpg&amp;w=750&amp;q=75 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-5.dcf361cd.jpg&amp;w=828&amp;q=75 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-5.dcf361cd.jpg&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-5.dcf361cd.jpg&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-5.dcf361cd.jpg&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-5.dcf361cd.jpg&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-5.dcf361cd.jpg&amp;w=3840&amp;q=75 3840w" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-5.dcf361cd.jpg&amp;w=3840&amp;q=75" width="4032" height="3024" decoding="async" data-nimg="future" className="absolute inset-0 h-full w-full object-cover" loading="lazy" style="color:transparent"/>
            </div>
        </div>
    </div> */}
    {/* <div className="sm:px-8 mt-24 md:mt-28">
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
                                            <img alt="" src="/_next/static/media/royal.ee2628c6.png" width="200" height="200" decoding="async" data-nimg="future" className="h-7 w-7 rounded-full" loading="lazy" style="color:transparent"/>
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
                                    <li className="flex gap-4">
                                        <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                                            <img alt="" src="/_next/static/media/buildspace.50e53bdd.png" width="200" height="200" decoding="async" data-nimg="future" className="h-7 w-7 rounded-full" loading="lazy" style="color:transparent"/>
                                        </div>
                                        <dl className="flex flex-auto flex-wrap gap-x-2">
                                            <dt className="sr-only">Company</dt>
                                            <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">Buildspace</dd>
                                            <dt className="sr-only">Role</dt>
                                            <dd className="text-xs text-zinc-500 dark:text-zinc-400">N &amp;W Builder/Apprentice</dd>
                                            <dt className="sr-only">Date</dt>
                                            <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500" aria-label="2023 until Present">
                                                <time dateTime="2023">2023</time>
                                                <span aria-hidden="true">—</span>
                                                <time dateTime="Present">Present</time>
                                            </dd>
                                        </dl>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                                            <img alt="" src="/_next/static/media/buyerfolio.33e372bc.jpeg" width="400" height="400" decoding="async" data-nimg="future" className="h-7 w-7 rounded-full" loading="lazy" style="color:transparent"/>
                                        </div>
                                        <dl className="flex flex-auto flex-wrap gap-x-2">
                                            <dt className="sr-only">Company</dt>
                                            <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">Buyer Folio</dd>
                                            <dt className="sr-only">Role</dt>
                                            <dd className="text-xs text-zinc-500 dark:text-zinc-400">Software Team Lead</dd>
                                            <dt className="sr-only">Date</dt>
                                            <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500" aria-label="2023 until 2023">
                                                <time dateTime="2023">2023</time>
                                                <span aria-hidden="true">—</span>
                                                <time dateTime="2023">2023</time>
                                            </dd>
                                        </dl>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                                            <img alt="" src="/_next/static/media/westernpu.0671a2f5.png" width="278" height="232" decoding="async" data-nimg="future" className="h-7 w-7 rounded-full" loading="lazy" style="color:transparent"/>
                                        </div>
                                        <dl className="flex flex-auto flex-wrap gap-x-2">
                                            <dt className="sr-only">Company</dt>
                                            <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">Western PU Industries</dd>
                                            <dt className="sr-only">Role</dt>
                                            <dd className="text-xs text-zinc-500 dark:text-zinc-400">Full Stack Developer</dd>
                                            <dt className="sr-only">Date</dt>
                                            <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500" aria-label="2020 until 2021">
                                                <time dateTime="2020">2020</time>
                                                <span aria-hidden="true">—</span>
                                                <time dateTime="2021">2021</time>
                                            </dd>
                                        </dl>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                                            <img alt="" src="/_next/static/media/jkfilters.7bb700ae.png" width="145" height="145" decoding="async" data-nimg="future" className="h-7 w-7 rounded-full" loading="lazy" style="color:transparent"/>
                                        </div>
                                        <dl className="flex flex-auto flex-wrap gap-x-2">
                                            <dt className="sr-only">Company</dt>
                                            <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">JK Filters India</dd>
                                            <dt className="sr-only">Role</dt>
                                            <dd className="text-xs text-zinc-500 dark:text-zinc-400">IT Consultant</dd>
                                            <dt className="sr-only">Date</dt>
                                            <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500" aria-label="2019 until 2020">
                                                <time dateTime="2019">2019</time>
                                                <span aria-hidden="true">—</span>
                                                <time dateTime="2020">2020</time>
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
    </div>*/}
</main>
  )
}

export default Home
