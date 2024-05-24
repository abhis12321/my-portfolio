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

          <div className="py-2 md:py-[14px] my-3 flex justify-evenly items-center w-[98vw] max-w-[300px] xs:max-w-[321px] md:max-w-[351px] bg-slate-950/10 dark:bg-slate-900/70 rounded-lg self-center sm:self-auto">
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
