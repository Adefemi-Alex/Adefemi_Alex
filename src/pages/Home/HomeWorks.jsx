import React from 'react'
import experiences from '../../api/experiences'

import { MdAssuredWorkload } from "react-icons/md";
const HomeWorks = () => {
  return (
    <section className="sm:px-8 mt-24 md:mt-28 h-full">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
                <div className="space-y-10 lg:pl-16 xl:pl-24">
                  <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
                    <h2 className="flex text-sm font-semibold text-zinc-100 items-center space-x-2">
                      <MdAssuredWorkload size={26} />
                      <div className="ml-3">Work</div>
                    </h2>
                    <ol className="mt-6 space-y-4">
                      {experiences.map((experience, index) => (
                        <li key={index} className="flex gap-4">
                          <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5  border-[1px] border-zinc-500 bg-zinc-800 dark:ring-0">
                            <img alt="" src={experience.imgSrc}  className="h-8 w-8 rounded-full" loading="lazy" />
                          </div>
                          <dl className="flex flex-auto flex-wrap gap-x-2">
                            <dt className="sr-only">Company</dt>
                            <dd className="w-full flex-none text-sm font-medium text-zinc-100">{experience.company}</dd>
                            <dt className="sr-only">Role</dt>
                            <dd className="text-xs  text-zinc-400">{experience.role}</dd>{/* text-zinc-500 */}
                            
                            <dt className="sr-only">Date</dt>
                            <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500" aria-label={experience.date}>
                              <span>{experience.date}</span>
                            </dd>
                          </dl>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default HomeWorks
