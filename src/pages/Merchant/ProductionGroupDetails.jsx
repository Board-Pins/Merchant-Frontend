
import React from 'react'

import HeaderProductionGroupDetails from '../../components/provider/ProductionGroupDetails/HeaderProductionGroupDetails'
import SummaryProductionGroup from '../../components/provider/ProductionGroupDetails/SummaryProductionGroup'
import AppliedMerchants from '../../components/provider/ProductionGroupDetails/Applied Merchants'

function ProductionGroupDetails() {
  return (
    <div className=' p-6 rounded-xl bg-white'>

<HeaderProductionGroupDetails/>

<SummaryProductionGroup/>

<AppliedMerchants/>

    </div>
  )
}

export default ProductionGroupDetails