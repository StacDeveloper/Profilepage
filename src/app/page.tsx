import Image from 'next/image'
import React from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Section from './components/Section'
import Service from './components/Service'
import Connect from './components/Connect'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'

export default function Homepage() {
  return (
    <div className=' h-full w-full' >
      <div>
        <Navbar />
        <Section/>
        <Main/>
        <Service/>
        <Connect/>
        <Footer/>
      </div>
      <Toaster/>
    </div>
  )
}

