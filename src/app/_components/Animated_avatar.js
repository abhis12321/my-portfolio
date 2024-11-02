import Image from 'next/image';
import Link from 'next/link';

export default function Animated_avatar() {
  return (
    <Link href={"http://13.201.72.123/login"} className="w-40 h-40 md:w-48 md:h-48 xl:w-64 xl:h-64 self-center rounded-full group">
      <div className="relative cursor-pointer w-full h-full rounded-full z-[1] animated-border-rotate after:rounded-full before:rounded-full">
        <div className="w-full h-full rounded-full bg-white dark:bg-[#171725]">
          <div className="w-full h-full relative z-10 rounded-full cursor-pointer [perspective:1000px] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] duration-[1200ms] group-hover:scale-150 bg-trnasparent">
            <Image
              width={200}
              height={200}
              src={'/img/projects/coder-channel.png'}
              alt="@me"
              className="absolute w-full h-full rounded-full object-fit object-centerdark:shadow-[2px_2px_1px_red] md:[transform:rotateY(180deg)] w-s"
            />
            <div className="absolute bg-white dark:[background:url('/img/others/darkbg.gif')] w-full h-full [backface-visibility:hidden] flex flex-col items-center justify-center gap-4 rounded-full before:rounded-full">
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
    </Link>
  );
};