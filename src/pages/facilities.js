import React from 'react'

//components
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

// asstes
import map from '../assets/facilities/Facilities.jpg'
import gym from '../assets/facilities/gym.jpg'

const facilitiesStyle='w-[30vw] object-cover mx-5 my-16 border-4 border-white drop-shadow-black'
const Facilities = () => {
  return (
    <div className=' bg-gray-100 font-title'>
      <Navbar />
      {/* map */}
      <div className='pt-28 w-screen flex justify-center'>

        <img src={map} alt='facilities map' className='object-cover w-3/5 ' />
      </div>

      <button className='mt-20 ml-20 font-content text-xl border-2 bg-white border-black rounded-xl py-2 px-6 shadow-md transition ease-in-out delay-150 hover:bg-black/10 hover:shadow-lg hover:-translate-y-1 hover:scale-110'>
        Switch Facilities
      </button>

      {/* content */}
      <div className='relative'>

        {/* gradient */}
        <div className='absolute z-20 top-0 left-0 w-full h-28 bg-gradient-to-b from-gray-100/100 to-gray-100/0'></div>

        {/* overlay */}
        <div className="absolute z-10 top-0 left-0 bg-black/40 w-full h-screen"></div>

        <img src={gym} alt='gym' className=' h-screen w-screen object-cover' />
        <div className='absolute top-0 z-40'>
          <p className='text-8xl mt-20 md:pl-20 text-white '>Gymnasium</p>
          <div className='bg-white/30 mt-10 h-[50vh] w-screen flex'>
            <img src={gym}  alt='facilities' className={facilitiesStyle}/>
            <img src={gym}  alt='facilities' className={facilitiesStyle}/>
            <img src={gym}  alt='facilities' className={facilitiesStyle}/>
          </div>
          <div className='flex justify-center'> 
          <button className='text-white font-content text-xl md:text-xl border-2 my-5 bg-black/40 border-white rounded-xl py-2 px-4 transition ease-in-out delay-150 hover:bg-white/10 hover:shadow-lg hover:-translate-y-1 hover:scale-110'>
          360 View
        </button>
        </div>
        </div>

        

      </div>
    <Footer />
    </div>
  )
}

export default Facilities