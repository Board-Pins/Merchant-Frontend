import React from 'react'
import Modal from './Modal';
import { PiWarningCircle } from 'react-icons/pi';

function ModalDelete({OpenModalDelete,title,handleCloseModalDelete}) {
  return (
 <Modal isOpen={OpenModalDelete} smallModal={true} className={"lg:w-[35%] mx-3"} >

<div className='  bg-[#FEE4E2] rounded-full text-3xl flex h-[40px] items-center justify-center w-[40px]'><span className='  text-[#D92D20] rounded-full'><PiWarningCircle /></span>
</div>

<h1 className=' py-3 font-bold text-[#101828] text-xl'>Delete {title}</h1>
<p className='text-sm text-[667085]'>Are you sure you want to delete this {title}? This action cannot be undone.</p>

<div className=' mt-12 flex items-center gap-2'>

<button className=' rounded-xl min-w-[100px] min-h-[40px] bg-[#D92D20]  text-white'>Delete</button>
<button className=' rounded-xl min-w-[100px] min-h-[40px] border border-[#D0D5DD]  text-[#344054]'onClick={()=>handleCloseModalDelete()}>Cancel</button>

</div>
 </Modal>
  )
}

export default ModalDelete