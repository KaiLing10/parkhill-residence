import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Outlet, Link } from "react-router-dom";
import { motion } from "framer-motion"

const Navbar = () => {

    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className='fixed z-50 w-screen'>
            <div className='font-content flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
                {/* dekstop */}
                <div className='flex ml-6 pt-1 md:pt-0 md:ml-10'>
                    <div className='items-startcursor-pointer font-bold w-14 md:w-24'>
                        <img className='' src={process.env.PUBLIC_URL + `/logo.png`} alt="logo" />
                    </div>
                </div>
                <motion.nav
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        ease: "easeInOut",
                        duration: 1,
                        delay: 2,
                    }}>
                    <ul className='hidden md:flex '>
                        <li className='p-4'>
                            <Link to="/"> Home </Link></li>
                        <li className='p-4'>
                            <Link to="/about"> About </Link></li>
                        <li className='p-4'>
                            <Link to="/vrtour"> Location </Link></li>
                        <li className='p-4'>
                            <Link to="/"> Facilities </Link></li>
                        <li className='p-4'>
                            <Link to="/"> Rent </Link></li>
                    </ul>
                </motion.nav>

                {/* menu icon */}
                <div onClick={handleNav} className='block md:hidden'>
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>

                {/* mobile */}
                <div className={nav ? 'fixed left-0 top-0 w-[80%] h-full bg-black/70 ease-in-out duration-500' : 'fixed left-[-100%]'}>
                    <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT</h1>
                    <nav>
                        <ul className='p-4'>
                            <li className='p-4 border-b border-gray-600'>
                                <Link to="/home">Home</Link>
                            </li>
                            <li className='p-4 border-b border-gray-600'>
                                <Link to="/about">About</Link>
                            </li>
                            <li className='p-4 border-b border-gray-600'>
                                <Link to="/">Location</Link>
                            </li>
                            <li className='p-4 border-b border-gray-600'>
                                <Link to="/">Facilities</Link>
                            </li>
                            <li className='p-4'>
                                <Link to="/">Location</Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                <Outlet />
            </div>
        </div>
    )
}

export default Navbar