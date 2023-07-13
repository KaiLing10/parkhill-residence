import React from 'react'
import { Link } from "react-router-dom";

import { BiBed, BiBath } from "react-icons/bi";

import unit1a from '../assets/unit/unit1.jpg'

// custom style
const unitImageStyle = 'mx-1 object-cover'
const detailTitleStyle = 'text-sm text-gray-800'
const detailStyle = ' mb-3'


const unitInfo1 = () => {
  return (
    <div className='md:p-20 font-title text-xl bg-gray-100 '>
      <div className='flex bg-white drop-shadow-md'>
        <div className={unitImageStyle}>
          <img src={unit1a} alt='unit_image' /></div>
        <div className={unitImageStyle}>
          <img src={unit1a} alt='unit_image' /></div>
        <div className={unitImageStyle}>
          <img src={unit1a} alt='unit_image' /></div>
      </div>
      <div className=' bg-white p-10 drop-shadow-md'>


        {/* main info */}
        <div className='flex justify-between'>
          <div >
            <p className='text-4xl text-yellow-600 '>RM 2,300/mo</p>
            <div className='flex '>
              <p className='text-3xl w-20 flex justify-around items-center '>3 <BiBed /> 2 <BiBath /></p>
              <p className='text-3xl pl-10'> 1100 sqft</p>
            </div>
          </div>
<div className=''>
          <Link to="/vrtour">
            <button className='mr-10 font-content text-xl border-2 bg-yellow-500/40 drop-shadow-md border-black rounded-xl mt-5 py-2 px-6 shadow-md transition ease-in-out delay-150 hover:bg-black/10 hover:shadow-lg hover:-translate-y-1 hover:scale-110'>
              room tour
            </button>
          </Link>
          
            <button className='mr-10 font-content text-xl border-2 bg-gray-200 drop-shadow-md border-black rounded-xl mt-5 py-2 px-6 shadow-md transition ease-in-out delay-150 hover:bg-black/10 hover:shadow-lg hover:-translate-y-1 hover:scale-110'>
              book now
            </button>
            </div>
        </div>

        <hr className='my-5' />
        {/* Details */}
        <h3 className='text-3xl mb-2 text-gray-800 font-medium'>Details</h3>
        <div className='grid grid-cols-2'>
          <div className=''>
            <p className={detailTitleStyle}>Number of Room</p>
            <p className={detailStyle}>3 room 2 bathroom</p>
          </div>
          <div>
            <p className={detailTitleStyle}>Floor Size</p>
            <p className={detailStyle}>1100 sqft</p>
          </div>
          <div>
            <p className={detailTitleStyle}>Furnshing</p>
            <p className={detailStyle}>Fully Furnished</p>
          </div>
          <div>
            <p className={detailTitleStyle}>Carpark Included</p>
            <p className={detailStyle}>2</p>
          </div>
          <div>
            <p className={detailTitleStyle}>Block</p>
            <p className={detailStyle}>D</p>
          </div>
          <div>
            <p className={detailTitleStyle}>Floor</p>
            <p className={detailStyle}>12</p>
          </div>
        </div>

        {/* Features */}

        <h3 className='text-3xl mb-2 mt-5'>Key Features</h3>
        <p> - Greenery View </p>
        <p> - Air-conditioning</p>
        <p> - Fridge </p>
        <p> - Kitchen Cabinet </p>
        <p> - Washing Machine </p>
        <p> - Water Heater </p>

      </div>
    </div >
  )
}

export default unitInfo1