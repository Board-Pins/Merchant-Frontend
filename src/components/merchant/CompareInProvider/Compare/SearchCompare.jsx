import React from 'react'
import SearchInput from './SearchInput'

function SearchCompare() {
  return (
    <div className=' bg-[#F8F8F8] py-12 flex justify-center items-center rounded-lg'>
<div className=' text-center py-4'>
    <h1 className=' text-3xl font-bold text-dark mb-2'>Welcome to Board Compare!</h1>
    <p>Now  you can compare  between every service providers to find the best for your business.</p>

  <SearchInput/>

</div>



    </div>
  )
}

export default SearchCompare