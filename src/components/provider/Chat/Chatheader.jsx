import React from 'react'
import chat from '../../../assets/icons/chatheader.svg'
function Chatheader() {
  return (
    <div><div className=' flex items-center gap-2'>
    <img src={chat} className='  bg-[#E5E5FF] rounded-lg p-2'/>
    <h1 className=' text-dark font-bold text-2xl'>Chat</h1>
    
    
    </div></div>
  )
}

export default Chatheader