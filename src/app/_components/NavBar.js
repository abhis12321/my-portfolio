"use client"
import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import ToggleModeButton from "./ToggleModeButton";

export default function NavBar() {
  const handleRight = () => {
    document.querySelector('.right-navbar').classList.toggle('hidden');
    document.querySelector('.cutX').classList.toggle('hidden');
    document.querySelector('.hamberger').classList.toggle('hidden');
  }

  return (
    <div className="fixed z-50 w-full rounded-xl bg-white dark:bg-gradient-to-r dark:from-indigo-950 dark:to-blue-950 textwhite font-semibold flex items-center justify-between h-[4rem] px-4 xs:px-5 md:pl-7 md:pr-6 overflow-hidden italic shadow-[1px_1px_2px_gray] dark:shadow-[1px_1px_2px_black]">
      <div className="">
        <h2 className="font-bold text-3xl text-center rounded-md text-transparent bg-clip-text bg-gradient-to-l from-pink-500 to-orange-500 w-fit leading-[4rem] overflow-hidden drop-shadow-[1px_1px_1px_black]"><span className="font-extrabold">@</span>bhishek singh</h2>
      </div>

      <div className="right-navbar fixed md:static top-0 right-0 hidden md:flex lg:gap-2 bg-gradient-to-r md:[background:none] from-blue-100 to-gray-50  dark:from-indigo-950 dark:to-blue-950 shadow-[-1px_-1px_1px_gray] md:shadow-none min-h-[100vh] md:min-h-fit z-10 items-center min-w-[170px] dark:font-normal font-medium overflow-hidden h-full">
        <div className="mx-auto w-fit text-4xl py-2 hover:text-red-800 text-center cursor-pointer" onClick={handleRight}>
          <FontAwesomeIcon icon={faXmark} size='sm' className="hidden cutX" />
        </div>

        <div className="w-full md:w-fit flex items-center justify-center"><Link href="/" className="w-full font-semibold overflow-hidden flex items-center justify-center py-4 md:py-[10px] md:px-5 md:rounded-lg hover:bg-blue-950/20 dark:hover:bg-gray-400/30 md:hover:ring-2 ring-slate-950 dark:ring-gray-300" >
          Home
        </Link></div>

        <div className="w-full md:w-fit flex items-center justify-center"><Link href="/projects" className="w-full font-semibold overflow-hidden flex items-center justify-center py-4 md:py-[10px] md:px-5 md:rounded-lg hover:bg-blue-950/20 dark:hover:bg-gray-400/30 md:hover:ring-2 ring-slate-950 dark:ring-gray-300" >
          Projects
        </Link></div>

        <div className="w-full md:w-fit flex items-center justify-center"><Link href="/#about" className="w-full font-semibold overflow-hidden flex items-center justify-center py-4 md:py-[10px] md:px-5 md:rounded-lg hover:bg-blue-950/20 dark:hover:bg-gray-400/30 md:hover:ring-2 ring-slate-950 dark:ring-gray-300" >
          About
        </Link></div>

        <div className="w-full md:w-fit flex items-center justify-center"><Link href="/#contact" className="w-full font-semibold overflow-hidden flex items-center justify-center py-4 md:py-[10px] md:px-5 md:rounded-lg hover:bg-blue-950/20 dark:hover:bg-gray-400/30 md:hover:ring-2 ring-slate-950 dark:ring-gray-300" >
          Contact
        </Link></div>

        <ToggleModeButton />
      </div>
      <div className="md:hidden text-3xl py-2">
        <FontAwesomeIcon icon={faBars} size='sm' className="hamberger cursor-pointer text-gray-400" onClick={handleRight} />
      </div>
    </div>
  );
}
