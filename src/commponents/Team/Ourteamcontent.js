import React from 'react'
import Img1 from '../../assets/1.png'
import Img2 from '../../assets/2.png'
import Img3 from '../../assets/3.png'
import Img4 from '../../assets/4.png'
import Img5 from '../../assets/5.png'
import Img6 from '../../assets/6.png'

const Ourteamcontent = () => {
  return (
    <section className='bg-[#fff] py-32 w-full h-full'>
      <div className='container'>

      <div className="text text-center pb-32 w-full">
            <h1 className='text-[25px] md:text-[35px] font-bold'>Meet Our Team</h1>
            <p className='text-[15px] text-[#706f7b] py-10 mx-auto max-w-[70rem]'>"Welcome to our team page! Here you'll find the talented individuals who drive our company forward. Our team is more than just a group of professionals; we're a family dedicated to excellence and innovation."</p>
        </div>

        <div className="cards grid md:grid-cols-2 xl:grid-cols-3 mx-auto grid-rows-[auto] gap-[3rem] text-center w-fit xl:w-[110rem] items-center">

      <div className="card border shadow-lg rounded-sm ">
        <div className='w-full bg-[#f6f6f6]'>
          <img className='w-full' src={Img1} alt="luke" />
        </div>
        <div className='text-center p-10'>
          <h2 className='text-[24px] font-extrabold'>Luke Miller</h2>
          <span className='text-[16px] text-[#777]'>Salesman</span>
        </div>
      </div>

      <div className="card border shadow-lg rounded-sm ">
        <div className='w-full bg-[#f6f6f6]'>
          <img className='w-full' src={Img2} alt="luke" />
        </div>
        <div className='text-center p-10'>
          <h2 className='text-[24px] font-extrabold'>Michael Diaz</h2>
          <span className='text-[16px] text-[#777]'>Business Owner</span>
        </div>
      </div>

      <div className="card border shadow-lg rounded-sm ">
        <div className='w-full bg-[#f6f6f6]'>
          <img className='w-full' src={Img3} alt="luke" />
        </div>
        <div className='text-center p-10'>
          <h2 className='text-[24px] font-extrabold'>Briana Ross</h2>
          <span className='text-[16px] text-[#777]'>Photographer</span>
        </div>
      </div>

      <div className="card border shadow-lg rounded-sm ">
        <div className='w-full bg-[#f6f6f6]'>
          <img className='w-full' src={Img4} alt="luke" />
        </div>
        <div className='text-center p-10'>
          <h2 className='text-[24px] font-extrabold'>Lauren Rivera</h2>
          <span className='text-[16px] text-[#777]'>Car Detailist</span>
        </div>
      </div>

      <div className="card border shadow-lg rounded-sm ">
        <div className='w-full bg-[#f6f6f6]'>
          <img className='w-full' src={Img5} alt="luke" />
        </div>
        <div className='text-center p-10'>
          <h2 className='text-[24px] font-extrabold'>Martin Rizz</h2>
          <span className='text-[16px] text-[#777]'>Mechanic</span>
        </div>
      </div>

      <div className="card border shadow-lg rounded-sm ">
        <div className='w-full bg-[#f6f6f6]'>
          <img className='w-full' src={Img6} alt="luke" />
        </div>
        <div className='text-center p-10'>
          <h2 className='text-[24px] font-extrabold'>Caitlyn Hunt</h2>
          <span className='text-[16px] text-[#777]'>Menager</span>
        </div>
      </div>

        </div>

      </div>
    </section>
  )
}

export default Ourteamcontent
