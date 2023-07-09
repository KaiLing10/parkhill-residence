import React from 'react'
import Navbar from '../components/Navbar'
import map2d from '../assets/location/map2d.jpeg'

const Location = () => {
    return (
        <div>
            <Navbar />
            <div className=''>
                <img src={map2d} alt='condo_image' className='object-cover h-full w-full' />
            </div>
            <div>Address:  Technology Park Malaysia, Lebuhraya Puchong-Sungai Besi, Bukit Jalil, 57000, Kuala Lumpur</div>
            <div>Amenities:
                3.8km to Endah Parade
                9km to The Mines Shopping Mall
                15km to Sunway City & Puchong
                3.2km to Bukit Jalil National Stadium
                1km to Bukit Jalil LRT Station
                4km to Sri Petaling LRT Station
                6.6km to Sungai Besi LRT Station</div>
        </div>
    )
}

export default Location