import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/landing/Navbars'
import Footers from '../components/landing/Footer'

function LayoutLanding() {
  return (
    <div className=' bg-[#F5F6FA] min-h-[100vh]'>
    <div>
    
    <Navbar/>
    
    </div>
    <div>  <Outlet /></div>


    <Footers/>
    </div>
  )
}

export default LayoutLanding