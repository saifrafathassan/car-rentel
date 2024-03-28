import React from 'react'
import Logo from '../assets/logo.png'
import _ from 'lodash';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom' 
import { FaBars, FaTimes} from 'react-icons/fa'
import { IoIosArrowUp} from 'react-icons/io'

const Navbar = () => {
const [openNav, setOpenNav] = useState(false)
const [showButton, setShowButton] = useState(false);
const handleClick = ()=> setOpenNav(!openNav)

useEffect(() => {
  const showThreshold = 500; 
  const hideThreshold = 400;

  const handleScroll = _.throttle(() => {
    if (window.scrollY > showThreshold) {
      setShowButton(true);
    } else if (window.scrollY < hideThreshold) {
      setShowButton(false);
    }
  }, 1000);

window.addEventListener('scroll', handleScroll);
return () => {
  window.removeEventListener('scroll', handleScroll);
};
}, []);

const scrollToTop = () => {
  const scrollStep = -window.pageYOffset / (500 / 15); // 500 milliseconds to scroll to top
  const scrollInterval = setInterval(() => {
    if (window.pageYOffset !== 0) {
      window.scrollBy(0, scrollStep);
    } else {
      clearInterval(scrollInterval);
    }
  }, 15); // 15 milliseconds interval for smooth scrolling
};


  return (
    <nav className=''>
      <div className='navbar hidden lg:flex justify-between items-center pt-10 mx-auto'>
      <div className="logo">
        <Link to="/"><img src={Logo} alt="logo" className="h-20 w-42"/></Link>
      </div>
      
      <div className="links">
        <ul className='flex space-x-7'>
          <li><Link to='/' className='link'>Home</Link></li>
          <li><Link to='/about' className='link'>About</Link></li>
          <li><Link to='/vehiclemodels' className='link'>Vehicle Models</Link></li>
          <li><Link to='/testimonials' className='link'>Testimonials</Link></li>
          <li><Link to='/ourteam' className='link'>Our Team</Link></li>
          <li><Link to='/contact' className='link'>Contact</Link></li>
        </ul>
      </div>
      
      <div className="buttons flex items-center">
        <Link href="#" className="link">Sign In</Link>
        <Link href="#" className="ml-4 text-[16px] bg-main text-white font-bold py-5 px-12 rounded shadow-xl hover:bg-red-600 transition-colors duration-300">Register</Link>
      </div>
      </div>

      {/* moblie menu */}
      <div className='lg:hidden px-5 py-3 moblie-nav'>
      <div className='flex justify-between z-[99] items-center pt-7 w-full'>
        {/* Logo on the left */}
        <div className="logo">
          <img src={Logo} alt="logo" className="h-[50px] w-[150px]"/>
        </div>

        {/* Bars or times icon on the right */}
        <div onClick={handleClick} className='lg:hidden z-50 relative cursor-pointer'>
          {openNav ? (
            <FaTimes className='text-main' size={25}/>
          ) : (
            <FaBars className='text-black' size={25}/>
          )}
        </div>
        
        {/* Mobile menu */}
        <ul className={openNav ? 'moblie active' : 'moblie'}>
          <li><Link to='/' className='link'>Home</Link></li>
          <li><Link to='/about' className='link'>About</Link></li>
          <li><Link to='/vehiclemodels' className='link'>Vehicle Models</Link></li>
          <li><Link to='/testimonials' className='link'>Testimonials</Link></li>
          <li><Link to='/ourteam' className='link'>Our Team</Link></li>
          <li><Link to='/contact' className='link'>Contact</Link></li>
        </ul>
      </div>
    </div>
    {showButton && (
        <button className='bg-main flex justify-center items-center h-[60px] w-[60px] fixed right-0 bottom-0 mb-[40px] mr-[40px] z-[1299] hover:bg-red-600 duration-300' onClick={scrollToTop}>
          <IoIosArrowUp color='white' size={25}/>
        </button>
      )}
    </nav>
  )
}

export default Navbar

