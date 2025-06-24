import React from 'react'
import HeroSection from './HeroSection'
import ToolsSection from './ToolsSection'
import CompanyLogo from './CompanyLogo'

import Service from './Service'
import Testimonials from './Testimonials'

const Home = () => {
  return (
    <>
     <HeroSection/>
     <ToolsSection/>
     <CompanyLogo/>
     <Service/>
     <Testimonials/>
    </>
  )
}

export default Home