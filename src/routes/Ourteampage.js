import React from 'react'
import LoadingComponent from './LoadingComponent'
import Navbar from '../commponents/Navbar'
import Hero2 from '../commponents/Hero2'
import Banner from '../commponents/Banner'
import Footer from '../commponents/Footer'
import Ourteamcontent from '../commponents/Team/Ourteamcontent'


const Ourteampage = () => {
  return (
    <div>
      <LoadingComponent/>
      <Navbar/>
      <Hero2 name="Our Team"/>
      <Ourteamcontent/>
      <Banner/>
      <Footer/>
      <LoadingComponent/>
    </div>
  )
}

export default Ourteampage
