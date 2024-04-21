import React from 'react'

export default function Page() {
  return (
    <div className='flex flex-col items-center justify-evenly' style={{minHeight:"calc(100vh - 4rem)"}}>
      <h1 className='mx-auto text-center py-4 px-8 mt-6 mb-2 text-4xl rounded-md border-2 border-white font-extrabold  text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 w-fit'>About me</h1>

      <div className="py-4 rounded-2xl w-[95%] flex flex-col lg:flex-row gap-4 items-center justify-evenly">
        <div className="bg-slate-900 p-4 xs:p-7 xs:w-[95%] rounded-2xl max-w-[600px]">I am a passionate web developer. Pursuing a Bachelor&apos;s degree in Computer Science, adept at front-end
          technologies like HTML5, CSS3, JavaScript, Bootstrap and React.js as well as back-end frameworks like Node.js ,
          Express.js, Next.js. Skilled in responsive design principles and eager to contribute innovative solutions to web
          development projects. Possess hands-on experience with personal projects, demonstrating strong problemsolving abilities. Seeking to leverage academic foundation and practical skills to contribute effectively as a
          valuable member of a dynamic development team
        </div>
        <div className="bg-slate-900 p-4 xs:p-7 xs:w-[95%] rounded-2xl max-w-[600px]">I am a passionate web developer. Pursuing a Bachelor&apos;s degree in Computer Science, adept at front-end
          technologies like HTML5, CSS3, JavaScript, Bootstrap and React.js as well as back-end frameworks like Node.js ,
          Express.js, Next.js. Skilled in responsive design principles and eager to contribute innovative solutions to web
          development projects. Possess hands-on experience with personal projects, demonstrating strong problemsolving abilities. Seeking to leverage academic foundation and practical skills to contribute effectively as a
          valuable member of a dynamic development team
        </div>
      </div>
    </div>
  )
}
