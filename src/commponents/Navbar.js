import React from 'react'
import Logo from '../assets/logo.png'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom' 
import { FaBars, FaTimes} from 'react-icons/fa'
import { IoIosArrowUp} from 'react-icons/io'

const Navbar = () => {
const [openNav, setOpenNav] = useState(false)
const [showButton, setShowButton] = useState(false);

const handleClick = ()=> setOpenNav(!openNav)

useEffect(() => {
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 500) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  });
}, []);

const scrollTo = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollTo);
    window.scrollTo(0, c - c / 8); 
  }
};

  return (
    <nav>
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
        <button className='bg-main flex justify-center items-center rounded-full h-[50px] w-[50px] fixed right-0 bottom-0 mb-[40px] mr-[40px] z-[1000] hover:bg-red-600 duration-300' onClick={scrollTo}>
          <IoIosArrowUp color='white' size={30}/>
        </button>
      )}
    </nav>
  )
}

export default Navbar

