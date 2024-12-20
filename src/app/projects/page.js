"use client"
import { projects } from '../_components/projectsData';
import ProjectCard from '../_components/ProjectCard';
// import ProjectCardNew from '../_components/ProjectCardNew';


export default function page() {
  return (
    <div className='flex gap-6 flex-col py-3'>
      <div className="drop-shadow-[2px_3px_1px_black] dark:drop-shadow-[1px_1px_1px_white] w-full">
        <h1 className="mx-auto text-center py-4 sm:px-8 my-2 text-4xl md:text-5xl rounded-md drop-shadow-[1px_1px_1px_white] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-800 w-fit">
          My Projects
        </h1>
      </div>
      <div className="flex gap-6 flex-wrap items-center justify-center">
        {
          projects.map((project, index) => <ProjectCard project={project} key={index} />)
        }
        {/* {
          projects.map((project, index) => <ProjectCardNew project={project} key={index} />)
        } */}

      </div>

    </div>
  )
}