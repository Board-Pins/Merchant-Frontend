import React from 'react'
import CardsPayments from '../../components/merchant/Setting/SettingBilling/CardsPayments'
import RecentPayment from '../../components/merchant/Setting/SettingBilling/RecentPayment'
import HeaderSetting from '../../components/merchant/Setting/HeaderSetting'

function SettingBilling() {
  return (
    <div className='bg-white  rounded-3xl  p-6'>
      <HeaderSetting subtitle={"Billing"} />
      <div className=' grid lg:grid-cols-9 md:grid-cols-2 grid-cols-1  gap-8  mt-12  lg:px-24'>
        <div className=' lg:col-span-4'><CardsPayments /></div>
        <div className=' lg:col-span-5'><RecentPayment /></div>

      </div>

    </div>
  )
}

export default SettingBilling