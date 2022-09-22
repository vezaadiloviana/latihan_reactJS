import React from 'react'

const CardDetail =() => {
  return (
    <div>
        <div className='px-10 py-10 grid grid-cols-12 gap-3'>
            <div className='col-span-3 font-bold'>
                <div className='flex justify-between'> 
                    <p>Title</p>
                    <p>:</p>
                </div>
                <div className='flex justify-between'> 
                    <p>Director</p>
                    <p>:</p>
                </div>
            </div>
            <div className='col-span-9'>
                <h1 className='font-semibold'>Tingkiwinky</h1>
                <h1 className='font-semibold'>Hayao Miyazaki</h1>
            </div>
        </div>
        
    </div>
    

  )
}

export default CardDetail