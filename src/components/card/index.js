import React from 'react'
import { Link } from 'react-router-dom'

const Card =({cardTitle, to}) => {
  return (
    <div>
        <div className='border bg-blue-200 rounded-md '>
            <h1 className='text-center py-5 text-xl font-semibold'>{cardTitle}</h1>
            <div className='flex justify-center'>
                <Link className='my-6 bg-blue-500 text-white py-2 px-4 text-sm rounded-md hover:bg-blue-600' 
                to={to}>show detail</Link>
            </div>
        </div>
        
    </div>
    

  )
}

export default Card