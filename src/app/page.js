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

export default function page() {
  return (
    <div className="">
      <div className="flex flex-col-reverse md:px-16 lg:px-24 xl:px-36 md:flex-row gap-4 md:gap-0 items-center justify-center bg-gradient-to-br dark:bg-gradient-to-r from-gray-100 to-white dark:from-slate-950 dark:via-black dark:to-slate-950 text-gray-600 dark:text-white bg-[ul('/Ab2.png')] bg-no-repeat bg-center py-2 border-b-2 border-gray-800 "
        style={{ minHeight: "calc(100vh - 4.6rem)" }} >
        <div className="flex flex-col gap-3 md:gap-4 md:flex-1 items-center md:items-start">
          <h3 className="text-justify text-2xl lg:text-3xl font-semibold">
            <span className="drop-shadow-[0_0_5px_black]">👋🏻 </span>Hi there, I&apos;m
          </h3>
          <h1 className="text-justify text-3xl xs:text-4xl lg:text-5xl font-semibold drop-shadow-[1px_1px_1px_red]">
            Abhishek Singh
          </h1>
          <h3 className="text-justify text-2xl lg:text-3xl font-semibold">
            & I am a Passionate
          </h3>
          <Writer />

          <div className="py-4 flex justify-evenly items-center w-[98vw] max-w-[351px] bg-slate-950/20 dark:bg-slate-900 dark:shadow-[0_0_5px_gray] rounded-lg self-center sm:self-auto drop-shadow-[0_0_1px_white] dark:drop-shadow-[0_0_1px_black]">
            <Link
              target="_blank"
              href={`https://github.com/abhis12321`}
              className=""
            >
              <FontAwesomeIcon
                icon={faGithub}
                size="3x"
                className="text-gray-700  dark:text-gray-400 dark:hover:text-gray-300 hover:scale-110"
              />
            </Link>
            <Link
              target="_blank"
              href={`https://www.linkedin.com/in/abhishek-singh-b82427256/`}
              className=""
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                size="3x"
                className="text-blue-700 hover:text-blue-600 hover:scale-110"
              />
            </Link>
            <Link
              target="_blank"
              href={`https://www.instagram.com/____abhis____/`}
              className=""
            >
              <FontAwesomeIcon
                icon={faInstagram}
                size="3x"
                className="text-rose-800 hover:text-rose-700  hover:scale-110"
              />
            </Link>
          </div>
        </div>
        <AnimatedPhoto />
      </div>
      <About />
      <Skills />
      {/* <CodingJourney /> */}
    </div>
  );
}
