
import React from 'react'
import { RiArrowRightLine } from 'react-icons/ri'
import Merchant from '../../../assets/images/Landing/image 79.png'
import task from '../../../assets/images/Landing/image 78.png'
import Dashboard from '../../../assets/images/Landing/Group 1000001625.png'
function Section4Home() {
  return (
    <div className=' bg-[#181B34] md:px-24  px-12 font-poppins'>
    
    <div className=' grid lg:grid-cols-3 grid-cols-1 gap-12 py-24'>
    
    <div className=' font-[600] text-3xl  text-white'>
    <h3  className=' leading-[1.5] lg:mx-2'>Your work, your way. The future of your Business growth is here!</h3>
    
    </div>
    
    <div className=' lg:col-span-2 text-2xl lg:mx-24 font-[300] text-white'>
    
<span className=' font-light font-thin '>    Boost your Business alignment, efficiency, and productivity through Board Pins.</span>
   

<button className=' shadow-gray flex  border-[1px] border-[#FFFFFF] rounded-3xl px-4 py-2 items-center text-white text-sm gap-2 my-5'>
Get Started
<RiArrowRightLine/>

</button>




</div>
    
    </div>
    
    <div className=' shadow-gray shadow-lg grid lg:grid-cols-3 grid-cols-1 gap-2  pb-32'>
    
    <div className=' h-100 flex flex-col   gap-3 col-span-1'>
    <img src={Merchant} className=' mb-3 flex-grow  rounded-xl w-full'/>
    <img src={task} className=' w-full  rounded-xl'/>
    
    
    </div>
    
    <div className=' col-span-2'>
    
    <img src={Dashboard} className=' w-full '/>
    </div>
    
    
    
    </div>
    </div>
  )
}

export default Section4Home