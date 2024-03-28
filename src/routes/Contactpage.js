import React from 'react'
import LoadingComponent from './LoadingComponent'
import Navbar from '../commponents/Navbar'
import Hero2 from '../commponents/Hero2'
import Banner from '../commponents/Banner'
import Footer from '../commponents/Footer'
import Contact from '../commponents/Contact/Contact'
import Bg from '../assets/heros-bg-2.jpg'

const Contactpage = () => {
  return (
    <div>
      <LoadingComponent/>
      <Navbar/>
      <Hero2 name="Contact" Carbg={Bg} />
      <Contact/>
      <Banner/>
      <Footer/>
      <LoadingComponent/>
    </div>
  )
}

export default Contactpage
