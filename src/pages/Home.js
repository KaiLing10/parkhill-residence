import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/home/Hero';
import Concept from '../components/home/Concept';
import Tour from '../components/home/Tour';

export default function Home() {
  return (
    <div>
    <Navbar />
    <Hero />
    <Concept />
    <Tour/>

  </div>
  )
}
