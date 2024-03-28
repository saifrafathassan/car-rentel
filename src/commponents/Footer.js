import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-[#fff] w-full h-full flex flex-wrap justify-center gap-20 sm:gap-0 mx-auto pt-[100px] pb-[110px]'>
        
        <div className="col-1 w-[300px]">
          <h2 className='text-[24px] pb-10'><span className='font-bold'>CAR</span> Rental</h2>
          <p className='text-[16px] leading-[1.7] pb-12 text-[#706f7b] max-w-[270px]'>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.</p>
          <div className='flex items-center gap-4 cursor-pointer text-[16px] font-bold pb-5 hover:text-main transition-colors duration-300'>
            <BiPhoneCall size={25}/>
            <Link >(123) -456-789</Link>
          </div>
          <div className='flex items-center gap-4 pb-5 cursor-pointer text-[16px] font-bold hover:text-main transition-colors duration-300'>
            <MdOutlineEmail size={25}/>
            <Link>carrental@gmail.com</Link>
          </div>
          <Link to="https://xpeedstudio.com/" target="_blank" rel="noopener noreferrer" className='text-[14px] hover:text-main transition-colors duration-300'>Design by XpeedStudio</Link>
        </div>

        <div className="col-2 w-[300px]">
          <h1 className='text-[24px] pb-10 font-bold'>COMPANY</h1>
          <ul className='flex flex-col gap-4'>
            <li className='text-[16px] hover:text-main transition-colors duration-300'><Link>New York</Link></li>
            <li className='text-[16px] hover:text-main transition-colors duration-300'><Link>Careers</Link></li>
            <li className='text-[16px] hover:text-main transition-colors duration-300'><Link>Mobile</Link></li>
            <li className='text-[16px] hover:text-main transition-colors duration-300'><Link>Blog</Link></li>
            <li className='text-[16px] hover:text-main transition-colors duration-300'><Link>How we work</Link></li>
          </ul>
        </div>

        <div className="col-3 w-[300px]">
          <h1 className='text-[24px] pb-10 font-bold'>WORKING HOURS</h1>
          <ul className='flex flex-col gap-4'>
            <li className='text-[16px]'>Mon - Fri: 9:00AM - 9:00PM</li>
            <li className='text-[16px]'>Sat: 9:00AM - 19:00PM</li>
            <li className='text-[16px]'>Sun: Closed</li>
          </ul>
        </div>

        <div className="col-4 w-[300px] sm:w-[320px]">
          <h1 className='text-[24px] font-bold '>SUBSCRIPTION</h1>
          <p className='text-[16px] max-w-[250px] py-6 '>Subscribe your Email address for latest news & updates.</p>
          <ul>
            <li className='text-[1.6rem] mb-4'><input className='bg-[#ececec] text-center border-transparent border-[1px] mt-1 outline-none py-[10px] px-[50px] sm:px-[60px]' type="email" placeholder='Enter Email Address' /></li>
            <li className='text-[1.6rem] mb-4'><button className='bg-main text-white rounded shadow-lg font-bold text-[1.6rem] py-[15px] px-[25px] w-full hover:bg-red-600 transition-colors duration-300'>Submit</button></li>
          </ul>
        </div>
    </div>
  )
}

export default Footer 
