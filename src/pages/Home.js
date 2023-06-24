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
          <Concept />
          <Tour />
          <Facilities />
        </>
      )}
    </AnimatePresence>

  )
}
