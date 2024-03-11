import React from 'react'
import Navbar from '../commponents/Navbar'
import Hero from '../commponents/Hero'
import BookCar from '../commponents/Book/BookCar'
import Plan from '../commponents/Plan'
import Vehiclemodels from '../commponents/Vehiclemodels'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <BookCar/>
      <Plan/>
      <Vehiclemodels/>
    </div>
  )
}

export default Home
