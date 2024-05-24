import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function About() {
  return (
    <div className="flex flex-col items-center justify-evenly pt-10 pb-6 bg-blue-950/5" id="about">
      <div className="rounded-2xl max-w-[1150px] w-[98%] mx-auto flex flex-col items-center justify-evenly bg-gradient-to-b from-white to-slate-50 dark:from-blue-950 dark:via-cyan-950 dark:to-slate-900 shadow-[0_0_5px_black] dark:shadow-[0_0_5px_white] pt-3 pb-6 px-1 xs:px-6 sm:px-12">
        <div className="w-full pb-4">
          <h1 className="mx-auto text-center text-[2.6rem] rounded-md drop-shadow-[3px_3px_1px_black] dark:drop-shadow-[3px_3px_1px_white] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-violet-700 w-[95%] xs:w-fit">
            About Me
          </h1>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 xs:gap-6 md:gap-8 lg:gap-12">
          <Image src={"/img/others/me2.jpg"} alt='me.png' height={400} width={320} className='h-[400px] rounded-md shadow-[0_0_4px_black]' />
          <div className="h-fit sm:min-h-[350px] flex flex-col gap-3 items-center md:items-start justify-between">
            <div className="flex flex-col gap-3 items-center md:items-start">
              <div className="font-bold text-2xl">Hi👋🏻, I&apos;m Abhishek</div>
              <div className="py-[6px] font-mono text-sm px-4 rounded text-violet-950 dark:text-white dark:bg-gray-200/20 bg-blue-600/20 font-extrabold w-fit">Web Developer</div>
            </div>
            <div className="text-gray-700 dark:text-slate-300 font-mono text-[14px] xs:text-[15px] text-center md:text-left">
              🚀I am a passionate web developer and currently pursuing my undergraduate degree in Computer Science & Engineering from Dr. Ambedkar Institute of Technology for Divyanjan UP (India), I&apos;m skilled in front-end technologies like HTML5, CSS3, JavaScript, Bootstrap, Tailwind and React.js as well as back-end frameworks like Node.js , Express.js, Next.js. Also Skilled in some databases like MySQL , Oracle-SQL , MongoDB.
            </div>
            <Link href={'https://drive.google.com/file/d/1ny7NctCt_xz7HkWGCfEEL5fYEl_RrkH-/view?usp=drive_link'} target='_blank' className="bg-indigo-800/80 hover:bg-violet-200 font-semibold font-serif ring-1 ring-gray-200 hover:ring-violet-800 hover:text-violet-900 px-5 py-[7px] rounded w-fit text-white text-sm">Resume &gt;</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
