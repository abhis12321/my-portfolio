import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from 'next/link';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <div className="flex flex-col bg-black border-t-2 border-gray-900 opacity-85 text-gray-400">
      <div className='px-3 xm:px-8 flex flex-col md:flex-row items-center justify-around flex-1'>
        <div className="md:w-[40%] w-full flex flex-col items-center">
          <div className="py-2">
            <h2 className="mx-auto py-2 text-center text-4xl rounded-md drop-shadow-[3px_3px_1px_black] dark:drop-shadow-[3px_3px_1px_white] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-violet-700 w-[95%] xs:w-fit leading-[rem]"><span className=' font-extrabold'>@</span>bhishek singh</h2>
            <p className="text-center text-yellow-500 text-sm font-semibold">abhisheksingh2359328@gmail.com</p>
          </div>
          <div className="py-4 flex justify-around items-center bg-slate50 rounded-lg self-center sm:self-auto w-[267px]">
            <Link
              target="_blank"
              href={`https://github.com/abhis12321`}
              className=""
            >
              <FontAwesomeIcon
                icon={faGithub}
                size="3x"
                className=" text-gray-400 hover:text-gray-300 hover:scale-110 text-4xl md:text-5xl"
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
                className="text-blue-700 hover:text-blue-600 hover:scale-110 text-4xl md:text-5xl"
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
                className="text-rose-800 hover:text-rose-700 hover:scale-110 text-4xl md:text-5xl"
              />
            </Link>
          </div>

        </div>
        <div className="flex flex-col md:flex-row justify-center md:justify-around gap-4 items-center w-full md:w-[60%]">
          <div className="flex md:flex-col md:gap-2 justify-between items-start">
            <Link href={'/'} className='py-1 px-3 rounded-md hover:text-gray-100 text-center'>home</Link>
            <Link href={'/#about'} className='py-1 px-3 rounded-md hover:text-gray-100 text-center'>about</Link>
            <Link href={'/#learnings'} className='py-1 px-3 rounded-md hover:text-gray-100 text-center'>learnings</Link>
          </div>
          <div className="flex md:flex-col md:gap-2 justify-between items-start">
            <Link href={'/projects'} className='py-1 px-3 rounded-md hover:text-gray-100 text-center'>projects</Link>
            <Link href={'#contact'} className='py-1 px-3 rounded-md hover:text-gray-100 text-center'>contact</Link>
            <Link href={'https://student-login-app-nextjs.onrender.com/'} className='py-1 px-3 rounded-md hover:text-gray-100 text-center' target='_blank'>chat with me</Link>
          </div>
        </div>
      </div>

      <div className="text-slate-50 text-center text-sm p-2 font-bold"><span className="font-extrabold">&copy;</span>2024 Abhishek Singh! A personal portfolio!!</div>
    </div>
  )
}
