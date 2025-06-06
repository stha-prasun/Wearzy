import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Features from './Features'
import NewsLetter from './NewsLetter'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Features/>
      <NewsLetter/>
      <Footer/>
    </div>
  )
}

export default Home
