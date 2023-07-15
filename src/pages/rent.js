import React from 'react'
// components
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import UnitOption from '../components/rent/UnitOption'
import Wishlist from '../components/rent/Wishlist'
// assets
import unit1 from '../assets/unit/unit1.jpg'
import unit2 from '../assets/unit/unit2.jpg'
import bg from '../assets/facilities/pool4.jpg'




const Rent = () => {
  return (
    <div className='bg-gray-100 text-black font-title'>
      <Navbar />

      <h2 className='pt-28 pb-10 pl-10 md:pl-20 text-2xl md:text-3xl'>Units/Rooms for Rent</h2>
      <div className='pl-10 pb-16 grid grid-cols-3'>
        <UnitOption unitInfo={'/unitInfo1'} unitImage={unit1} noOfRoom={3} noOfBath={2} rental={'2,100'} />
        <UnitOption unitInfo={'/unitInfo2'} unitImage={unit2} noOfRoom={4} noOfBath={2} rental={'2,800'} />
      </div>


      <div className='w-screen h-screen relative bg-blue-500'>

        <div className='absolute z-20 top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-100/100 to-gray-100/0'></div>

        <div className='absolute z-10 bottom-0 left-0 w-full h-full bg-white/60'></div>
        <img src={bg} alt='background_image' layout='fill' className='object-cover w-full h-full z-0' />

        <div className='pt-20 pl-10 md:pl-20 z-20 absolute top-0 left-0'>
          <h2 className='font-medium text-2xl md:text-4xl'> Can't find interested unit/room? </h2>
          <p className='text-xl'> Leave your prefered unit type here</p>

          <div className='p-10  m-10 bg-white drop-shadow-md'>
            <Wishlist />
          </div>
        </div>


      </div>


      <Footer />

    </div>
  )
}

export default Rent