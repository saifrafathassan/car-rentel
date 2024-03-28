import {useState} from 'react'
import { BiChevronDown } from "react-icons/bi";


const Faq = () => {
  const [activeText, setActiveText] = useState(1)

  const handleClick = (textNumber) => {
    if (activeText === textNumber) {
      setActiveText(null); // if the clicked text is already active, deactivate it
    } else {
      setActiveText(textNumber); // otherwise, activate the clicked text
    }
  }




  return (
    <section className='w-full h-full bg-[#fff] py-32 mx-auto my-20 FAQ'>
        <div className="text flex flex-col justify-center items-center">
          <h2 className='text-[22px] font-bold'>FAQ</h2>
          <h1 className='text-[30px] text-center md:text-[42px] font-bold font-[Poppins, sans-serif] my-5'>Frequently Asked Questions</h1>
          <p className='text-[16px] text-[#706f7b] md:w-[750px] text-center pb-12 px-5'>Frequently Asked Questions About the Car Rental Booking Process on Our Website: Answers to Common Concerns and Inquiries.</p>
        </div>

    <div className="faq flex flex-col justify-center items-center my-20">

      <div onClick={() => handleClick(1)} className="q1 bg-white w-full md:max-w-fit shadow-xl  flex flex-col justify-between items-center cursor-pointer border-b-2">
        <div className={`flex justify-between items-center md:w-[80rem] py-[8px] px-[20px] md:py-[18px] md:px-[45px] transition duration-300 ${activeText === 1 ? 'bg-main text-white' : ''}`}>
          <h2 className='text-[15px] sm:text-[18px]'>1.What is special about comparing rental car deals? </h2>
          <span><BiChevronDown size={30}/></span>
        </div>
        <div className={`div ${activeText === 1 ? 'show' : 'div'}`}>
            <p className='text-[#706f7b] text-[15px] w-[30rem] sm:w-[50rem] md:w-[80rem] py-4 px-6 sm:py-[2.8rem] sm:px-[4.5rem]'>Comparing rental car deals is important as it helps find the
                  best deal that fits your budget and requirements, ensuring you
                  get the most value for your money. By comparing various
                  options, you can find deals that offer lower prices,
                  additional services, or better car models. You can find car
                  rental deals by researching online and comparing prices from
                  different rental companies.</p>
          </div>
      </div>

      <div onClick={() => handleClick(2)} className="q2 bg-white shadow-xl w-full md:max-w-fit flex flex-col justify-between items-center cursor-pointer border-b-2">
        <div className={`flex justify-between items-center md:w-[80rem] py-[8px] px-[20px] md:py-[18px] md:px-[45px] transition duration-300 ${activeText === 2 ? 'bg-main text-white' : ''}`}>
          <h2 className='text-[15px] sm:text-[18px]'>2.How do I find the car rental deals? </h2>
          <span><BiChevronDown size={30}/></span>
        </div>
        <div className={`div ${activeText === 2 ? 'show' : 'div'}`}>
            <p className='text-[#706f7b] text-[15px] w-[30rem] sm:w-[50rem] md:w-[80rem] py-4 px-6 sm:py-[2.8rem] sm:px-[4.5rem]'>
              You can find car rental deals by researching online and
                  comparing prices from different rental companies. Websites
                  such as Expedia, Kayak, and Travelocity allow you to compare
                  prices and view available rental options. It is also
                  recommended to sign up for email newsletters and follow rental
                  car companies on social media to be informed of any special
                  deals or promotions.</p>
          </div>
      </div>

      <div onClick={() => handleClick(3)} className="q3 bg-white shadow-xl flex w-full md:max-w-fit flex-col justify-between items-center cursor-pointer ">
        <div className={`flex justify-between items-center md:w-[80rem] py-[8px] px-[22px] md:py-[18px] md:px-[45px] transition duration-300 ${activeText === 3 ? 'bg-main text-white' : ''}`}>
          <h2 className='text-[15px] sm:text-[18px]'>3.How do I find such low rental car prices? </h2>
          <span><BiChevronDown size={30}/></span>
        </div>
        <div className={`div ${activeText === 3 ? 'show' : 'div'}`}>
            <p className='text-[#706f7b] text-[15px] w-[30rem] sm:w-[50rem] md:w-[80rem] py-4 px-0 sm:py-[2.8rem] sm:px-[4.5rem]'>
            Book in advance: Booking your rental car ahead of time can
                  often result in lower prices. Compare prices from multiple
                  companies: Use websites like Kayak, Expedia, or Travelocity to
                  compare prices from multiple rental car companies. Look for
                  discount codes and coupons: Search for discount codes and
                  coupons that you can use to lower the rental price. Renting
                  from an off-airport location can sometimes result in lower
                  prices.</p>
          </div>
      </div>
      
    </div>
    </section>
  )
}

export default Faq
