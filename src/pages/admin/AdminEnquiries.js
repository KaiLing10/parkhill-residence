import React, { useEffect, useState } from 'react';
import { BsArrowLeft } from "react-icons/bs";
import { Link } from 'react-router-dom';

// custom style
const tableHeaderStyle = 'px-6 py-3 text-left font-semibold text-gray-700'
const tableTextStyle = 'px-6 py-4'

const AdminEnquiries = () => {
    const [enquiryData, setEnquiryData] = useState([]);
    const handleClearData = () => {
        localStorage.removeItem('enquiryData');
        window.location.reload();
    }


    useEffect(() => {

        // Get the data from local storage when the component mounts
        const data = JSON.parse(localStorage.getItem('enquiryData')) || [];
        setEnquiryData(data);

    }, []);
    return (
        <div className="py-10 w-4/5 mx-auto ">
            {/* <button onClick={handleClearData}>Clear Data</button> */}
            {/* back button */}
            <Link to="/admin" className='flex w-1/5 text-yellow-600 cursor-pointer hover:text-gray-600'>
                <div className='w-10 h-10 text-3xl ' >
                    <BsArrowLeft />
                </div>
                <p className='text-2xl '>Back</p>
            </Link>

            {/* content */}
            <h1 className='text-3xl font-semibold font-title my-5'> User Messages </h1>
            <table className="font-content text-black w-full border-collapse border border-gray-300">
                <thead className="bg-yellow-600/20">
                    <tr>
                        <th className={tableHeaderStyle} >Full Name</th>
                        <th className={tableHeaderStyle} >Phone Number</th>
                        <th className={tableHeaderStyle} >Email</th>
                        <th className={tableHeaderStyle} >Message</th>
                    </tr>
                </thead>
                <tbody>
                    {enquiryData.map((data, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                            <td className={tableTextStyle} >{data.fullName}</td>
                            <td className={tableTextStyle} >{data.phone}</td>
                            <td className={tableTextStyle} >{data.email}</td>
                            <td className={tableTextStyle} >{data.message}</td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    );
};

export default AdminEnquiries