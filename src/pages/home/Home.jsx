import React from 'react'
import HeroSection from './HeroSection'
import ToolsSection from './ToolsSection'
import CompanyLogo from './CompanyLogo'

import Service from './Service'
import Testimonials from './Testimonials'
import Blogs from '../blog/Blogs'
import TeamSection from './TeamSection'

const Home = () => {
  return (
    <>
     <HeroSection/>
     <ToolsSection/>
     <CompanyLogo/>
     <Service/>
     <Testimonials/>
     <Blogs/>
     <TeamSection/>
    </>
  )
}

export default Home