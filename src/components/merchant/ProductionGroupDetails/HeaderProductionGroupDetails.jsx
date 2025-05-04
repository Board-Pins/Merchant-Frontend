import React from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { MdEdit } from 'react-icons/md'
function HeaderProductionGroupDetails() {
  return (
    <div><header className=' lg:flex p-5'>

    <h1 className=' font-bold text-3xl text-dark flex-grow'>Group Name</h1>
    <div className='flex gap-5 items-center justify-end lg:mt-auto mt-12 '> <button className=' flex items-center gap-1 '><MdEdit />edit</button> <button className=' text-[#FF111199] flex gap-2 items-center'><AiFillDelete />Remove group</button></div>
</header></div>
  )
}

export default HeaderProductionGroupDetails