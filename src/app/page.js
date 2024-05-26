import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
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

export default function page() {
  return (
    <div className="">
      <div className="flex flex-col sm:flex-row pl-[4vw] xs:px-[7vw] py-2 items-start sm:items-center justify-evenly md:justify-center bg-white text-gray-600 dark:text-blue-50 dark:[background:url('/img/others/darkbg.gif')] border-b-2 border-gray-400 dark:border-gray-800 "
        style={{ minHeight: "calc(100vh - 4rem)" }} >
        <div className="flex flex-col gap-2 w-full sm:flex-1 items-start">
          <h3 className="text-justify text-[1.3rem] lg:text-[1.7rem] font-bold">
            <span className="">👋</span>Hi there, I&apos;m
          </h3>
          <h1 className="text-[2rem] xs:text-[2.5rem] md:text-[2.7rem] lg:text-[3rem] drop-shadow-[3px_2px_1px_black] sm:drop-shadow-[4px_2px_1px_black] darkxs:drop-shadow-[1px_1px_1px_red] font-extrabold text-left text-orange-400">
            Abhishek Singh
          </h1>
          <h3 className="text-justify text-[1.2rem] lg:text-[1.6rem] font-bold">
            & I am a Passionate
          </h3>
          <Writer />

          <Link href={'#about'} className="px-5 py-3 my-2 rounded-3xl font-bold text-sm text-white bg-violet-950 hover:bg-violet-700 shadow-[1px_1px_5px_blue] hover:shadow-[1px_1px_8px_blue] dark:shadow-[1px_1px_5px_white] dark:hover:shadow-[1px_1px_8px_white] max-h-12 overflow-hidden">About me <FontAwesomeIcon icon={faCircleDown}  size="1x" className="sm"/></Link>
          
          <div className="py-2 md:py-[13px] my-3 flex justify-between md:justify-evenly items-center w-[98vw] max-w-[250px] md:max-w-[351px] md:bg-slate-950/10 dark:md:bg-slate-900/70 rounded-lg">
            <SocialMediaProfile />
          </div>
        </div>
        <AnimatedPhoto />
      </div>
      <About />
      {/* <CodingJourney /> */}
      {/* <Academics /> */}
      <Skills />
      <CodingProfile />
      <GithubCintributionGraph />
      <Contact />
    </div>
  );
}
