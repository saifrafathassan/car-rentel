import React from 'react'
import LoadingComponent from './LoadingComponent'
import Navbar from '../commponents/Navbar'
import Hero2 from '../commponents/Hero2'
import Aboutcontent from '../commponents/About/Aboutcontent'
import Plan from '../commponents/Plan'
import Banner from '../commponents/Banner'
import Footer from '../commponents/Footer'

const About = () => {
  return (
    <div>
      <LoadingComponent/>
      <Navbar/>
      <Hero2 name="About"/>
      <Aboutcontent/>
      <Plan/>
      <Banner/>
      <Footer/>
      <LoadingComponent/>
    </div>
  )
}

export default About
