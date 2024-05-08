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
      <div className="flex flex-col-reverse md:flex-row items-center justify-center bg-gradient-to-br dark:bg-gradient-to-r from-teal-950/80 via-sky-950/90 to-sky-950 dark:from-slate-800 dark:via-cyan-950 dark:to-slate-900 text-white bg-[ul('/Ab2.png')] bg-no-repeat bg-center py-2 border-b-2 border-gray-800"
        style={{ minHeight: "calc(100vh - 4rem)" }} >
        <div className="flex flex-col gap-4 max-w-[95%] md:w-[66%] md:pl-[9vw] lg:pl-0 lg:w-[45%] mx-auto items-center md:items-start">
          <h3 className="text-justify drop-shadow-[0_0_10px_red] text-xl md:text-2xl md:font-semibold">
            👋🏻 Hi there, I&apos;m
          </h3>
          <h1 className="text-justify drop-shadow-[0_0_8px_red] text-2xl md:text-4xl font-semibold">
            Abhishek Singh
          </h1>
          <h3 className="text-justify drop-shadow-[0_0_10px_red] text-xl md:text-2xl md:font-semibold">
            & I am a Passionate
          </h3>
          <Writer />

          <div className="py-4 flex justify-evenly items-center w-[98vw] max-w-[351px] bg-slate-950/50 dark:bg-slate-900 shadow-[0_0_5px_gray] rounded-lg self-center sm:self-auto">
            <Link
              target="_blank"
              href={`https://github.com/abhis12321`}
              className=""
            >
              <FontAwesomeIcon
                icon={faGithub}
                size="3x"
                className="text-gray-400 hover:text-gray-300 hover:scale-110"
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
                className="text-rose-900 hover:text-rose-800  hover:scale-110"
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
