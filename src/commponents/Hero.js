import {Link} from 'react-router-dom'
import Bg from '../assets/hero-bg.png'
import Car from '../assets/main-car.png'
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BiChevronRight } from "react-icons/bi";


const Hero = () => {

  const scrollTo = (offset) => {
    window.scrollTo({
      top: offset,
      behavior: 'smooth'
    });
  };

  return (
    <div className='h-screen ml-10 pb-24 overflow-hidden font-bold pt-32'>
      <img src={Bg} alt="hero" className='hidden lg:block absolute top-0 right-0 z-[-1]'/>
      <div className='flex justify-center items-center h-full mx-auto lg:w-[1350px]'>
        <div className="lg:text-start w-[500px] text-center lg:w-[600px]">
            <h4 className='text-4xl pb-7'>Plan your trip now</h4>
            <h1 className='text-[35px] sm:text-[60px] md:leading-[70px] pb-2'>Save <span className='text-main'>big</span> with our car rental</h1>
            <p className='text-[#847e7e] font-sans font-bold leading-10 py-6 text-[15px]'>Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.</p>
            <div className="btn text-white lg:justify-start justify-center flex flex-wrap gap-7 py-5">
                <button onClick={() => scrollTo(700)} className='py-[18px] px-[30px] bg-main text-[17px] rounded-md flex items-center gap-4 shadow-xl hover:bg-red-600 transition-colors duration-300'>Book Ride <AiOutlineCheckCircle size={25}/></button>
                <Link to="/about"><button className='py-[18px] text-[17px] px-[26px] bg-black rounded-md flex items-center gap-4 shadow-xl hover:bg-white hover:text-black transition-colors duration-300'>Learn More <BiChevronRight size={25}/></button></Link>
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
