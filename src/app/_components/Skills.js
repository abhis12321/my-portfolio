import Image from 'next/image'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'

export default function Skills() {
  return (
    <div className="flex flex-col flex-wrap items-center justify-center bg-transparent py-6">
      <div className="max-w-[1150px] w-[98%] mx-auto bg-white dark:bg-transparent shadow-[0_0_5px_gray] dark:shadow-none mt-3 md:mt-4 rounded-xl text-gray-400 text-7xl xs:text-8xl sm:text-[9rem] relative lg:pb-4 sm:pt-1">
        <div className="drop-shadow-[3px_4px_1px_black] dark:drop-shadow-[2px_1px_1px_white] w-full pt-8">
          <div className="w-fit mx-auto drop-shadow-[1px_1px_1px_white] flex gap-3 items-center justify-center text-[2.8rem] font-extrabold max-h-16 overflow-hidden bg-gradient-to-r from-pink-600 via-pink-600 to-violet-600 bg-clip-text text-transparent">
            <FontAwesomeIcon size='xs' icon={faLaptopCode} className='text-[2.8rem] text-pink-600' /> Skills
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-evenly dark:md:justify-between gap-2 md:gap-3 rounded-xl py-2 px-1 xs:px-2 xs:py-3 sm:px-3 md:px-4 dark:px-2 dark:sm:px-6 dark:lg:px-0">

          <div className="flex flex-col items-center justify-center w-[98%] md:w-[49%] max-w-[500px] py-2">
            <div className="drop-shadow-[3px_3px_1px_black] dark:drop-shadow-[2px_2px_1px_white] pb-5 w-full font-extrabold">
              <div className="py-1 mx-auto text-center drop-shadow-[1px_1px_1px_black] flex gap-3 items-center justify-center text-[1.8rem] max-h-16 overflow-hidden font-extrabold text-teal-500 dark:text-yellow-400 w-fit">
                Development Skills
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 px-2 sm:px-3 py-5 rounded-lg bg-blue-600/10 dark:bg-blue-100/10 shadow-[0_0_1px_white] outline-none">
              <div className="h-20 w-20 p-3 rounded-full ring-2 dark:ring-blue-600/60 ring-cyan-500/50 flex items-center justify-center"><Image src={'/img/svgs/html.svg'} alt='html' width={105} height={150} className='w-full h-[85%] drop-shadow-[0_0_1px_black]' /></div>
              <div className="h-20 w-20 p-3 rounded-full ring-2 dark:ring-blue-600/60 ring-cyan-500/50 flex items-center justify-center"><Image src={'/img/svgs/css.svg'} alt='css' width={105} height={150} className='w-full h-[85%] drop-shadow-[0_0_1px_black]' /></div>
              <div className="h-20 w-20 p-3 rounded-full ring-2 dark:ring-blue-600/60 ring-cyan-500/50 flex items-center justify-center"><Image src={'/img/svgs/js.svg'} alt='js' width={105} height={150} className='w-full h-[85%] drop-shadow-[0_0_1px_black]' /></div>
              <div className="h-20 w-20 p-3 rounded-full ring-2 dark:ring-blue-600/60 ring-cyan-500/50 flex items-center justify-center"><Image src={'/img/svgs/bootstrap.svg'} alt='bootstrap' width={155} height={150} className='w-full h-full drop-shadow-[0_0_1px_white] dark:drop-shadow-[0_0_1px_black]' /></div>
              <div className="h-20 w-20 p-3 rounded-full ring-2 dark:ring-blue-600/60 ring-cyan-500/50 flex items-center justify-center"><Image src={'/img/svgs/tailwind.svg'} alt='tailwind' width={140} height={150} className='rounded-lg lg:rounded-2xl w-[97%]h-full drop-shadow-[0_0_1px_black]' /></div>

              <div className="h-20 w-20 p-3 rounded-full ring-2 dark:ring-blue-600/60 ring-cyan-500/50 flex items-center justify-center"><Image src={'/img/svgs/react.svg'} alt='react.js' width={150} height={150} className='w-full h-full drop-shadow-[0_0_1px_black]' /></div>
              <div className="h-20 w-20 p-3 rounded-full ring-2 dark:ring-blue-600/60 ring-cyan-500/50 flex items-center justify-center"><Image src={'/img/svgs/next-1.svg'} alt='next.js' width={150} height={150} className='rounded-full w-full h-full dark:drop-shadow-[0_0_3px_white]' /></div>
              <div className="h-20 w-20 p-3 rounded-full ring-2 dark:ring-blue-600/60 ring-cyan-500/50 flex items-center justify-center"><Image src={'/img/svgs/nodejs.svg'} alt='node.js' width={155} height={150} className='rounded-full w-full h-full p-1 bg-gray-100' /></div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center w-[98%] md:w-[49%] max-w-[500px] py-2">
            <div className="drop-shadow-[3px_3px_1px_black] dark:drop-shadow-[2px_2px_1px_white] pb-5 w-full font-extrabold">
              <div className="py-1 mx-auto text-center drop-shadow-[1px_1px_1px_black] flex gap-3 items-center justify-center text-[1.8rem] max-h-16 overflow-hidden font-extrabold text-teal-500 dark:text-yellow-400 w-fit">
                Other Skills
              </div>
            </div>


            <div className="flex flex-wrap items-center justify-center gap-3 px-2 sm:px-3 py-5 rounded-lg bg-blue-600/10 dark:bg-blue-100/10 shadow-[0_0_1px_white] outline-none">
              <div className="h-20 w-20 p-3 rounded-full ring-2 dark:ring-blue-600/60 ring-cyan-500/50 flex items-center justify-center"><Image src={'/img/svgs/c.svg'} alt='c-lang' width={125} height={150} className='w-full h-full drop-shadow-[0_0_1px_black]' /></div>
              <div className="h-20 w-20 p-3 rounded-full ring-2 dark:ring-blue-600/60 ring-cyan-500/50 flex items-center justify-center"><Image src={'/img/svgs/java.svg'} alt='java' width={85} height={150} className='h-full w-full relative left-2 dark:drop-shadow-[0_0_3px_black]' /></div>
              <div className="h-20 w-20 p-3 rounded-full ring-2 dark:ring-blue-600/60 ring-cyan-500/50 flex items-center justify-center"><Image src={'/img/svgs/git.svg'} alt='git' width={150} height={150} className='rounded-lg lg:rounded-2xl p-1 w-[90%] h-[90%] bg-gray-100' /></div>
              <div className="h-20 w-20 p-3 rounded-full ring-2 dark:ring-blue-600/60 ring-cyan-500/50 flex items-center justify-center"><Image src={'/img/svgs/github.svg'} alt='github' width={150} height={150} className='rounded-full w-full h-full dark:drop-shadow-[0_0_1px_white]' /></div>
              <div className="h-20 w-20 p-3 rounded-full ring-2 dark:ring-blue-600/60 ring-cyan-500/50 flex items-center justify-center"><Image src={'/img/svgs/aws.svg'} alt='aws' width={145} height={150} className='rounded-lg lg:rounded-2xl w-[97%] px-1 bg-gray-100 h-full ' /></div>
              <div className="h-20 w-20 p-3 rounded-full ring-2 dark:ring-blue-600/60 ring-cyan-500/50 flex items-center justify-center"><Image src={'/img/svgs/mysql.svg'} alt='mysql' width={140} height={140} className='rounded-lg lg:rounded-2xl w-full h-full ' /></div>
              <div className="h-20 w-20 p-3 rounded-full ring-2 dark:ring-blue-600/60 ring-cyan-500/50 flex items-center justify-center"><Image src={'/img/svgs/oracle.svg'} alt='oracle' width={145} height={150} className='rounded-lg lg:rounded-2xl w-full h-full ' /></div>
              <div className="h-20 w-20 p-3 rounded-full ring-2 dark:ring-blue-600/60 ring-cyan-500/50 flex items-center justify-center"><Image src={'/img/svgs/mongodb.svg'} alt='mongoDB' width={400} height={150} className='rounded-lg lg:rounded-2xl w-full h-full' /></div>
            </div>
          </div>

        </div>
      </div>
    </div>

  )
}
