import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { BiBed, BiBath } from "react-icons/bi";
// components
import Navbar from '../components/Navbar';
import BookingModal from '../components/rent/BookingModal';
import ImageModal from '../components/ImageModal';
// assets
import unit2a from '../assets/unit/unit2.jpg'
import unit2b from '../assets/unit/unit1b.jpg'
import unit2c from '../assets/unit/unit1View.jpg'

// custom style
const unitImageStyle = 'h-full w-full object-cover cursor-pointer'
const detailTitleStyle = 'text-sm text-gray-800'
const detailStyle = 'mb-3'


const UnitInfo2 = () => {
  const [openBookingModal, setOpenBookingModal] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Handle image click
  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setShowImageModal(!showImageModal);
  };

  // Handle booking click
  const handleBookingModal = () => {
    setOpenBookingModal(!openBookingModal);
  };


  return (
    <>
      <Navbar />

      <div className='relative md:p-20 font-title text-xl bg-gray-100 '>
        {/* back button */}
        <Link to="/rent" className='flex w-1/5 cursor-pointer hover:text-gray-600'>
          <div className='w-10 h-10 text-3xl ' >
            <BsArrowLeft />
          </div>
          <p className='text-2xl '>Back</p>
        </Link>
        {/* content */}

        <div className='h-[40vh] grid grid-cols-3 bg-white drop-shadow-md'>
          <div >
            <img src={unit2a} alt='unit_image' className={unitImageStyle} onClick={() => handleImageClick(unit2a)} />
          </div>
          <div >
            <img src={unit2b} alt='unit_image' className={unitImageStyle} onClick={() => handleImageClick(unit2b)} />
          </div>
          <div >
            <img src={unit2c} alt='unit_image' className={unitImageStyle} onClick={() => handleImageClick(unit2c)} />
          </div>
        </div>

        <div className=' bg-white p-10 drop-shadow-md'>
          {/* main info */}
          <div className='flex justify-between'>
            <div >
              <p className='text-4xl text-yellow-600 '>RM 2,800/mo</p>
              <div className='flex '>
                <p className='text-3xl w-20 flex justify-around items-center '>4 <BiBed /> 2 <BiBath /></p>
                <p className='text-3xl pl-10'> 1300 sqft</p>
              </div>
            </div>
            <div className=''>
              <Link to={`/vrTour/${'Unit2Entrance'}`} >

                {/* Unit1Center */}
                <button className='mr-10 font-content text-xl border-2 bg-red-300  drop-shadow-md border-black rounded-xl mt-5 py-2 px-6  transition ease-in-out delay-150 hover:bg-red-300/50 hover:shadow-lg hover:-translate-y-1 hover:scale-110'>
                  room tour
                </button>
              </Link>

              <button className='mr-10 font-content text-xl border-2 bg-red-300  drop-shadow-md border-black rounded-xl mt-5 py-2 px-6 transition ease-in-out delay-150 hover:bg-red-300/50 hover:shadow-lg hover:-translate-y-1 hover:scale-110'
                onClick={handleBookingModal}>
                book now
              </button>
            </div>
          </div>

          <hr className='my-5' />
          {/* Details */}
          <h3 className='text-3xl mb-2 text-gray-800 font-medium'>Details</h3>
          <div className='grid grid-cols-2'>
            <div className=''>
              <p className={detailTitleStyle}>Number of Rooms</p>
              <p className={detailStyle}>4 rooms 2 bathrooms</p>
            </div>
            <div>
              <p className={detailTitleStyle}>Floor Size</p>
              <p className={detailStyle}>1300 sqft</p>
            </div>
            <div>
              <p className={detailTitleStyle}>Furnishing</p>
              <p className={detailStyle}>Fully Furnished</p>
            </div>
            <div>
              <p className={detailTitleStyle}>Carpark Included</p>
              <p className={detailStyle}>2</p>
            </div>
            <div>
              <p className={detailTitleStyle}>Block</p>
              <p className={detailStyle}>C</p>
            </div>
            <div>
              <p className={detailTitleStyle}>Floor</p>
              <p className={detailStyle}>31</p>
            </div>
          </div>

          {/* Features */}
          <h3 className='text-3xl mb-2 mt-5'>Key Features</h3>
          <p> - Stadium View </p>
          <p> - Air-conditioning</p>
          <p> - Fridge </p>
          <p> - Kitchen Cabinet </p>
          <p> - Washing Machine </p>
          <p> - Water Heater </p>

        </div>
        {openBookingModal && (<div className="absolute top-0 left-0 h-full w-screen ">
          <BookingModal handleBookingModal={handleBookingModal} unitID='C-31-16' />  </div>)}

      </div >
      {/* Image modal */}
      {showImageModal && selectedImage && (
        <ImageModal handleImageClick={handleImageClick} selectedImage={selectedImage} />)}


    </>
  )
}

export default UnitInfo2