"use client"
import React from "react"; 
import Typewriter from 'typewriter-effect/dist/core';


export default function TypingEffect() {
  React.useEffect(() => {
    let newwriter = new Typewriter('#typewriter', {
        strings: ['Front-End Developer', 'Back-End Developer' , 'Full Stack Developer', 'MERN-Stack Developer' , 'Problem-Solver'],
        autoStart: true,
        loop:true,
      });
      
} , []);

  return (
    <div id="typewriter" className="text-3xl xs:text-4xl lg:text-5xl drop-shadow-[1px_1px_1px_red] font-semibold text-center md:text-left self-center md:self-auto mx-auto md:mx-0">
    </div>
  );
}