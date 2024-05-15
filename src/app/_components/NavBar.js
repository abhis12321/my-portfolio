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
    <div className="fixed z-50 w-full bg-gradient-to-r from-gray-400 to-slate-950/95 dark:from-indigo-950 dark:to-blue-950 text-white font-semibold flex items-center justify-between h-[4.6rem] px-4 xs:px-8 overflow-hidden border-b2 border-cyan-950 italic rounded sm:rounded-lg md:rounded-xl lg:rounded-2xl ring-2 ring-gray-700 dark:ring-black">
      <div className="">
        <h2 className="font-bold text-3xl text-center rounded-md text-transparent bg-clip-text bg-gradient-to-l from-pink-500 to-orange-500 w-fit leading-[4rem] overflow-hidden drop-shadow-[1px_1px_1px_black]"><span className="font-extrabold">@</span>bhishek singh</h2>
      </div>

      <div className="right-navbar fixed lg:static top-0 right-0 hidden lg:flex bg-gradient-to-r lg:[background:none] from-gray-700 to-gray-600  dark:from-slate-800 dark:to-slate-950 min-h-[100vh] lg:min-h-fit z-10 items-center min-w-[170px] dark:font-normal font-medium">
        <div className="text-4xl py-2 hover:text-red-800 text-center cursor-pointer" onClick={handleRight}>
          <FontAwesomeIcon icon={faXmark} size='sm' className="hidden cutX" />
        </div>

        <div className="w-full lg:w-fit flex items-center justify-center"><Link href="/" className="w-full font-semibold overflow-hidden flex items-center justify-center py-4 lg:py-3 lg:px-6 lg:rounded-lg hover:bg-slate-950/30 hover:text-white dark:hover:bg-gray-400/30 lg:hover:ring-2 ring-gray-300" >
          Home
        </Link></div>

        <div className="w-full lg:w-fit flex items-center justify-center"><Link href="/projects" className="w-full font-semibold overflow-hidden flex items-center justify-center py-4 lg:py-3 lg:px-6 lg:rounded-lg hover:bg-slate-950/30 hover:text-white dark:hover:bg-gray-400/30 lg:hover:ring-2 ring-gray-300" >
          Projects
        </Link></div>

        <div className="w-full lg:w-fit flex items-center justify-center"><Link href="/#about" className="w-full font-semibold overflow-hidden flex items-center justify-center py-4 lg:py-3 lg:px-6 lg:rounded-lg hover:bg-slate-950/30 hover:text-white dark:hover:bg-gray-400/30 lg:hover:ring-2 ring-gray-300" >
          About
        </Link></div>

        <div className="w-full lg:w-fit flex items-center justify-center"><Link href="#contact" className="w-full font-semibold overflow-hidden flex items-center justify-center py-4 lg:py-3 lg:px-6 lg:rounded-lg hover:bg-slate-950/30 hover:text-white dark:hover:bg-gray-400/30 lg:hover:ring-2 ring-gray-300" >
          Contact
        </Link></div>

        <ToggleModeButton />
      </div>
      <div className="lg:hidden text-3xl py-2">
        <FontAwesomeIcon icon={faBars} size='sm' className="hamberger cursor-pointer text-gray-200" onClick={handleRight} />
      </div>
    </div>
  );
}
