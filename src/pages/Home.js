import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/home/Hero';
import Concept from '../components/home/Concept';
import Tour from '../components/home/Tour';
import Facilities from '../components/home/Facilities';

export default function Home() {
  return (
    <div>
    <Navbar />
    <Hero />
    <Concept />
    <Tour />
    <Facilities />

  </div>
  )
}
