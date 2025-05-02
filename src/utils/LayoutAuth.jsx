import React from 'react'
import HeaderAuth from '../components/auth/HeaderAuth'
import { Outlet } from 'react-router-dom'

function LayoutAuth() {
  return (
    <div>


<HeaderAuth />
<Outlet />
    </div>
  )
}

export default LayoutAuth