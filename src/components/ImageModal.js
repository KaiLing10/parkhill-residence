import React from 'react'
// import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function ImageModal({handleImageClick, selectedImage}) {
  return (
    <div>
           <motion.div
                    className='fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-black bg-opacity-80'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <div className="relative z-20 font-title">
                        {/* image */}
                        <motion.img
                            src={selectedImage}
                            alt='Image'
                            className='max-h-screen '

                            initial={{ scale: 0.5 }}
                            animate={{ scale: 1 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        />
                        {/* close button */}
                        <div className="absolute top-0 right-0 text-xl md:text-3xl text-white bg-black/50 hover:bg-red-800/80 cursor-pointer px-4 py-2"
                            onClick={handleImageClick}> X </div>

                    </div>
                </motion.div>
        
    </div>
  )
}
