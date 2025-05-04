import React from 'react'
import arrow from '../../../../../assets/icons/arrowwhite.png'

function InputMessage() {
  return (
    <div>

<div className=' w-full     shadow-custom2 border-[1px] border-gray-200 rounded-xl h-[50px]  flex items-center  p-4'>

<input stype=' text' className=' flex-grow outline-0 px-3 h-100 w-full bg-transparent' placeholder=' Write a message'/>

<div><img src={arrow} alt='search chat' className=' w-[35px]   p-2 bg-blue-500 rounded-full '/></div>
</div>

    </div>
  )
}

export default InputMessage