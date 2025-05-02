import React from 'react'
import { MdPlayArrow } from "react-icons/md";
function DeatailsUpgrade() {
  return (
    <div>
    <div>
    <h2 className=' pt-6 pb-1 flex gap-2 items-center'>
    
    <MdPlayArrow color='#E8E8E8' size={22}/>
    <span className=' font-[700] text-[#292D32] text-lg'>Free Trial on All Paid Plans</span>

    </h2>
    <p className=' ms-7'>Experience the platform's power before committing.</p>    
    
    
    </div>

    <div>
    <h2 className=' pt-6 pb-1 flex gap-2 items-center'>
    
    <MdPlayArrow color='#E8E8E8' size={22}/>
    <span className=' font-[700] text-[#292D32] text-lg'>Flexible Billing</span>

    </h2>
    <p className=' ms-7'>Choose monthly or annual plans (annual plans get exclusive discounts!).</p>    
    
    
    </div>
    </div>
  )
}

export default DeatailsUpgrade