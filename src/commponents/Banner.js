import React from 'react'
import { BsTelephone } from "react-icons/bs";

const Banner = () => {
  return (
    <section className='bg-[#fff] w-full h-full py-20'>
      <div className="book-banner">
      <div className="book-banner__overlay"></div>
      <div className="max-w-[133rem] mx-auto my-0 py-0 px-[2.5rem]">
        <div className="text-banner">
          <h2 className='text-[32px] text-[#fff]'>Book a car by getting in touch with us</h2>
          <span className='flex text-main text-[32px] items-center gap-3'>
            <BsTelephone width={40} height={40} />
            <h3>(123) 456-7869</h3>
          </span>
        </div>
      </div>
    </div>

    </section>
  )
}

export default Banner
