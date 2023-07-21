import React, { useState } from 'react';
import Amenities from '../components/location/Amenities';
import Footer from '../components/Footer';

// assets
import VectorMap from '../assets/location/VectorMap.jpg';
import AerialView from '../assets/location/AerialView.jpg';
import Navbar from '../components/Navbar';

// custom style
const mapOptionStyle='font-content text-lg md:text-xl border-2 bg-white border-black rounded-xl mt-5 mx-16 md:mx-2 py-2 px-4 md:px-6 shadow-md transition md:hover:bg-[#FFC107]/10 hover:shadow-sm '

// Google Map component
const GoogleMapIframe = () => (
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15936.593019609965!2d101.6958083!3d3.0549672!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4b07526fa23d%3A0xdec6a36b8e45cc14!2sParkhill%20Residence!5e0!3m2!1sen!2smy!4v1689923962707!5m2!1sen!2smy"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
    ></iframe>
);

const Location = () => {
    const [imageType, setImageType] = useState('VectorMap');

    return (
        <div className='text-black bg-gray-100'>
            <Navbar />
            <div className='flex flex-col md:flex-row justify-center pt-20'>
                {/* Toggle buttons */}
                <button
                    className={`${mapOptionStyle} ${imageType === 'VectorMap' ? 'bg-[#FFC107]' : 'bg-white'
                        }`}
                    onClick={() => setImageType('VectorMap')}
                >
                    Vector Map
                </button>
                <button
                    className={` ${mapOptionStyle} ${imageType === 'AerialView' ? 'bg-[#FFC107]' : 'bg-white'
                        }`}
                    onClick={() => setImageType('AerialView')}
                >
                    Aerial View
                </button>
                <button
                    className={`${mapOptionStyle} ${imageType === 'GoogleMap' ? 'bg-[#FFC107]' : 'bg-white'
                        }`}
                    onClick={() => setImageType('GoogleMap')}
                >
                    Google Map
                </button>
            </div>
            {/* image */}
            <div className='pt-10 w-screen flex justify-center'>
                {imageType === 'VectorMap' ? (
                    <img src={VectorMap} alt='condo_image' className='object-cover md:w-3/5' />
                ) : imageType === 'AerialView' ? (
                    <img src={AerialView} alt='condo_image' className='object-cover md:w-3/5' />
                ) : (
                    <GoogleMapIframe />
                )}
            </div>



            <div className='text-center py-10 text-xl'>
                <span className='text-gray-700 font-semibold'>Address: </span>Technology Park Malaysia,
                Lebuhraya Puchong-Sungai Besi, Bukit Jalil, 57000, Kuala Lumpur
            </div>

            <Amenities />
            <Footer />
        </div>
    );
};

export default Location;