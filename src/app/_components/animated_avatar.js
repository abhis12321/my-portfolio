import Image from 'next/image';
import React from "react";

export default function AnimationReact() {
  return (
      <div className="w-fit">
        <div className="group cursor-pointer w-fit">
          <div className=" w-20 h-20 md:w-52 md:h-52 xl:w-64 xl:h-64 rounded-full bg-transparent cursor-pointer [perspective:1000px] relative [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] duration-[1200ms]">
              <Image
                width={200}
                height={200}
                src={'/img/others/Ab5.jpg'}
                alt="@me"
                className="absolute w-full h-full rounded-full object-fit object-center shadow-[0_0_5px_black] dark:shadow-[0_0_5px_red] dark:opacity-75 md:[transform:rotateY(180deg)] "
              />
            <div className="absolute bg-slate-950 w-full h-full rounded-full [backface-visibility:hidden] flex flex-col items-center justify-center gap-4">
              <Image
                width={200}
                height={200}
                src={"/img/others/Ab3.jpg"}
                alt="@me"
                className="absolute w-full h-full rounded-full object-fit object-center dark:opacity-70"
              />
                {/* <h1 className="text-lg font-bold text-purple-200 font-mono">Full Stack Web Developer</h1>
                <h1 className="text-2xl text-white font-medium">Jack Hanma</h1> */}
            </div>
          </div>
        </div>
      </div>
  );
};