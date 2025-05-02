import React from 'react'
import HeaderKnowledgeBase from '../../components/provider/KnowledgeBase/HeaderKnowledgeBase'
import CardsKnowledgeBase from '../../components/provider/KnowledgeBase/CardsKnowledgeBase'

function KnowledgeBase() {
  return (
    <div className='bg-white rounded-xl h-full p-5 font-poppins'>
<HeaderKnowledgeBase/>

<CardsKnowledgeBase/>

    </div>
  )
}

export default KnowledgeBase