"use client"
import React, { useState } from 'react'

export default function Page() {
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
    <div className='flex justify-center items-center py-3' style={{minHeight:'calc(100vh - 4rem)'}} >
      <form className="flex flex-col gap-2 bg-gradient-to-tr from-slate-900 from-50%  via-cyan-950 via-21% to-slate-900 t0-70% bg-slate-800 w-[98%] max-w-[700px] px-2 py-5 sm:p-8 rounded-lg" onSubmit={handleSubmit}>
        <h1 className='mx-auto text-center sm:py-4 sm:px-8 my-2 text-4xl rounded-md sm:border-2 font-extrabold  text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 w-fit'>Contact me</h1>
      
        <input type="email" name='email' value={email} onChange={e => setEmail(e.target.value)} placeholder='example@gmail.com' className='bg-slate-900 focus:border-cyan-600 border-2 border-gray-400 p-2 text-center outline-none rounded' required/>
        <input type="text" name='subject' value={subject} onChange={e => setSubject(e.target.value)} placeholder='Enter your subject/topic' className='bg-slate-900 disabled:bg-red-600 focus:border-cyan-600 border-2 border-gray-400 p-2 text-center outline-none rounded' required/>
        <textarea name="message" value={message} onChange={e => setMessage(e.target.value)} placeholder='Enter your message/suggestion' cols="30" rows="10" className='bg-slate-900 sm:focus:border-cyan-600 border-2 border-gray-400 p-2 text-center outline-none rounded' required></textarea>
        <input type="submit" value={'send'} placeholder='Enter your subject/topic' className='bg-red-950 hover:bg-red-700 active:bg-violet-900 border-2 p-2 text-center outline-none rounded font-bold cursor-pointer' required/>
      </form>
    </div>
  )
}
