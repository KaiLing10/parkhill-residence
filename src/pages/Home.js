import React from 'react';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';


// Components
import Navbar from '../components/Navbar';
import Loader from "../components/home/Loader";
import Hero from '../components/home/Hero';
import Concept from '../components/home/Concept';
import Tour from '../components/home/Tour';
import Facilities from '../components/home/Facilities';
import Location from '../components/home/Location'
import Footer from '../components/Footer';


const Home = () => {
  const [loading, setLoading] = useState(true);

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div key='loader'>
          <Loader setLoading={setLoading} />
        </motion.div>
      ) : (
        <>
          <Navbar />
          <Hero />
          <ParallaxProvider>
            <Parallax >
              <div className='h-screen'>
                <Concept />
                <Tour />
              </div>
              <Facilities />
              <Location />
              <Footer />
            </ Parallax>
          </ ParallaxProvider>

        </>
      )}
    </AnimatePresence>

  )
}



export default Home

