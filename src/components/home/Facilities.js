import React from 'react'
import { Parallax } from 'react-scroll-parallax'
import { Link } from "react-router-dom";


// assets
import imgCenter from '../../assets/facilities/center.jpg'
import imgGame from '../../assets/facilities/game.jpg'
import imgRoof from '../../assets/facilities/roof.jpg'
import imgNight from '../../assets/facilities/night.jpg'
import imgPlayground from '../../assets/facilities/playground.jpg'
import imgGym from '../../assets/facilities/gym.jpg'


const Facilities = () => {

  return (

    <div className='font-title bg-gradient-to-b from-gray-800 via-gray-600 to-gray-200 h-screen p-10 relative'>

      {/* <p className=' absolute w-1/5  bg-green-200 text-center text-xl md:text-2xl'> */}
      <div className='absolute w-2/3 md:w-1/3 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 drop-shadow-black text-center text-white text-3xl md:text-4xl z-10'>
        <p> PARKHILL RESIDENCE </p>
        <p> has just the facility for </p>
        <p> your enjoyment. </p>

        <Link to="/vrtour">
          <button className='mt-5 font-content text-xl border-2 border-white bg-black/20 rounded-xl py-2 px-4 transition ease-in-out delay-150 hover:bg-white/10 hover:shadow-lg hover:-translate-y-1 hover:scale-110'>
            View Facilities
          </button>
        </Link>
      </div>

      <Parallax translateY={[-50, 100]} className=' absolute w-96 right:12 top-12 md:right-36 md:top-28'>
        < img src={imgCenter} alt='facility1' />
      </Parallax>

      <Parallax translateY={[-10, 60]} className='absolute w-60 left-16 bottom-14 md:left-0 md:top-16'>
        < img src={imgGame} alt='facility2' />
      </Parallax>
      <Parallax translateY={[60, -20]} className='absolute w-80 left-16 bottom-14 md:left-32 md:bottom-20'>
        < img src={imgRoof} alt='facility3' />
      </Parallax>
      <Parallax translateY={[50, -150]} className='absolute w-60 right-16 bottom-14 md:right-0 md:bottom-22'>
        < img src={imgNight} alt='facility' />
      </Parallax>
      <Parallax translateY={[0, 100]} className='absolute w-60 right-16 bottom-14 md:right-36 md:bottom-60'>
        < img src={imgPlayground} alt='facility' />
      </Parallax>
      <Parallax translateY={[-30, 30]} className='absolute w-60 md:w-96 left-16 top-50 md:left-80 md:top-38'>
        < img src={imgGym} alt='facility' />
      </Parallax>


    </div>
  )
}

export default Facilities