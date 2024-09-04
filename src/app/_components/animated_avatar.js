import Image from 'next/image';
import React from "react";

export default function AnimationReact() {
  return (
      <div className="w-fit self-center">
        <div className="relative group cursor-pointer w-fit z-10 bg-inherit">
          <div className="relative z-10 w-40 h-40 md:w-48 md:h-48 xl:w-64 xl:h-64 rounded-full bg-transparent cursor-pointer [perspective:1000px] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] duration-[1200ms] animated-border-rotate after:rounded-full before:rounded-full">
              <Image
                width={200}
                height={200}
                src={'/img/others/Ab5.jpg'}
                alt="@me"
                className="absolute w-full h-full rounded-full object-fit object-centerdark:shadow-[2px_2px_1px_red] dark:opacity-80 md:[transform:rotateY(180deg)]"
              />
            <div className="absolute bg-white dark:[background:url('/img/others/darkbg.gif')] w-full h-full [backface-visibility:hidden] flex flex-col items-center justify-center gap-4 rounded-full animated-border-rotate after:rounded-full before:rounded-full">
              <Image
                width={200}
                height={200}
                src={"/img/others/contact.png"}
                alt="@me"
                className="absolute w-full h-full rounded-full object-fit object-center dark:opacity-70"
              />
            </div>
          </div>
        </div>
      </div>
  );
};