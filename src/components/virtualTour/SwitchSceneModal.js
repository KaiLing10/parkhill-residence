import React from 'react'
import { motion } from 'framer-motion'

// assets
import pool from '../../assets/facilities/pool4.jpg'
import river from '../../assets/facilities/readingPavilion1.jpg'
import clubhouse from '../../assets/facilities/gameRoom2.jpg'
import center from '../../assets/facilities/reflexologyPath1.jpg'

const buttonStyle = 'border-2 mx-2 border-black rounded-xl mt-5 pt-2 pb-1 px-2 shadow-md hover:bg-black/10'
const imageStyle ='mb-1 h-20 w-full object-cover '

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
                <div className='grid grid-cols-2 text-lg text-black my-5 font-content text-center cursor-pointer'>

                    <div onClick={() => navigateToScene('Pool0')} className={buttonStyle}>
                        <img src={pool} alt='pool_image' className={imageStyle} />
                        <p>Pool Area</p>
                    </div>
                    <div onClick={() => navigateToScene('Center4')} className={buttonStyle}>
                    <img src={river} alt='pool_image' className={imageStyle} />
                        River View Deck
                    </div>
                    <div onClick={() => navigateToScene('ClubHouseHallway1')} className={buttonStyle} >
                    <img src={clubhouse} alt='pool_image' className={imageStyle} />
                        Club House
                    </div>
                    <div onClick={() => navigateToScene('Center3')} className={buttonStyle} >
                    <img src={center} alt='pool_image' className={imageStyle} />
                        Level 7 Center
                    </div>
                </div>

            </motion.div>
        </div>

    )
}
