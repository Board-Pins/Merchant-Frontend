import React from 'react'
import  Filter  from '../../../assets/icons/vertical-slider-square--adjustment-adjust-controls-fader-vertical-settings-slider-square.svg';
import list from '../../../assets/icons/listleft.svg'
function HeaderAppliedMerchants() {
  return (
    <div className=' flex lg:flex-row flex-col items-center gap-2 m-4 pt-5 font-poppins'>
<div className=' flex-grow'>

<h1 className=' font-bold text-dark text-2xl'>Applied Merchants</h1>

</div>


<div className=' flex gap-5 justify-end w-full lg:w-auto lg:mt-auto mt-6'>
      <button
 className=' flex items-center gap-2'
    >
    <img src={Filter}/>
    Filter
    </button>
    <button
  className=' flex items-center gap-2'
    >
    <img src={list}/>
    Sort
    </button>
      
      </div>

    </div>
  )
}

export default HeaderAppliedMerchants