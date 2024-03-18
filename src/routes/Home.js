import React from 'react'
import Navbar from '../commponents/Navbar'
import Hero from '../commponents/Hero'
import BookCar from '../commponents/Book/BookCar'
import Plan from '../commponents/Plan'
import Vehiclemodels from '../commponents/Vehiclemodels'
import Whyus from '../commponents/Whyus'
import Reviewed from '../commponents/Reviewed'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <BookCar/>
      <Plan/>
      <Vehiclemodels/>
      <Whyus/>
      <Reviewed/>
    </div>
  )
}

export default Home
