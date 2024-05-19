import Image from 'next/image'
import React from 'react'
import SpecialTextShadow from './SpecialTextShadow'

export default function Skills() {
  return (
    <div className="flex flex-col flex-wrap items-center justify-center bg-blue-950/5 py-6">
      <div className="w-[98%] max-w-[800px] mx-auto bg-gradient-to-b from-blue-50/50 to-blue-100/20 dark:from-blue-950 dark:via-cyan-950 dark:to-slate-900 shadow-[0_0_5px_black] dark:shadow-[0_0_5px_white] py-4 my-3 md:my-4 rounded-xl text-gray-400 text-7xl xs:text-8xl sm:text-[9rem] relative">
      <div className="w-full drop-shadow-[3px_3px_1px_red] flex flex-col items-center justify-center">
        <SpecialTextShadow content={"Skills"} />
      </div>

        <div className="flex flex-wrap items-center justify-center gap-3 xs:gap-5 sm:gap-8 px-4 py-6 rounded-xl">
          <div className="h-20 w-20 p-3 rounded-full ring-2 dark:ring-cyan-700 ring-cyan-700/50 flex items-center justify-center"><Image src={'/img/svgs/c.svg'} alt='c-lang' width={125} height={150} className='w-full h-full drop-shadow-[0_0_1px_black]' /></div>
          <div className="h-20 w-20 p-3 rounded-full ring-2 dark:ring-cyan-700 ring-cyan-700/50 flex items-center justify-center"><Image src={'/img/svgs/java.svg'} alt='java' width={85} height={150} className='h-full w-full relative left-2 dark:drop-shadow-[0_0_3px_black]' /></div>
          <div className="h-20 w-20 p-3 rounded-full ring-2 dark:ring-cyan-700 ring-cyan-700/50 flex items-center justify-center"><Image src={'/img/svgs/html.svg'} alt='html' width={105} height={150} className='w-full h-[85%] drop-shadow-[0_0_1px_black]' /></div>
          <div className="h-20 w-20 p-3 rounded-full ring-2 dark:ring-cyan-700 ring-cyan-700/50 flex items-center justify-center"><Image src={'/img/svgs/css.svg'} alt='css' width={105} height={150} className='w-full h-[85%] drop-shadow-[0_0_1px_black]' /></div>
          <div className="h-20 w-20 p-3 rounded-full ring-2 dark:ring-cyan-700 ring-cyan-700/50 flex items-center justify-center"><Image src={'/img/svgs/js.svg'} alt='js' width={105} height={150} className='w-full h-[85%] drop-shadow-[0_0_1px_black]' /></div>
          <div className="h-20 w-20 p-3 rounded-full ring-2 dark:ring-cyan-700 ring-cyan-700/50 flex items-center justify-center"><Image src={'/img/svgs/bootstrap.svg'} alt='bootstrap' width={155} height={150} className='w-full h-full drop-shadow-[0_0_1px_white] dark:drop-shadow-[0_0_1px_black]' /></div>

          <div className="h-20 w-20 p-3 rounded-full ring-2 dark:ring-cyan-700 ring-cyan-700/50 flex items-center justify-center"><Image src={'/img/svgs/tailwind.svg'} alt='tailwind' width={140} height={150} className='rounded-lg lg:rounded-2xl w-[97%]h-full drop-shadow-[0_0_1px_black]' /></div>

          <div className="h-20 w-20 p-3 rounded-full ring-2 dark:ring-cyan-700 ring-cyan-700/50 flex items-center justify-center"><Image src={'/img/svgs/git.svg'} alt='git' width={150} height={150} className='rounded-lg lg:rounded-2xl p-1 w-[90%] h-[90%] bg-gray-100' /></div>
          <div className="h-20 w-20 p-3 rounded-full ring-2 dark:ring-cyan-700 ring-cyan-700/50 flex items-center justify-center"><Image src={'/img/svgs/github.svg'} alt='github' width={150} height={150} className='rounded-full w-full h-full dark:drop-shadow-[0_0_1px_white]' /></div>
          <div className="h-20 w-20 p-3 rounded-full ring-2 dark:ring-cyan-700 ring-cyan-700/50 flex items-center justify-center"><Image src={'/img/svgs/react.svg'} alt='react.js' width={150} height={150} className='w-full h-full drop-shadow-[0_0_1px_black]' /></div>
          <div className="h-20 w-20 p-3 rounded-full ring-2 dark:ring-cyan-700 ring-cyan-700/50 flex items-center justify-center"><Image src={'/img/svgs/next-1.svg'} alt='next.js' width={150} height={150} className='rounded-full w-full h-full dark:drop-shadow-[0_0_3px_white]' /></div>
          <div className="h-20 w-20 p-3 rounded-full ring-2 dark:ring-cyan-700 ring-cyan-700/50 flex items-center justify-center"><Image src={'/img/svgs/nodejs.svg'} alt='node.js' width={155} height={150} className='rounded-full w-full h-full p-1 bg-gray-100' /></div>

          <div className="h-20 w-20 p-3 rounded-full ring-2 dark:ring-cyan-700 ring-cyan-700/50 flex items-center justify-center"><Image src={'/img/svgs/aws.svg'} alt='aws' width={145} height={150} className='rounded-lg lg:rounded-2xl w-[97%] px-1 bg-gray-100 h-full ' /></div>
          <div className="h-20 w-20 p-3 rounded-full ring-2 dark:ring-cyan-700 ring-cyan-700/50 flex items-center justify-center"><Image src={'/img/svgs/mysql.svg'} alt='mysql' width={140} height={140} className='rounded-lg lg:rounded-2xl w-full h-full ' /></div>
          <div className="h-20 w-20 p-3 rounded-full ring-2 dark:ring-cyan-700 ring-cyan-700/50 flex items-center justify-center"><Image src={'/img/svgs/oracle.svg'} alt='oracle' width={145} height={150} className='rounded-lg lg:rounded-2xl w-full h-full ' /></div>
          <div className="h-20 w-20 p-3 rounded-full ring-2 dark:ring-cyan-700 ring-cyan-700/50 flex items-center justify-center"><Image src={'/img/svgs/mongodb.svg'} alt='mongoDB' width={400} height={150} className='rounded-lg lg:rounded-2xl w-full h-full' /></div>
        </div>
      </div>
    </div>

  )
}
