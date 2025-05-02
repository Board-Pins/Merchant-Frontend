import React from 'react'

function CustomTitle({title ,subTitle}) {
  return (
    <div>
<h1 className='  font-extrabold text-[#333333] text-4xl text-center font-poppins'> {title}</h1>
<h3 className=' text-dark text-3xl py-1 text-center  font-normal '>{subTitle}</h3>

    </div>
  )
}

export default CustomTitle