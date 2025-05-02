import React from 'react'
import { Link } from 'react-router-dom'

function HeaderBiddingProjectDetails() {
  return (
    <div className=' pb-5'>
        
<h1 className=' font-bold text-2xl pb-4 pt-2 text-dark'>Web Development Project</h1>
<div className=' flex items-center justify-start gap-4  text-sm'>
<Link to="/myboard" className='hover:text-primary text-gray-400 gap-2 flex '><span className='hover:underline'>Home</span>/</Link>
<Link to="/bidding-project" className='hover:text-primary text-gray-400 gap-2 flex '><span className=' hover:underline'>Bidding</span> /</Link>
<Link to='/bidding-project/1' className='hover:text-primary text-gray-400 gap-2 flex '> <span className=' hover:underline'>Discover Bidding Projects </span>  /</Link>
</div>


    </div>
  )
}

export default HeaderBiddingProjectDetails