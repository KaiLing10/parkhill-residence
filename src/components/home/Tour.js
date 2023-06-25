import React from 'react';
import Typed from 'react-typed';


export default function Tour() {
  return (
    <div className='bg-gray-800 h-1/4 p-10 text-white'>
      <div className='text-xl md:text-4xl text-center'>
        <p className=''>Ultimate embodiment</p>
        <div className='flex justify-center'>
          <p className='pr-2'>of </p>
          <Typed 
            className='text-yellow-400'
            strings={[' convenience', ' luxurious living']}
            typeSpeed={50} backSpeed={40} loop />
        </div>
      </div>
      <button className=' border-2 border-yellow-300 rounded-md py-2 px-4'>Virtual Tour</button>
    </div>

  )
}

