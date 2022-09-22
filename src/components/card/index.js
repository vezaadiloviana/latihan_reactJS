import React from 'react'
import { Link } from 'react-router-dom'

const Card =({cardTitle, to}) => {
  return (
    <div>
        <div className='w-96 h-60 border bg-blue-200 rounded-md '>
            <h1 className='text-center py-5 text-xl font-semibold'>{cardTitle}</h1>
            <div className='py-6'>
                <Link to={to}>show detail</Link>
            </div>
        </div>
        
    </div>
    

  )
}

export default Card