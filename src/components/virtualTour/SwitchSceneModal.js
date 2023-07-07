import React from 'react'
import { motion } from 'framer-motion'

export default function SwitchSceneModal({ handleSwitchSceneModal, navigateToScene }) {

    return (
        <div className='flex h-full justify-center items-center'>
            <motion.div
                className='relative bg-white/90 w-1/2 z-30 h-2/3 p-10 text-white font-content '
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}>
                <div className='absolute top-0 right-0 text-2xl bg-red-400 hover:bg-red-800/80 cursor-pointer px-4 py-2' onClick={handleSwitchSceneModal}>X</div>
                <p className='text-black text-3xl font-semibold text-center'>Switch Scene</p>
                <div className=' text-lg text-black my-5 font-content w-1/2 text-center cursor-pointer'>

                    <div onClick={() => navigateToScene('Pool0')} className='border-2  border-black rounded-xl mt-5 py-2 px-6 shadow-md hover:bg-black/10' >
                        Swimming Pool
                    </div>
                    <div onClick={() => navigateToScene('Center4')} className='border-2  border-black rounded-xl mt-5 py-2 px-6 shadow-md hover:bg-black/10'>
                        River View Deck
                    </div>
                    <div onClick={() => navigateToScene('ClubHouseHallway1')} className='border-2  border-black rounded-xl mt-5 py-2 px-6 shadow-md hover:bg-black/10'>
                        Club House
                    </div>
                    <div onClick={() => navigateToScene('Center3')} className='border-2  border-black rounded-xl mt-5 py-2 px-6 shadow-md hover:bg-black/10'>
                        Level 7 Center
                    </div>
                </div>

            </motion.div>
        </div>

    )
}
