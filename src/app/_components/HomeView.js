import React from 'react'
import Animated_typewritter from './Animated_typewritter'
import Link from 'next/link'
import SocialMediaProfile from './SocialMediaProfile'
import Animated_avatar from './Animated_avatar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleDown } from '@fortawesome/free-solid-svg-icons'

export default function HomeView() {
  return (
    <div className="flex flex-col-reverse sm:flex-row pl-[4vw] xs:px-[7vw] py-2 items-start sm:items-center justify-evenly md:justify-center bg-white dark:bg-white/10 text-gray-600 dark:text-blue-50 shadow-[0_.5px_1px_gray]"
      style={{ minHeight: "calc(100vh - 4rem)" }} >
      <div className="flex flex-col gap-2 w-full sm:flex-1 items-start">
        <h3 className="text-justify text-[1.3rem] lg:text-[1.7rem] font-bold">
          <span className="">👋</span>Hi there, I&apos;m
        </h3>
        <h1 className="text-[2rem] xs:text-[2.5rem] md:text-[2.7rem] lg:text-[3rem] drop-shadow-[3px_2px_1px_black] sm:drop-shadow-[4px_2px_1px_black] dark:drop-shadow-[3px_2px_1px_white] dark:md:drop-shadow-[4px_2px_1px_white] font-extrabold text-left text-orange-400 dark:text-orange-500">
          Abhishek Singh
        </h1>
        <h3 className="text-justify text-[1.2rem] lg:text-[1.6rem] font-bold">
          & I am a Passionate
        </h3>
        <Animated_typewritter />

        <Link href={'#about'} className="w-fit px-5 py-3 my-2 rounded-3xl font-bold text-sm text-white bg-violet-950 hover:bg-violet-900 shadow-[3px_3px_1px_green] shadow-blue-500 hover:shadow-[3px_3px_1px_orange] dark:shadow-[2px_2px_2px_white] dark:hover:shadow-[2px_2px_1px_white] flex items-center justify-center gap-2">About me <FontAwesomeIcon icon={faCircleDown}  size="1x" className="max-h-[15px] relative top-[2px]"/></Link>
        
        <SocialMediaProfile />
      </div>
      <Animated_avatar />
    </div>
  )
}
