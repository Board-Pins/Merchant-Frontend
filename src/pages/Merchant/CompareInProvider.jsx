import React from 'react'

import CommonComparison from '../../components/provider/CompareInProvider/Compare/CommonComparison'
import SearchCompare from '../../components/provider/CompareInProvider/Compare/SearchCompare'

function CompareInProvider() {
  return (
    <div className='p-6 bg-white rounded-2xl'>
<SearchCompare/>
<CommonComparison  />
  
    </div>
  )
}

export default CompareInProvider