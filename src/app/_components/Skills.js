import { faBootstrap, faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'

export default function Skills() {
  return (
    <div className="flex flex-col flex-wrap items-center justify-center border-b-2 border-slate-800 py-6 bg-lime-900/20 dark:bg-transparent">
      <h1 className="mx-auto text-center py-5 sm:px-8 text-4xl md:text-5xl rounded-md drop-shadow-[0_0_1px_white] font-extrabold md:font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-violet-800 w-[95%] xs:w-fit">
        Skills
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-6 xs:gap-8 w-[98%] max-w-[800px] mx-auto bg-slate-700 dark:bg-gradient-to-b dark:from-gray-900 dark:via-cyan-950 dark:to-slate-900 shadow-[0_0_5px_white] px-4 py-8 my-4 rounded-xl text-gray-400 text-7xl xs:text-8xl sm:text-[9rem]">
        
        <Image src={'/img/svgs/c.svg'} alt='c-lang' width={125} height={150} className=''/>
        <Image src={'/img/svgs/java.svg'} alt='java' width={85} height={150} className='px-3 w-[110px]'/>
        <Image src={'/img/svgs/html.svg'} alt='html' width={105} height={150} className=''/>
        <Image src={'/img/svgs/css.svg'} alt='css' width={105} height={150} className=''/>
        <Image src={'/img/svgs/js.svg'} alt='js' width={105} height={150} className=''/>
        <FontAwesomeIcon
          icon={faBootstrap}
          size="1x"
          className="text-violet-700 drop-shadow-[0_0_1px_indigo]"
        />
        <Image src={'/img/svgs/tailwindcss.svg'} alt='tailwind' width={150} height={150} className='rounded-3xl bg-white py-12 px-1'/>
        
        <Image src={'/img/svgs/github.svg'} alt='github.js' width={150} height={150} className='rounded-full bg-white ring-2'/>

        <FontAwesomeIcon icon={faReact} size="1x" className="text-sky-600 drop-shadow-[0_0_1px_blue]" />       

        <Image src={'/img/svgs/next-1.svg'} alt='next.js' width={150} height={150} className='rounded-full bg-white ring-2'/>
        <Image src={'/img/svgs/nodejs.svg'} alt='node.js' width={155} height={150} className='rounded-full bg-gray-100 p-1 ring-2'/>
        <Image src={'/img/svgs/aws.svg'} alt='aws' width={150} height={150} className='rounded-3xl bg-white py-8 px-2'/>
        <Image src={'/img/svgs/mysql.svg'} alt='mysql' width={140} height={140} className='rounded-3xl py-3 px-3 bg-white'/>
        <Image src={'/img/svgs/oracle.svg'} alt='oracle' width={150} height={150} className='rounded-3xl bg-white px-1 py-1'/>
        <Image src={'/img/svgs/mongodb.svg'} alt='mongoDB' width={150} height={150} className='rounded-3xl'/>
      </div>
    </div>

  )
}
