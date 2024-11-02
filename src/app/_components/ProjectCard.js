import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function ProjectCard({ project }) {
  const { title, technology, deployement, github, image, description } = project;    
    
  return (
    <div className="w-[97%] max-w-[900px] mx-auto p-[10px] sm:px-[20px] min-h-[180px] bg-white hover:bg-blue-50 dark:bg-white/10 dark:hover:bg-gray-800/80 shadow-[0_0_2px_black_inset] dark:shadow-[0_0_2px_gray_inset] hover:shadow-[0_0_3px_black] dark:hover:shadow-[0_0_3px_white] text-white text-center rounded-lg">
      <h2 className="w-fit mx-auto sm:my-2 px-3 dark:px-0 py-2 bg-slate-950/10 dark:bg-transparent rounded-lg font-extrabold text-2xl drop-shadow-[3px_3px_1px_green] text-gray-50 dark:text-white">{ title }</h2>
      <p className='text-[10px] xs:text-[12px] italic text-yellow-600 dark:drop-shadow-[0_0_2px_black] font-bold' ><span className='font-semibold' >Tools & technologies used :</span> { technology }</p>

      <div className="flex flex-col sm:flex-row sm:gap-4 items-center">
        <Link href={deployement} target='blank' className={`mx-auto rounded shadow-[0_0_2px_black] dark:shadow-[0_0_2px_white] my-4 max-h-[250px] sm:w-[40%] overflow-hidden hover:scale-105 ${!deployement && "pointer-events-none"}`} ><Image src={image} alt='demo-image' width={400} height={250} className='' /></Link>
        <div className="flex flex-col sm:w-[55%]">
          <div className="font-mono text-[14px] mb-3 sm:my-3 text-gray-800 dark:text-gray-400 max-w-[450px]">{ description }</div>
          <div className="flex fle-col xm:flex-row gap-2 items-center justify-around">
            <Link className='px-3 text-[14px] sm:text-[.9rem] sm:px-4 py-[7px] rounded bg-slate-950/70 dark:bg-slate-950 hover:shadow-[0_0_3px_white] hover:bg-black duration-1000 font-semibold' target='_blank' href={github}>Github Link..</Link>
            <Link className={`px-3 text-[14px] sm:text-[.9rem] sm:px-4 py-[7px] rounded bg-slate-950/70 dark:bg-slate-950 hover:shadow-[0_0_3px_white] hover:bg-black duration-1000 font-semibold ${!deployement && "pointer-events-none"}`} target='_blank' href={deployement}>Take a Look...</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
