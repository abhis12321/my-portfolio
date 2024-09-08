"use client"
import axios from 'axios'
import Image from 'next/image'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots, faEnvelope, faHeadset, faUser } from '@fortawesome/free-solid-svg-icons'


export default function Contact() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('/api' , { name, email, message })
        .then(response => response.data)
        .then(data => alert(data.message))
        .catch(error => alert(error.message));

    setEmail('');
    setName('');
    setMessage('');
  }

  return (
    <div className='flex justify-center items-center py-7 lg:py-10 bg-transparent' id='contact'>
      <form className="flex flex-wrap items-center justify-evenly gap-[3px] text-white bg-white dark:bg-white/10 w-[98%] max-w-[1150px] pb-3 sm:pb-6 p-1 xs:p-3 sm:p-2 rounded-lg shadow-[0_0_5px_gray]" onSubmit={handleSubmit}>
        <div className="drop-shadow-[2px_4px_1px_black] dark:drop-shadow-[1px_1px_1px_white] py-[14px] w-full">
          <h1 className='mx-auto text-center text-3xl xs:text-4xl rounded-md drop-shadow-[1px_1px_1px_white] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-violet-800 w-fit pb-1 xs:pb-2'><span className='text-pink-600 font-extrabold'><FontAwesomeIcon size='md' icon={faHeadset} className='font-extrabold' /> </span>Get In Touch</h1>
        </div>

        <div className="w-[38%] hidden md:block">
          <Image src={'/img/others/contact.png'} alt='contact' height={350} width={330} className='opacity-90 dark:opacity-80 w-full max-w-[400px]'/>
        </div>

        <div className="flex flex-col gap-[2px] xs:gap-1 w-[100%] sm:w-[60%] max-w-[500px]">
          <div className="group w-full flex relative">
            <FontAwesomeIcon size='1x' className='absolute top-[16px] left-5 text-xl group-focus-within:text-violet-700 text-slate-950 dark:text-gray-100' icon={faUser} />
            <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder='Enter your name' className='w-full bg-blue-600/15 dark:bg-blue-900/10 text-cyan-950 dark:text-gray-400 placeholder:text-gray-500 dark:placeholder:text-gray-600 font-medium focus:text-sky-700 focus:bg-blue-700/30 dark:focus:bg-slate-950/65 focus:border-violet-700 dark:focus:border-violet-900 border-2 border-gray-500 p-3 px-14 outline-none rounded-md' required />
          </div>
          <div className="group w-full flex relative">
            <FontAwesomeIcon size='1x' className='absolute top-[16px] left-5 text-xl group-focus-within:text-violet-700 text-slate-950 dark:text-gray-100' icon={faEnvelope} />
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder='example@gmail.com' className='w-full bg-blue-600/15 dark:bg-blue-900/10 text-cyan-950 dark:text-gray-400 placeholder:text-gray-500 dark:placeholder:text-gray-600 font-medium focus:text-sky-700 focus:bg-blue-700/30 dark:focus:bg-slate-950/65 focus:border-violet-700 dark:focus:border-violet-900 border-2 border-gray-500 p-3 px-14 outline-none rounded-md' required />
          </div>
          <div className="group w-full flex relative">
            <FontAwesomeIcon size='1x' className='absolute top-[16px] left-5 text-xl group-focus-within:text-violet-700 text-slate-950 dark:text-gray-100' icon={faCommentDots} />
            <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder='Enter your message' cols="25" rows="9" className='w-full bg-blue-600/15 dark:bg-blue-900/10 text-cyan-950 dark:text-gray-400 placeholder:text-gray-500 dark:placeholder:text-gray-600 font-medium focus:text-sky-700 focus:bg-blue-700/30 dark:focus:bg-slate-950/65 focus:border-violet-700 dark:focus:border-violet-900 border-2 border-gray-500 p-3 px-14 outline-none rounded-md' required></textarea></div>
          <input type="submit" value={'Send'} className='bg-red-900 hover:bg-red-700 active:bg-violet-900 border-2 border-gray-500 py-[10px] text-center outline-none rounded-md font-bold cursor-pointer' required />

        </div>      
      </form>
    </div>
  )
}
