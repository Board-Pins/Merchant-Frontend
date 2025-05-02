import React from 'react'
import HeaderUpgrade from '../../components/provider/Upgrage/HeaderUpgrade'
import DeatailsUpgrade from '../../components/provider/Upgrage/DeatailsUpgrade'
import PricePlan from '../../components/provider/Upgrage/PricePlan'

function Upgrade() {
  return (
    <div className='   bg-white rounded-lg p-6'>
    
    <HeaderUpgrade/>
<DeatailsUpgrade/>

<PricePlan/>
    </div>
  )
}

export default Upgrade