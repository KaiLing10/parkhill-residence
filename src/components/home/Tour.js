import React from 'react';
import Typed from 'react-typed';
import { Link } from "react-router-dom";


export default function Tour() {
  return (
    <div className='bg-gray-800 h-1/3 p-10 text-white text-center'>
      <div className='text-xl md:text-4xl text-center'>
        <p className=''>Ultimate embodiment</p>
        <div className='flex justify-center'>
          <p className='pr-2'>of </p>
          <Typed 
            className='text-yellow-400'
            strings={['convenience', ' luxurious living']}
            typeSpeed={50} backSpeed={40} loop />
        </div>
      </div>
      <Link className=' border-2 border-yellow-300 hover:bg-yellow-200 rounded-md mt-8 py-2 px-4' to="/vrtour">Virtual Tour</Link>

        
    </div>

  )
}

