import React from 'react'
import { navs } from '../api/navs'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer class="mt-32">
                    <div class="sm:px-8">
                        <div class="mx-auto max-w-7xl lg:px-8">
                            <div class="border-t  pt-10 pb-16 border-zinc-700/40">{/* border-zinc-100 */}
                                <div class="relative px-4 sm:px-8 lg:px-12">
                                    <div class="mx-auto max-w-2xl lg:max-w-5xl">
                                        <div class="flex flex-col items-center justify-between gap-6 sm:flex-row">
                                            <div class="flex gap-6 text-sm font-medium text-zinc-200"> {/* text-zinc-800 */}
                                                {navs.map(({link, name})=>{
                                                    return <Link to={link} className='transition hover:text-teal-500 dark:hover:text-teal-400'>{name}</Link>
                                                })}
                                              
                                            </div>
                                            <p class="text-sm text-zinc-500">© {/* text-zinc-400 */}
                                           
                                            {new Date().getFullYear()}
                                          
                                            Alex Adefemi. All rights reserved.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
  )
}

export default Footer