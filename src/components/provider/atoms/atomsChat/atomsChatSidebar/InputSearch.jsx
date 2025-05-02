import React from 'react'
import search_icon from '../../../../../assets/icons/Frame 26872.png'
function InputSearch() {
  return (
    <div>

<div className=' w-full bg-[#F5F6FA] rounded-xl h-[45px]  flex items-center  p-4'>
 <img src={search_icon} alt='search chat' className=' w-[20px] opacity-50'/>
<input stype=' text' className=' outline-0 px-3 h-100 w-full bg-transparent' placeholder=' Search for chat'/>
</div>

    </div>
  )
}

export default InputSearch