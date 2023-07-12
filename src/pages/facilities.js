import React from 'react'

//components
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FacilitiesInfo from '../components/facilities/FacilitiesInfo'


const Facilities = () => {
  return (
    <div className='bg-gray-100 font-title'>
      <Navbar />
      <FacilitiesInfo />
      <Footer />
    </div>
  )
}

export default Facilities