import React from 'react';
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

// Components
import Loader from "../components/home/Loader/Loader";
import Hero from '../components/home/Hero';
import Concept from '../components/home/Concept';
import Tour from '../components/home/Tour';
import Facilities from '../components/home/Facilities';
import Location from '../components/home/Location'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasLoaderShown = sessionStorage.getItem('hasLoaderShown');

    if (hasLoaderShown) {
      setLoading(false);
    } else {
      sessionStorage.setItem('hasLoaderShown', 'true');
    }
  }, []);

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div key='loader'>
          <Loader setLoading={setLoading} />
        </motion.div>
      ) : (
        <>
          <div className='text-white'>
            <Navbar isHomePage={true} />
          </div>
          <Hero />
          <ParallaxProvider>
            <Parallax >
              <Concept />
              <Tour />
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

