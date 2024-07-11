import React from 'react';
import Link from 'next/link';
import SocialMediaProfile from './SocialMediaProfile';

export default function Footer() {
  return (
    <div className="flex flex-col bg-black border-t-2 border-gray-900 opacity-85 text-gray-400">
      <div className='px-3 xs:px-8 flex flex-col md:flex-row items-center justify-around flex-1'>
        <div className="md:w-[40%] w-full flex flex-col items-center">
          <div className="py-1 w-full flex flex-col items-center justify-center">
            <h2 className="mx-auto py-2 text-center text-4xl rounded-md drop-shadow-[3px_3px_1px_white] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-700 to-violet-700 w-fit"><span className=' font-extrabold'>@</span>bhishek singh</h2>
            <p className="text-center text-sm text-yellow-400 font-semibold drop-shadow-[0_0_7px_white] font-serif italic">follow me</p>
          </div>
          <div className="py-2 md:py-2 flex justify-around items-center bg-slate50 rounded-lg self-center sm:self-auto w-[267px]">
           <SocialMediaProfile />
          </div>

        </div>
        <div className="flex flex-col md:flex-row justify-center md:justify-around md:gap-4 items-center w-full md:w-[60%]">
          <div className="flex md:flex-col md:gap-2 justify-between items-start">
            <Link href={'/'} className='py-1 px-3 rounded-md hover:text-gray-400 text-gray-50 text-center'>home</Link>
            <Link href={'/#about'} className='py-1 px-3 rounded-md hover:text-gray-400 text-gray-50 text-center'>about</Link>
            <Link href={'/#learnings'} className='py-1 px-3 rounded-md hover:text-gray-400 text-gray-50 text-center'>learnings</Link>
          </div>
          <div className="flex md:flex-col md:gap-2 justify-between items-start">
            <Link href={'/projects'} className='py-1 px-3 rounded-md hover:text-gray-400 text-gray-50 text-center'>projects</Link>
            <Link href={'/#contact'} className='py-1 px-3 rounded-md hover:text-gray-400 text-gray-50 text-center'>contact</Link>
            <Link href={'https://student-login-app-nextjs.onrender.com/'} className='py-1 px-3 rounded-md hover:text-gray-400 text-gray-50 text-center' target='_blank'>chat with me</Link>
          </div>
        </div>
      </div>

      <div className="text-gray-500 text-center text-sm py-3 font-extrabold font-serif"><span className="font-extrabold">&copy;</span>2024 Abhishek Singh! A personal portfolio!!</div>
    </div>
  )
}
