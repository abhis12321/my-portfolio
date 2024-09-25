import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function About() {
  return (
    <div className="flex flex-col items-center justify-around pt-10 pb-3 bg-transparent" id="about">
      <div className="group rounded-2xl max-w-[1150px] w-[98%] mx-auto flex flex-col items-center justify-between bg-white dark:bg-white/10 shadow-[0_0_5px_gray] py-6 md:py-10 lg:py-12 px-1 xs:px-6">
        <div className="md:hidden w-full pb-5 drop-shadow-[3px_3px_1px_black] dark:drop-shadow-[1px_1px_1px_white]">
          <h1 className="mx-auto text-center text-[2.2rem] sm:text-[2.6rem] rounded-md drop-shadow-[1px_1px_1px_white] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-violet-800 w-fit max-h-16 overflow-hidden">
            About Me
          </h1>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-around md:justify-between gap-4 md:gap-8 lg:gap-12 lg:px-8">
          <div className="">
            <Image src={"/img/others/me2.jpg"} alt='me.png' height={390} width={320} className='h-[300px] md:h-[400px] lg:h-[440px] w-fit rounded-md shadow-[0_0_4px_black]' />
          </div>
          <div className="min-h-[280px] md:min-h-[350px] w-[90%] xs:w-[80%] md:w-[60%] flex flex-col gap-1 lg:gap-4 items-center md:items-start justify-between">
            <div className="hidden md:block pb-6 drop-shadow-[3px_3px_1px_black] dark:drop-shadow-[1px_1px_1px_white]">
              <h1 className="mx-auto text-[2.2rem] sm:text-[2.6rem] rounded-md drop-shadow-[1px_1px_1px_white] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-violet-800 w-fit">
                About Me
              </h1>
            </div>
            <div className="flex flex-col gap-2 md:gap-5 items-center md:items-start">
              <div className="font-bold text-xl sm:text-2xl text-gray-700 dark:text-white">Hi👋, I&apos;m Abhishek</div>
              <div className="py-[6px] font-mono text-xs sm:text-sm px-4 rounded text-violet-950 dark:text-white dark:bg-gray-200/20 bg-blue-600/20 font-extrabold w-fit">Web Developer</div>
            </div>
            <div className="text-gray-700 dark:text-slate-300 font-mono text-[12px] xs:text-[13px] sm:text-[14px] text-center md:text-left">
              🚀I am a passionate web developer and currently pursuing my Bachelor&apos;s degree in Computer Science & Engineering from Dr. Ambedkar Institute of Technology for Divyanjan UP (India). I have a Deep Interest in Exploring the Fascinating World Of Technology and Its Applications.
              I am Constantly Driven to Enhance my Skills and Knowledge in Programming, Algorithms, and Software development.
            </div>
            <Link href={'https://drive.google.com/file/d/1HgEPf2lxCZ72eoj28JHWysS3NaHHZ5Vl/view?usp=sharing'} target='_blank' className="bg-indigo-900/80 hover:bg-violet-200 font-semibold font-mono ring-1 ring-gray-200 hover:ring-violet-800 hover:text-violet-900 px-5 py-[7px] mt-1 sm:mt-4 rounded-lg w-fit text-white text-xs sm:text-sm"><span className="font-serif">Resume</span> &gt;</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
