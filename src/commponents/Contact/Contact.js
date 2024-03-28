import {Link} from 'react-router-dom'
import { MdOutlineEmail } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import { HiOutlineMailOpen } from "react-icons/hi";

const Contact = () => {

  return (
    <section className='w-full h-full py-32 bg-[#fff]'>
      <div className="container">

        <div className='flex items-center justify-around w-full gap-40 flex-wrap'>

        <div className="col-1 xl:pb-72 w-[450px]">
            <h2 className='text-[42px] font-bold pb-10'>Need additional information?</h2>
            <p className='text-[16px] leading-[1.7] pb-12 text-[#706f7b]'>A multifaceted professional skilled in multiple fields of research, development as well as a learning specialist. Over 15 years of experience.</p>
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

        <div className="col-2 mt-20 w-[600px]">
          <form className='flex flex-col gap-10 mb-10'>
            <label className='text-[16px] font-bold'>Full Name<span className='text-main'>*</span></label>
            <input className='bg-[#f2f2f2] border-none text-[1.6rem] py-[19px] px-[30px] outline-none' type="text" placeholder='E.g: &quot;Joe Shmoe&quot;' />
          </form>
          <form className='flex flex-col gap-10 mb-10'>
            <label className='text-[16px] font-bold'>Email<span className='text-main'>*</span></label>
            <input className='bg-[#f2f2f2] border-none text-[1.6rem] py-[19px] px-[30px] outline-none' type="email" placeholder='youremail@example.com' />
          </form>
          <form className='flex flex-col gap-10'>
            <label className='text-[16px] font-bold'>Email<span className='text-main'>*</span></label>
            <textarea className='h-[18rem] mb-[2.5rem] border-none text-[1.6rem] py-[19px] px-[30px] outline-none bg-[#f2f2f2]' placeholder='Write Here..'></textarea>
          </form>
          <button type="submit" className='bg-main text-[18px] py-[18px] px-[30px] w-full flex items-center justify-center text-[#fff] gap-5 font-bold hover:bg-red-600 transition-colors duration-300 shadow-lg'><HiOutlineMailOpen size={20}/> Send Message</button>
        </div>

        </div>


      </div>
    </section>
  )
}

export default Contact
