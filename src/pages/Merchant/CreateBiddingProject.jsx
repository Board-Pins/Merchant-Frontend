import React from 'react'
import FormCreateBiddingProject from '../../components/merchant/CreateBiddingProject/FormCreateBiddingProject'
import HeaderCreateBiddingProject from '../../components/merchant/CreateBiddingProject/HeaderCreateBiddingProject'

function CreateBiddingProject() {
  return (
    <div className='  p-6 bg-white rounded-2xl' >
      <HeaderCreateBiddingProject />
      <FormCreateBiddingProject />


    </div>
  )
}

export default CreateBiddingProject