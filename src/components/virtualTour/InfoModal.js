import React from 'react'
import { motion } from 'framer-motion'


export default function InfoModal({ handleInfoModal, title, content, facilitiesImage }) {

  return (

    // <div className="absolute h-screen w-screen overflow-y-scroll">
    <div className='flex h-full justify-center items-center'>
      <motion.div
        className='relative bg-black/80 w-4/5 md:w-1/2 z-30 h-2/3 p-10 text-white font-content '
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}>
        <div className='absolute top-0 right-0 text-2xl bg-red-400 hover:bg-red-800/80 cursor-pointer px-4 py-2' onClick={handleInfoModal}>X</div>

        <p className='text-2xl md:text-3xl font-semibold text-center'> {title}</p>
        <p className='text-md md:text-lg my-5'>{content}</p>
        {/* <p className='text-lg my-5'>Enjoy a competitive game or engage in friendly matches with fellow residents!</p> */}

        <div className='md:h-[40vh]'>
          <img src={facilitiesImage} alt='facilities' className='drop-shadow-black w-full h-full object-cover z-30' />
        </div>
      </motion.div>
    </div>
    // </div>
  )
}
