import React,{useState, useEffect} from 'react'
import {data} from './Data/Data'
import Looding from '../assets/Rolling-1s-44px.svg'


const Vehiclemodels = () => {
  const [activeCar, setActiveCar] = useState(data[0]);
  const [isLoading, setIsLoading] = useState(true);
  const [active, setActive] = useState(1);

  useEffect(() => {
    const preloadImages = async () => {
      const promises = data.map((car) => {
        return new Promise((resolve, reject) => {
          const image = new Image();
          image.onload = () => resolve();
          image.onerror = reject;
          image.src = car.image;
        });
      });
  
      try {
        await Promise.all(promises);
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to preload images:', error);
      }
    };
  
    preloadImages();
  }, []);

  const handleButtonClick = (id) => {
    setIsLoading(true);
    setActive(id);

    setTimeout(() => {
      const clickedCar = data.find((car) => car.id === id);
      setActiveCar(clickedCar);
      setIsLoading(false);
    }, 350);
  };

  return (
    <div className='bg-[#fff] pt-32 flex flex-col items-center'>
      <h2 className='text-4xl font-[750]'>Vehicle Models</h2>
      <h1 className='text-[35px] md:text-[45px] font-[750] py-4'>Our rental fleet</h1>
      <p className='text-[#706f7b] text-[17px] max-w-[400px] sm:max-w-[600px] text-center'>Choose from a variety of our amazing vehicles to rent for your next adventure or business trip</p>

      <div className="w-full pickcar py-14 justify-center md:gap-[120px] flex flex-wrap">

        <div className="bottons flex flex-col gap-3">
          <button key={1} onClick={() => handleButtonClick(1)} className={`py-[1.5rem] px-[2.5rem] bg-[#e9e9e9] text-left text-[2rem] font-bold hover:text-white hover:bg-main duration-200 ${active === 1 ? 'btnactive' : ''}`}>Audi A1 S-Line</button>
          <button key={2} onClick={() => handleButtonClick(2)} className={`py-[1.5rem] px-[2.5rem] bg-[#e9e9e9] text-left text-[2rem] font-bold hover:text-white hover:bg-main duration-200 ${active === 2 ? 'btnactive' : ''}`}>VW Golf 6</button>
          <button key={3} onClick={() => handleButtonClick(3)} className={`py-[1.5rem] px-[2.5rem] bg-[#e9e9e9] text-left text-[2rem] font-bold hover:text-white hover:bg-main duration-200 ${active === 3 ? 'btnactive' : ''}`}>Toyata Camry</button>
          <button key={4} onClick={() => handleButtonClick(4)} className={`py-[1.5rem] px-[2.5rem] bg-[#e9e9e9] text-left text-[2rem] font-bold hover:text-white hover:bg-main duration-200 ${active === 4 ? 'btnactive' : ''}`}>BMW 320 ModernLine</button>
          <button key={5} onClick={() => handleButtonClick(5)} className={`py-[1.5rem] px-[2.5rem] bg-[#e9e9e9] text-left text-[2rem] font-bold hover:text-white hover:bg-main duration-200 ${active === 5 ? 'btnactive' : ''}`}>Mercedes-Benz GLK</button>
          <button key={6} onClick={() => handleButtonClick(6)} className={`py-[1.5rem] px-[2.5rem] bg-[#e9e9e9] text-left text-[2rem] font-bold hover:text-white hover:bg-main duration-200 ${active === 6 ? 'btnactive' : ''}`}>VW Passat CC</button>
        </div>

        <div className="h-[450px] pt-32 w-[500px] relative">
        {isLoading ? (
           <div className='absolute inset-0 flex items-center justify-center'>
           <img className='w-[44px] h-[44px]' src={Looding} alt='loading' />
         </div>
        ) : (
          <img className='w-full h-full object-contain' src={activeCar.image} alt="carimage" />
        )}
        </div>

        <div className="infocar w-[700px] mx-10 sm:mx-[100px] xl:mx-0 xl:w-[25rem]">

          <div className='bg-main text-white items-center flex text-[1.8rem] gap-[1.5rem] w-full py-[0.3rem] px-[1.9rem]'>
            <span className='text-[28px] font-bold'>${activeCar.rent} </span>/ rent per day
          </div>

          <div className=" text-[1.4rem]">
            <div className='border-[#706f7b] flex items-center justify-center border-r-2 border-b-2 border-l-2 py-[0.9rem] px-[0.5rem] text-center'>
              <span style={{ flex: 1, textAlign: 'center' }}>Model</span>
              <span className='px-6'>|</span>
              <span style={{ flex: 1, textAlign: 'center' }}>{activeCar.Model}</span>
            </div>
            <div className='border-[#706f7b] flex items-center justify-center border-r-2 border-b-2 border-l-2 py-[0.9rem] px-[0.5rem] text-center'>
              <span style={{ flex: 1, textAlign: 'center' }}>Mark</span>
              <span className='px-6'>|</span>
              <span style={{ flex: 1, textAlign: 'center' }}>{activeCar.Mark}</span>
            </div>
            <div className='border-[#706f7b] flex items-center justify-center border-r-2 border-b-2 border-l-2 py-[0.9rem] px-[0.5rem] text-center'>
              <span style={{ flex: 1, textAlign: 'center' }}>Year</span>
              <span className='px-6'>|</span>
              <span style={{ flex: 1, textAlign: 'center' }}>{activeCar.Year}</span>
            </div>
            <div className='border-[#706f7b] flex items-center justify-center border-r-2 border-b-2 border-l-2 py-[0.9rem] px-[0.5rem] text-center'>
              <span style={{ flex: 1, textAlign: 'center' }}>Doors</span>
              <span className='px-6'>|</span>
              <span style={{ flex: 1, textAlign: 'center' }}>{activeCar.Doors}</span>
            </div>
            <div className='border-[#706f7b] flex items-center justify-center border-r-2 border-b-2 border-l-2 py-[0.9rem] px-[0.5rem] text-center'>
              <span style={{ flex: 1, textAlign: 'center' }}>AC</span>
              <span className='px-6'>|</span>
              <span style={{ flex: 1, textAlign: 'center' }}>{activeCar.AC}</span>
            </div>
            <div className='border-[#706f7b] flex items-center justify-center border-r-2 border-b-2 border-l-2 py-[0.9rem] px-[0.5rem] text-center'>
              <span style={{ flex: 1, textAlign: 'center' }}>Transmission</span>
              <span className='px-6'>|</span>
              <span style={{ flex: 1, textAlign: 'center' }}>{activeCar.Transmission}</span>
            </div>
            <div className='border-[#706f7b] flex items-center justify-center border-r-2 border-b-2 border-l-2 py-[0.9rem] px-[0.5rem] text-center'>
              <span style={{ flex: 1, textAlign: 'center' }}>Fuel</span>
              <span className='px-6'>|</span>
              <span style={{ flex: 1, textAlign: 'center' }}>{activeCar.Fuel}</span>
            </div>

             {/* the btn div */}
             <div className='w-full'>
              <button className='bg-main text-white text-[20px] p-[10px] mt-[14px] w-full rounded shadow-xl hover:bg-red-600 transition-colors duration-300'>RESERVE NOW</button>
             </div>

          </div>

        </div>
      </div>

          {/* banner */}
          <div className='w-full text-center text-white py-[60px] my-[80px] bg-[#2d2d2d]'>
            <h1 className='text-[25px] lg:text-[52px]'>Save big with our cheap car rental!</h1>
            <p className='text-[15px] lg:text-[24px]'>Top Airports. Local Suppliers. <span className='text-main'>24/7</span> Support.</p>
          </div>

    </div>
  )
}

export default Vehiclemodels
