import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function About() {
  return (
    <div className="flex flex-col items-center justify-evenly pt-10 pb-6 bg-blue-950/5" id="about">
      <div className="rounded-2xl max-w-[1150px] w-[98%] mx-auto flex flex-col items-center justify-evenly bg-gradient-to-b from-white to-slate-50 dark:from-cyan-950 dark:to-blue-950/90 darkto-slate-900 shadow-[0_0_5px_gray] dark:shadow-[0_0_5px_white] py-3 sm:pb-6 px-1 xs:px-6">
        <div className="w-full pb-2 md:pb-4">
          <h1 className="mx-auto text-center text-[2.2rem] sm:text-[2.6rem] rounded-md drop-shadow-[3px_3px_1px_black] dark:drop-shadow-[3px_3px_1px_white] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-violet-800 w-[95%] xs:w-fit">
            About Me
          </h1>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-around gap-4 md:gap-8 lg:gap-12 lg:px-8">
          <Image src={"/img/others/me2.jpg"} alt='me.png' height={400} width={320} className='h-[300px] md:h-[350px] w-fit rounded-md shadow-[0_0_4px_black]' />
          <div className="h-fit sm:min-h-[250px] w-[90%] xs:w-[80%] md:w-[50%] flex flex-col gap-3 items-start justify-between">
            <div className="flex flex-col gap-2 items-start">
              <div className="font-bold text-xl sm:text-2xl text-gray-700 dark:text-white">Hi👋, I&apos;m Abhishek</div>
              <div className="py-[6px] font-mono text-xs sm:text-sm px-4 rounded text-violet-950 dark:text-white dark:bg-gray-200/20 bg-blue-600/20 font-extrabold w-fit">Web Developer</div>
            </div>
            <div className="text-gray-700 dark:text-slate-300 font-mono text-[12px] sm:text-[14px]">
              🚀I am a passionate web developer and currently pursuing my Bachelor&apos;s degree in Computer Science & Engineering from Dr. Ambedkar Institute of Technology for Divyanjan UP (India). I have a Deep Interest in Exploring the Fascinating World Of Technology and Its Applications.
              I am Constantly Driven to Enhance my Skills and Knowledge in Programming, Algorithms, and Software development.
            </div>
            <Link href={'https://drive.google.com/file/d/1ny7NctCt_xz7HkWGCfEEL5fYEl_RrkH-/view?usp=drive_link'} target='_blank' className="bg-indigo-900 hover:bg-violet-200 font-semibold font-mono ring-1 ring-gray-200 hover:ring-violet-800 hover:text-violet-900 px-5 py-[7px] mt-1 sm:mt-4 rounded-lg w-fit text-white text-xs sm:text-sm">Resume &gt;</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
