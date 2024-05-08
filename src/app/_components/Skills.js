import { faBootstrap, faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'

export default function Skills() {
  return (
    <div className="flex flex-col flex-wrap items-center justify-center border-b-2 border-slate-800 pt-16 pb-6 bg-lime-900/20 dark:bg-transparent">
      <div className="flex flex-wrap items-center justify-center gap-3 xs:gap-5 sm:gap-8 w-[98%] max-w-[800px] mx-auto bg-slate-700 dark:bg-gradient-to-b dark:from-gray-900 dark:via-cyan-950 dark:to-slate-900 shadow-[0_0_5px_white] px-4 pt-12 md:pt-14 pb-8 my-3 md:my-4 rounded-xl text-gray-400 text-7xl xs:text-8xl sm:text-[9rem] relative">
        <div className="absolute top-[-2rem] md:top-[-2.3rem] bg-slate-900 py-3 px-14 ring-2 sm:ring-4 dark:ring-gray-500 ring-red-800 rounded-lg ">
          <h1 className="mx-auto text-center text-4xl md:text-5xl rounded-md drop-shadow-[0_0_1px_white] font-extrabold md:font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-violet-800 w-[95%] xs:w-fit">
            Skills
          </h1>
        </div>

        <div className="h-20 sm:h-24 md:h-36 w-20 sm:w-24 md:w-36 flex items-center justify-center"><Image src={'/img/svgs/c.svg'} alt='c-lang' width={125} height={150} className='w-full h-[95%] drop-shadow-[0_0_1px_black]' /></div>
        <div className="h-20 sm:h-24 md:h-36 w-20 sm:w-24 md:w-36 flex items-center justify-center"><Image src={'/img/svgs/java.svg'} alt='java' width={85} height={150} className='w-full h-full ' /></div>
        <div className="h-20 sm:h-24 md:h-36 w-20 sm:w-24 md:w-36 flex items-center justify-center"><Image src={'/img/svgs/html.svg'} alt='html' width={105} height={150} className='w-full h-[80%] drop-shadow-[0_0_1px_black]' /></div>
        <div className="h-20 sm:h-24 md:h-36 w-20 sm:w-24 md:w-36 flex items-center justify-center"><Image src={'/img/svgs/css.svg'} alt='css' width={105} height={150} className='w-full h-[80%] drop-shadow-[0_0_1px_black]' /></div>
        <div className="h-20 sm:h-24 md:h-36 w-20 sm:w-24 md:w-36 flex items-center justify-center"><Image src={'/img/svgs/js.svg'} alt='js' width={105} height={150} className='w-full h-[80%] drop-shadow-[0_0_1px_black]' /></div>
        <div className="h-20 sm:h-24 md:h-36 w-20 sm:w-24 md:w-36 flex items-center justify-center"><Image src={'/img/svgs/bootstrap.svg'} alt='bootstrap' width={155} height={150} className='w-full h-full drop-shadow-[0_0_1px_black]' /></div>

        <div className="h-20 sm:h-24 md:h-36 w-20 sm:w-24 md:w-36 flex items-center justify-center"><Image src={'/img/svgs/git.svg'} alt='git' width={150} height={150} className='rounded-lg lg:rounded-2xl p-1 w-[90%] h-[90%] bg-gray-200 ring-1 ' /></div>
        <div className="h-20 sm:h-24 md:h-36 w-20 sm:w-24 md:w-36 flex items-center justify-center"><Image src={'/img/svgs/github.svg'} alt='github' width={150} height={150} className='rounded-full w-full h-full bg-gray-200 ring-1 ' /></div>
        <div className="h-20 sm:h-24 md:h-36 w-20 sm:w-24 md:w-36 flex items-center justify-center"><Image src={'/img/svgs/react.svg'} alt='react.js' width={150} height={150} className='w-full h-full ' /></div>        
        <div className="h-20 sm:h-24 md:h-36 w-20 sm:w-24 md:w-36 flex items-center justify-center"><Image src={'/img/svgs/next-1.svg'} alt='next.js' width={150} height={150} className='rounded-full w-full h-full bg-gray-200 ring-1 ' /></div>
        <div className="h-20 sm:h-24 md:h-36 w-20 sm:w-24 md:w-36 flex items-center justify-center"><Image src={'/img/svgs/nodejs.svg'} alt='node.js' width={155} height={150} className='rounded-full w-full h-full p-1 bg-gray-200' /></div>
        <div className="h-20 sm:h-24 md:h-36 w-20 sm:w-24 md:w-36 flex items-center justify-center"><Image src={'/img/svgs/tailwindcss.svg'} alt='tailwind' width={140} height={150} className='rounded-lg lg:rounded-2xl w-[97%] bg-white h-full px-1 ' /></div>

        <div className="h-20 sm:h-24 md:h-36 w-20 sm:w-24 md:w-36 flex items-center justify-center"><Image src={'/img/svgs/aws.svg'} alt='aws' width={145} height={150} className='rounded-lg lg:rounded-2xl w-[97%] px-1 bg-gray-200 h-full ' /></div>
        <div className="h-20 sm:h-24 md:h-36 w-20 sm:w-24 md:w-36 flex items-center justify-center"><Image src={'/img/svgs/mysql.svg'} alt='mysql' width={140} height={140} className='rounded-lg lg:rounded-2xl w-full h-full ' /></div>
        <div className="h-20 sm:h-24 md:h-36 w-20 sm:w-24 md:w-36 flex items-center justify-center"><Image src={'/img/svgs/oracle.svg'} alt='oracle' width={145} height={150} className='rounded-lg lg:rounded-2xl w-full h-full ' /></div>
        <div className="h-20 sm:h-24 md:h-36 w-20 sm:w-24 md:w-36 flex items-center justify-center"><Image src={'/img/svgs/mongodb.svg'} alt='mongoDB' width={400} height={150} className='rounded-lg lg:rounded-2xl w-full h-full' /></div>
      </div>
    </div>

  )
}
