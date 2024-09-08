import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

export default function SocialMediaProfile() {
  return (
    <div className="py-2 md:py-[13px] my-3 flex justify-between md:justify-evenly items-center w-[98vw] max-w-[250px] md:max-w-[350px] md:bg-gray-600/15 md:shadow-[0px_1px_2px_gray] rounded-lg">
    <Link
        target="_blank"
        href={`https://github.com/abhis12321`}
        className="hover:scale-110 duration-500"
      >
        <FontAwesomeIcon
          icon={faGithub}
          size="2x"
          className="p-[4px] text-[1.8rem] rounded-md bg-slate-950 dark:bg-blue-950 text-white ring-[1px] ring-gray-500"
        />
      </Link>
      <Link
        target="_blank"
        href={`https://www.linkedin.com/in/abhishek-singh-b82427256/`}
        className="hover:scale-110 duration-500"
      >
        <FontAwesomeIcon
          icon={faLinkedin}
          size="3x"
          className="text-blue-700 hover:text-blue-600 text-[2.6rem]"
        />
      </Link>
      <Link
        target="_blank"
        href={`https://www.instagram.com/____abhis____/`}
        className="hover:scale-110 duration-500"
      >
        <FontAwesomeIcon
          icon={faInstagram}
          size="3x"
          className="text-rose-800/95 hover:text-rose-700 text-[2.76rem]"
        />
      </Link>
      <Link
        target="_blank"
        href={`mailto:abhisheksingh2359328@gmail.com`}
        className="hover:scale-110 duration-500"
      >
      <FontAwesomeIcon
        icon={faSquareEnvelope}
        size="3x"
        className="text-blue-800 text-[2.65rem]"
      />
      </Link>      
    </div>
  )
}
