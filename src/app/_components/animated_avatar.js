import Image from 'next/image';
import React from "react";

export default function AnimationReact() {
  return (
      <div className="w-fit">
        <div className="relative group cursor-pointer w-fit">
          <div className="relative z-10 w-20 h-20 md:w-52 md:h-52 xl:w-64 xl:h-64 rounded-full bg-transparent cursor-pointer [perspective:1000px] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] duration-[1200ms]">
              <Image
                width={200}
                height={200}
                src={'/img/others/Ab5.jpg'}
                alt="@me"
                className="absolute w-full h-full rounded-full object-fit object-centerdark:shadow-[2px_2px_1px_red] dark:opacity-80 md:[transform:rotateY(180deg)] ring-2 ring-green-500"
              />
            <div className="absolute bg-white dark:[background:url('/img/others/darkbg.gif')] w-full h-full [backface-visibility:hidden] flex flex-col items-center justify-center gap-4 rounded-full ring-2">
              <Image
                width={200}
                height={200}
                src={"/img/others/contact.png"}
                alt="@me"
                className="absolute w-full h-full rounded-full object-fit object-center dark:opacity-70"
              />
            </div>
          </div>
          {/* <div className="absolute top-[-1.5rem] left-[-1.5rem] animate-spin [animationDuration:1800ms] w-32 h-32 md:w-72 md:h-72 xl:w-80 xl:h-80 border-l1 bg-violet-200/40"></div>
          <div className="absolute top-[-1.5rem] left-[-1.5rem] animate-spin [animationDuration:3500ms] w-32 h-32 md:w-72 md:h-72 xl:w-80 xl:h-80 border-l2 bg-violet-200/40"></div>
          <div className="absolute top-[-1.5rem] left-[-1.5rem] animate-spin [animationDuration:2800ms] w-32 h-32 md:w-72 md:h-72 xl:w-80 xl:h-80 border-l3 bg-violet-200/40"></div>
          <div className="absolute top-[-1.5rem] left-[-1.5rem] animate-spin [animationDuration:1200ms] w-32 h-32 md:w-72 md:h-72 xl:w-80 xl:h-80 border-l1 bg-violet-200/40"></div>
          <div className="absolute top-[-1.5rem] left-[-1.5rem] animate-spin [animationDuration:2300ms] w-32 h-32 md:w-72 md:h-72 xl:w-80 xl:h-80 border-l2 bg-violet-200/40"></div>
          <div className="absolute top-[-1.5rem] left-[-1.5rem] animate-spin [animationDuration:5000ms] w-32 h-32 md:w-72 md:h-72 xl:w-80 xl:h-80 border-l2 border-l3 bg-violet-200/40"></div> */}
          {/* <div className="absolute top-[-16px] left-[-1rem] animate-spin [animationDuration:2600ms] w-24 h-24 md:w-60 md:h-60 xl:w-72 xl:h-72 border-l3 bg-violet-900/40"></div>
          <div className="absolute top-[-16px] left-[-1rem] animate-spin [animationDuration:2600ms] w-24 h-24 md:w-60 md:h-60 xl:w-72 xl:h-72 border-l3 bg-violet-900/40"></div>
          <div className="absolute top-[-16px] left-[-1rem] animate-spin [animationDuration:2600ms] w-24 h-24 md:w-60 md:h-60 xl:w-72 xl:h-72 border-l3 bg-violet-900/40"></div>
          <div className="absolute top-[-16px] left-[-1rem] animate-spin [animationDuration:2600ms] w-24 h-24 md:w-60 md:h-60 xl:w-72 xl:h-72 border-l3 bg-violet-900/40"></div>
          <div className="absolute top-[-16px] left-[-1rem] animate-spin [animationDuration:2600ms] w-24 h-24 md:w-60 md:h-60 xl:w-72 xl:h-72 border-l3 bg-violet-900/40"></div> */}
        </div>
      </div>
  );
};