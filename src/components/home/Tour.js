import React from 'react';
import Typed from 'react-typed';
import { Link } from "react-router-dom";


export default function Tour() {
  return (
    <div className='font-title bg-gray-800 h-80 p-10 text-white drop-shadow-black text-center'>
      <div className='text-xl md:text-4xl mb-10 text-center'>
        <p className=''>Ultimate embodiment</p>
        <div className='flex justify-center'>
          <p className='pr-2'>of </p>
          <Typed
            className='text-yellow-400'
            strings={['convenience', ' luxurious living']}
            typeSpeed={50} backSpeed={40} loop />
        </div>
      </div>


      <Link to="/vrtour">
        <button className='font-content text-xl  border-2 border-yellow-300 rounded-xl py-2 px-4 transition ease-in-out delay-150 hover:bg-white/10 hover:shadow-lg hover:-translate-y-1 hover:scale-110'>
          Virtual Tour
        </button>
      </Link>



    </div>

  )
}

