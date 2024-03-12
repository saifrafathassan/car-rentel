import React from 'react'
import Icon4 from '../assets/icon4.png'
import Icon6 from '../assets/icon6.png'
import Icon5 from '../assets/icon5.png'

const Plan = () => {
  return (
    <div className='text-center plan py-24 bg-[#fff]'>
      <h2 className='text-4xl font-bold'>Plan your trip now</h2>
      <h1 className='text-[35px] md:text-[45px] font-bold py-4'>Quick & easy car rental</h1>

      <div className='cards flex flex-wrap justify-center mx-auto py-14 gap-16'>

        <div className='card flex flex-col justify-center items-center'>
            <img className='max-w-[200px]' src={Icon6} alt="icon6" />
            <h1 className='text-[26px] font-bold py-4'>Select Car</h1>
            <p className='text-[17px] max-w-[320px] text-[#706f7b]'>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs</p>
        </div>

        <div className='card flex flex-col justify-center items-center'>
            <img className='max-w-[200px]' src={Icon4} alt="icon6" />
            <h1 className='text-[26px] font-bold py-4'>Contact Operator</h1>
            <p className='text-[17px] max-w-[320px] text-[#706f7b]'>Our knowledgeable and friendly operators are always ready to help with any questions or concerns</p>
        </div>

        <div className='card flex flex-col justify-center items-center'>
            <img className='max-w-[200px]' src={Icon5} alt="icon6" />
            <h1 className='text-[26px] font-bold py-4'>Let's Drive</h1>
            <p className='text-[17px] max-w-[320px] text-[#706f7b]'>Whether you're hitting the open road, we've got you covered with our wide range of cars</p>
        </div>

      </div>
    </div>
  )
}

export default Plan
