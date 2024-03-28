import React from 'react'
import Aimg from '../../assets/about-main.jpg'
import Logo from '../../assets/logo.png'
import Icon1 from '../../assets/icon1.png'
import Icon2 from '../../assets/icon2.png'
import Icon3 from '../../assets/icon3.png'

const Aboutcontent = () => {
  return (
    <section className='w-full h-full bg-[#fff] py-[150px]'>

      <div className='flex flex-col items-center pb-44'>
        <img src={Logo} alt="logo" className='w-[250px] border-b-2 border-main px-12 pb-8' />
        <p className='text-[16px] text-[#777] max-w-[900px] text-center py-14'>"Welcome to Car Rental! We're here to make your journey hassle-free and enjoyable. With our diverse range of vehicles and dedication to customer satisfaction, we ensure a seamless rental experience. Whether for business or pleasure, trust Car Rental to meet your transportation needs with excellence."</p>
      </div>

      <div className="content flex justify-center gap-20 flex-wrap">
        <div className="col-1 pt-16">
            <img src={Aimg} alt="aboutimg" />
        </div>

        <div className="col-2 w-[470px] mx-5 md:mx-0">
            <h1 className='text-[22px] text-center md:text-start'>About Company</h1>
            <h2 className='text-[35px] md:text-[42px] font-bold  pb-5 text-center md:text-start'>You start the engine and your adventure begins</h2>
            <p className='text-[#706f7b] text-[16px]  text-center md:text-start'>Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting. Pretended exquisite see cordially the you. Weeks quiet do vexed or whose. Motionless if no to affronting imprudence no precaution. My indulged as disposal strongly attended.</p>
            <div className="icons pt-20 justify-center items-center flex flex-col md:flex-row gap-20 flex-wrap">
                <div className="icon ">
                    <img className='w-[7rem]' src={Icon1} alt="icon1" />
                    <div className="text flex items-center gap-3">
                    <span className='text-[46px] font-extrabold'>20</span>
                    <p className='text-[16px] w-[50px]'> Car Types</p>
                    </div>
                </div>
                <div className="icon ">
                    <img className='w-[7rem]' src={Icon2} alt="icon1" />
                    <div className="text flex items-center gap-3">
                    <span className='text-[46px] font-extrabold'>80</span>
                    <p className='text-[16px] w-[50px]'>Rental Outlets</p>
                    </div>
                </div>
                <div className="icon ">
                    <img className='w-[5rem]' src={Icon3} alt="icon1" />
                    <div className="text flex items-center gap-3">
                    <span className='text-[46px] font-extrabold'>75</span>
                    <p className='text-[16px] w-[50px]'>Repair Shop</p>
                    </div>
                </div>
            </div>
        </div>

      </div>
      
    </section>
  )
}

export default Aboutcontent
