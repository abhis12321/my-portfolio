import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function CodingProfile() {
  return (
    <div className='bg-blue-950/5 px-4 py-6'>
      <h1 className='mx-auto text-center text-4xl rounded-md drop-shadow-[3px_3px_1px_black] dark:drop-shadow-[3px_3px_1px_white] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-violet-700 w-[95%] xs:w-fit pt-1 pb-8'>Coding Profile</h1>
      <div className="flex flex-wrap gap-4 items-center justify-center w-[98%] max-w[1000px] mx-auto">
        <div className="flex flex-col justify-evenly bg-slate-50 dark:bg-slate-700 rounded-lg px-6 py-4 min-w-[360px] h-[164px] shadow-[1px_1px_1px_black]">
          <svg xmlns="http://www.w3.org/2000/svg" id="GFG" width="59.077" height="29.539" viewBox="0 0 59.077 29.539">
            <path id="Path_402" data-name="Path 402" d="M193.664,1471.966H169.257a9.748,9.748,0,0,1,17.129-5.146l3.55-3.57a14.77,14.77,0,0,0-25.724,8.716h-.085a14.77,14.77,0,0,0-25.724-8.716l3.55,3.57a9.748,9.748,0,0,1,17.129,5.146H134.674q-.043.565-.044,1.141a14.771,14.771,0,0,0,29.149,3.383h.778a14.769,14.769,0,0,0,29.149-3.383Q193.708,1472.531,193.664,1471.966ZM149.4,1482.855a9.749,9.749,0,0,1-9.151-6.385h18.3A9.75,9.75,0,0,1,149.4,1482.855Zm29.538,0a9.75,9.75,0,0,1-9.152-6.385h18.3A9.75,9.75,0,0,1,178.939,1482.855Z" transform="translate(-134.631 -1458.338)" fill="#2f8d46" />
          </svg>
          <div className="font-bold text-xl text-white drop-shadow-[0_0_2px_black]">GeeksForGeeks</div>
          <Link href={'https://www.geeksforgeeks.org/user/abhis12321/'} className='text-blue-500 font-bold hover:underline max-h-8 overflow-hidden w-fit' target='_blank'>view profile <FontAwesomeIcon icon={faUpRightFromSquare} size='sm'  /></Link>
        </div>
        <div className="flex flex-col justify-evenly bg-slate-50 dark:bg-slate-700 rounded-lg px-6 py-4 min-w-[360px] h-[164px] shadow-[1px_1px_1px_black]">
          <Image src={'	https://assets.leetcode.com/users/leetcode/avatar_1568224780.png'} alt='leetcode' height={50} width={50} className='rounded' />
          <div className="font-bold text-xl text-white drop-shadow-[0_0_2px_black]">LeetCode</div>
          <Link href={'https://leetcode.com/u/abhis12321/'} className='text-blue-500 font-bold hover:underline max-h-8 overflow-hidden w-fit' target='_blank'>view profile <FontAwesomeIcon icon={faUpRightFromSquare} size='sm'  /></Link>
        </div>
        <div className="flex flex-col justify-evenly bg-slate-50 dark:bg-slate-700 rounded-lg px-6 py-4 min-w-[360px] h-[164px] shadow-[1px_1px_1px_black]">
          <Image src={'https://cdn.codechef.com/images/cc-logo-mobile-1.svg'} alt='leetcode' height={55} width={55} className='rounded' />
          <div className="font-bold text-xl text-white drop-shadow-[0_0_2px_black]">CodeChef</div>
          <Link href={'https://www.codechef.com/users/abhis12321'} className='text-blue-500 font-bold hover:underline max-h-8 overflow-hidden w-fit' target='_blank'>view profile <FontAwesomeIcon icon={faUpRightFromSquare} size='sm'  /></Link>
        </div>
      </div>
    </div>
  )
}
