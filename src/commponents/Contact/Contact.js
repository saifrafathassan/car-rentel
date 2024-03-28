import {Link} from 'react-router-dom'
import { MdOutlineEmail } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";

const Contact = () => {
  return (
    <section className='contact-div w-full h-full py-32 bg-[#fff]'>
      <div className="conainer flex items-center justify-center">

      <div className="col-1">
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
          <Link className='text-[14px] hover:text-main transition-colors duration-300'>Design by XpeedStudio</Link>
        </div>

      </div>
    </section>
  )
}

export default Contact
