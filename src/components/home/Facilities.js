import React from 'react'
import { Parallax } from 'react-scroll-parallax'
import { Link } from "react-router-dom";
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';

// assets
import imgCenter from '../../assets/facilities/readingPavilion1.jpg'
import imgGame from '../../assets/facilities/gameRoom.jpg'
import imgRoof from '../../assets/facilities/roof.jpg'
import imgNight from '../../assets/facilities/night.jpg'
import imgPlayground from '../../assets/facilities/playground.jpg'
import imgGym from '../../assets/facilities/gym.jpg'
import imgFunction from '../../assets/facilities/functionRoom.jpg'
import imgGame2 from '../../assets/facilities/gameRoom2.jpg'


// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Facilities = () => {

  const [ref, inView] = useInView({
    threshold: 1,
  });

  return (
    <div className='font-title overflow-hidden bg-gradient-to-b from-gray-800 via-gray-600 to-gray-300 h-screen p-10 relative flex justify-center items-center'>

      {/* <p className=' absolute w-1/5  bg-green-200 text-center text-xl md:text-2xl'> */}
      {/* <motion.div
                    className='pl-20 col-span-3 mt-10'
                    variants={fadeIn}
                    initial='hidden'
                    animate={inViewImage ? 'visible' : 'hidden'}
                    transition={{ ease: "easeInOut", duration: 1.5 }}
                    ref={ref2}
                >

        </motion.div> */}
      <motion.div
        className=' md:w-1/3 drop-shadow-black text-center text-white text-3xl md:text-4xl z-10'
        variants={fadeIn} animate={inView ? 'visible' : 'hidden'} transition={{ ease: "easeInOut", duration: 1.5 }} ref={ref}>
        <p> PARKHILL RESIDENCE </p>
        <p> has just the facility for </p>
        <p> your enjoyment. </p>

        <Link to="/facilities">
          <button className='mt-5 font-content text-xl border-2 border-white bg-black/20 rounded-xl py-2 px-4 transition ease-in-out delay-150 hover:bg-white/10 hover:shadow-lg hover:-translate-y-1 hover:scale-110'>
            View Facilities
          </button>
        </Link>
      </motion.div>

      <div className=' md:hidden'>
        <Parallax translateY={[0, -50]} className='shadow-md absolute w-40 md:w-72 -right-16 bottom-48 md:left-0 md:top-16'>
          < img src={imgGame} alt='facility2' className=' ' />
        </Parallax>
        <Parallax translateY={[-10, 50]} className='absolute w-48 md:w-80 left-6 bottom-28 md:left-32 lg:left-56 md:bottom-20'>
          < img src={imgRoof} alt='facility3' />
        </Parallax>
        <Parallax translateY={[0, -30]} className='absolute w-32 md:w-60 right-0 top-40 md:right-0 md:bottom-48'>
          < img src={imgNight} alt='facility' />
        </Parallax>
        <Parallax translateY={[-10, 30]} className='absolute w-60 md:w-96 lg:w-2/6 -left-10 top-56 md:left-80 md:top-38'>
          < img src={imgCenter} alt='facility' />
        </Parallax>
        <Parallax translateY={[-50, 100]} className=' absolute w-32 md:w-72 right-24 top-12 md:right-32 lg:right-48 md:top-28'>
          < img src={imgGame2} alt='facility1' />
        </Parallax>
        <Parallax translateY={[0, 20]} className='absolute w-48 md:w-96 right-6 bottom-24 md:right-72 md:bottom-0'>
          < img src={imgGym} alt='facility' />
        </Parallax>
      </div>
      <div className='hidden md:flex'>
        <Parallax translateY={[-10, 40]} className='absolute w-60 md:w-72 left-16 bottom-14 md:left-0 md:top-16'>
          < img src={imgGame} alt='facility2' />
        </Parallax>
        <Parallax translateY={[60, -20]} className='absolute w-80 left-16 bottom-14 md:left-32 lg:left-56 md:bottom-20'>
          < img src={imgRoof} alt='facility3' />
        </Parallax>
        <Parallax translateY={[0, -30]} className='absolute w-60 right-16 bottom-14 md:right-0 md:bottom-48'>
          < img src={imgNight} alt='facility' />
        </Parallax>
        <Parallax translateY={[-50, 100]} className=' absolute w-60 lg:w-72 right:12 top-12 md:right-32 lg:right-48 md:top-28'>
          < img src={imgGame2} alt='facility1' />
        </Parallax>
        <Parallax translateY={[-45, 0]} className='absolute w-60 md:w-96 lg:w-2/6 left-16 top-16 md:left-80 md:top-38'>
          < img src={imgCenter} alt='facility' />
        </Parallax>
        <Parallax translateY={[0, 10]} className='absolute w-72 md:w-96 right-16 bottom-6 md:right-72 md:bottom-0'>
          < img src={imgGym} alt='facility' />
        </Parallax>

      </div>
    </div>
  )
}

export default Facilities