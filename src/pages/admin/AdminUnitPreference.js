import React, { useEffect, useState } from 'react';
import { BsArrowLeft } from "react-icons/bs";
import { Link } from 'react-router-dom';

// custom style
const tableHeaderStyle = 'px-6 py-3 text-left font-semibold text-gray-700'
const tableTextStyle = 'px-6 py-4 '

const AdminUnitPreference = () => {
    const [wishlistData, setWishlistData] = useState([]);

    const handleClearData = () => {
        localStorage.removeItem('wishlistData');
        window.location.reload();
    }
    
    useEffect(() => {
        // Get the data from local storage when the component mounts
        const data = JSON.parse(localStorage.getItem('wishlistData')) || [];
        setWishlistData(data);
    }, []);

    return (
        <div className="py-10 w-4/5 mx-auto">
            <Link to="/admin" className='flex w-1/5 text-yellow-600 cursor-pointer hover:text-gray-600'>
                <div className='w-10 h-10 text-3xl'>
                    <BsArrowLeft />
                </div>
                <p className='text-2xl'>Back</p>
            </Link>

            <h1 className='text-3xl font-semibold font-title my-5'>User Unit Preferences </h1>
            {/* <button onClick={handleClearData}>Clear Data</button> */}
            <table className="font-content w-full border-collapse border border-gray-300">
                <thead className="bg-yellow-600/20">
                    <tr>
                        <th className={tableHeaderStyle}>Full Name</th>
                        <th className={tableHeaderStyle}>Phone Number</th>
                        <th className={tableHeaderStyle}>Email</th>
                        <th className={tableHeaderStyle}>Move-In Date</th>
                        <th className={tableHeaderStyle}>Budget</th>
                        <th className={tableHeaderStyle}>Tenancy Period</th>
                        <th className={tableHeaderStyle}>Unit Category</th>
                        <th className={tableHeaderStyle}>Unit Type</th>
                        <th className={tableHeaderStyle}>Furnishing</th>
                        <th className={tableHeaderStyle}>Additional Requirements</th>
                    </tr>
                </thead>
                <tbody>
                    {wishlistData.map((data, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                            <td className={tableTextStyle}>{data.fullName}</td>
                            <td className={tableTextStyle}>{data.phone}</td>
                            <td className={tableTextStyle}>{data.email}</td>
                            <td className={tableTextStyle}>{data.moveInDate}</td>
                            <td className={tableTextStyle}>{data.budget}</td>
                            <td className={tableTextStyle}>{data.tenancyPeriod}</td>
                            <td className={tableTextStyle}>{data.unitCategory.label}</td>
                            <td className={tableTextStyle}>{data.unitType.label}</td>
                            <td className={tableTextStyle}>{data.furnishing.label}</td>
                            <td className={tableTextStyle}>{data.additionalRequirements}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminUnitPreference;
