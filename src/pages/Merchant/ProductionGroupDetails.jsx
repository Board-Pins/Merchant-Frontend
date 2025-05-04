
import React from 'react'

import HeaderProductionGroupDetails from '../../components/merchant/ProductionGroupDetails/HeaderProductionGroupDetails'
import SummaryProductionGroup from '../../components/merchant/ProductionGroupDetails/SummaryProductionGroup'
import AppliedMerchants from '../../components/merchant/ProductionGroupDetails/Applied Merchants'

function ProductionGroupDetails() {
  return (
    <div className=' p-6 rounded-xl bg-white'>

      <HeaderProductionGroupDetails />

      <SummaryProductionGroup />

      <AppliedMerchants />

    </div>
  )
}

export default ProductionGroupDetails