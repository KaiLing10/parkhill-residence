import React from 'react'
import CondoImage from '../../assets/condo.jpeg'

export default function Hero() {
  return (
    <div className='relative h-screen bg-black'>
      <div className="absolute inset-0 flex justify-center items-center z-20">
        <div className='flex flex-col text-white'>
          <h1 className=" text-xl md:text-3xl lg:text-4xl text-left">
            Welcome to
          </h1>
          <h1 className="text-4xl md:text-7xl lg:text-8xl text-left">
            Parkhill Residence
          </h1>
          <p className='text-center'>- the height of convenient living-</p>
        </div>
      </div>

      <div >
        <div className="absolute z-10 top-0 left-0 bg-black/30 w-full h-screen"></div>
        <img alt="background" src={CondoImage} className='w-full h-screen object-cover' />
      </div>

    </div>
  )
}
