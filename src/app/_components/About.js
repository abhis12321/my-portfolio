import React from 'react'

export default function About() {
  return (
    <div className="flex flex-col items-center justify-evenly py-6 bg-blue-950/5" id="about">
      <div className="rounded-2xl w-[98%] max-w-[650px] flex flex-col items-center justify-evenly bg-slate-200 dark:bg-gradient-to-b dark:from-gray-950 dark:via-cyan-950 dark:to-slate-900 shadow-[0_0_5px_black] dark:shadow-[0_0_5px_white] py-6 px-3 xs:px-6 sm:px-12">
        <h1 className="text-center py-4 px-8 mb-2 rounded-md drop-shadow-[3px_3px_1px_black] dark:drop-shadow-[3px_3px_1px_white] text-4xl sm:text-5xl font-extrabold sm:font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-violet-700 w-fit">
          About me
        </h1>
        <div className="text-center text-gray-700 font-semibold dark:text-slate-300 font-mono text-[14px] xs:text-[16px]">
          I am a passionate web developer and
          <span className="font-bold text-red-500 dark:text-red-700">
            {" "}
            currently pursuing my BTech(Computer Science and Engineering) from
            Dr. Ambedkar Institute of Technology for Handicapped Kanpur
          </span>
          , I&apos;m skilled in front-end technologies like HTML5, CSS3,
          JavaScript, Bootstrap, Tailwind and React.js as well as back-end
          frameworks like Node.js , Express.js, Next.js. Also Skilled in
          responsive design principles and eager to contribute innovative
          solutions to web development projects. Possess hands-on experience
          with personal projects, demonstrating strong problem-solving
          abilities.
        </div>
      </div>
    </div>
  )
}
