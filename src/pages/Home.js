import React from 'react'
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Components
import Navbar from '../components/Navbar';
import Loader from "../components/home/Loader";
import Hero from '../components/home/Hero';
import Concept from '../components/home/Concept';
import Tour from '../components/home/Tour';
import Facilities from '../components/home/Facilities';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading");
  }, [loading]);
  return (
    
      <AnimatePresence>
        {loading ? (
          <motion.div key='loader'>
            <Loader setLoading={setLoading} />
          </motion.div>
        ) : (
          <>
            {/* <Header />
          <Banner /> */}

            <Navbar />
           
            {!loading && (
              <Hero />
              // <div className="relative h-screen bg-black">
              //    <div className="absolute z-10 top-0 left-0 bg-black opacity-30  transition-opacity w-full h-screen"></div>
              //   <motion.img
              //     transition={{ ease: [0.6, 0.01, 0, 0.9], duration:0.6 }}
              //     src={process.env.PUBLIC_URL + `/loader/loader2.jpeg`}
              //     // layoutId='main_image_1'
              //     alt='loading_image'
              //     className=' absolute w-full h-screen object-cover'
              //   />
              // </div>
            )}
            
            <Concept />
            <Tour />
            <Facilities />


          </>
        )}
      </AnimatePresence>
 


  )
}
