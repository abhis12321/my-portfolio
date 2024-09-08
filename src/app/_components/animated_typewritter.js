"use client"
import React from "react"; 
import Typewriter from 'typewriter-effect/dist/core';


export default function Animated_typewritter() {
  React.useEffect(() => {
    new Typewriter('#typewriter', {
        strings: ['Front-End Developer', 'Back-End Developer' , 'Full Stack Developer', 'MERN Stack Developer' , 'Problem-Solver'],
        autoStart: true,
        loop:true,
      });
      
} , []);

  return (
    <div id="typewriter" className="text-[1.6rem] xs:text-[2rem] md:text-[2.2rem] lg:text-[2.7rem] md:drop-shadow-[3px_2px_1px_black] dark:md:drop-shadow-[3px_1px_1px_white] font-extrabold text-left text-blue-500 dark:text-blue-600">
    </div>
  );
}
