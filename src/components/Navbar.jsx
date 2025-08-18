import React, { useState, useEffect, useRef } from 'react';
import Logo from '../assets/logo.png';
import DropdownPlatfom from './DropdownPlatfom';
import DropdownResourse from './DropdownResourse';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";



const Navbar = () => {
    const [menu, setMenu] = useState(true)
    const handleMenuBtn = () => {
        setMenu(!menu)
    }

    return (
        <div className="border-b-2 border-gray-100 font-inter">
            <header className=" py-3     w-11/12 m-auto flex lg:justify-between lg:flex-row flex-col gap-2 lg:items-center">
                <div className="flex items-center gap-2 lg:w-2/12 justify-between">
                    <p className='flex items-center gap-2 lg:w-2/12 w-8/12'>
                        <img src={Logo} alt="Logo" />
                        <Link to={'/'} className="text-xl font-semibold tracking-wider text-gray-800">strabo</Link>
                    </p>
                    <p onClick={handleMenuBtn} className='lg:hidden block'>
                        <FontAwesomeIcon icon={faBars} className="text-2xl text-gray-700" />
                    </p>
                </div>

                <ul className={`w-6/12 text-sm flex justify-evenly lg:flex-row flex-col lg:items-center ${menu ? 'hidden lg:flex' : 'flex'} gap-4 relative`}>
                    <li>
                        <DropdownPlatfom />
                    </li>
                    <li>
                        <DropdownResourse />
                    </li>
                    <li>
                        <Link to="/customers" className="text-gray-600 tracking-wider">Customers</Link>
                    </li>
                    <li>
                        <Link to="/plan" className="text-gray-600 tracking-wider">Plans</Link>
                    </li>
                    <li>
                        <a href="#" className="text-gray-600 tracking-wider">Community</a>
                    </li>
                </ul>

                <div className={`lg:w-2/12 sm:w-5/12 w-11/12 flex lg:justify-end text-sm ${menu ? 'hidden lg:flex' : 'flex'}  text-gray-600`}>
                    <button className="border-2 font-semibold tracking-wider px-5 py-2 rounded-full hover:bg-gray-50">
                        Launch app
                    </button>
                </div>
            </header>
        </div>
    );
};

export default Navbar;
