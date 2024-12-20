import Link from 'next/link'
import Image from 'next/image'
import { useMemo, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft, faCircleChevronRight, faCode } from '@fortawesome/free-solid-svg-icons';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';

export default function ProjectCard({ project }) {
  const { title, technology, deployement, github, images, description } = project;
  const [activeImage, setActiveImage] = useState(0);
  const len = useMemo(() => images.length + 1, [images]);

  const handleRightMove = () => {
    setActiveImage(prev => (prev + 1) % len);
  }

  const handleLeftMove = () => {
    setActiveImage(prev => (prev - 1 + len) % len);
  }

  return (
    <div className="relative w-[500px] h-[400px] rounded overflow-hidden shadow-[-1px_-1px_2px_gray] hover:shadow-black bg-white dark:bg-white/10 ring-1 ring-gray-600 hover:ring-0 group flex flex-col items-center justify-center hover:scale-[1.04] group duration-300 *:duration-300">
      {
        activeImage !== len - 1 ?
          <Image src={images[activeImage]} alt='demo-image' width={400} height={250} className='w-full h-full' />
          :
          <div className="w-full h-full flex-col items-center justify-center p-2 *:text-center">
            <h2 className="w-fit mx-auto sm:my-2 px-3 dark:px-0 py-2 bg-slate-950/10 dark:bg-transparent rounded-lg font-extrabold text-2xl drop-shadow-[3px_3px_1px_green] text-gray-50 dark:text-white">{title}</h2>
            <p className='text-[10px] xs:text-[12px] italic text-yellow-600 dark:drop-shadow-[0_0_2px_black] font-bold leading-3' >
              <span className='font-semibold' >Tools & technologies used :</span> {technology}</p>

            <div className="flex flex-col sm:gap-4 items-center">
              <p className="font-mono text-[14px] mb-3 sm:my-3 text-gray-800 dark:text-gray-400 max-w-[450px]">{description}</p>
            </div>
          </div>
      }

      <h2 className="absolute left-0 top-0 z-50 w-fit py-0 px-4 rounded items-center justify-between text-center text-lg font-extrabold font-serif drop-shadow-[3px_3px_1px_green] bg-yellow-400 text-orange-800">{title}</h2>

      <div className="absolute z-50 w-full opacity-0 group-hover:opacity-100 flex items-center justify-between p-[7%]">
        <button className='hover:scale-110 text-gray-800 hover:text-blue-900 active:text-violet-800 bg-white rounded-full' onClick={handleLeftMove}><FontAwesomeIcon size='sm' icon={faCircleChevronLeft} className='h-8 aspect-square' /></button>
        <button className='hover:scale-110 text-gray-800 hover:text-blue-900 active:text-violet-800 bg-white rounded-full' onClick={handleRightMove}><FontAwesomeIcon size='sm' icon={faCircleChevronRight} className='h-8 aspect-square' /></button>
      </div>

      <div className="absolute -bottom-full group-hover:bottom-0 left-0 w-full py-12 flex justify-around items-center bg-gray-700/90">
        <Link href={github} target='_blank' className='hover:scale-105 text-black hover:text-blue-900 ring-[2px] ring-black hover:ring-blue-900 hover:bg-blue-100 active:text-violet-700 bg-white flex items-center justify-center text-center rounded-full py-[7px] px-2'>
          <FontAwesomeIcon size='sm' icon={faGithubAlt} className='h-[30px]' />
        </Link>
        <Link href={deployement} target='_blank' className='hover:scale-105 text-black hover:text-blue-800 ring-[2px] ring-black hover:ring-blue-800 hover:bg-blue-100 active:text-violet-700 bg-white flex items-center justify-center text-center rounded-full py-[9px] px-[6px]'>
          <FontAwesomeIcon size='sm' icon={faCode} className='h-6' />
        </Link>
      </div>
    </div>
  )
}
