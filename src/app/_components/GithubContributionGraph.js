import Image from 'next/image'
import React from 'react'

export default function GithubCintributionGraph() {
  return (
    <div className='flex flex-col items-center justify-center py-16 md:py-3 bg-transparent'>
        <div className="hidden lg:block w-full pb-6 drop-shadow-[3px_3px_1px_black] dark:drop-shadow-[1px_1px_1px_white]">
          <h1 className="mx-auto text-center text-4xl rounded-md drop-shadow-[1px_1px_1px_white] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-violet-700 w-[95%] xs:w-fit">
            My GitHub Contributions
          </h1>
        </div>
      <img
              src="https://github-readme-activity-graph.vercel.app/graph?username=abhis12321&bg_color=0f2d3d&color=1cadfb&line=1cadfb&point=1cadfb&area=true&hide_border=true"
              alt="Abhishek's GitHub Activity Graph"
              className='rounded w-[98%] max-w-[1150px] ring-1 ring-sky-500 scale-y-150 sm:scale-y-125 md:scale-100'
            />
    </div>
  )
}
