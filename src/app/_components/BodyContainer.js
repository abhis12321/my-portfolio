"use client"
import { useRef } from 'react'
import NavBar from './NavBar'
import GotoTopButton from './ScrollTopButton'
import Footer from './Footer'

export default function BodyContainer({ children , initialTheme}) {
    const bodyRef = useRef();
    
  return (
    <body className={`bg-blue-950/5 text-gray-950 dark:bg-gray-950 dark:text-white ${initialTheme && "dark"}`} ref={bodyRef}>
        <NavBar bodyRef={bodyRef} />
        <div className='' style={{minHeight:'calc(100vh - 4rem'}}>
          {children}
        </div>
        <GotoTopButton />
        <Footer />
    </body>
  )
}
