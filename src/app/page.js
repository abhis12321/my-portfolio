import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import AnimatedPhoto from "./_components/Animated_avatar";
import Writer from "./_components/Animated_typewritter";
import Skills from "./_components/Skills";
import About from "./_components/About";
import CodingJourney from "./_components/CodingJourney";
import Academics from "./_components/Academics";
import GithubCintributionGraph from "./_components/GithubContributionGraph";
import CodingProfile from "./_components/CodingProfile";
import Contact from "./_components/Contact";
import SocialMediaProfile from "./_components/SocialMediaProfile";
import { faCircleDown } from "@fortawesome/free-regular-svg-icons";
import PWC_Badges from "./_components/PWC_Badges";

export default function page() {
  return (
    <div className="">
      <div className="flex flex-col sm:flex-row pl-[4vw] xs:px-[7vw] py-2 items-start sm:items-center justify-evenly md:justify-center bg-white dark:bg-black text-gray-600 dark:text-blue-50 border-b-2 border-gray-300 dark:border-gray-800 "
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
          <Writer />

          <Link href={'#about'} className="px-5 py-3 my-2 rounded-3xl font-bold text-sm text-white bg-violet-950 hover:bg-violet-900 shadow-[1px_1px_5px_blue] hover:shadow-[1px_1px_8px_blue] dark:shadow-[1px_1px_5px_white] dark:hover:shadow-[1px_1px_8px_white] max-h-12 overflow-hidden">About me <FontAwesomeIcon icon={faCircleDown}  size="1x" className="sm"/></Link>
          
          <div className="py-2 md:py-[13px] my-3 flex justify-between md:justify-evenly items-center w-[98vw] max-w-[250px] md:max-w-[350px] md:bg-slate-950/5 dark:md:bg-blue-600/15 md:shadow-[0px_1px_2px_gray] rounded-lg">
            <SocialMediaProfile />
          </div>
        </div>
        <AnimatedPhoto />
      </div>
      <About />
      {/* <CodingJourney /> */}
      {/* <Academics /> */}
      <Skills />
      <PWC_Badges />
      <CodingProfile />
      <GithubCintributionGraph />
      <Contact />
    </div>
  );
}
