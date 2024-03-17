import React,{useState} from 'react'
import {data} from './Data/Data'
import Looding from '../assets/Rolling-1s-44px.svg'


const Vehiclemodels = () => {

  const [activeCar, setActiveCar] = useState(data[0]); // Initialize active car
  const [isLoading, setIsLoading] = useState(false);

  // Function to handle button click and update active car
  const handleButtonClick = (id) => {
    setIsLoading(true); // Set loading to true when a button is clicked

    // Simulate loading delay with setTimeout
    setTimeout(() => {
      
      const clickedCar = data.find((car) => car.id === id);
      setActiveCar(clickedCar);
      setIsLoading(false); // Set loading to false after the delay
    }, 600); // 2 seconds delay
  };

  return (
    <div className='bg-[#fff] py-40 flex flex-col items-center'>
      <h2 className='text-4xl font-[750]'>Vehicle Models</h2>
      <h1 className='text-[35px] md:text-[45px] font-[750] py-4'>Our rental fleet</h1>
      <p className='text-[#706f7b] text-[17px] max-w-[600px] text-center'>Choose from a variety of our amazing vehicles to rent for your next adventure or business trip</p>

      <div className="pickcar py-14 justify-center flex flex-wrap gap-10 xl:gap-[100px]">

        <div className="bottons mx-auto flex flex-col gap-3">
          <button onClick={() => handleButtonClick(1)} className='py-[1.5rem] px-[2.5rem] bg-[#e9e9e9] text-left text-[2rem] font-bold hover:text-white hover:bg-main duration-200'>Audi A1 S-Line</button>
          <button onClick={() => handleButtonClick(2)} className='py-[1.5rem] px-[2.5rem] bg-[#e9e9e9] text-left text-[2rem] font-bold hover:text-white hover:bg-main duration-200'>VW Golf 6</button>
          <button onClick={() => handleButtonClick(3)} className='py-[1.5rem] px-[2.5rem] bg-[#e9e9e9] text-left text-[2rem] font-bold hover:text-white hover:bg-main duration-200'>Toyata Camry</button>
          <button onClick={() => handleButtonClick(4)} className='py-[1.5rem] px-[2.5rem] bg-[#e9e9e9] text-left text-[2rem] font-bold hover:text-white hover:bg-main duration-200'>BMW 320 ModernLine</button>
          <button onClick={() => handleButtonClick(5)} className='py-[1.5rem] px-[2.5rem] bg-[#e9e9e9] text-left text-[2rem] font-bold hover:text-white hover:bg-main duration-200'>Mercedes-Benz GLK</button>
          <button onClick={() => handleButtonClick(6)} className='py-[1.5rem] px-[2.5rem] bg-[#e9e9e9] text-left text-[2rem] font-bold hover:text-white hover:bg-main duration-200'>VW Passat CC</button>
        </div>

        <div className="img pt-28 md:mr-32 lg:mr-50">
        {isLoading ? (
          <img className='w-full xl:px-[220px] pt-32' src={Looding} alt="looding" /> // Show loading spinner if isLoading is true
        ) : (
          <img className='w-full' src={activeCar.image} alt="car" />
        )}
        </div>

        <div className="infocar w-full xl:w-[25rem]">

          <div className='bg-main text-white items-center flex text-[1.8rem] gap-[1.5rem] w-full py-[0.3rem] px-[1.9rem]'>
            <span className='text-[28px] font-bold'>${activeCar.rent} </span>/ rent per day
          </div>

          <div className=" text-[1.4rem]">
            <div className='border-[#706f7b] gap-5 flex justify-evenly border-r-2 border-b-2 border-l-2 py-[0.9rem] px-[0.5rem] text-center'>
              <span className='border-r-2 border-[#706f7b] pr-16'>Model</span>
              <span>{activeCar.Model}</span>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Vehiclemodels
