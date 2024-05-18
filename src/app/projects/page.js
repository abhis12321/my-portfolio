import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SpecialTextShadow from '../_components/SpecialTextShadow';


export default function page() {
  return (
    <div className='flex gap-6 flex-col py-3 bg-blue-950/5'>
      {/* <h1 className="mx-auto text-center py-4 sm:px-8 my-2 text-4xl md:text-5xl rounded-md drop-shadow-[2px_5px_1px_black] dark:drop-shadow-[3px_4px_3px_white] font-extrabold md:font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-800 w-[95%] xs:w-fit">
        My Projects
      </h1> */}
      <SpecialTextShadow content={'My Projects'} />

      <div className="bg-gradient-to-l from-blue-50 to-slate-50 dark:from-blue-900/60 dark:to-blue-950/65 shadow-[0_0_7px_black] dark:shadow-[0_0_7px_white] hover:shadow-[0_0_8px_red] text-white w-[97%] max-w-[900px] mx-auto p-[10px] sm:p-[20px] min-h-[180px] text-center rounded-lg ">
        <h2 className="w-fit mx-auto sm:my-2 px-3 dark:px-0 py-2 bg-slate-950/10 dark:bg-transparent rounded-lg font-extrabold text-2xl drop-shadow-[3px_3px_1px_green] text-gray-50 dark:text-white">Student&rsquo;Media</h2>
        <p className='text-[10px] xs:text-[12px] italic text-yellow-600 dark:drop-shadow-[0_0_2px_black] font-bold' ><span className='font-semibold' >Tools & technologies used :</span> ReactJs , Next.js , CSS , MongoDb , Socket.io , Nodemailer & Tailwind</p>

        <div className="flex flex-col sm:flex-row sm:gap-4 items-center">
          <Link href={'https://student-login-app-nextjs.onrender.com/'} target='blank' className='mx-auto rounded shadow-[0_0_3px_black] dark:shadow-[0_0_5px_white] my-4 max-h-[250px] sm:w-[40%] overflow-hidden' ><Image src={'/img/projects/studentOmedia2.png'} alt='demo-image' width={400} height={250} className='' /></Link>
          <div className="flex flex-col sm:w-[55%]">
            <div className="font-mono text-[14px] mb-3 sm:my-3 text-gray-800 dark:text-gray-400 max-w-[450px]">It&apos;s a full stack next.js project built using React.js, Next.js, CSS, Tailwind, MongoDb, JavaScript and Nodemailer. It is a web app for students to login and connect with the other students and chat with them to ask any queries. This web app platform can be use for chatting purpose too, for any personal chat or group chat. It&apos;s a MERN Stack project.</div>
            <div className="flex fle-col xm:flex-row gap-2 items-center justify-around">
              <Link className='px-3 text-[14px] sm:text-[.9rem] sm:px-4 py-2 rounded bg-slate-950/70 dark:bg-slate-950 hover:shadow-[0_0_3px_white] hover:bg-black duration-1000 font-semibold' target='_blank' href={`https://github.com/abhis12321/student-login-app-nextjs`}>Github Link..</Link>
              <Link className='px-3 text-[14px] sm:text-[.9rem] sm:px-4 py-2 rounded bg-slate-950/70 dark:bg-slate-950 hover:shadow-[0_0_3px_white] hover:bg-black duration-1000 font-semibold' target='_blank' href={`https://student-login-app-nextjs.onrender.com/`}>Take a Look...</Link>
            </div>
          </div>
        </div>
      </div>


      <div className="bg-gradient-to-l from-blue-50 to-slate-50 dark:from-blue-900/60 dark:to-blue-950/65 shadow-[0_0_7px_black] dark:shadow-[0_0_7px_white] hover:shadow-[0_0_8px_red] text-white w-[97%] max-w-[900px] mx-auto p-[10px] sm:p-[20px] min-h-[180px] text-center rounded-lg ">
        <h2 className="w-fit mx-auto sm:my-2 px-3 dark:px-0 py-2 bg-slate-950/10 dark:bg-transparent rounded-lg font-extrabold text-2xl drop-shadow-[3px_3px_1px_green] text-gray-50 dark:text-white">E-commerce Web App</h2>
        <p className='text-[10px] xs:text-[12px] italic text-yellow-600 dark:drop-shadow-[0_0_2px_black] font-bold' ><span className='font-semibold' >Tools & technologies used :</span> HTML , CSS , React.js , Next.js , MongoDB & Tailwind</p>

        <div className="flex flex-col sm:flex-row sm:gap-4 items-center">
          <Link href={'/projects'} target='blank' className='mx-auto rounded shadow-[0_0_3px_black] dark:shadow-[0_0_5px_white] my-4 max-h-[250px] sm:w-[40%] overflow-hidden'><Image src={'/img/projects/pending.png'} alt='demo-image' width={400} height={250} className='' /> </Link>
          <div className="flex flex-col sm:w-[55%]">
            <div className="font-mono text-[14px] mb-3 sm:my-3 text-gray-800 dark:text-gray-400 max-w-[450px]">I&apos;m working on a Full Stack Web Application for an Ecommerse platform. It is going to be a MERN Stack Project with all the functionalities for a Ecommerse website. It is currently in building process.</div>
            <div className="flex fle-col xm:flex-row gap-2 items-center justify-around">
              <Link className='px-3 text-[14px] sm:text-[.9rem] sm:px-4 py-2 rounded bg-slate-950/70 dark:bg-slate-950 hover:shadow-[0_0_3px_white] hover:bg-black duration-1000 font-semibold' target='_blank' href={`https://github.com/abhis12321/ecommerse-backend`}>Github Link..</Link>
              <Link className='px-3 text-[14px] sm:text-[.9rem] sm:px-4 py-2 rounded bg-slate-950/70 dark:bg-slate-950 hover:shadow-[0_0_3px_white] hover:bg-black duration-1000 font-semibold' target='_blank' href={`/projects`}>Take a Look...</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-l from-blue-50 to-slate-50 dark:from-blue-900/60 dark:to-blue-950/65 shadow-[0_0_7px_black] dark:shadow-[0_0_7px_white] hover:shadow-[0_0_8px_red] text-white w-[97%] max-w-[900px] mx-auto p-[10px] sm:p-[20px] min-h-[180px] text-center rounded-lg ">
        <h2 className="w-fit mx-auto sm:my-2 px-3 dark:px-0 py-2 bg-slate-950/10 dark:bg-transparent rounded-lg font-extrabold text-2xl drop-shadow-[3px_3px_1px_green] text-gray-50 dark:text-white">Node.js Chat App</h2>
        <p className='text-[10px] xs:text-[12px] italic text-yellow-600 dark:drop-shadow-[0_0_2px_black] font-bold' ><span className='font-semibold' >Tools & technologies used :</span> HTML , CSS , Node.js , Express.js , MongoDB , Socket.io</p>

        <div className="flex flex-col sm:flex-row sm:gap-4 items-center">
          <Link href={'/projects'} target='blank' className='mx-auto rounded shadow-[0_0_3px_black] dark:shadow-[0_0_5px_white] my-4 max-h-[250px] sm:w-[40%] overflow-hidden'><Image src={'/img/projects/pending.png'} alt='demo-image' width={400} height={250} className='' /> </Link>
          <div className="flex flex-col sm:w-[55%]">
            <div className="font-mono text-[14px] mb-3 sm:my-3 text-gray-800 dark:text-gray-400 max-w-[450px]">It&apos;s a full stack web app build with HTML, CSS, JavaScript, Node.js and Express.js along with Socket.io and MongoDB. Here a live chat can be done and all the old chats can be seen as they are stored in MongoDB database. It is not been hosted yet, but I am looking for a platform to deploy it for free.</div>
            <div className="flex fle-col xm:flex-row gap-2 items-center justify-around">
              <Link className='px-3 text-[14px] sm:text-[.9rem] sm:px-4 py-2 rounded bg-slate-950/70 dark:bg-slate-950 hover:shadow-[0_0_3px_white] hover:bg-black duration-1000 font-semibold' target='_blank' href={`https://github.com/abhis12321/node-chat-app`}>Github Link..</Link>
              <Link className='px-3 text-[14px] sm:text-[.9rem] sm:px-4 py-2 rounded bg-slate-950/70 dark:bg-slate-950 hover:shadow-[0_0_3px_white] hover:bg-black duration-1000 font-semibold' target='_blank' href={`/projects`}>Take a Look...</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-l from-blue-50 to-slate-50 dark:from-blue-900/60 dark:to-blue-950/65 shadow-[0_0_7px_black] dark:shadow-[0_0_7px_white] hover:shadow-[0_0_8px_red] text-white w-[97%] max-w-[900px] mx-auto p-[10px] sm:p-[20px] min-h-[180px] text-center rounded-lg ">
        <h2 className="w-fit mx-auto sm:my-2 px-3 dark:px-0 py-2 bg-slate-950/10 dark:bg-transparent rounded-lg font-extrabold text-2xl drop-shadow-[3px_3px_1px_green] text-gray-50 dark:text-white">Password Generator</h2>
        <p className='text-[10px] xs:text-[12px] italic text-yellow-600 dark:drop-shadow-[0_0_2px_black] font-bold' ><span className='font-semibold' >Tools & technologies used :</span> HTML , CSS , JavaScript</p>

        <div className="flex flex-col sm:flex-row sm:gap-4 items-center">
          <Link href={'https://abhis12321.github.io/password-generator/'} target='blank' className='mx-auto rounded shadow-[0_0_3px_black] dark:shadow-[0_0_5px_white] my-4 max-h-[250px] sm:w-[40%] overflow-hidden'><Image src={'/img/projects/passwordGenerator.png'} alt='demo-image' width={400} height={250} className='' /> </Link>
          <div className="flex flex-col sm:w-[55%]">
            <div className="font-mono text-[14px] mb-3 sm:my-3 text-gray-800 dark:text-gray-400 max-w-[450px]">It&apos;s a simple and basic Frontend Project mainly focused on JavaScript and Styling. It comes with a good looking User-Interface(UI). You can generate some random password from here for any purpose as also check it&apos;s strength that how safe it is.</div>
            <div className="flex fle-col xm:flex-row gap-2 items-center justify-around">
              <Link className='px-3 text-[14px] sm:text-[.9rem] sm:px-4 py-2 rounded bg-slate-950/70 dark:bg-slate-950 hover:shadow-[0_0_3px_white] hover:bg-black duration-1000 font-semibold' target='_blank' href={`https://github.com/abhis12321/password-generator`}>Github Link..</Link>
              <Link className='px-3 text-[14px] sm:text-[.9rem] sm:px-4 py-2 rounded bg-slate-950/70 dark:bg-slate-950 hover:shadow-[0_0_3px_white] hover:bg-black duration-1000 font-semibold' target='_blank' href={`https://abhis12321.github.io/password-generator/`}>Take a Look...</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-l from-blue-50 to-slate-50 dark:from-blue-900/60 dark:to-blue-950/65 shadow-[0_0_7px_black] dark:shadow-[0_0_7px_white] hover:shadow-[0_0_8px_red] text-white w-[97%] max-w-[900px] mx-auto p-[10px] sm:p-[20px] min-h-[180px] text-center rounded-lg ">
        <h2 className="w-fit mx-auto sm:my-2 px-3 dark:px-0 py-2 bg-slate-950/10 dark:bg-transparent rounded-lg font-extrabold text-2xl drop-shadow-[3px_3px_1px_green] text-gray-50 dark:text-white">Simen Says</h2>
        <p className='text-[10px] xs:text-[12px] italic text-yellow-600 dark:drop-shadow-[0_0_2px_black] font-bold' ><span className='font-semibold' >Tools & technologies used :</span> HTML , CSS , JavaScript</p>

        <div className="flex flex-col sm:flex-row sm:gap-4 items-center">
          <Link href={'https://abhis12321.github.io/simen_says/'} target='blank' className='mx-auto rounded shadow-[0_0_3px_black] dark:shadow-[0_0_5px_white] my-4 max-h-[250px] sm:w-[40%] overflow-hidden'><Image src={'/img/projects/simenSays.png'} alt='demo-image' width={400} height={250} className='' /> </Link>
          <div className="flex flex-col sm:w-[55%]">
            <div className="font-mono text-[14px] mb-3 sm:my-3 text-gray-800 dark:text-gray-400 max-w-[450px]">It&apos;s a basic game designed for checking your memorizing capabilities and strength of remembering power. It is a frontend project built using some functionalities of JavaScript along with a good looking and interactive UI.</div>
            <div className="flex fle-col xm:flex-row gap-2 items-center justify-around">
              <Link className='px-3 text-[14px] sm:text-[.9rem] sm:px-4 py-2 rounded bg-slate-950/70 dark:bg-slate-950 hover:shadow-[0_0_3px_white] hover:bg-black duration-1000 font-semibold' target='_blank' href={`https://github.com/abhis12321/simen_says`}>Github Link..</Link>
              <Link className='px-3 text-[14px] sm:text-[.9rem] sm:px-4 py-2 rounded bg-slate-950/70 dark:bg-slate-950 hover:shadow-[0_0_3px_white] hover:bg-black duration-1000 font-semibold' target='_blank' href={`https://abhis12321.github.io/simen_says/`}>Take a Look...</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-l from-blue-50 to-slate-50 dark:from-blue-900/60 dark:to-blue-950/65 shadow-[0_0_7px_black] dark:shadow-[0_0_7px_white] hover:shadow-[0_0_8px_red] text-white w-[97%] max-w-[900px] mx-auto p-[10px] sm:p-[20px] min-h-[180px] text-center rounded-lg ">
        <h2 className="w-fit mx-auto sm:my-2 px-3 dark:px-0 py-2 bg-slate-950/10 dark:bg-transparent rounded-lg font-extrabold text-2xl drop-shadow-[3px_3px_1px_green] text-gray-50 dark:text-white">Temperature Convertor</h2>
        <p className='text-[10px] xs:text-[12px] italic text-yellow-600 dark:drop-shadow-[0_0_2px_black] font-bold' ><span className='font-semibold' >Tools & technologies used :</span> HTML , CSS , JavaScript</p>

        <div className="flex flex-col sm:flex-row sm:gap-4 items-center">
          <Link href={'https://abhis12321.github.io/Temp_Converter/'} target='blank' className='mx-auto rounded shadow-[0_0_3px_black] dark:shadow-[0_0_5px_white] my-4 max-h-[250px] sm:w-[40%] overflow-hidden'><Image src={'/img/projects/temperatureConverter.png'} alt='demo-image' width={400} height={250} className='' /> </Link>
          <div className="flex flex-col sm:w-[55%]">
            <div className="font-mono text-[14px] mb-3 sm:my-3 text-gray-800 dark:text-gray-400 max-w-[450px]">It&apos;s a basic scientific calculator designed for changing temperature from one using to another using the JavaScript and Science formulas. It is a frontend project built using some functionalities of JavaScript along with a good looking and interactive UI.</div>
            <div className="flex fle-col xm:flex-row gap-2 items-center justify-around">
              <Link className='px-3 text-[14px] sm:text-[.9rem] sm:px-4 py-2 rounded bg-slate-950/70 dark:bg-slate-950 hover:shadow-[0_0_3px_white] hover:bg-black duration-1000 font-semibold' target='_blank' href={`https://github.com/abhis12321/Temp_Converter`}>Github Link..</Link>
              <Link className='px-3 text-[14px] sm:text-[.9rem] sm:px-4 py-2 rounded bg-slate-950/70 dark:bg-slate-950 hover:shadow-[0_0_3px_white] hover:bg-black duration-1000 font-semibold' target='_blank' href={`https://abhis12321.github.io/Temp_Converter/`}>Take a Look...</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-l from-blue-50 to-slate-50 dark:from-blue-900/60 dark:to-blue-950/65 shadow-[0_0_7px_black] dark:shadow-[0_0_7px_white] hover:shadow-[0_0_8px_red] text-white w-[97%] max-w-[900px] mx-auto p-[10px] sm:p-[20px] min-h-[180px] text-center rounded-lg ">
        <h2 className="w-fit mx-auto sm:my-2 px-3 dark:px-0 py-2 bg-slate-950/10 dark:bg-transparent rounded-lg font-extrabold text-2xl drop-shadow-[3px_3px_1px_green] text-gray-50 dark:text-white">Task Manager (ToDo-List)</h2>
        <p className='text-[10px] xs:text-[12px] italic text-yellow-600 dark:drop-shadow-[0_0_2px_black] font-bold' ><span className='font-semibold' >Tools & technologies used :</span> ReactJs , CSS , JavaScript</p>

        <div className="flex flex-col sm:flex-row sm:gap-4 items-center">
          <Link href={'https://abhis12321.github.io/To-Do-List-or-Task-Manager/`'} target='blank' className='mx-auto rounded shadow-[0_0_3px_black] dark:shadow-[0_0_5px_white] my-4 max-h-[250px] sm:w-[40%] overflow-hidden'><Image src={'/img/projects/taskManager.png'} alt='demo-image' width={400} height={250} className='' /> </Link>
          <div className="flex flex-col sm:w-[55%]">
            <div className="font-mono text-[14px] mb-3 sm:my-3 text-gray-800 dark:text-gray-400 max-w-[450px]">It is a forntend project designed using react.js and javascript for managing and tracking your tasks as how they are assigned and how are they going on. You can take and make a record of your tasks for better performance and future use. It has some good JavaScript functionalities along with some good looking and interactive UI.</div>
            <div className="flex fle-col xm:flex-row gap-2 items-center justify-around">
              <Link className='px-3 text-[14px] sm:text-[.9rem] sm:px-4 py-2 rounded bg-slate-950/70 dark:bg-slate-950 hover:shadow-[0_0_3px_white] hover:bg-black duration-1000 font-semibold' target='_blank' href={`https://github.com/abhis12321/To-Do-List-or-Task-Manager`}>Github Link..</Link>
              <Link className='px-3 text-[14px] sm:text-[.9rem] sm:px-4 py-2 rounded bg-slate-950/70 dark:bg-slate-950 hover:shadow-[0_0_3px_white] hover:bg-black duration-1000 font-semibold' target='_blank' href={`https://abhis12321.github.io/To-Do-List-or-Task-Manager/`}>Take a Look...</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-l from-blue-50 to-slate-50 dark:from-blue-900/60 dark:to-blue-950/65 shadow-[0_0_7px_black] dark:shadow-[0_0_7px_white] hover:shadow-[0_0_8px_red] text-white w-[97%] max-w-[900px] mx-auto p-[10px] sm:p-[20px] min-h-[180px] text-center rounded-lg ">
        <h2 className="w-fit mx-auto sm:my-2 px-3 dark:px-0 py-2 bg-slate-950/10 dark:bg-transparent rounded-lg font-extrabold text-2xl drop-shadow-[3px_3px_1px_green] text-gray-50 dark:text-white">Audio Player Web App</h2>
        <p className='text-[10px] xs:text-[12px] italic text-yellow-600 dark:drop-shadow-[0_0_2px_black] font-bold' ><span className='font-semibold' >Tools & technologies used :</span> HTML , CSS , React.js , Next.js & Tailwind</p>

        <div className="flex flex-col sm:flex-row sm:gap-4 items-center">
          <Link href={'https://singwithme.vercel.app/'} target='blank' className='mx-auto rounded shadow-[0_0_3px_black] dark:shadow-[0_0_5px_white] my-4 max-h-[250px] sm:w-[40%] overflow-hidden'><Image src={'/img/projects/singWithMe.png'} alt='demo-image' width={400} height={250} className='' /> </Link>
          <div className="flex flex-col sm:w-[55%]">
            <div className="font-mono text-[14px] mb-3 sm:my-3 text-gray-800 dark:text-gray-400 max-w-[450px]">It&apos;s a music player web app designed and build with JavaScript and EventListeners. It&apos;s a frontend project along with a good looking and interactive UI. Here I have added some old and some new songs and this song collection is going to expand and also you can also suggest some songs that are not present here in this collection.</div>
            <div className="flex fle-col xm:flex-row gap-2 items-center justify-around">
              <Link className='px-3 text-[14px] sm:text-[.9rem] sm:px-4 py-2 rounded bg-slate-950/70 dark:bg-slate-950 hover:shadow-[0_0_3px_white] hover:bg-black duration-1000 font-semibold' target='_blank' href={`https://github.com/abhis12321/singWithMe`}>Github Link..</Link>
              <Link className='px-3 text-[14px] sm:text-[.9rem] sm:px-4 py-2 rounded bg-slate-950/70 dark:bg-slate-950 hover:shadow-[0_0_3px_white] hover:bg-black duration-1000 font-semibold' target='_blank' href={`https://singwithme.vercel.app/`}>Take a Look...</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-l from-blue-50 to-slate-50 dark:from-blue-900/60 dark:to-blue-950/65 shadow-[0_0_7px_black] dark:shadow-[0_0_7px_white] hover:shadow-[0_0_8px_red] text-white w-[97%] max-w-[900px] mx-auto p-[10px] sm:p-[20px] min-h-[180px] text-center rounded-lg ">
        <h2 className="w-fit mx-auto sm:my-2 px-3 dark:px-0 py-2 bg-slate-950/10 dark:bg-transparent rounded-lg font-extrabold text-2xl drop-shadow-[3px_3px_1px_green] text-gray-50 dark:text-white">Text-Utilities-App</h2>
        <p className='text-[10px] xs:text-[12px] italic text-yellow-600 dark:drop-shadow-[0_0_2px_black] font-bold' ><span className='font-semibold' >Tools & technologies used :</span> ReactJs , CSS , Routes</p>

        <div className="flex flex-col sm:flex-row sm:gap-4 items-center">
          <Link href={'/projects'} target='blank' className='mx-auto rounded shadow-[0_0_3px_black] dark:shadow-[0_0_5px_white] my-4 max-h-[250px] sm:w-[40%] overflow-hidden'><Image src={'/img/projects/textUtils.png'} alt='demo-image' width={400} height={250} className='' /> </Link>
          <div className="flex flex-col sm:w-[55%]">
            <div className="font-mono text-[14px] mb-3 sm:my-3 text-gray-800 dark:text-gray-400 max-w-[450px]">It&apos;s also a basic frontend web application designed for some basic text utilities with the help of eventlisteners and JavaScript functionalities. zit comes with a good looking and Interactive UI.</div>
            <div className="flex fle-col xm:flex-row gap-2 items-center justify-around">
              <Link className='px-3 text-[14px] sm:text-[.9rem] sm:px-4 py-2 rounded bg-slate-950/70 dark:bg-slate-950 hover:shadow-[0_0_3px_white] hover:bg-black duration-1000 font-semibold' target='_blank' href={`https://github.com/abhis12321/TextUtils---TicTacToe---Weather`}>Github Link..</Link>
              <Link className='px-3 text-[14px] sm:text-[.9rem] sm:px-4 py-2 rounded bg-slate-950/70 dark:bg-slate-950 hover:shadow-[0_0_3px_white] hover:bg-black duration-1000 font-semibold' target='_blank' href={`/projects`}>Take a Look...</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-l from-blue-50 to-slate-50 dark:from-blue-900/60 dark:to-blue-950/65 shadow-[0_0_7px_black] dark:shadow-[0_0_7px_white] hover:shadow-[0_0_8px_red] text-white w-[97%] max-w-[900px] mx-auto p-[10px] sm:p-[20px] min-h-[180px] text-center rounded-lg ">
        <h2 className="w-fit mx-auto sm:my-2 px-3 dark:px-0 py-2 bg-slate-950/10 dark:bg-transparent rounded-lg font-extrabold text-2xl drop-shadow-[3px_3px_1px_green] text-gray-50 dark:text-white">Tic-Tac-Toe</h2>
        <p className='text-[10px] xs:text-[12px] italic text-yellow-600 dark:drop-shadow-[0_0_2px_black] font-bold' ><span className='font-semibold' >Tools & technologies used :</span> ReactJs , CSS , Routes</p>

        <div className="flex flex-col sm:flex-row sm:gap-4 items-center">
          <Link href={'/projects'} target='blank' className='mx-auto rounded shadow-[0_0_3px_black] dark:shadow-[0_0_5px_white] my-4 max-h-[250px] sm:w-[40%] overflow-hidden'><Image src={'/img/projects/ticTacToe.png'} alt='demo-image' width={400} height={250} className='' /> </Link>
          <div className="flex flex-col sm:w-[55%]">
            <div className="font-mono text-[14px] mb-3 sm:my-3 text-gray-800 dark:text-gray-400 max-w-[450px]">It&apos;s a basic game designed for checking your critical thinking and decision making capabilities and strength of making the best decision out of all the possible decisions. It is a frontend project built using some functionalities of JavaScript along with a good looking and interactive UI.</div>
            <div className="flex fle-col xm:flex-row gap-2 items-center justify-around">
              <Link className='px-3 text-[14px] sm:text-[.9rem] sm:px-4 py-2 rounded bg-slate-950/70 dark:bg-slate-950 hover:shadow-[0_0_3px_white] hover:bg-black duration-1000 font-semibold' target='_blank' href={`https://github.com/abhis12321/TextUtils---TicTacToe---Weather`}>Github Link..</Link>
              <Link className='px-3 text-[14px] sm:text-[.9rem] sm:px-4 py-2 rounded bg-slate-950/70 dark:bg-slate-950 hover:shadow-[0_0_3px_white] hover:bg-black duration-1000 font-semibold' target='_blank' href={`/projects`}>Take a Look...</Link>
            </div>
          </div>
        </div>
      </div>


      <div className="bg-gradient-to-l from-blue-50 to-slate-50 dark:from-blue-900/60 dark:to-blue-950/65 shadow-[0_0_7px_black] dark:shadow-[0_0_7px_white] hover:shadow-[0_0_8px_red] text-white w-[97%] max-w-[900px] mx-auto p-[10px] sm:p-[20px] min-h-[180px] text-center rounded-lg ">
        <h2 className="w-fit mx-auto sm:my-2 px-3 dark:px-0 py-2 bg-slate-950/10 dark:bg-transparent rounded-lg font-extrabold text-2xl drop-shadow-[3px_3px_1px_green] text-gray-50 dark:text-white">Real-time LeaderBoard Management</h2>
        <p className='text-[10px] xs:text-[12px] italic text-yellow-600 dark:drop-shadow-[0_0_2px_black] font-bold' ><span className='font-semibold' >Tools & technologies used :</span> ReactJs , CSS , JavaScript & Tailwind</p>

        <div className="flex flex-col sm:flex-row sm:gap-4 items-center">
          <Link href={'https://abhis12321.github.io/Real-time-Leaderboard-Management/'} target='blank' className='mx-auto rounded shadow-[0_0_3px_black] dark:shadow-[0_0_5px_white] my-4 max-h-[250px] sm:w-[40%] overflow-hidden'><Image src={'/img/projects/leaderBoard.png'} alt='demo-image' width={400} height={250} className='' /> </Link>
          <div className="flex flex-col sm:w-[55%]">
            <div className="font-mono text-[14px] mb-3 sm:my-3 text-gray-800 dark:text-gray-400 max-w-[450px]">It was an assignment for my frontend skill test here I needed to design a leaderboard with a button that increases the points of the table users and I have to maintain the correct rank of the table users with respect to their points. Here I used some basic JavaScript functionalities and event-listeners to desing it and merged them with a good looking UI.</div>
            <div className="flex fle-col xm:flex-row gap-2 items-center justify-around">
              <Link className='px-3 text-[14px] sm:text-[.9rem] sm:px-4 py-2 rounded bg-slate-950/70 dark:bg-slate-950 hover:shadow-[0_0_3px_white] hover:bg-black duration-1000 font-semibold' target='_blank' href={`https://github.com/abhis12321/Real-time-Leaderboard-Management`}>Github Link..</Link>
              <Link className='px-3 text-[14px] sm:text-[.9rem] sm:px-4 py-2 rounded bg-slate-950/70 dark:bg-slate-950 hover:shadow-[0_0_3px_white] hover:bg-black duration-1000 font-semibold' target='_blank' href={`https://abhis12321.github.io/Real-time-Leaderboard-Management/`}>Take a Look...</Link>
            </div>
          </div>
        </div>
      </div>


      <div className="bg-gradient-to-l from-blue-50 to-slate-50 dark:from-blue-900/60 dark:to-blue-950/65 shadow-[0_0_7px_black] dark:shadow-[0_0_7px_white] hover:shadow-[0_0_8px_red] text-white w-[97%] max-w-[900px] mx-auto p-[10px] sm:p-[20px] min-h-[180px] text-center rounded-lg ">
        <h2 className="w-fit mx-auto sm:my-2 px-3 dark:px-0 py-2 bg-slate-950/10 dark:bg-transparent rounded-lg font-extrabold text-2xl drop-shadow-[3px_3px_1px_green] text-gray-50 dark:text-white">News-Hunt</h2>
        <p className='text-[10px] xs:text-[12px] italic text-yellow-600 dark:drop-shadow-[0_0_2px_black] font-bold' ><span className='font-semibold' >Tools & technologies used :</span> ReactJs , CSS , Routes</p>

        <div className="flex flex-col sm:flex-row sm:gap-4 items-center">
          <Link href={'/projects'} target='blank' className='mx-auto rounded shadow-[0_0_3px_black] dark:shadow-[0_0_5px_white] my-4 max-h-[250px] sm:w-[40%] overflow-hidden'><Image src={'/img/projects/pending.png'} alt='demo-image' width={400} height={250} className='' /> </Link>
          <div className="flex flex-col sm:w-[55%]">
            <div className="font-mono text-[14px] mb-3 sm:my-3 text-gray-800 dark:text-gray-400 max-w-[450px]">A React based News Application for current/Daily news (data from news api)I created a news website for current(daily) news using the data of a NEWS API and I created some sections of interests</div>
            <div className="flex fle-col xm:flex-row gap-2 items-center justify-around">
              <Link className='px-3 text-[14px] sm:text-[.9rem] sm:px-4 py-2 rounded bg-slate-950/70 dark:bg-slate-950 hover:shadow-[0_0_3px_white] hover:bg-black duration-1000 font-semibold' target='_blank' href={`https://github.com/abhis12321/News-Hunt`}>Github Link..</Link>
              <Link className='px-3 text-[14px] sm:text-[.9rem] sm:px-4 py-2 rounded bg-slate-950/70 dark:bg-slate-950 hover:shadow-[0_0_3px_white] hover:bg-black duration-1000 font-semibold' target='_blank' href={`/projects`}>Take a Look...</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-l from-blue-50 to-slate-50 dark:from-blue-900/60 dark:to-blue-950/65 shadow-[0_0_7px_black] dark:shadow-[0_0_7px_white] hover:shadow-[0_0_8px_red] text-white w-[97%] max-w-[900px] mx-auto p-[10px] sm:p-[20px] min-h-[180px] text-center rounded-lg ">
        <h2 className="w-fit mx-auto sm:my-2 px-3 dark:px-0 py-2 bg-slate-950/10 dark:bg-transparent rounded-lg font-extrabold text-2xl drop-shadow-[3px_3px_1px_green] text-gray-50 dark:text-white">Weather-App</h2>
        <p className='text-[10px] xs:text-[12px] italic text-yellow-600 dark:drop-shadow-[0_0_2px_black] font-bold' ><span className='font-semibold' >Tools & technologies used :</span> HTML , CSS , JavaScript</p>

        <div className="flex flex-col sm:flex-row sm:gap-4 items-center">
          <Link href={'https://abhis12321.github.io/weather-app/'} target='blank' className='mx-auto rounded shadow-[0_0_3px_black] dark:shadow-[0_0_5px_white] my-4 max-h-[250px] sm:w-[40%] overflow-hidden'><Image src={'/img/projects/weather.png'} alt='demo-image' width={400} height={250} className='' /> </Link>
          <div className="flex flex-col sm:w-[55%]">
            <div className="font-mono text-[14px] mb-3 sm:my-3 text-gray-800 dark:text-gray-400 max-w-[450px]">It&apos;s a basic weather web application. Here we can check the current weather condition of a place by just typing the place name. It fetches the data from an pre-existing weather api ad shows here on our screen with some filtered data only. It is a frontend project built using some functionalities of JavaScript along with a good looking and interactive UI.</div>
            <div className="flex fle-col xm:flex-row gap-2 items-center justify-around">
              <Link className='px-3 text-[14px] sm:text-[.9rem] sm:px-4 py-2 rounded bg-slate-950/70 dark:bg-slate-950 hover:shadow-[0_0_3px_white] hover:bg-black duration-1000 font-semibold' target='_blank' href={`https://github.com/abhis12321/weather-app`}>Github Link..</Link>
              <Link className='px-3 text-[14px] sm:text-[.9rem] sm:px-4 py-2 rounded bg-slate-950/70 dark:bg-slate-950 hover:shadow-[0_0_3px_white] hover:bg-black duration-1000 font-semibold' target='_blank' href={`https://abhis12321.github.io/weather-app/`}>Take a Look...</Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}