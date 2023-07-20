import React, { useState } from 'react';
import BookUnit from './BookUnit';
import BookAppointment from './BookAppointment';


export default function BookingModal({ handleBookingModal }) {

    const [selectedOption, setSelectedOption] = useState('bookUnit');

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };

    return (
        <div className="flex h-screen justify-center items-center z-10 bg-black/50">
            <div className="relative bg-white shadow-md w-4/5 md:w-1/2 z-20 p-10 font-title">

                {/* close button */}
                <div className="absolute top-0 right-0 text-2xl text-white bg-red-400 hover:bg-red-800/80 cursor-pointer px-4 py-2"
                    onClick={handleBookingModal}> X </div>

                {/* Book Option */}
                <div className="flex justify-around">
                    <h2
                        className={`text-2xl cursor-pointer font-bold mb-4 ${selectedOption === 'bookUnit' ? 'text-yellow-500' : ''}`}
                        onClick={() => handleOptionClick('bookUnit')}>
                        Book Unit
                    </h2>
                    |
                    <h2
                        className={`text-2xl cursor-pointer font-bold mb-4 ${selectedOption === 'bookAppointment' ? 'text-yellow-500' : ''}`}
                        onClick={() => handleOptionClick('bookAppointment')}>
                        Book Appointment
                    </h2>
                </div>



                {/* Form */}
                {selectedOption === 'bookUnit' ? <BookUnit /> : <BookAppointment />}


            </div>
        </div>
    );
}
