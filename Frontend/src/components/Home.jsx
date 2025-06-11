import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Features from './Features'
import NewsLetter from './NewsLetter'
import Footer from './Footer'
import usegetBestSeller from '../hooks/usegetBestSeller'

const Home = () => {
  usegetBestSeller();
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
