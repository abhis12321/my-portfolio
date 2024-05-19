"use client"
import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHeadset, faSignature, faUser } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log(email, subject, message);


    setEmail('');
    setSubject('');
    setMessage('');
  }

  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div className='flex justify-center items-center py-6 bg-blue-950/5' id='contact'>
      <form className="flex flex-wrap items-center justify-around gap-[3px] text-white bg-gradient-to-bl from-white to-gray-50 dark:from-blue-950 dark:via-cyan-950 dark:to-slate-900 w-[98%] max-w-[1150px] p-1 xs:p-3 sm:p-2 rounded-lg shadow-[0px_0px_4px_indigo] dark:shadow-[0_0_5px_white]" onSubmit={handleSubmit} data-aos="fade-right">
        <div className="drop-shadow-[3px_3px_1px_black] dark:drop-shadow-[1px_1px_1px_white] py-3 w-full">
          <h1 className='mx-auto text-center text-3xl xs:text-4xl rounded-md drop-shadow-[1px_1px_1px_white] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-800 to-violet-800 w-[95%] xs:w-fit pb-1 xs:pb-2'><span className='text-rose-800 font-extrabold'><FontAwesomeIcon size='md' icon={faHeadset} className='font-extrabold' /> </span>Get In Touch</h1>
        </div>

        <div className="w-[38%] hidden sm:block">
          <Image src={'/img/others/contact.png'} alt='contact' height={350} width={330} className='opacity-90 dark:opacity-80'/>
        </div>

        <div className="flex flex-col gap-[2px] xs:gap-1 w-[100%] sm:w-[60%] sm:max-w-[500px]">
          <div className="group w-full flex relative">
            <FontAwesomeIcon size='1x' className='absolute top-[16px] left-5 text-xl group-focus-within:text-violet-700 text-slate-950 dark:text-gray-100' icon={faUser} />
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder='example@gmail.com' className='w-full bg-blue-950/15 dark:bg-slate-950/45 text-cyan-950 dark:text-gray-400 placeholder:text-gray-500 dark:placeholder:text-gray-600 font-medium focus:text-sky-700 focus:bg-blue-950/40 dark:focus:bg-slate-950/60 focus:border-violet-700 dark:focus:border-violet-900 border-2 border-gray-500 p-3 px-14 outline-none rounded-md' required />
          </div>
          <div className="group w-full flex relative">
            <FontAwesomeIcon size='1x' className='absolute top-[16px] left-5 text-xl group-focus-within:text-violet-700 text-slate-950 dark:text-gray-100' icon={faSignature} />
            <input type="text" value={subject} onChange={e => setSubject(e.target.value)} placeholder='Enter your subject/topic' className='w-full bg-blue-950/15 dark:bg-slate-950/45 text-cyan-950 dark:text-gray-400 placeholder:text-gray-500 dark:placeholder:text-gray-600 font-medium focus:text-sky-700 focus:bg-blue-950/40 dark:focus:bg-slate-950/60 focus:border-violet-700 dark:focus:border-violet-900 border-2 border-gray-500 p-3 px-14 outline-none rounded-md' required />
          </div>
          <div className="group w-full flex relative">
            <FontAwesomeIcon size='1x' className='absolute top-[16px] left-5 text-xl group-focus-within:text-violet-700 text-slate-950 dark:text-gray-100' icon={faEnvelope} />
            <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder='Enter your message' cols="25" rows="10" className='w-full bg-blue-950/15 dark:bg-slate-950/45 text-cyan-950 dark:text-gray-400 placeholder:text-gray-500 dark:placeholder:text-gray-600 font-medium focus:text-sky-700 focus:bg-blue-950/40 dark:focus:bg-slate-950/60 focus:border-violet-700 dark:focus:border-violet-900 border-2 border-gray-500 p-3 px-14 outline-none rounded-md' required></textarea></div>
          <input type="submit" value={'Send'} className='bg-red-900 hover:bg-red-700 active:bg-violet-900 border-2 border-gray-500 py-[10px] text-center outline-none rounded-md font-bold cursor-pointer' required />

        </div>      
      </form>
    </div>
  )
}
