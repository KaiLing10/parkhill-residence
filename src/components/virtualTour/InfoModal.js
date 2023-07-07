import React from 'react'
import { motion } from 'framer-motion'

// import facilitiesImage from '../../assets/vrtour/level7_clubhouse/info/badminton1.jpeg'

export default function InfoModal({ handleInfoModal }) {
  // const closeModal = () =>{

  // }
  console.log('here')
  return (

    <div className="absolute h-screen w-screen overflow-y-scroll">
      <div className='flex h-full justify-center items-center'>
        <motion.div
          className='relative bg-black/80 w-1/2 z-30 h-2/3 p-10 text-white font-content '
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}>
          <div className='absolute top-0 right-0 text-2xl bg-red-400 hover:bg-red-800/80 cursor-pointer px-4 py-2' onClick={handleInfoModal}>X</div>

          <p className='text-3xl font-semibold text-center'> Badminton Court</p>
          <p className='text-lg my-5'>Enjoy a competitive game or engage in friendly matches with fellow residents!</p>

          {/* <div className='bg-gray-200 h-60'>
            <img src={process.env.PUBLIC_URL + `/loader/loader2.jpeg`}
              alt='condo_image' className='w-1/2 h-2/3 z-30' />
          </div> */}
        </motion.div>
      </div>
    </div>
  )
}
