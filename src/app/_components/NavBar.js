"use client"
import React, { useRef } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import ToggleModeButton from "./ToggleModeButton";

export default function NavBar({ bodyRef }) {
  const cutX = useRef(null);
  const rightNav = useRef(null);
  const hamBerger = useRef(null);

  const handleRight = () => {
    cutX.current.classList.toggle("hidden")
    rightNav.current.classList.toggle("hidden")
    hamBerger.current.classList.toggle("hidden")
  };


  return (
    <div className="sticky top-0 left-0 z-50 w-full mx-auto bg-white dark:bg-white/10 dark:backdrop-blur-lg font-bold flex items-center justify-between h-[4rem] px-4 xs:px-6 md:pl-8 md:pr-[18px] lg:pl-10 lg:pr-[30px] italic shadow-[0px_0px_1px_gray] overflow-visible">
      <div className="">
        <h2 className="font-extrabold text-3xl text-center rounded-md text-transparent bg-clip-text bg-gradient-to-l from-pink-500 to-orange-500 w-fit leading-[4rem] overflow-hidden drop-shadow-[1px_1px_1px_black]"><span className="font-extrabold">@</span>bhishek singh</h2>
      </div>

      <div className="right-navbar z-50 fixed md:static top-0 right-0 hidden md:flex md:gap-[6px] lg:gap-2 bg-white dark:bg-[#21232E] dark:md:bg-transparent shadow-[-.5px_0_1px_gray] md:shadow-none min-h-[100vh] md:min-h-fit items-center min-w-[170px] dark:font-normal font-medium overflow-hidden h-full md:px-1" ref={rightNav}>
        <div className="mx-auto w-fit text-4xl my-1 py-2 hover:text-red-800 text-center cursor-pointer" onClick={handleRight}>
          <FontAwesomeIcon icon={faXmark} size='sm' className="hidden cutX" ref={cutX}/>
        </div>

        <div className="w-full md:w-fit flex items-center justify-center">
          <Link href="/" className="w-full font-semibold overflow-hidden flex items-center justify-center py-4 md:py-[8px] md:px-6 md:rounded-2xl hover:bg-gray-400/30" >
            Home
          </Link>
        </div>

        <div className="w-full md:w-fit flex items-center justify-center">
          <Link href="/projects" className="w-full font-semibold overflow-hidden flex items-center justify-center py-4 md:py-[8px] md:px-6 md:rounded-2xl hover:bg-gray-400/30" >
            Projects
          </Link>
        </div>

        <div className="w-full md:w-fit flex items-center justify-center">
          <Link href="/#about" className="w-full font-semibold overflow-hidden flex items-center justify-center py-4 md:py-[8px] md:px-6 md:rounded-2xl hover:bg-gray-400/30" >
            About
          </Link>
        </div>

        <div className="w-full md:w-fit flex items-center justify-center">
          <Link href="/#contact" className="w-full font-semibold overflow-hidden flex items-center justify-center py-4 md:py-[8px] md:px-6 md:rounded-2xl hover:bg-gray-400/30" >
            Contact
          </Link>
        </div>

        <ToggleModeButton bodyRef={bodyRef} />
      </div>
      <div className="md:hidden text-3xl py-2">
        <FontAwesomeIcon icon={faBars} size='sm' className="hamberger cursor-pointer text-gray-400" onClick={handleRight} ref={hamBerger}/>
      </div>
    </div>
  );
}
