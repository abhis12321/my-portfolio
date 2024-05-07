import { faAws, faBootstrap, faCss3Alt, faGithub, faHtml5, faJava, faReact, faSquareJs } from '@fortawesome/free-brands-svg-icons'
import { faC, faN } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'

export default function Skills() {
  return (
    <div className="flex flex-col flex-wrap items-center justify-center border-b-2 border-slate-800 py-6 bg-lime-900/20 dark:bg-transparent">
      <h1 className="mx-auto text-center py-5 sm:px-8 text-4xl md:text-5xl rounded-md drop-shadow-[0_0_1px_white] font-extrabold md:font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-violet-800 w-[95%] xs:w-fit">
        Skills
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-6 xs:gap-8 w-[98%] max-w-[800px] mx-auto bg-slate-700 dark:bg-gradient-to-b dark:from-gray-900 dark:via-cyan-950 dark:to-slate-900 shadow-[0_0_5px_white] px-4 py-8 my-4 rounded-xl text-gray-400 text-7xl xs:text-8xl sm:text-9xl">
        <FontAwesomeIcon icon={faC} size="1x" className="text-blue-800 drop-shadow-[0_0_1px_blue]" />
        <FontAwesomeIcon
          icon={faJava}
          size="1x"
          className="text-orange-800 drop-shadow-[0_0_1px_orange]"
        />
        <FontAwesomeIcon
          icon={faHtml5}
          size="1x"
          className="text-orange-600 drop-shadow-[0_0_1px_orange]"
        />
        <FontAwesomeIcon
          icon={faCss3Alt}
          size="1x"
          className="text-blue-700 drop-shadow-[0_0_1px_blue]"
        />
        <FontAwesomeIcon
          icon={faSquareJs}
          size="1x"
          className="text-yellow-600 drop-shadow-[0_0_1px_yellow]"
        />
        <FontAwesomeIcon
          icon={faBootstrap}
          size="1x"
          className="text-violet-700 drop-shadow-[0_0_1px_indigo]"
        />
        <Image src={'/tailwindcss.svg'} alt='tailwind' width={150} height={150} className='rounded-3xl'/>
        <FontAwesomeIcon
          icon={faGithub}
          size="1x"
          className="text-gray-300 drop-shadow-[0_0_1px_black]"
        />
        <FontAwesomeIcon icon={faReact} size="1x" className="text-sky-600 drop-shadow-[0_0_1px_blue]" />
        <FontAwesomeIcon icon={faN} size="5x" className="bg-black px-7 py-5 md:px-8 md:py-5 rounded-full h-[4rem] md:h-[5rem]"/>
        <FontAwesomeIcon icon={faAws} size="1x" className="text-gray-300 drop-shadow-[0_0_1px_red]" />
        <Image src={'/mysql.svg'} alt='tailwind' width={150} height={150} className='rounded-3xl'/>
        <Image src={'/mongodb.svg'} alt='tailwind' width={150} height={150} className='rounded-3xl'/>
      </div>
    </div>

  )
}
