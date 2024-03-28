import React from 'react'
import LoadingComponent from './LoadingComponent'
import Navbar from '../commponents/Navbar'
import Hero2 from '../commponents/Hero2'
import Reviewed from '../commponents/Reviewed'
import Banner from '../commponents/Banner'
import Footer from '../commponents/Footer'
import Bg from '../assets/heros-bg-10.jpg'

const Testimonialspage = () => {
  return (
    <div>
      <LoadingComponent/>
      <Navbar/>
      <Hero2 name="Testimonials" Carbg={Bg}/>
      <Reviewed/>
      <Banner/>
      <Footer/>
      <LoadingComponent/>
    </div>
  )
}

export default Testimonialspage


// add scroll cards soon
