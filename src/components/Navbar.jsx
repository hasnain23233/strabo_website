import React, { useState, useEffect, useRef } from 'react';
import Logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Dropdown = ({ title, items }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="text-gray-600 tracking-wider flex items-center gap-2 focus:outline-none"
            >
                {title}
                <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`text-xs transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>

            {isOpen && (
                <div className="absolute top-8 left-0 bg-white shadow-lg border rounded-md py-2 px-4 z-10 w-44 transition-all duration-200">
                    {items.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};

const Navbar = () => {
    const platformLinks = [
        { label: 'Overview', href: '#' },
        { label: 'Features', href: '#' },
        { label: 'Security', href: '#' },
    ];

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
                        <Dropdown title="Platform" items={platformLinks} />
                    </li>
                    <li>
                        <Dropdown title="Resources" items={resourceLinks} />
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
