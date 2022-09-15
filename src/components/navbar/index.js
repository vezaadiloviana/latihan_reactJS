import React from 'react'
import { Link } from 'react-router-dom'

const Navbar =({navtitle, to}) => {
  return (
    <div className='py-3 text-center text-2xl font-semibold bg-blue-600'>
      <Link to={to}>{navtitle}</Link>
        
    </div>
  )
}

export default Navbar