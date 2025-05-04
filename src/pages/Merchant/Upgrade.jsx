import React from 'react'
import HeaderUpgrade from '../../components/merchant/Upgrage/HeaderUpgrade'
import DeatailsUpgrade from '../../components/merchant/Upgrage/DeatailsUpgrade'
import PricePlan from '../../components/merchant/Upgrage/PricePlan'

function Upgrade() {
  return (
    <div className='   bg-white rounded-lg p-6'>

      <HeaderUpgrade />
      <DeatailsUpgrade />

      <PricePlan />
    </div>
  )
}

export default Upgrade