import React from 'react'
import Img from '../assets/main.png'
import { BiChevronRight } from "react-icons/bi";
import Icon7 from '../assets/icon7.png'
import Icon8 from '../assets/icon8.png'
import Icon9 from '../assets/icon9.png'

const Whyus = () => {
  return (
    <div className='bg-[#fff] py-12 w-full h-full items-center flex flex-col justify-center bg-img'>
      <img src={Img} alt="main" />

      <div className="main-content flex justify-center gap-[160px] flex-wrap w-full">

        <div className="frist-col text-black flex flex-col sm:text-start sm:items-start justify-center items-center text-center">
          <h2 className='text-[22px]'>Why Choose Us</h2>
          <h1 className='text-[25px] sm:text-[42px] leading-tight mt-5 font-bold sm:w-[500px]'>Best valued deals you will ever find</h1>
          <p className='text-[16px] text-[#706f7b] mt-10 sm:w-[500px]'>Discover the best deals you'll ever find with our unbeatable offers. We're dedicated to providing you with the best value for your money, so you can enjoy top-quality services and products without breaking the bank. Our deals are designed to give you the ultimate renting experience, so don't miss out on your chance to save big.</p>
          <div>
            <button className='mt-14 flex items-center font-bold text-white py-[15px] px-[25px] text-[16px] bg-main rounded shadow-xl hover:bg-red-600 transition-colors duration-300'>Find Details <BiChevronRight size={25}/></button>
          </div>
        </div>

          <div className="second-col-content pt-12 gap-10 flex flex-col">
            <div className="second-col flex items-center gap-5 flex-wrap justify-center text-center sm:text-start">
              <img src={Icon7} alt="icon" />
              <div>
                <h1 className='font-bold text-[24px] mb-5'>Cross Country Drive</h1>
                <p className='text-[#706f7b] text-[16px] w-[300px]'>Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures.</p>
              </div>
            </div>
            <div className="second-col flex items-center gap-5 flex-wrap justify-center text-center sm:text-start">
              <img src={Icon8} alt="icon" />
              <div>
                <h1 className='font-bold text-[24px] mb-5'>All Inclusive Pricing</h1>
                <p className='text-[#706f7b] text-[16px] w-[300px]'>Get everything you need in one convenient, transparent price with our all-inclusive pricing policy.</p>
              </div>
            </div>
            <div className="second-col flex items-center gap-5 flex-wrap justify-center text-center sm:text-start">
              <img src={Icon9} alt="icon" />
              <div>
                <h1 className='font-bold text-[24px] mb-5'>No Hidden Charges</h1>
                <p className='text-[#706f7b] text-[16px] w-[300px]'>Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing.</p>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Whyus
