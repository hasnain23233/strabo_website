import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const DropdownResourse = () => {
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
                Resourse
                <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`text-xs transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>

            {isOpen && (
                <div className="absolute top-8 left-0 w-[400px]  bg-white shadow-xl border rounded-xl   px-4 z-10 transition-all duration-200">
                    <div className='flex flex-col gap-2'>
                        <ul className='w-full  flex flex-col justify-between  px-1 py-2'>
                            <h1 className='text-gray-300 leading-loose uppercase text-sm '>Resourse</h1>
                            <li>
                                <Link to="/get-started" className='flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg'>
                                    <div className='flex gap-2  items-center'>
                                        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_2_15507)">
                                                <path d="M6 0V38" stroke="#E8E9EB" stroke-width="0.8" stroke-linejoin="round" />
                                                <path d="M32 0V38" stroke="#E8E9EB" stroke-width="0.8" stroke-linejoin="round" />
                                                <path d="M0 6H38" stroke="#E8E9EB" stroke-width="0.8" stroke-linejoin="round" />
                                                <path d="M0 32H38" stroke="#E8E9EB" stroke-width="0.8" stroke-linejoin="round" />
                                                <path d="M10.5417 10.5417V27.4584" stroke="#666D80" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M10.5417 22.7917C10.5417 22.7917 13.1667 20.4584 19.0001 20.4584C24.8334 20.4584 27.4584 16.6667 27.4584 16.6667L10.5417 10.5417V22.7917Z" stroke="#666D80" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_2_15507">
                                                    <rect width="38" height="38" rx="7" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>

                                        <div>
                                            <h1>Getting Started</h1>
                                            <p className='text-gray-400 text-sm leading-loose'>Your dashboard setup guide</p>
                                        </div>
                                    </div>
                                    <p><FontAwesomeIcon icon={faArrowRight} className='text-lg' /></p>
                                </Link>
                            </li>
                            <li>
                                <Link to="/blog_articals" className='flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg'>
                                    <div className='flex gap-2  items-center'>
                                        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_2_15519)">
                                                <path d="M6 0V38" stroke="#E8E9EB" stroke-width="0.8" stroke-linejoin="round" />
                                                <path d="M32 0V38" stroke="#E8E9EB" stroke-width="0.8" stroke-linejoin="round" />
                                                <path d="M0 6H38" stroke="#E8E9EB" stroke-width="0.8" stroke-linejoin="round" />
                                                <path d="M0 32H38" stroke="#E8E9EB" stroke-width="0.8" stroke-linejoin="round" />
                                                <path d="M25.1251 27.4584H11.7084C11.0641 27.4584 10.5417 26.936 10.5417 26.2917V11.7084C10.5417 11.064 11.0641 10.5417 11.7084 10.5417H21.6251C22.2694 10.5417 22.7917 11.064 22.7917 11.7084V16.6667" stroke="#666D80" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M25.4433 16.375H22.7917V25.125C22.7917 26.4137 23.8364 27.4583 25.1251 27.4583C26.4137 27.4583 27.4584 26.4137 27.4584 25.125V18.3902C27.4584 17.2772 26.5562 16.375 25.4433 16.375Z" stroke="#666D80" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M14.0417 15.2084C14.0417 14.564 14.5641 14.0417 15.2084 14.0417H18.1251C18.7694 14.0417 19.2917 14.564 19.2917 15.2084V16.9584C19.2917 17.6027 18.7694 18.125 18.1251 18.125H15.2084C14.5641 18.125 14.0417 17.6027 14.0417 16.9584V15.2084Z" stroke="#666D80" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M14.3333 21.0417H18.9999" stroke="#666D80" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M14.3333 23.9583H18.9999" stroke="#666D80" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_2_15519">
                                                    <rect width="38" height="38" rx="7" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>


                                        <div>
                                            <h1>Blog and Articles</h1>

                                            <p className='text-gray-400 text-sm leading-loose'>Grab a coffee and have a browse</p>
                                        </div>
                                    </div>
                                    <p><FontAwesomeIcon icon={faArrowRight} className='text-lg' /></p>
                                </Link>
                            </li>
                            <li>
                                <Link to="/glossary" className='flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg'>
                                    <div className='flex gap-2  items-center'>
                                        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_2_15531)">
                                                <path d="M6 0V38" stroke="#E8E9EB" stroke-width="0.8" stroke-linejoin="round" />
                                                <path d="M32 0V38" stroke="#E8E9EB" stroke-width="0.8" stroke-linejoin="round" />
                                                <path d="M0 6H38" stroke="#E8E9EB" stroke-width="0.8" stroke-linejoin="round" />
                                                <path d="M0 32H38" stroke="#E8E9EB" stroke-width="0.8" stroke-linejoin="round" />
                                                <path d="M27.4584 22.7917V11.7084C27.4584 11.064 26.9361 10.5417 26.2917 10.5417H12.8751C11.5864 10.5417 10.5417 11.5864 10.5417 12.875V24.5417" stroke="#0D9488" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M27.4584 22.7917H12.8751C11.5864 22.7917 10.5417 23.8364 10.5417 25.125C10.5417 26.4137 11.5864 27.4584 12.8751 27.4584H27.4584V22.7917Z" fill="#CFEAE7" stroke="#0D9488" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_2_15531">
                                                    <rect width="38" height="38" rx="7" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>



                                        <div>
                                            <h1>Glossary </h1>

                                            <p className='text-gray-400 text-sm leading-loose'>Key terms from your dashboard</p>
                                        </div>
                                    </div>
                                    <p><FontAwesomeIcon icon={faArrowRight} className='text-lg' /></p>
                                </Link>
                            </li>
                        </ul>
                        <div className='w-full'>
                            <h1 className='text-gray-300 leading-loose uppercase text-sm '>tools</h1>
                            <ul className='w-full  flex flex-col justify-between  px-1 py-2'>
                                <li>
                                    <a href="#" className='flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg'>
                                        <div className='flex gap-2  items-center'>
                                            <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_2_15547)">
                                                    <path d="M6 0V38" stroke="#E8E9EB" stroke-width="0.8" stroke-linejoin="round" />
                                                    <path d="M32 0V38" stroke="#E8E9EB" stroke-width="0.8" stroke-linejoin="round" />
                                                    <path d="M0 6H38" stroke="#E8E9EB" stroke-width="0.8" stroke-linejoin="round" />
                                                    <path d="M0 32H38" stroke="#E8E9EB" stroke-width="0.8" stroke-linejoin="round" />
                                                    <path d="M11.7083 13.4583H26.2916M15.2083 20.4583H15.7916M15.2083 16.9583H15.7916M15.2083 23.9583H15.7916M18.7083 20.4583H19.2916M18.7083 16.9583H19.2916M18.7083 23.9583H19.2916M22.2083 20.4583H22.7916M22.2083 16.9583H22.7916M22.2083 23.9583H22.7916M14.0416 27.4583H23.9583C25.2469 27.4583 26.2916 26.4136 26.2916 25.125V12.875C26.2916 11.5863 25.2469 10.5416 23.9583 10.5416H14.0416C12.7529 10.5416 11.7083 11.5863 11.7083 12.875V25.125C11.7083 26.4136 12.7529 27.4583 14.0416 27.4583Z" stroke="#666D80" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_2_15547">
                                                        <rect width="38" height="38" rx="7" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>




                                            <div>
                                                <h1>Calculator </h1>

                                                <p className='text-gray-400 text-sm leading-loose'>Interactive tools & widgets</p>
                                            </div>
                                        </div>
                                        <p><FontAwesomeIcon icon={faArrowRight} className='text-lg' /></p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className='flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg'>
                                        <div className='flex gap-2  items-center'>
                                            <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_2_15559)">
                                                    <path d="M6 0V38" stroke="#E8E9EB" stroke-width="0.8" stroke-linejoin="round" />
                                                    <path d="M32 0V38" stroke="#E8E9EB" stroke-width="0.8" stroke-linejoin="round" />
                                                    <path d="M0 6H38" stroke="#E8E9EB" stroke-width="0.8" stroke-linejoin="round" />
                                                    <path d="M0 32H38" stroke="#E8E9EB" stroke-width="0.8" stroke-linejoin="round" />
                                                    <path d="M27.4577 18.943L20.3223 25.8368C18.0847 27.9986 14.4568 27.9986 12.2192 25.8368C9.97341 23.667 9.98286 20.1464 12.2403 17.9879L18.8252 11.6509C20.3562 10.1717 22.8384 10.1717 24.3694 11.6509C25.906 13.1354 25.8995 15.5443 24.3549 17.0211L17.696 23.4167C16.8695 24.2153 15.5294 24.2152 14.7029 23.4167C13.8764 22.6182 13.8764 21.3235 14.7029 20.5249L20.2173 15.1974" stroke="#666D80" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_2_15559">
                                                        <rect width="38" height="38" rx="7" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>





                                            <div>
                                                <h1>Documentation </h1>

                                                <p className='text-gray-400 text-sm leading-loose'>Platform need-to-knows</p>
                                            </div>
                                        </div>
                                        <p><FontAwesomeIcon icon={faArrowRight} className='text-lg' /></p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DropdownResourse