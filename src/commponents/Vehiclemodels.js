import React from 'react'
import Car1 from '../assets/benz.jpg'
import Car2 from '../assets/audia1.jpg'
import Car3 from '../assets/golf6.jpg'
import Car4 from '../assets/passatcc.jpg'
import Car5 from '../assets/bmw320.jpg'
import Car6 from '../assets/toyotacamry.jpg'

const Vehiclemodels = () => {
  return (
    <div className='bg-[#fff] py-40 flex flex-col items-center'>
      <h2 className='text-4xl font-[750]'>Vehicle Models</h2>
      <h1 className='text-[35px] md:text-[45px] font-[750] py-4'>Our rental fleet</h1>
      <p className='text-[#706f7b] text-[17px] max-w-[600px] text-center'>Choose from a variety of our amazing vehicles to rent for your next adventure or business trip</p>

      <div className="pickcar py-20 flex flex-wrap gap-20 lg:gap-[100px]">

        <div className="bottons mx-auto flex flex-col gap-3">
          <button className='py-[1.5rem] px-[2.5rem] bg-[#e9e9e9] text-left text-[2rem] font-bold hover:text-white hover:bg-main duration-200'>Audi A1 S-Line</button>
          <button className='py-[1.5rem] px-[2.5rem] bg-[#e9e9e9] text-left text-[2rem] font-bold hover:text-white hover:bg-main duration-200'>VW Golf 6</button>
          <button className='py-[1.5rem] px-[2.5rem] bg-[#e9e9e9] text-left text-[2rem] font-bold hover:text-white hover:bg-main duration-200'>Toyata Camry</button>
          <button className='py-[1.5rem] px-[2.5rem] bg-[#e9e9e9] text-left text-[2rem] font-bold hover:text-white hover:bg-main duration-200'>BMW 320 ModernLine</button>
          <button className='py-[1.5rem] px-[2.5rem] bg-[#e9e9e9] text-left text-[2rem] font-bold hover:text-white hover:bg-main duration-200'>Mercedes-Benz GLK</button>
          <button className='py-[1.5rem] px-[2.5rem] bg-[#e9e9e9] text-left text-[2rem] font-bold hover:text-white hover:bg-main duration-200'>VW Passat CC</button>
        </div>

        <div className="img">
          <img src={Car1} alt="car" />
        </div>
      </div>

    </div>
  )
}

export default Vehiclemodels
