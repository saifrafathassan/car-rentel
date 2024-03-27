import React from 'react'
import LoadingComponent from './LoadingComponent'
import Navbar from '../commponents/Navbar'
import Hero2 from '../commponents/Hero2'
import Footer from '../commponents/Footer'
import Banner from '../commponents/Banner'
import Vehicle from '../commponents/Vehicle/Vehicle'

const Vehiclepage = () => {
  return (
    <div>
      <LoadingComponent/>
      <Navbar/>
      <Hero2 name="VehicleModels"/>
      <Vehicle/>
      <Banner/>
      <Footer/>
    </div>
  )
}

export default Vehiclepage
