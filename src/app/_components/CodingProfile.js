import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function CodingProfile() {
  return (
    <div className='bg-transparent py-7'>
      <div className="w-full">
        <div className="flex flex-wrap gap-[6px] xs:gap-4 items-center justify-center bg-white dark:bg-white/10 p-[6px] xs:p-4 pb-3 xs:pb-8 rounded-lg max-w-[1150px] w-[98%] mx-auto shadow-[0_0_5px_gray]">
          <div className="drop-shadow-[2px_3px_1px_black] dark:drop-shadow-[1px_1px_1px_white] w-full">
            <h1 className='mx-auto text-center text-4xl rounded-md drop-shadow-[1px_1px_1px_white] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-violet-700 w-fit p-2'>Coding Profile</h1>
          </div>

          <div className="w-full flex flex-wrap gap-2 justify-between items-center">
            <Link href={'https://www.geeksforgeeks.org/user/abhis12321/'} className="h-[160px] w-full xs:w-[48.5%] md:w-[32.5%] group flex flex-col justify-evenly bg-gray-600/10 hover:bg-blue-600/20 rounded-lg px-4 py-4 shadow-[2px_1px_1px_gray]">
              <Image src={'/img/svgs/gfg.svg'} alt='leetcode' height={50} width={50} className='rounded' />
              <div className="font-bold text-xl text-white drop-shadow-[0_0_2px_black]">GeeksForGeeks</div>
              <div className='text-blue-500 font-bold group-hover:underline w-fit flex items-center justify-center gap-1' target='_blank'>view profile <FontAwesomeIcon icon={faUpRightFromSquare} size='sm' className='max-h-3' /></div>
            </Link>
            <Link href={'https://leetcode.com/u/abhis12321/'} className="h-[160px] w-full xs:w-[48.5%] md:w-[32.5%] group flex flex-col justify-evenly bg-gray-600/10 hover:bg-blue-600/20 rounded-lg px-4 py-4 shadow-[2px_1px_1px_gray]">
              <Image src={'/img/others/leetcode.png'} alt='leetcode' height={50} width={50} className='rounded' />
              <div className="font-bold text-xl text-white drop-shadow-[0_0_2px_black]">LeetCode</div>
              <div className='text-blue-500 font-bold group-hover:underline w-fit flex items-center justify-center gap-1' target='_blank'>view profile <FontAwesomeIcon icon={faUpRightFromSquare} size='sm' className='max-h-3' /></div>
            </Link>
            <Link href={'https://www.codechef.com/users/abhis12321'} className="h-[160px] w-full xs:w-[48.5%] md:w-[32.5%] group flex flex-col justify-evenly bg-gray-600/10 hover:bg-blue-600/20 rounded-lg px-4 py-4 shadow-[2px_1px_1px_gray]">
              <Image src={'/img/svgs/codechef.svg'} alt='leetcode' height={55} width={55} className='rounded' />
              <div className="font-bold text-xl text-white drop-shadow-[0_0_2px_black]">CodeChef</div>
              <div className='text-blue-500 font-bold group-hover:underline w-fit flex items-center justify-center gap-1' target='_blank'>view profile <FontAwesomeIcon icon={faUpRightFromSquare} size='sm' className='max-h-3' /></div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
