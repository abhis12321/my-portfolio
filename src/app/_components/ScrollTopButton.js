"use client"
import { faCircleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'

export default function GotoTopButton() {
    const [hidden , setHidden] = useState(true);
    const handleScroll = e => {
        window?.scrollTo({top:0 , left:0 , behavior:'smooth'})
    }

    const handleScrollButton = e => {
        if((document.body.scrollTop | document.documentElement.scrollTop) > 250) {
            setHidden(false);
        } else {
            setHidden(true);
        }
    }
    useEffect(() => {
        window?.addEventListener('scroll' , handleScrollButton);
        return () => {
            window?.removeEventListener('scroll' , handleScrollButton);
        }
    } , [])
  return (
    // <div className={`${hidden && 'hidden'} fixed bottom-6 right-10 z-10 cursor-pointer hover:scale-110 animate-bounce py-3 px-6 bg-blue-800/90 rounded-full w-fit font-extrabold text-4xl text-gray-50`} onClick={handleScroll}>
    //   &uarr; 
    // </div>
    
    <FontAwesomeIcon size='sm' icon={faCircleUp} className={`${hidden && 'hidden'} h-12 fixed bottom-6 right-10 z-10 cursor-pointer hover:scale-110 animate-bounce p-1 bg-blue-800 rounded-full w-fit font-extrabold text-4xl text-blue-200`} onClick={handleScroll} />
  )
}
