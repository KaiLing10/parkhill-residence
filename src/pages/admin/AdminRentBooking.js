import React, { useEffect, useState } from 'react';
import { BsArrowLeft } from "react-icons/bs";
import { Link } from 'react-router-dom';

// custom style
const tableHeaderStyle = 'px-6 py-3 text-left font-semibold text-gray-700'
const tableTextStyle = 'px-6 py-4 '

const AdminRentBooking = () => {
    const [rentData, setRentData] = useState([]);

    useEffect(() => {

        // Get the data from local storage when the component mounts
        const data = JSON.parse(localStorage.getItem('rentData')) || [];
        setRentData(data);
        console.log(data)
    }, []);

    return (
        <div className="py-10 w-4/5 mx-auto ">

            <Link to="/admin" className='flex w-1/5 text-yellow-600 cursor-pointer hover:text-gray-600'>
                {/* <div > */}
                <div className='w-10 h-10 text-3xl ' >
                    <BsArrowLeft />
                </div>
                <p className='text-2xl '>Dashboard</p>
                {/* </div> */}
            </Link>
            <h1 className='text-3xl font-semibold font-title  my-5'> Appointment Booking </h1>
            <table className="font-content w-full border-collapse border border-gray-300">
                <thead className="bg-yellow-600/20">
                    <tr>
                        <th className={tableHeaderStyle} >Full Name</th>
                        <th className={tableHeaderStyle} >Phone Number</th>
                        <th className={tableHeaderStyle} >Email</th>
                        <th className={tableHeaderStyle} >Unit ID</th>
                    </tr>
                </thead>
                <tbody>
                    {rentData.map((data, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                            <td className={tableTextStyle} >{data.fullName}</td>
                            <td className={tableTextStyle} >{data.phone}</td>
                            <td className={tableTextStyle} >{data.email}</td>
                            <td className={tableTextStyle} >{data.unitID}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    );
};

export default AdminRentBooking