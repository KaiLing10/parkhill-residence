import React from 'react'
// import unitImage from '../../assets/unit/unit1.jpg'
import { BiBed, BiBath } from "react-icons/bi";
import { Link } from "react-router-dom";


export default function UnitOption( {unitInfo, unitImage , noOfRoom , noOfBath, rental}) {
  return (
    <>
    <Link to={unitInfo}>
       
    <div className='text-xl md:text-2xl h-96 w-80 mx-10 bg-white drop-shadow-md cursor-pointer hover:scale-105 transition ease-in-out hover:shadow-lg hover:-translate-y-1'
    >
        <img src={unitImage} alt='unit_image' className='h-2/3 object-cover' />
        <div className=' p-2 px-5'>
            <p>RM <span className='text-2xl md:text-4xl' >{rental}</span>/mo</p>
            <div className='w-1/3 flex justify-around items-center '>{noOfRoom} <BiBed /> {noOfBath} <BiBath/></div>
        </div>

    </div>
    
      </Link>
    </>
  )
}
