import React from 'react'
import Navbar from '../components/Navbar'
import Amenities from '../components/location/Amenities'
import Footer from '../components/Footer'

// assets
import map2d from '../assets/location/map2d.jpg'

const Location = () => {

    return (
        <div className=' text-white bg-gradient-to-t from-gray-800 via-gray-600 to-gray-300'>
            <Navbar />
            {/* map */}

            <div className='pt-28 w-screen flex justify-center'>

                <img src={map2d} alt='condo_image' className='object-cover w-3/5 ' />
            </div>
            <div className='text-center '>


                <button className=' mt-5 mx-2 font-content text-xl border-2 border-white bg-black/30 rounded-xl py-2 px-4 transition ease-in-out delay-150 hover:bg-white/10 hover:shadow-lg hover:-translate-y-1 hover:scale-110'>
                    3d Map
                </button>
                <button className='mt-5 mx-2 font-content text-xl border-2 border-white bg-black/30 rounded-xl py-2 px-4 transition ease-in-out delay-150 hover:bg-white/10 hover:shadow-lg hover:-translate-y-1 hover:scale-110'>
                    Google Map
                </button>
               
            </div>


            <div className='text-center py-10 text-xl'><span className='text-gray-700 font-semibold'>Address: </span>Technology Park Malaysia, Lebuhraya Puchong-Sungai Besi, Bukit Jalil, 57000, Kuala Lumpur</div>

            < Amenities />
<Footer />
        </div>
    )
}

export default Location