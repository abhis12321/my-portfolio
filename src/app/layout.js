import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from './NavBar'
import Footer from './Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'First Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='bg-slate-950 text-white'>
      <body>
          <NavBar />
          <div className='min-h-[90.9vh]'>
            {children}
          </div>
          <Footer />
      </body>
    </html>
  )
}
