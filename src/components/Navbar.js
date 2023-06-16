import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {

    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
            {/* dekstop */}
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT</h1>
            <ul className='hidden md:flex'>
                <li className='p-4'>Home</li>
                <li className='p-4'>About</li>
                <li className='p-4'>Location</li>
                <li className='p-4'>Facilities</li>
                <li className='p-4'>Rent</li>
            </ul>

            {/* menu icon */}
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            
            {/* mobile */}
            <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT</h1>
                <ul className='p-4'>
                    <li className='p-4 border-b border-gray-600'>Home</li>
                    <li className='p-4 border-b border-gray-600'>About</li>
                    <li className='p-4 border-b border-gray-600'>Location</li>
                    <li className='p-4 border-b border-gray-600'>Facilities</li>
                    <li className='p-4'>Rent</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar