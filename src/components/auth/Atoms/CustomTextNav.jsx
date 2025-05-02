import React from 'react'
import { Link } from 'react-router-dom'

function CustomTextNav({title , linkName , linkNav}) {
  return (
    <>


<div className=' py-2 text-center  flex flex-row gap-1 justify-center '>

<span className=' text-[#00000080]'>{title}</span>
<Link to={linkNav} className='  font-bold text-[#6161FF]   ' >{ linkName}</Link>
</div>
    </>
  )
}

export default CustomTextNav