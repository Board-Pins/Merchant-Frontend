import React from 'react'

import CommonComparison from '../../components/merchant/CompareInProvider/Compare/CommonComparison'
import SearchCompare from '../../components/merchant/CompareInProvider/Compare/SearchCompare'

function CompareInProvider() {
  return (
    <div className='p-6 bg-white rounded-2xl'>
      <SearchCompare />
      <CommonComparison />

    </div>
  )
}

export default CompareInProvider