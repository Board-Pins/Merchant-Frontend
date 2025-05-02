import React from 'react'
import { RiArrowRightLine } from 'react-icons/ri'

function Section7Home() {
  return (
    <div className=' bg-[#181B34] flex justify-center items-center '>
    
    <div className='text-white text-center my-12 '>
    
    <p  className='my-3 text-2xl lg:mx-56 leading-[1.8]  '>Experience the simplicity and convenience of finding verified service providers for your 
    e-commerce business with <span className=' font-bold'>Board Pins</span>. </p>
    <p className=' text-sm'>No credit card needed   ✦   Unlimited time on Free plan</p>

    <div className='flex  justify-center mt-8'>
    <button className="rounded-3xl bg-[#6161FF] text-[#FFFFFF] py-2 px-7 text-md block flex items-center gap-2">Get Started   <RiArrowRightLine/></button>
  </div>
    </div>
    
    </div>
  )
}

export default Section7Home