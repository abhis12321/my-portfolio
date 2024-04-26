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
import AnimatedPhoto from "./animated_avatar";
import Writer from './animated_typewritter';

export default function page() {
  return (
    <div className="">
      <div className="flex flex-col-reverse md:flex-row items-center justify-center bg-gradient-to-bl from-gray-900 via-cyan-950 via-2% to-slate-950 text-white bg-[ul('/Ab2.png')] bg-no-repeat bg-center py-2 border-b-2 border-gray-800" style={{ minHeight: "calc(100vh - 4rem)" }}>
        <div className="flex flex-col gap-4 max-w-[95%] md:w-[55%] lg:w-[45%] mx-auto items-center md:items-start">
          <h3 className="text-justify drop-shadow-[0_0_10px_red] text-xl md:text-3xl font-semibold">
          👋🏻 Hi there, I&apos;m
          </h3>
          <h1 className="text-justify drop-shadow-[0_0_8px_red] text-3xl md:text-5xl font-semibold">
            Abhishek Singh
          </h1>
          <h3 className="text-justify drop-shadow-[0_0_10px_red] text-xl md:text-3xl font-semibold">
            & I am a Passionate
          </h3>
          <Writer />

          <div className="py-4 flex justify-evenly items-center w-[330px] md:w-[351px] bg-slate-900 shadow-[0_0_5px_gray] rounded-lg self-center sm:self-auto">
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
                className="text-rose-800 hover:text-rose-700  hover:scale-110"
              />
            </Link>
          </div>
        </div>
        <AnimatedPhoto />
      </div>

      <section className="gap-6 bg-gray-950  text-white py-5 flex items-center justify-center flex-col " id="learnings">
        <h1 className="mx-auto text-center py-4 xs:px-8 my-2 text-4xl rounded-md border-2 border-white font-extrabold  text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 w-[95%] xs:w-fit">
          Coding Journey
        </h1>

        <div className="min-h-[40vh] flex gap-3 w-[95%] md:w-[80%] lg:max-w-[65%] rounded-lg p-1 px-4 shadow-[0_0_10px_white] hover:shadow-[0_0_15px_red] bg-gray-900 ">
          <div className="flex flex-col justify-center items-center py-4  xs:w-[30%] ">
            <FontAwesomeIcon
              icon={faC}
              size="8x"
              className="bg-blue-950 px-4 py-2 md:px-5 md:py-3 rounded-lg h-[5rem] md:h-[6rem]"
            />
          </div>
          <div className="flex flex-col justify-center items-center py-4 xs:w-[70%]">
            <h2 className="bg-gray-950 font-bold px-4 py-2 rounded">
              February 2022
            </h2>
            <p className="font-mono text-[14px] text-gray-300 py-3">
              My first and the starting programming language is C as It was also
              in the course of my BTECH 1st year and 2nd year hence I gone through
              the BASICS of C language and Data Structure in C language along with some sorting-algorithms.
            </p>
          </div>
        </div>


        <div className="min-h-[40vh] flex gap-3 w-[95%] md:w-[80%] lg:max-w-[65%] rounded-lg p-1 px-4 shadow-[0_0_10px_white] hover:shadow-[0_0_15px_red] bg-gray-900 ">
          <div className="flex flex-col justify-center items-center py-4 xs:w-[30%] ">
            <FontAwesomeIcon
              icon={faJava}
              size="8x"
              className="bg-orange-800  px-4 py-2 rounded-lg h-[5rem] md:h-[6rem]"
            />
            <h3 className="font-bold ">Java</h3>
          </div>
          <div className="flex flex-col justify-center items-center py-4 xs:w-[70%]">
            <h2 className="bg-gray-950 font-bold px-4 py-2 rounded">
              August 2022
            </h2>
            <p className="font-mono text-[14px] text-gray-400 py-3">
              Java is my main programming language as I have spend a long time
              to study the BASICS of JAVA , Data Structure and Algorithm in JAVA
              language ans Object Oriented Programming in JAVA language
            </p>
          </div>
        </div>

        <div className="min-h-[40vh] flex gap-3 w-[95%] md:w-[80%] lg:max-w-[65%] rounded-lg p-1 px-4 shadow-[0_0_10px_white] hover:shadow-[0_0_15px_red] bg-gray-900 ">
          <div className="flex flex-col justify-center items-center py-4 xs:w-[30%] ">
            <FontAwesomeIcon
              icon={faHtml5}
              size="8x"
              className="text-orange-700  px-4 py-2 rounded-lg h-[5.9rem] md:h-[6.9rem]"
            />
            <h3 className="font-bold ">HTML</h3>
          </div>
          <div className="flex flex-col justify-center items-center py-4 xs:w-[70%]">
            <h2 className="bg-gray-950 font-bold px-4 py-2 rounded">
              December 2022
            </h2>
            <p className="font-mono text-[14px] text-gray-400 py-3">
              It was the initial Starting for my web development journey as a
              beginner I started with HTML(Hyper Text Markup Language)
            </p>
          </div>
        </div>

        <div className="min-h-[40vh] flex gap-3 w-[95%] md:w-[80%] lg:max-w-[65%] rounded-lg p-1 px-4 shadow-[0_0_10px_white] hover:shadow-[0_0_15px_red] bg-gray-900 ">
          <div className="flex flex-col justify-center items-center py-4] xs:w-[30%] ">
            <FontAwesomeIcon
              icon={faCss3Alt}
              size="8x"
              className="text-blue-800 h-[5.9rem] md:h-[6.9rem]"
            />
            <h3 className="font-bold ">CSS</h3>
          </div>
          <div className="flex flex-col justify-center items-center py-4 xs:w-[70%]">
            <h2 className="bg-gray-950 font-bold px-4 py-2 rounded">
              December 2022
            </h2>
            <p className="font-mono text-[14px] text-gray-400 py-3">
              It was the initial Starting for my web development journey as a
              beginner I started with HTML and here I also focused on
              CSS(Cascading Style Sheet) as It gives a good look to the HTML
            </p>
          </div>
        </div>

        <div className="min-h-[40vh] flex gap-3 w-[95%] md:w-[80%] lg:max-w-[65%] rounded-lg p-1 px-4 shadow-[0_0_10px_white] hover:shadow-[0_0_15px_red] bg-gray-900 ">
          <div className="flex flex-col justify-center items-center py-4] xs:w-[30%] ">
            <FontAwesomeIcon
              icon={faSquareJs}
              size="8x"
              className="text-yellow-700 h-[5.5rem] md:h-[6.7rem]"
            />
            <h3 className="font-bold ">JavaScript</h3>
          </div>
          <div className="flex flex-col justify-center items-center py-4 xs:w-[70%]">
            <h2 className="bg-gray-950 font-bold px-4 py-2 rounded">
              February 2023
            </h2>
            <p className="font-mono text-[14px] text-gray-400 py-3">
              After having a good knowledge of HTML and CSS, I moved to
              JavaScript as It is used in Front-end and Back-end of and web-app
              and provides some Dynamic properties too
            </p>
          </div>
        </div>

        <div className="min-h-[40vh] flex gap-3 w-[95%] md:w-[80%] lg:max-w-[65%] rounded-lg p-1 px-4 shadow-[0_0_10px_white] hover:shadow-[0_0_15px_red] bg-gray-900 ">
          <div className="flex flex-col justify-center items-center py-4] xs:w-[30%] ">
            <FontAwesomeIcon
              icon={faBootstrap}
              size="8x"
              className="text-violet-700 h-[5.7rem] md:h-[6.7rem]"
            />
            <h3 className="font-bold ">Bootstrap</h3>
          </div>
          <div className="flex flex-col justify-center items-center py-4 xs:w-[70%]">
            <h2 className="bg-gray-950 font-bold px-4 py-2 rounded">
              April 2023
            </h2>
            <p className="font-mono text-[14px] text-gray-400 py-3">
              Bootstrap is an toolkit which makes the web development very fast
              and dynamic, It is an predefined CSS and JavaScript containing
              tool, I spend some time to learn How to use Bootstrap in my
              projects
            </p>
          </div>
        </div>

        <div className="min-h-[40vh] flex gap-3 w-[95%] md:w-[80%] lg:max-w-[65%] rounded-lg p-1 px-4 shadow-[0_0_10px_white] hover:shadow-[0_0_15px_red] bg-gray-900 ">
          <div className="flex flex-col justify-center items-center py-4] xs:w-[30%] ">
            <FontAwesomeIcon
              icon={faGithub}
              size="8x"
              className="text-gray-400 h-[5.7rem] md:h-[6.7rem]"
            />
            <h3 className="font-bold ">Git & Github</h3>
          </div>
          <div className="flex flex-col justify-center items-center py-4 xs:w-[70%]">
            <h2 className="bg-gray-950 font-bold px-4 py-2 rounded">
              May 2023
            </h2>
            <p className="font-mono text-[14px] text-gray-400 py-3">
              I gone through the basics of Git & Github, As Git & Github is a version control system that is a necessity in today&apos;s programming world for mantaining record of the code versions and also tracking the development of any program or project. Git & Github makes the code management easy and trackable.
            </p>
          </div>
        </div>

        <div className="min-h-[40vh] flex gap-3 w-[95%] md:w-[80%] lg:max-w-[65%] rounded-lg p-1 px-4 shadow-[0_0_10px_white] hover:shadow-[0_0_15px_red] bg-gray-900 ">
          <div className="flex flex-col justify-center items-center py-4] xs:w-[30%] ">
            <FontAwesomeIcon
              icon={faReact}
              size="7x"
              className="bg-blue-900 rounded-lg p-2 h-[4.5rem] md:h-[5.5rem]"
            />
            <h3 className="font-bold ">ReactJS</h3>
          </div>
          <div className="flex flex-col justify-center items-center py-4 xs:w-[70%]">
            <h2 className="bg-gray-950 font-bold px-4 py-2 rounded">
              June 2023
            </h2>
            <p className="font-mono text-[14px] text-gray-400 py-3">
              I gone through the basics and the advance concepts of ReactJs. React is an JavaScript library for front-end only and I spend a
              lot of time in learning ReactJS and its properties like : hooks,
              routing , rendering, etc
            </p>
          </div>
        </div>

        <div className="min-h-[40vh] flex gap-3 w-[95%] md:w-[80%] lg:max-w-[65%] rounded-lg px-4 shadow-[0_0_10px_white] hover:shadow-[0_0_15px_red] bg-gray-900 ">
          <div className="flex flex-col justify-center items-center py-4 xs:w-[30%] ">
            <FontAwesomeIcon
              icon={faN}
              size="5x"
              className="bg-black px-6 py-4 md:px-8 md:py-5 rounded-full h-[4rem] md:h-[5rem]"
            />
            <h3 className="font-bold ">NextJS</h3>
          </div>
          <div className="flex flex-col justify-center items-center py-4 xs:w-[70%]">
            <h2 className="bg-gray-950 font-bold px-4 py-2 rounded">
              September 2023
            </h2>
            <p className="font-mono text-[14px] text-gray-400 py-3">
              NextJs is an a complete package for web development, It is a
              ReactJS framework but as we know ReactJS is only an front-end
              libreary but NextJS is a not only for Front-end, It can be used
              for Back-end develoment too.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
