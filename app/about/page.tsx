import AboutSection from '@/components/AboutSection'
import TeamMembers from '@/components/teamMembers'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import React from 'react'
import CareersSection from '@/components/carrersSections'
import AboutInvest from '@/components/AboutInvest'

const About = () => {
  return (
    <div className='bg-white'>
        <NavBar />
        <AboutSection/>
        <TeamMembers/>    
        <CareersSection/>
        <AboutInvest />
        <Footer/>
    </div>
  )
}

export default About