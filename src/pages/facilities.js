import React from 'react'

//components
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FacilitiesInfo from '../components/facilities/FacilitiesInfo'

// asstes
import map from '../assets/facilities/Facilities.jpg'
import gym1 from '../assets/facilities/gym.jpg'
import gym2 from '../assets/facilities/gym1.png'
import gym3 from '../assets/facilities/gym2.png'


const Facilities = () => {
  return (
    <div className='bg-gray-100 font-title'>
      <Navbar />
      <FacilitiesInfo img1={gym1} img2={gym2} img3={gym3}/>
      <Footer />
    </div>
  )
}

export default Facilities