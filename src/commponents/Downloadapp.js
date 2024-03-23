import React from 'react'
import Appimg from '../assets/appstore.svg'
import Google from '../assets/googleapp.svg'


const Downloadapp = () => {


    return (
    <div className='download-section w-full '>

        <div className="con max-w-[133rem] sm:px-[2.5rem] mx-auto">
            <div className="text flex flex-col gap-[2rem] max-w-[55rem] text-center md:text-left">
                <h1 className='text-[25px] sm:text-[42px] font-[800] md:w-[60rem] pb-5'>Download our app to get most out of it</h1>
                <p className='text-[16px] text-[#706f7b] sm:w-[50rem]'>Thrown shy denote ten ladies though ask saw. Or by to he going think order event music. Incommode so intention defective at convinced. Led income months itself and houses you.</p>
                <div className="svgs flex flex-wrap items-center gap-10 justify-center md:justify-start sm:gap-14 mt-6 ml-6 md:ml-0">
                    <img className='cursor-pointer' src={Appimg} alt="app" />
                    <img className='cursor-pointer' src={Google} alt="google" />
                </div>
            </div>
        </div>
    </div>
)
}

export default Downloadapp
