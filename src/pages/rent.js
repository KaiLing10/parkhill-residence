import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import unit1 from '../assets/unit/unit1.jpg'
import unit2 from '../assets/unit/unit2.jpg'


import UnitOption from '../components/rent/UnitOption'


const Rent = () => {
  return (
    <div className='bg-gray-100 text-black font-title'>
      <Navbar />
      <div className=''>
        <h2 className='pt-28 pb-10 pl-10 md:pl-20 text-2xl md:text-3xl'> Available Unit for Rent</h2>
        <div className='pl-10 grid grid-cols-3'>
          <UnitOption unitInfo={'/unitInfo1'} unitImage={unit1} noOfRoom={3} noOfBath={2} rental={'2,100'} />
          <UnitOption unitInfo={'/unitInfo2'} unitImage={unit2} noOfRoom={4} noOfBath={2} rental={'2,800'} />
        </div>
        <div>
          <div className='pt-28 pl-10 md:pl-20'>
            <h2 className=' text-2xl md:text-3xl'> Can't find interested unit/room? </h2>
            <p className='text-xl'> Leave your prefered unit type here</p>
            <div className='bg-white w-[60vw] h-20'>

            </div></div>
        </div>
      </div>
      <Footer />

    </div>
  )
}

export default Rent