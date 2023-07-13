import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import unit1 from '../assets/unit/unit1.jpg'
import unit2 from '../assets/unit/unit2.jpg'
import { Link } from "react-router-dom";


import UnitOption from '../components/rent/UnitOption'

const handleUnitClick = () =>{

}

const Rent = () => {
  return (
    <div className='bg-gray-100 font-title'>
      <Navbar />
      <div className='h-screen'>
      <div className='pt-28 pl-10 md:pl-20'> Available Unit for Rent</div>
      <div className='grid grid-cols-3'>
      <Link to="/unit1">
        <UnitOption unitImage={unit1} /> 
      </Link>
      <Link to="/unit2">
        <UnitOption unitImage={unit2} /> 
      </Link>
      </div>
      </div>
      <Footer />

    </div>
  )
}

export default Rent