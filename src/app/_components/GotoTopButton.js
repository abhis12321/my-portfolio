"use client"
import React, { useEffect, useState } from 'react'

export default function GotoTopButton() {
    const [hidden , setHidden] = useState(true);
    const handleScroll = e => {
        window.scrollTo({top:0 , left:0 , behavior:'smooth'})
    }

    const handleScrollButton = e => {
        if((document.body.scrollTop | document.documentElement.scrollTop) > 50) {
            setHidden(false);
        } else {
            setHidden(true);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll' , handleScrollButton);
        return () => {
            window.removeEventListeneeer('scroll' , handleScrollButton);
        }
    } , [])
  return (
    <div className={`${hidden && 'hidden'} fixed bottom-6 right-10 z-10 ring-2 ring-blue-400 cursor-pointer hover:scale-110 animate-bounce py-3 px-6 bg-blue-900 rounded-full w-fit font-extrabold text-4xl text-gray-50`} onClick={handleScroll}>
      &uarr; 
    </div>
  )
}
