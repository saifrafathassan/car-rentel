import React from 'react'
import Navbar from '../commponents/Navbar'
import Hero from '../commponents/Hero'
import BookCar from '../commponents/Book/BookCar'
import Plan from '../commponents/Plan'
import Vehiclemodels from '../commponents/Vehiclemodels'
import Whyus from '../commponents/Whyus'
import Reviewed from '../commponents/Reviewed'
import Faq from '../commponents/Faq'
import Downloadapp from '../commponents/Downloadapp'
import Footer from '../commponents/Footer'
import LoadingComponent from './LoadingComponent'

const Home = () => {
  return (
    <div>
      <LoadingComponent/>
      <Navbar />
      <Hero/>
      <BookCar/>
      <Plan/>
      <Vehiclemodels/>
      <Whyus/>
      <Reviewed/>
      <Faq/>
      <Downloadapp/>
      <Footer/>
      <LoadingComponent/>
    </div>
  )
}

export default Home
