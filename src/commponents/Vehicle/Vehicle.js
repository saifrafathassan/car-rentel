import {Link} from 'react-router-dom'
import { AiOutlineStar } from "react-icons/ai";
import { LiaCarSideSolid } from "react-icons/lia";
import Audi from '../../assets/audi-box.png'
import Bmw from '../../assets/bmw-box.png'
import Golf from '../../assets/golf6-box.png'
import Passat from '../../assets/passat-box.png'
import Benz from '../../assets/benz-box.png'
import Toyota from '../../assets/toyota-box.png'

const Vehicle = () => {
  return (
    <section className='w-full h-full py-32 mx-auto bg-[#fff]'>
      <div className="container">
        <div className="text text-center pb-32 w-full">
            <h1 className='text-[25px] md:text-[35px] font-bold'>Discover the Perfect Car Rental Models</h1>
            <p className='text-[15px] text-[#706f7b] py-10 mx-auto max-w-[100rem]'>"Discover the convenience and flexibility of car rentals with our diverse selection of models. Whether you're planning a weekend getaway, a business trip, or simply need a temporary ride, our extensive collection caters to all preferences and needs."</p>
        </div>
        <div className="cards grid md:grid-cols-2 xl:grid-cols-3 mx-auto grid-rows-[auto] gap-[3rem] text-center w-fit xl:w-[110rem] items-center">

        <div className="card border-[1px] hover:scale-105 duration-300 rounded-sm border-[#ccc] flex flex-col w-[30rem] sm:w-[35rem] bg-[#fff] ">
            <img className='w-full h-[27rem] ' src={Audi} alt="audi" />
            <div className='flex items-center justify-between pt-10 px-14'>
                <h1 className='text-[24px] font-bold'>Audi A1</h1>
                <span className='text-[24px] font-extrabold'>$45</span>
            </div>
            <div className='flex items-center justify-between py-2 px-14'>
                <li className='flex text-[#6a6a6a]'><AiOutlineStar size={18}/><AiOutlineStar size={18}/><AiOutlineStar size={18}/><AiOutlineStar size={18}/><AiOutlineStar size={18}/></li>
                <span className='text-[16px] text-[#6a6a6a]'>per day</span>
            </div>

            <div className='flex items-center justify-between py-7 px-14'>
                <li className='flex text-[#6a6a6a] items-center gap-6'><LiaCarSideSolid size={22}/> <span className='text-[15px] sm:text-[18px]'>Audi</span></li>
                <li className='flex text-[#6a6a6a] items-center gap-6'><span className='text-[15px] sm:text-[18px]'>4/5</span><LiaCarSideSolid size={22}/></li>
            </div>
            <div className='flex items-center justify-between pb-10 px-14'>
                <li className='flex text-[#6a6a6a] items-center gap-6'><LiaCarSideSolid size={22}/> <span className='text-[15px] sm:text-[18px]'>Automatic</span></li>
                <li className='flex text-[#6a6a6a] items-center gap-6'><span className='text-[15px] sm:text-[18px]'>Gasoline</span><LiaCarSideSolid size={22}/></li>
            </div>
            <div className='py-10 border-t border-[#9d9c9c] mx-10 '>
                <Link to="/" onClick={() => window.scrollTo(0,0)}><button className='bg-main py-[18px] w-full px-[30px] text-white text-[18px] font-bold shadow-lg hover:bg-red-600 transition-colors duration-300'>Book Ride</button></Link>
            </div>
        </div>

        <div className="card hover:scale-105 duration-300 border-[1px] rounded-sm border-[#ccc] flex flex-col w-[30rem] sm:w-[35rem] bg-[#fff] ">
            <img className='w-full h-[27rem]' src={Golf} alt="audi" />
            <div className='flex items-center justify-between pt-10 px-14'>
                <h1 className='text-[24px] font-bold'>Golf 6</h1>
                <span className='text-[24px] font-extrabold'>$37</span>
            </div>
            <div className='flex items-center justify-between py-2 px-14'>
                <li className='flex text-[#6a6a6a]'><AiOutlineStar size={18}/><AiOutlineStar size={18}/><AiOutlineStar size={18}/><AiOutlineStar size={18}/><AiOutlineStar size={18}/></li>
                <span className='text-[16px] text-[#6a6a6a]'>per day</span>
            </div>

            <div className='flex items-center justify-between py-7 px-14'>
                <li className='flex text-[#6a6a6a] items-center gap-6'><LiaCarSideSolid size={22}/> <span className='text-[15px] sm:text-[18px]'>VW</span></li>
                <li className='flex text-[#6a6a6a] items-center gap-6'><span className='text-[15px] sm:text-[18px]'>4/5</span><LiaCarSideSolid size={22}/></li>
            </div>
            <div className='flex items-center justify-between pb-10 px-14'>
                <li className='flex text-[#6a6a6a] items-center gap-6'><LiaCarSideSolid size={22}/> <span className='text-[15px] sm:text-[18px]'>Manual</span></li>
                <li className='flex text-[#6a6a6a] items-center gap-6'><span className='text-[15px] sm:text-[18px]'>Diesel</span><LiaCarSideSolid size={22}/></li>
            </div>
            <div className='py-10 border-t border-[#9d9c9c] mx-10 '>
                <Link to="/" onClick={() => window.scrollTo(0,0)}><button className='bg-main py-[18px] w-full px-[30px] text-white text-[18px] font-bold shadow-lg hover:bg-red-600 transition-colors duration-300'>Book Ride</button></Link>
            </div>
        </div>

        <div className="card hover:scale-105 duration-300 border-[1px] rounded-sm border-[#ccc] flex flex-col w-[30rem] sm:w-[35rem] bg-[#fff] ">
            <img className='w-full h-[27rem]' src={Toyota} alt="audi" />
            <div className='flex items-center justify-between pt-10 px-14'>
                <h1 className='text-[24px] font-bold'>Toyota</h1>
                <span className='text-[24px] font-extrabold'>$30</span>
            </div>
            <div className='flex items-center justify-between py-2 px-14'>
                <li className='flex text-[#6a6a6a]'><AiOutlineStar size={18}/><AiOutlineStar size={18}/><AiOutlineStar size={18}/><AiOutlineStar size={18}/><AiOutlineStar size={18}/></li>
                <span className='text-[16px] text-[#6a6a6a]'>per day</span>
            </div>

            <div className='flex items-center justify-between py-7 px-14'>
                <li className='flex text-[#6a6a6a] items-center gap-6'><LiaCarSideSolid size={22}/> <span className='text-[15px] sm:text-[18px]'>Camry</span></li>
                <li className='flex text-[#6a6a6a] items-center gap-6'><span className='text-[15px] sm:text-[18px]'>4/5</span><LiaCarSideSolid size={22}/></li>
            </div>
            <div className='flex items-center justify-between pb-10 px-14'>
                <li className='flex text-[#6a6a6a] items-center gap-6'><LiaCarSideSolid size={22}/> <span className='text-[15px] sm:text-[18px]'>Automatic</span></li>
                <li className='flex text-[#6a6a6a] items-center gap-6'><span className='text-[15px] sm:text-[18px]'>Diesel</span><LiaCarSideSolid size={22}/></li>
            </div>
            <div className='py-10 border-t border-[#9d9c9c] mx-10 '>
                <Link to="/" onClick={() => window.scrollTo(0,0)}><button className='bg-main py-[18px] w-full px-[30px] text-white text-[18px] font-bold shadow-lg hover:bg-red-600 transition-colors duration-300'>Book Ride</button></Link>
            </div>
        </div>

        <div className="card hover:scale-105 duration-300 border-[1px] rounded-sm border-[#ccc] flex flex-col w-[30rem] sm:w-[35rem] bg-[#fff] ">
            <img className='w-full h-[27rem]' src={Bmw} alt="audi" />
            <div className='flex items-center justify-between pt-10 px-14'>
                <h1 className='text-[24px] font-bold'>BMW 320</h1>
                <span className='text-[24px] font-extrabold'>$35</span>
            </div>
            <div className='flex items-center justify-between py-2 px-14'>
                <li className='flex text-[#6a6a6a]'><AiOutlineStar size={18}/><AiOutlineStar size={18}/><AiOutlineStar size={18}/><AiOutlineStar size={18}/><AiOutlineStar size={18}/></li>
                <span className='text-[16px] text-[#6a6a6a]'>per day</span>
            </div>

            <div className='flex items-center justify-between py-7 px-14'>
                <li className='flex text-[#6a6a6a] items-center gap-6'><LiaCarSideSolid size={22}/> <span className='text-[15px] sm:text-[18px]'>ModernLine</span></li>
                <li className='flex text-[#6a6a6a] items-center gap-6'><span className='text-[15px] sm:text-[18px]'>4/5</span><LiaCarSideSolid size={22}/></li>
            </div>
            <div className='flex items-center justify-between pb-10 px-14'>
                <li className='flex text-[#6a6a6a] items-center gap-6'><LiaCarSideSolid size={22}/> <span className='text-[15px] sm:text-[18px]'>Automatic</span></li>
                <li className='flex text-[#6a6a6a] items-center gap-6'><span className='text-[15px] sm:text-[18px]'>Diesel</span><LiaCarSideSolid size={22}/></li>
            </div>
            <div className='py-10 border-t border-[#9d9c9c] mx-10 '>
                <Link to="/" onClick={() => window.scrollTo(0,0)}><button className='bg-main py-[18px] w-full px-[30px] text-white text-[18px] font-bold shadow-lg hover:bg-red-600 transition-colors duration-300'>Book Ride</button></Link>
            </div>
        </div>

        <div className="card hover:scale-105 duration-300 border-[1px] rounded-sm border-[#ccc] flex flex-col w-[30rem] sm:w-[35rem] bg-[#fff] ">
            <img className='w-full h-[27rem]' src={Benz} alt="audi" />
            <div className='flex items-center justify-between pt-10 px-14'>
                <h1 className='text-[24px] font-bold'>Mercedes</h1>
                <span className='text-[24px] font-extrabold'>$50</span>
            </div>
            <div className='flex items-center justify-between py-2 px-14'>
                <li className='flex text-[#6a6a6a]'><AiOutlineStar size={18}/><AiOutlineStar size={18}/><AiOutlineStar size={18}/><AiOutlineStar size={18}/><AiOutlineStar size={18}/></li>
                <span className='text-[16px] text-[#6a6a6a]'>per day</span>
            </div>

            <div className='flex items-center justify-between py-7 px-14'>
                <li className='flex text-[#6a6a6a] items-center gap-6'><LiaCarSideSolid size={22}/> <span className='text-[15px] sm:text-[18px]'>Benz GLK</span></li>
                <li className='flex text-[#6a6a6a] items-center gap-6'><span className='text-[15px] sm:text-[18px]'>4/5</span><LiaCarSideSolid size={22}/></li>
            </div>
            <div className='flex items-center justify-between pb-10 px-14'>
                <li className='flex text-[#6a6a6a] items-center gap-6'><LiaCarSideSolid size={22}/> <span className='text-[15px] sm:text-[18px]'>Manual</span></li>
                <li className='flex text-[#6a6a6a] items-center gap-6'><span className='text-[15px] sm:text-[18px]'>Gasoline</span><LiaCarSideSolid size={22}/></li>
            </div>
            <div className='py-10 border-t border-[#9d9c9c] mx-10 '>
                <Link to="/" onClick={() => window.scrollTo(0,0)}><button className='bg-main py-[18px] w-full px-[30px] text-white text-[18px] font-bold shadow-lg hover:bg-red-600 transition-colors duration-300'>Book Ride</button></Link>
            </div>
        </div>

        <div className="card hover:scale-105 duration-300 border-[1px] rounded-sm border-[#ccc] flex flex-col w-[30rem] sm:w-[35rem] bg-[#fff] ">
            <img className='w-full h-[27rem]' src={Passat} alt="audi" />
            <div className='flex items-center justify-between pt-10 px-14'>
                <h1 className='text-[24px] font-bold'>VW Passat</h1>
                <span className='text-[24px] font-extrabold'>$25</span>
            </div>
            <div className='flex items-center justify-between py-2 px-14'>
                <li className='flex text-[#6a6a6a]'><AiOutlineStar size={18}/><AiOutlineStar size={18}/><AiOutlineStar size={18}/><AiOutlineStar size={18}/><AiOutlineStar size={18}/></li>
                <span className='text-[16px] text-[#6a6a6a]'>per day</span>
            </div>

            <div className='flex items-center justify-between py-7 px-14'>
                <li className='flex text-[#6a6a6a] items-center gap-6'><LiaCarSideSolid size={22}/> <span className='text-[15px] sm:text-[18px]'>CC</span></li>
                <li className='flex text-[#6a6a6a] items-center gap-6'><span className='text-[15px] sm:text-[18px]'>4/5</span><LiaCarSideSolid size={22}/></li>
            </div>
            <div className='flex items-center justify-between pb-10 px-14'>
                <li className='flex text-[#6a6a6a] items-center gap-6'><LiaCarSideSolid size={22}/> <span className='text-[15px] sm:text-[18px]'>Manual</span></li>
                <li className='flex text-[#6a6a6a] items-center gap-6'><span className='text-[15px] sm:text-[18px]'>Gasoline</span><LiaCarSideSolid size={22}/></li>
            </div>
            <div className='py-10 border-t border-[#9d9c9c] mx-10 '>
                <Link to="/" onClick={() => window.scrollTo(0,0)}><button className='bg-main py-[18px] w-full px-[30px] text-white text-[18px] font-bold shadow-lg hover:bg-red-600 transition-colors duration-300'>Book Ride</button></Link>
            </div>
        </div>

        </div>
      </div>
    </section>
  )
}

export default Vehicle
