import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function CodingProfile() {
  return (
    <div className='bg-transparent py-6'>

      <div className="drop-shadow-[3px_4px_1px_black] dark:drop-shadow-[2px_1px_1px_white] w-full">
        <h1 className='mx-auto text-center text-4xl rounded-md drop-shadow-[1px_1px_1px_white] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-violet-700 w-[98%] xs:w-fit pt-1 pb-8'>Coding Profile</h1>
      </div>

      <div className="w-full">
        <div className="flex flex-wrap gap-[6px] xs:gap-4 items-center justify-center bg-gradient-to-b from-white to-slate-50 dark:from-cyan-950 dark:to-blue-950/90 p-[6px] xs:p-4 rounded-lg max-w-[1150px] w-[98%] mx-auto shadow-[0_0_5px_gray] dark:shadow-[0_0_5px_white]">
          <div className="flex flex-col justify-evenly bg-blue-50 dark:bg-blue-100/15 rounded-lg px-6 py-4 w-full max-w-[440px] sm:w-[48%] lg:w-[32%] xs:min-w-[360px] sm:min-w-[289px] lg:min-w-[220px] h-[164px] shadow-[1px_1px_1px_black]">
            <Image src={'/img/svgs/gfg.svg'} alt='leetcode' height={50} width={50} className='rounded' />
            <div className="font-bold text-xl text-white drop-shadow-[0_0_2px_black]">GeeksForGeeks</div>
            <Link href={'https://www.geeksforgeeks.org/user/abhis12321/'} className='text-blue-500 font-bold hover:underline max-h-8 overflow-hidden w-fit' target='_blank'>view profile <FontAwesomeIcon icon={faUpRightFromSquare} size='sm' /></Link>
          </div>
          <div className="flex flex-col justify-evenly bg-blue-50 dark:bg-blue-100/15 rounded-lg px-6 py-4 w-full max-w-[440px] sm:w-[48%] lg:w-[32%] xs:min-w-[360px] sm:min-w-[289px] lg:min-w-[220px] h-[164px] shadow-[1px_1px_1px_black]">
            <Image src={'/img/others/leetcode.png'} alt='leetcode' height={50} width={50} className='rounded' />
            <div className="font-bold text-xl text-white drop-shadow-[0_0_2px_black]">LeetCode</div>
            <Link href={'https://leetcode.com/u/abhis12321/'} className='text-blue-500 font-bold hover:underline max-h-8 overflow-hidden w-fit' target='_blank'>view profile <FontAwesomeIcon icon={faUpRightFromSquare} size='sm' /></Link>
          </div>
          <div className="flex flex-col justify-evenly bg-blue-50 dark:bg-blue-100/15 rounded-lg px-6 py-4 w-full max-w-[440px] sm:w-[48%] lg:w-[32%] xs:min-w-[360px] sm:min-w-[289px] lg:min-w-[220px] h-[164px] shadow-[1px_1px_1px_black]">
            <Image src={'/img/svgs/codechef.svg'} alt='leetcode' height={55} width={55} className='rounded' />
            <div className="font-bold text-xl text-white drop-shadow-[0_0_2px_black]">CodeChef</div>
            <Link href={'https://www.codechef.com/users/abhis12321'} className='text-blue-500 font-bold hover:underline max-h-8 overflow-hidden w-fit' target='_blank'>view profile <FontAwesomeIcon icon={faUpRightFromSquare} size='sm' /></Link>
          </div>
        </div>
      </div>
    </div>
  )
}
