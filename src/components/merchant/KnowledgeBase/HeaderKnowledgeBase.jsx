import React from 'react'
import brain from '../../../assets/icons/brainheader.svg'
function HeaderKnowledgeBase() {
  return (
    <div>

<div className=' flex items-center gap-3'>

<img src={brain} className=' w-[35px] rounded-lg  bg-[#E5E5FF] p-2'/>

<div>

<h3 className=' font-bold text-2xl  text-dark'>knowledge base </h3>
<p className=' text-gray-500 text-sm  font-light'>This Document to Learn Ai assistant model</p>
</div>

</div>

    </div>
  )
}

export default HeaderKnowledgeBase