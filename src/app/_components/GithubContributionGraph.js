import Image from 'next/image'
import React from 'react'

export default function GithubCintributionGraph() {
  return (
    <div className='flex flex-col items-center justify-center scale-y-150 sm:scale-y-125 md:scale-100 py-12 xs:py-16 md:py-6 bg-blue-950/5'>
        <div className="hidden lg:block w-full pb-6">
          <h1 className="mx-auto text-center text-4xl rounded-md drop-shadow-[3px_3px_1px_black] dark:drop-shadow-[3px_3px_1px_white] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-violet-700 w-[95%] xs:w-fit">
            My GitHub Contributions
          </h1>
        </div>
      {/* <Image src={'https://github-readme-activity-graph.vercel.app/graph?username=abhis12321&bg_color=0f2d3d&color=1cadfb&line=1cadfb&point=1cadfb&area=true&hide_border=true'} alt='github-contribution' height={200} width={800} dangerouslyAllowSVG={true} /> */}
      <img
              src="https://github-readme-activity-graph.vercel.app/graph?username=abhis12321&bg_color=0f2d3d&color=1cadfb&line=1cadfb&point=1cadfb&area=true&hide_border=true"
              alt="Khushbu's GitHub Activity Graph"
              className='rounded w-[98%] max-w-[1150px]'
            />
    </div>
  )
}
