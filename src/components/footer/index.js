import React from 'react'

const Footer =({footerTitle}) => {
  return (
    <div className='py-3 text-center text-2xl font-semibold bg-red-800'>
        {footerTitle}
    </div>
  )
}

export default Footer