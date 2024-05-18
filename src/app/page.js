import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faC, faN } from "@fortawesome/free-solid-svg-icons";
import {
  faBootstrap,
  faCss3Alt,
  faGithub,
  faHtml5,
  faInstagram,
  faJava,
  faLinkedin,
  faReact,
  faSquareJs,
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
import Image from "next/image";

export default function page() {
  return (
    <div className="">
      <div className="flex flex-col-reverse md:px-16 lg:px-24 xl:px-36 py-2 md:flex-row gap-4 md:gap-0 items-center justify-center bg-white text-gray-600 dark:text-blue-50 dark:[background:url('/img/others/darkbg.gif')] border-b-2 border-gray-400 dark:border-gray-800 "
        style={{ minHeight: "calc(100vh - 4rem)" }} >
        <div className="flex flex-col gap-3 md:gap-4 md:flex-1 items-center md:items-start">
          <h3 className="text-justify text-2xl lg:text-3xl font-bold">
            <span className="drop-shadow-[0_0_5px_red]">👋🏻</span>Hi there, I&apos;m
          </h3>
          <h1 className="text-justify text-3xl xs:text-4xl lg:text-5xl font-bold dark:font-semibold dark:drop-shadow-[2px_2px_1px_red]">
            Abhishek Singh
          </h1>
          <h3 className="text-justify text-2xl lg:text-3xl font-bold">
            & I am a Passionate
          </h3>
          <Writer />

          <div className="py-3 my-3 flex justify-evenly items-center w-[98vw] max-w-[300px] xs:max-w-[321px] md:max-w-[351px] sm:bg-slate-950/10 dark:bg-slate-900/70 rounded-lg self-center sm:self-auto">

            <Link
              target="_blank"
              href={`https://github.com/abhis12321`}
              className="hover:scale-110 duration-500"
            >
              <FontAwesomeIcon
                icon={faGithub}
                size="2x"
                className="py-[5px] px-[6px] text-[1.8rem] md:text-[2.4rem] rounded-md bg-slate-700 dark:bg-blue-800/40 text-white"
              />
            </Link>
            <Link
              target="_blank"
              href={`https://www.linkedin.com/in/abhishek-singh-b82427256/`}
              className="hover:scale-110 duration-500"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                size="3x"
                className="text-blue-700 hover:text-blue-600 text-[2.6rem] md:text-[3.2rem]"
              />
            </Link>
            <Link
              target="_blank"
              href={`https://www.instagram.com/____abhis____/`}
              className="hover:scale-110 duration-100"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                size="3x"
                className="text-rose-800 hover:text-rose-700 text-[2.6rem] md:text-[3.3rem]"
              />
            </Link>
            {/* <Link
              target="_blank"
              href={`mailto:abhisheksingh2359328@gmail.com`}
              className="hover:scale-110 duration-500 opacity-80 hover:opacity-100"
            >
            <Image src={'/img/svgs/gmail.svg'} alt="gmail" height={55} width={47} className="w-12"/>
            </Link> */}
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
