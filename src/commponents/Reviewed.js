import React from 'react'
import Man from '../assets/man.jpg'
import Women from '../assets/women.jpg'
import { FaQuoteRight } from "react-icons/fa";

const Reviewed = () => {
  return (
    <div className='w-full h-full bg-[#f8f8f8] py-32 mx-auto'>
      <div className="heading flex gap-5 flex-col items-center text-black w-full">
        <h2 className='text-[22px] font-bold'>Reviewed by People</h2>
        <h1 className='text-[27px] md:text-[42px] font-extrabold'>Client's Testimonials</h1>
        <p className='text-[#706f7b] text-[16px] md:w-[700px] text-center px-5'>Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they're eager to share their positive experiences with you.</p>
      </div>

      <div className="cards flex-wrap flex justify-center items-center mr-5 pt-32 gap-20">
        <div className="card-1 p-20 sm:px-[100px] sm:py-[40px] bg-[#fff] shadow-xl ml-5">
            <p className='text-[22px] sm:w-[400px] font-[500]'>"We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable. "</p>
            <div className='flex justify-between items-center pt-7'>
                <div className='flex items-center justify-center'>
                    <img className='rounded-[50%] object-cover w-[112px] h-[112px]' src={Man} alt="" />
                    <div className='flex flex-col pl-6'>
                        <h2 className='text-[20px] font-bold'>Jhony Brito</h2>
                        <h3 className='text-[18px]'>Belgrade</h3>
                    </div>
                </div>
                <span className='text-main sm:block hidden'><FaQuoteRight size={30}/></span>
            </div>
        </div>
        <div className="card-1 p-20 sm:px-[100px] sm:py-[40px] bg-[#fff] shadow-xl ml-5">
            <p className='text-[22px] sm:w-[380px] font-[500]'>"The car was in great condition and made our trip even better. Highly recommend for this car rental website!"</p>
            <div className='flex justify-between items-center pt-7'>
                <div className='flex items-center justify-center'>
                    <img className='rounded-[50%] object-cover w-[112px] h-[112px]' src={Women} alt="" />
                    <div className='flex flex-col pl-6'>
                        <h2 className='text-[20px] font-bold'>Sara Wolverine</h2>
                        <h3 className='text-[18px]'>USA</h3>
                    </div>
                </div>
                <span className='text-main sm:block hidden'><FaQuoteRight size={30}/></span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Reviewed
