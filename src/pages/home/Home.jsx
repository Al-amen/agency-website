import React from 'react'
import HeroSection from './HeroSection'
import ToolsSection from './ToolsSection'
import CompanyLogo from './CompanyLogo'

import Service from './Service'
import Testimonials from './Testimonials'
import Blogs from '../blog/Blogs'

const Home = () => {
  return (
    <>
     <HeroSection/>
     <ToolsSection/>
     <CompanyLogo/>
     <Service/>
     <Testimonials/>
     <Blogs/>
    </>
  )
}

export default Home