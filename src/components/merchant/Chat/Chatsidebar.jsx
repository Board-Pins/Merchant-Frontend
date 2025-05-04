import React from 'react'
import InputSearch from '../atoms/atomsChat/atomsChatSidebar/InputSearch'
import ButtonaddChat from '../atoms/atomsChat/atomsChatSidebar/ButtonaddChat'

function Chatsidebar() {
  return (
    <div className='  h-full  flex flex-col gap-3'>



<InputSearch/>
<hr className=' font-extrabold '/>
<ButtonaddChat/>

    </div>
  )
}

export default Chatsidebar