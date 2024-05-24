import React from 'react';
import Link from 'next/link';
import SocialMediaProfile from './SocialMediaProfile';

export default function Footer() {
  return (
    <div className="flex flex-col bg-black border-t-2 border-gray-900 opacity-85 text-gray-400">
      <div className='px-3 xs:px-8 flex flex-col md:flex-row items-center justify-around flex-1'>
        <div className="md:w-[40%] w-full flex flex-col items-center">
          <div className="py-2 w-full flex flex-col items-center justify-center">
            <h2 className="mx-auto py-2 text-center text-4xl rounded-md drop-shadow-[3px_3px_1px_white] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-700 to-violet-700 w-fit"><span className=' font-extrabold'>@</span>bhishek singh</h2>
            {/* <Link href={"mailto:abhisheksingh2359328@gmail.com"} className="text-center text-yellow-500 text-sm font-semibold">abhisheksingh2359328@gmail.com</Link> */}
          </div>
          <div className="py-2 md:py-4 flex justify-around items-center bg-slate50 rounded-lg self-center sm:self-auto w-[267px]">
           <SocialMediaProfile />
          </div>

        </div>
        <div className="flex flex-col md:flex-row justify-center md:justify-around md:gap-4 items-center w-full md:w-[60%]">
          <div className="flex md:flex-col md:gap-2 justify-between items-start">
            <Link href={'/'} className='py-1 px-3 rounded-md hover:text-gray-50 text-center'>home</Link>
            <Link href={'/#about'} className='py-1 px-3 rounded-md hover:text-gray-50 text-center'>about</Link>
            <Link href={'/#learnings'} className='py-1 px-3 rounded-md hover:text-gray-50 text-center'>learnings</Link>
          </div>
          <div className="flex md:flex-col md:gap-2 justify-between items-start">
            <Link href={'/projects'} className='py-1 px-3 rounded-md hover:text-gray-50 text-center'>projects</Link>
            <Link href={'/#contact'} className='py-1 px-3 rounded-md hover:text-gray-50 text-center'>contact</Link>
            <Link href={'https://student-login-app-nextjs.onrender.com/'} className='py-1 px-3 rounded-md hover:text-gray-50 text-center' target='_blank'>chat with me</Link>
          </div>
        </div>
      </div>

      <div className="text-slate-50 text-center text-sm py-3 font-bold"><span className="font-extrabold">&copy;</span>2024 Abhishek Singh! A personal portfolio!!</div>
    </div>
  )
}
