import AboutSection from '@/components/AboutSection'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import React from 'react'

const About = () => {
  return (
    <div className='bg-white'>
        <NavBar />
        <AboutSection />    
        <Footer />
    </div>
  )
}

export default About