import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion'
import ConceptImage from '../../assets/condo.jpeg'
import { Link } from "react-router-dom";
import arMarker from '../../assets/AR/arQuickTourIcon.png'
import icon from '../../assets/AR/logo.png'

// Animation variants
const onScreenAnim = {
    offscreen: { opacity: 0, y: 20 },
    onscreen: { opacity: 1, y: 0, },
}

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const sentence = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
        },
    },
}

const letter = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
}

// Text Animation Component
const AnimatedText = ({ text }) => (
    <>
        {text.split("").map((char, index) => (
            <motion.span key={char + "_" + index} variants={letter}>
                {char}
            </motion.span>
        ))}
    </>
);

// Main component
const Concept = () => {
    // AR Marker
    const [openARMarker, setOpenARMarker] = useState(false);

    const handleARMarkerModal = () => {
        setOpenARMarker(!openARMarker)
    }


    // Track element visibility
    // https://www.react-spring.dev/docs/utilities/use-in-view#usage
    const [ref, inViewText] = useInView({
        threshold: 1,
    });
    const [ref3, inViewTextMobile] = useInView({
        triggerOnce: true,
        threshold: 1,
    });
    const [ref2, inViewImage] = useInView({
        triggerOnce: true,
        threshold: 0.7,
    });

    return (
        <div className='bg-gray-100 md:px-20 pt-20 md:pb-20 font-title'>
            <motion.div
                className='px-10 md:px-20 pb-6 text-xl md:text-2xl '
                variants={fadeIn}
                initial='hidden'
                animate={inViewText ? 'visible' : 'hidden'}
                transition={{ ease: "easeInOut", duration: 0.8 }}
                ref={ref}
            >
                <p>Situated within the lush greenery of the surrounding hillsides</p>
            </motion.div>

            {/* mobile */}
            <div className='md:hidden relative flex justify-center items-center' >
                <div className='absolute z-20 top-0 left-0 w-full h-16 bg-gradient-to-b from-gray-100/100 to-gray-100/0'></div>

                <div>
                    <div className='absolute z-10 bottom-0 left-0 w-full h-full bg-white/50'></div>
                    <div className='z-0' >
                        <img src={ConceptImage} alt='condo_image' layout='fill' objectFit='cover' />
                    </div>

                </div>
                {/* <div className='absolute z-20 bottom-0 left-0 w-full h-16 bg-gradient-to-t from-gray-100/100 to-gray-100/0'></div> */}

                {/* Animated text */}
                <motion.div
                    className=" absolute text-center font-medium md:font-bold h-auto z-30 text-2xl pt-5 "
                    variants={sentence}
                    initial="hidden"
                    animate={inViewTextMobile ? 'visible' : 'hidden'}
                    ref={ref3}
                >
                    <AnimatedText text="' It is an excellent heaven" variants={letter} />
                    <br />
                    <AnimatedText text="from the hustle and bustle" variants={letter} />
                    <br />
                    <AnimatedText text="of the city '" variants={letter} />
                    <br />

                    {/* button */}
                    <Link to="/about" className=' w-4/5'>
                        <button className='font-content text-xl border-2 bg-white/60 border-black rounded-xl mt-5 py-2 px-6 shadow-md transition ease-in-out delay-150 hover:bg-black/10 hover:shadow-lg hover:-translate-y-1 hover:scale-110'>
                            About
                        </button>
                    </Link>

                </motion.div>

            </div>

            {/* dekstop */}
            <div className='hidden md:grid grid-cols-5 '>
                {/* image */}
                <motion.div
                    className='pl-20 col-span-3 mt-10 px-10'
                    variants={fadeIn}
                    initial='hidden'
                    animate={inViewImage ? 'visible' : 'hidden'}
                    transition={{ ease: "easeInOut", duration: 1.5 }}
                    ref={ref2}
                >
                    <img src={ConceptImage} alt='condo_image' />
                </motion.div>

                {/* text content */}
                <div className="relative col-span-2 flex flex-col justify-end items-start ">
                    <motion.div
                        className="text-xl md:text-3xl lg:text-4xl "
                        variants={sentence}
                        initial="hidden"
                        animate={inViewImage ? 'visible' : 'hidden'}
                    >
                        <AnimatedText text="' It is an excellent heaven" variants={letter} />
                        <br />
                        <AnimatedText text="from the hustle and bustle" variants={letter} />
                        <br />
                        <AnimatedText text="of the city '" variants={letter} />
                    </motion.div>

                    <div className='flex justify-between w-full mt-10'>
                        {/* button */}
                        <motion.div
                            variants={onScreenAnim}
                            initial="offscreen" whileInView="onscreen" exit="offscreen"
                            viewport={{ once: false, amount: 0.7 }}
                            transition={{ duration: 0.6 }}>

                            <Link to="/about" >
                                <button className='font-content text-xl border-2 bg-white border-black rounded-xl py-2 px-6 shadow-md transition ease-in-out delay-150 hover:bg-black/10 hover:shadow-lg hover:-translate-y-1 hover:scale-110'>
                                    About
                                </button>
                            </Link>
                        </motion.div>

                        {/* AR icon */}
                        <motion.div

                            variants={onScreenAnim}
                            initial="offscreen"
                            whileInView="onscreen"
                            exit="offscreen"
                            viewport={{ once: false, amount: 0.9 }}
                            transition={{ duration: 0.6 }}
                        >


                            <div className='w-32 shadow-md cursor-pointer' onClick={handleARMarkerModal} >
                                <p className=' text-yellow-600 text-sm text-center'>Click for Quick Tour!</p>
                                <img src={icon} alt='ar_marker' className=' hover:scale-110 transition ease-in-out' /></div>
                        </motion.div>

                    </div>
                    {/* AR Marker modal */}
                    {openARMarker && (
                        <motion.div className='absolute -bottom-12 -right-10 flex items-center justify-center w-48 h-48 bg-white drop-shadow-md z-30'
                            initial={{ scale: 0.5 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5 }}>
                            <div className='absolute top-0 right-0 text-2xl text-white font-semibold bg-red-400 hover:bg-red-800/80 cursor-pointer px-3 py-2' onClick={handleARMarkerModal}>X</div>
                            <div className='w-4/5 '>
                                <img src={arMarker} alt='ar_marker' className='' />
                                <p className='text-yellow-600'>Scan with any scanner</p>
                            </div>

                        </motion.div>
                    )}

                </div>

            </div>

        </div>


    );

}

export default Concept