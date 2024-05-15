"use client"
import React, { useState } from 'react'

export default function Contact() {
  const [email , setEmail] = useState('');
  const [subject , setSubject] = useState('');
  const [message , setMessage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log(email , subject , message);


    setEmail('');
    setSubject('');
    setMessage('');
  }

  return (
    <div className='flex justify-center items-center py-6 bg-blue-950/5' id='contact'>
      <form className="flex flex-col gap-2 text-white bg-gradient-to-b from-blue-50 to-blue-50 dark:bg-gradient-to-b dark:from-slate-900 dark:via-cyan-950 dark:to-slate-900 w-[98%] max-w-[700px] px-2 sm:px-4 lg:px-6 py-4 sm:py-6 rounded-lg shadow-[0px_0px_4px_indigo] dark:shadow-[0_0_5px_white] dark:hover:shadow-[0_0_8px_white]" onSubmit={handleSubmit}>
        <h1 className='mx-auto text-center text-4xl rounded-md drop-shadow-[3px_3px_1px_gray] dark:drop-shadow-[3px_3px_1px_white] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-violet-700 w-[95%] xs:w-fit pb-4'>Contact me</h1>
      
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder='example@gmail.com' className='bg-blue-950/40 dark:bg-slate-950/55 placeholder:text-gray-200 dark:placeholder:text-gray-500 focus:bg-blue-950/70 dark:focus:bg-slate-950/90 focus:border-cyan-700 border-2 border-gray-700 p-2 text-center outline-none rounded' required/>
        <input type="text" value={subject} onChange={e => setSubject(e.target.value)} placeholder='Enter your subject/topic' className='bg-blue-950/40 dark:bg-slate-950/55 placeholder:text-gray-200 dark:placeholder:text-gray-500 focus:bg-blue-950/70 dark:focus:bg-slate-950/90 focus:border-cyan-700 border-2 border-gray-700 p-2 text-center outline-none rounded' required/>
        <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder='Enter your message/suggestion' cols="30" rows="10" className='bg-blue-950/40 dark:bg-slate-950/55 placeholder:text-gray-200 dark:placeholder:text-gray-500 focus:bg-blue-950/70 dark:focus:bg-slate-950/90 focus:border-cyan-700 border-2 border-gray-700 p-2 text-center outline-none rounded' required></textarea>
        <input type="submit" value={'Send'} placeholder='Enter your subject/topic' className='bg-red-900 hover:bg-red-700 active:bg-violet-900 border-2 border-gray-700 p-2 text-center outline-none rounded font-bold cursor-pointer' required/>
      </form>
    </div>
  )
}
