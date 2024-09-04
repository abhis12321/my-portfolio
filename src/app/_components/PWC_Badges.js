import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function PWC_Badges() {
  return (
    <div className='flex flex-wrap items-center justify-center dark:between gap-4 max-w-[1150px] w-[98%] mx-auto bg-white dark:bg-transparent shadow-[0_0_5px_gray] dark:shadow-none mt-3 md:mt-4 rounded-xl text-gray-400 text-7xl xs:text-8xl sm:text-[9rem] relative pt-4 lg:pb-7 sm:p-5 pb-4 px-1'>
      <div className="drop-shadow-[2px_3px_1px_black] dark:drop-shadow-[1px_1px_1px_white] w-full py-1">
        <h1 className='mx-auto text-center text-4xl rounded-md drop-shadow-[1px_1px_1px_white] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-violet-700 w-fit p-2'>PwC course Badges</h1>
      </div>

      <Link href={"https://pwc.tekstac.com/blocks/tekbadges/badge.php?id=21925"} className='ring-2 ring-gray-600/90 hover:ring-blue-700 text-gray-600 hover:text-blue-700 rounded relative px-2 active:ring-green-700' target='_blank'>
        <Image src={'/img/certificates/python_fundamental.png'} alt='cyber-security-certificate' width={600} height={400} className='xs:h-[230px] w-full xs:min-w-[312px] xs:w-auto rounded' />
        <FontAwesomeIcon size='sm' icon={faUpRightFromSquare} className='absolute bottom-3 right-4 text-2xl' />
      </Link>
      
      <Link href={"https://pwc.tekstac.com/blocks/tekbadges/badge.php?id=21925"} className='ring-2 ring-gray-600/90 hover:ring-blue-700 text-gray-600 hover:text-blue-700 rounded relative px-2 active:ring-green-700' target='_blank'>
        <Image src={'/img/certificates/java_programming.png'} alt='cyber-security-certificate' width={600} height={400} className='xs:h-[230px] w-full xs:min-w-[312px] xs:w-auto rounded' />
        <FontAwesomeIcon size='sm' icon={faUpRightFromSquare} className='absolute bottom-3 right-4 text-2xl' />
      </Link>
      <Link href={"https://pwc.tekstac.com/blocks/tekbadges/badge.php?id=21925"} className='ring-2 ring-gray-600/90 hover:ring-blue-700 text-gray-600 hover:text-blue-700 rounded relative px-2 active:ring-green-700' target='_blank'>
        <Image src={'/img/certificates/rdbms.png'} alt='cyber-security-certificate' width={600} height={400} className='xs:h-[230px] w-full xs:min-w-[312px] xs:w-auto rounded' />
        <FontAwesomeIcon size='sm' icon={faUpRightFromSquare} className='absolute bottom-3 right-4 text-2xl' />
      </Link>
      <Link href={"https://pwc.tekstac.com/blocks/tekbadges/badge.php?id=21925"} className='ring-2 ring-gray-600/90 hover:ring-blue-700 text-gray-600 hover:text-blue-700 rounded relative px-2 active:ring-green-700' target='_blank'>
        <Image src={'/img/certificates/cyber_security.png'} alt='cyber-security-certificate' width={600} height={400} className='xs:h-[230px] w-full xs:min-w-[312px] xs:w-auto rounded' />
        <FontAwesomeIcon size='sm' icon={faUpRightFromSquare} className='absolute bottom-3 right-4 text-2xl' />
      </Link>
      <Link href={"https://pwc.tekstac.com/blocks/tekbadges/badge.php?id=21925"} className='ring-2 ring-gray-600/90 hover:ring-blue-700 text-gray-600 hover:text-blue-700 rounded relative px-2 active:ring-green-700' target='_blank'>
        <Image src={'/img/certificates/dev_ops_fundamental.png'} alt='cyber-security-certificate' width={600} height={400} className='xs:h-[230px] w-full xs:min-w-[312px] xs:w-auto rounded' />
        <FontAwesomeIcon size='sm' icon={faUpRightFromSquare} className='absolute bottom-3 right-4 text-2xl' />
      </Link>

    </div>
  )
}
