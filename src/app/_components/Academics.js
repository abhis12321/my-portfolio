import React from 'react'

export default function Academics() {
  return (
    <div className='relative flex flex-col items-center justify-center p-8 gap-4 border-b-2 border-slate-800'>
      <h1 className="text-center py-4 px-8 mb-2 rounded-md drop-shadow-[4px_3px_1px_black] dark:drop-shadow-[4px_3px_1px_white] text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-violet-700 w-fit">
          Academics
      </h1>
      <div className="flex flex-col w-[98%] max-w-[700px] bg-gray-300/30 p-6 rounded">
        <h1 className="text-lg font-semibold drop-shadow-[2px_2px_1px_red]">Dr. Ambedkar Institute of Technology for Divyangjan UP</h1>
        <h1 className="text-xs">B.Tech In Computer Science and Engineering <span className="">(2021 - 2025)</span></h1>
      </div>
      <div className="flex flex-col w-[98%] max-w-[700px] bg-gray-300/30 p-6 rounded">
        <h1 className="text-lg font-semibold drop-shadow-[2px_2px_1px_red]">Mahatma Gandhi Inter College, Gorakhpur</h1>
        <h1 className="text-xs">Inter-Mediate -<span className=""> UP Board</span></h1>
      </div>
      <div className="flex flex-col w-[98%] max-w-[700px] bg-gray-300/30 p-6 rounded">
        <h1 className="text-lg font-semibold drop-shadow-[2px_2px_1px_red]">Late Phoolmati Devi U M V , Kushinagar</h1>
        <h1 className="text-xs">High-School -<span className=""> UP Board</span></h1>
      </div>
    </div>
  )
}
