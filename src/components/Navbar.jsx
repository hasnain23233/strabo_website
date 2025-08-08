import React, { useState, useEffect, useRef } from 'react';
import Logo from '../assets/logo.png';
import DropdownPlatfom from './DropdownPlatfom';
import DropdownResourse from './DropdownResourse';



const Navbar = () => {

    const resourceLinks = [
        { label: 'Docs', href: '#' },
        { label: 'API Reference', href: '#' },
        { label: 'Blog', href: '#' },
    ];

    return (
        <div className="border-b-2 border-gray-100 font-inter">
            <header className="h-16 w-11/12 m-auto flex justify-between items-center">
                <div className="flex items-center gap-2 w-2/12">
                    <img src={Logo} alt="Logo" />
                    <p className="text-xl font-semibold tracking-wider text-gray-800">strabo</p>
                </div>

                <ul className="w-6/12 text-sm flex justify-evenly items-center gap-4 relative">
                    <li>
                        <DropdownPlatfom />
                    </li>
                    <li>
                        <DropdownResourse />
                    </li>
                    <li>
                        <a href="#" className="text-gray-600 tracking-wider">Customers</a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-600 tracking-wider">Plans</a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-600 tracking-wider">Community</a>
                    </li>
                </ul>

                <div className="w-2/12 flex justify-end text-sm text-gray-600">
                    <button className="border-2 font-semibold tracking-wider px-5 py-2 rounded-full hover:bg-gray-50">
                        Launch app
                    </button>
                </div>
            </header>
        </div>
    );
};

export default Navbar;
