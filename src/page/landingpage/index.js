import React from 'react'
import Col1 from '../../components/col1'
import Col2 from '../../components/col2'
import Col3 from '../../components/col3'
import Col4 from '../../components/col4'
import Col5 from '../../components/col5'
import Footer from '../../components/footer'
import Navbar from '../../components/navbar'
import SideLeft from '../../components/sideLeft'
import SideRight from '../../components/sideRight'

const LandingPage =() => {
  return (
    <div>
        <Navbar navtitle={'Navbar Title'} to={'/home'}/>
        <div className='flex flex-col md:grid grid-cols-12'>
            <div className='col-span-4'>
                <SideLeft sideLeftTitle={'bagian kiri'}/>
            </div>
            <div className='col-span-8'>
                <SideRight sideRightTitle={'side kanan'} />
            </div>
        </div>
        <div className='grid grid-cols-12'>
            <div className='col-span-4'>
                <Col1 titleCol1={'judul col 1'}/>
            </div>
            <div className='col-span-4'>
                <Col2 titleCol2={'judul col 2'}/>
            </div>
            <div className='col-span-4'>
                <Col3 titleCol3={'judul col 3'}/>
            </div>
        </div>
        <div className='flex flex-col md:grid grid-cols-12'>
            <div className='col-span-8'>
                <Col4 titleCol4={'jdul col 4'} />
            </div>
            <div className='col-span-4'>
                <Col5 titleCol5={'jdul col 5'} />
            </div>
        </div>
        <Footer footerTitle={'footer bro'} />
    </div>
  )
}

export default LandingPage