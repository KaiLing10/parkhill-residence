import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import UnitOption from '../components/rent/UnitOption';
import Wishlist from '../components/rent/Wishlist';
import unit1 from '../assets/unit/unit1a.jpg';
import unit2 from '../assets/unit/unit2.jpg';
import bg from '../assets/facilities/pool4.jpg';

const Rent = () => {
  return (
    <div className='bg-gray-100 text-black font-title'>
      <Navbar />

      <h2 className='pt-28 pb-10 pl-10 md:pl-20 text-2xl md:text-4xl'>Units/Rooms for Rent</h2>
      <div className='md:pl-10 pb-16 md:grid grid-cols-3'>
        <UnitOption unitInfo={'/unitInfo1'} unitImage={unit1} noOfRoom={3} noOfBath={2} rental={'2,100'} />
        <UnitOption unitInfo={'/unitInfo2'} unitImage={unit2} noOfRoom={4} noOfBath={2} rental={'2,800'} />
      </div>

      <div className='relative'>
        <div className='absolute z-10 bottom-0 left-0 w-full h-full bg-white/60'></div>
        <div className='absolute z-20 top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-100/100 to-gray-100/0'></div>
        <div className='absolute top-0 left-0 w-full h-full z-0'>
          <img src={bg} alt='background_image' layout='fill' className='object-cover w-full h-full' />
        </div>

        <div className='relative z-20 pt-20 px-5 md:pl-20 pb-10 md:pb-20'>
          <h2 className='font-medium text-2xl md:text-4xl'>Can't find your ideal unit/room?</h2>
          <p className='text-sm md:text-xl'>Leave your preferred room type here, and we'll notify you when a matching unit becomes available.</p>

          <div className='p-10 m-5 md:mb-10 md:mt-5 md:w-[70vw] bg-white drop-shadow-md'>
            <Wishlist />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Rent;
