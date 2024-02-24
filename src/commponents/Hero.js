import React from 'react'
import Bg from '../assets/hero-bg.png'
import Car from '../assets/main-car.png'
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BiChevronRight } from "react-icons/bi";

const Hero = () => {
  return (
    <div className='h-screen pb-24 overflow-hidden'>
      <img src={Bg} alt="hero" className='hidden lg:block absolute top-0 right-0 z-[-1]'/>
      <div className='flex justify-center items-center h-full mx-auto lg:w-[1350px]'>
        <div className="lg:text-start w-[500px] text-center lg:w-[500px] md:ml-4">
            <h4 className='text-2xl py-2'>Plan your trip now</h4>
            <h1 className='text-[50px] leading-[60px] py-2'>Save <span className='text-main'>big</span> with our car rental</h1>
            <p className='text-[#847e7e] font-sans font-bold leading-7 py-2'>Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.</p>
            <div className="btn text-white lg:justify-start justify-center flex flex-wrap gap-7 py-5">
                <button className='py-[18px] px-[30px] bg-main text-lg rounded-md flex items-center gap-4 shadow-xl hover:bg-primary transition-colors duration-300'>Book Ride <AiOutlineCheckCircle size={25}/></button>
                <button className='py-[18px] px-[30px] bg-black text-lg rounded-md flex items-center gap-4 shadow-xl hover:bg-white hover:text-black transition-colors duration-300'>Learn More <BiChevronRight size={25}/></button>
            </div>
        </div>
        <div className="car pr-10 hidden lg:block">
            <img src={Car} alt="car" />
        </div>
      </div>
    </div>
  )
}

export default Hero
