import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";

// https://wrongakram.notion.site/Framer-Motion-Basic-Animations-d464a00579144f5c86998731f7afba00
// Animation variants
const banner = {
  initial: {},
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAni = {
  initial: {
    y: 50,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 100,
    transition: {
      ease: [0.6, 0.01, 0, 0.95],
      duration: 1,
    },
  },
};

// Text Animation Component
const AnimatedText = ({ text }) => (
  <motion.div
    className="relative tracking-wider inline-block whitespace-nowrap "
    variants={banner}
    initial="initial"
    animate="animate"
  >
    {text.split("").map((char, index) => (

      <motion.div
        className="relative tracking-wider inline-block whitespace-nowrap "
        key={char + "_" + index} variants={letterAni}>
        {char}

      </motion.div>
    ))}

  </motion.div>
);


const Hero = () => {

  const [scrollPosition, setScrollPosition] = useState(0);

  // Update scroll position on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='relative h-screen'>
      {/* Banner */}
      <div className="absolute inset-0 flex justify-center items-center z-20">
        <div className=' text-white'>
          <motion.div className='banner' variants={banner}>

            <div className="font-title drop-shadow-black row-col text-2xl md:text-3xl lg:text-4xl text-left">
              <AnimatedText text={"Welcome\u00A0to"} />
            </div>

            <div className="font-title drop-shadow-black text-4xl md:text-7xl lg:text-8xl">
              <AnimatedText text={"Parkhill\u00A0Residence"} />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeInOut", duration: 1, delay: 2, }}>
              <div className="font-content text-center">
                - the height of convenient living-
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
      <div className='absolute text-white/70 font-thin w-full z-30 bottom-1 '>

      <p className='text-center font-content'>scroll down</p></div>

      <div className='absolute z-30 bottom-16 left-1/2'>

        <div className='icon-scroll' ></div>
      </div>

      {/* Background */}
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute z-10 top-0 left-0 bg-black/30 w-full h-screen">
      </motion.div>

      {/* Image */}
      <img
        src={process.env.PUBLIC_URL + `/loader/loader2.jpeg`}
        alt='condo_image_background'
        className={`bg-white fixed w-full h-screen object-cover `}
        style={{
          transform: `scale(${1 + Math.min(scrollPosition / window.innerHeight, 1) * 0.5})`,
          opacity: 1 - Math.min(scrollPosition / window.innerHeight, 1) * 0.8,
        }}
      />
    </div>
  )
}


export default Hero
