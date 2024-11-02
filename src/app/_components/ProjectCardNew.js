import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'

export default function ProjectCardNew({ project }) {
    return (
        <div className='w-[500px] h-[530px] rounded-md overflow-hidden shadow-[0_0_2px_gray] hover:shadow-[.5px_.5px_4px_violet] hover:shadow-indigo bg-white dark:bg-white/10 ring-1 ring-gray-600 hover:ring-0 group relative flex flex-col items-center pb-2 hover:scale-[1.005]'>
            <Link href={project.deployement} target='_blank' className="h-[280px] w-full flex items-center justify-center">
                <Image src={project.image} alt='' height={500} width={500} className='w-full h-full shadow-[0_0.2px_1px_gray]' />
                {/* <div className="text-lg font-bold text-red-50 px-6 py-[6px] absolute top-3 z-10 bg-cyan-700/40 backdrop-blur-md rounded-md">{project.title}</div> */}
            </Link>
            <div className="w-full px-4 sm:px-6 py-2 flex flex-col items-center justify-center gap-[6px]">
                <div className="text-2xl font-bold">{project.title}</div>
                <div className="text-xs text-center text-yellow-500/90">{project.technology}</div>
                <div className="text-[14px] font-semibold pt-2 pb-1 text-center text-gray-600 dark:text-gray-400">{project.description}</div>
                <div className="w-full flex justify-around items-center">
                    <Link href={project.github} target='_blank' className='w-[80px] py-[5px] text-center bg-blue-950/50 dark:bg-slate-950 hover:bg-blue-950/80 text-white rounded-lg text-sm font-bold backdrop-blur-lg hover:scale-105 shadow-[.5px_1px_1px_black] dark:shadow-[.5px_1px_1px_white] hover:underline flex items-center justify-center gap-1'>
                        <div className="">github</div>
                        <FontAwesomeIcon size='sm' icon={faArrowUpRightFromSquare} className='h-3' />
                    </Link>
                    <Link href={project.deployement} target='_blank' className='w-[80px] py-[5px] text-center bg-blue-950/50 dark:bg-slate-950 hover:bg-blue-950/80 text-white rounded-lg text-sm font-bold backdrop-blur-lg hover:scale-105 shadow-[.5px_1px_1px_black] dark:shadow-[.5px_1px_1px_white] hover:underline flex items-center justify-center gap-1'>
                        <div className="">live</div>
                        <FontAwesomeIcon size='sm' icon={faArrowUpRightFromSquare} className='h-3' />
                    </Link>
                </div>
            </div>
        </div>
    )
}
