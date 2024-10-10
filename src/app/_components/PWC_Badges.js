import Image from 'next/image'
import React from 'react'

export default function PWC_Badges() {
  return (
    <div className='flex flex-wrap items-center justify-center gap-4 max-w-[1150px] w-[98%] mx-auto bg-white dark:bg-white/10 shadow-[0_0_5px_gray] mt-3 md:mt-4 rounded-xl text-gray-400 text-7xl xs:text-8xl sm:text-[9rem] relative pt-4 lg:pb-7 sm:p-5 pb-4 px-1'>
      <div className="hidden sm:block drop-shadow-[2px_3px_1px_black] dark:drop-shadow-[1px_1px_1px_white] w-full py-1">
        <h1 className='mx-auto text-center text-4xl rounded-md drop-shadow-[1px_1px_1px_white] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-violet-700 w-fit p-2'>PwC launchpad certificate</h1>
      </div>
        <Image src={'/img/certificates/PWC.png'} alt='pwc' height={400} width={800} className='' />
    </div>
  )
}
