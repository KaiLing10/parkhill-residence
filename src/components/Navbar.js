import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Outlet, Link } from "react-router-dom";
import { motion } from "framer-motion"

const Navbar = ({ isHomePage }) => {

    const [nav, setNav] = useState(false)
    const [navbarBg, setNavbarBg] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    const showBackground = () => {
        if (window.scrollY >= 500) {
            setNavbarBg(true);
        } else {
            setNavbarBg(false);
        }
    };
    window.addEventListener('scroll', showBackground);

    return (

        <div className={navbarBg ? 'bg-black/10 fixed z-50 w-screen text-white' : 'fixed z-50 w-screen '}>
            <div className={`font-content flex justify-between items-center h-16 max-w-[1240px] mx-auto px-4 `}>
                {/* dekstop */}
                <div className='flex ml-6 pt-1 md:pt-0 md:ml-10'>
                    <div className='items-start cursor-pointer font-bold w-14 md:w-24'>
                        <img className='h-16' src={process.env.PUBLIC_URL + `/logo.png`} alt="logo" />
                    </div>
                </div>

                <motion.nav
                    initial={isHomePage ? { opacity: 0, y: -30 } : undefined}
                    animate={isHomePage ? { opacity: 1, y: 0 } : undefined}
                    transition={isHomePage ? {
                        ease: 'easeInOut',
                        duration: 1,
                        delay: 2,
                    } : undefined}
                >
                    <ul className='hidden md:flex '>
                        <li className='p-4'>
                            <Link to="/home"> Home </Link></li>
                        <li className='p-4'>
                            <Link to="/about"> About </Link></li>
                        <li className='p-4'>
                            <Link to="/location"> Location </Link></li>
                        <li className='p-4'>
                            <Link to="/facilities"> Facilities </Link></li>
                        <li className='p-4'>
                            <Link to="/rent"> Rent </Link></li>
                    </ul>
                </motion.nav>

                {/* menu icon */}
                <div onClick={handleNav} className='block md:hidden'>
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>

                {/* mobile */}
                <div className={nav ? 'fixed left-0 top-0 w-[70%] h-full bg-black/70 ease-in-out duration-500' : 'fixed left-[-100%]'}>
                    <nav>
                        <ul className='p-4'>
                            <li className='pt-10 p-4 border-b border-gray-600'>
                                <Link to="/home">Home</Link>
                            </li>
                            <li className='p-4 border-b border-gray-600'>
                                <Link to="/about">About</Link>
                            </li>
                            <li className='p-4 border-b border-gray-600'>
                                <Link to="/location">Location</Link>
                            </li>
                            <li className='p-4 border-b border-gray-600'>
                                <Link to="/facilities">Facilities</Link>
                            </li>
                            <li className='p-4'>
                                <Link to="/rent">Rent</Link>
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