import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import home6Img from '../assets/home6Img.png'
import { Link } from 'react-router-dom';

const DropdownPlatfom = () => {
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
                Platform
                <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`text-xs transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>

            {isOpen && (
                <div className="absolute top-8 left-0 w-[700px]  bg-white shadow-xl border rounded-xl   px-4 z-10 transition-all duration-200">
                    <div className='flex gap-2'>
                        <ul className='w-7/12 border-r-2  flex flex-col justify-between border-gray-100 px-1 py-2'>
                            <h1 className='text-gray-300 leading-loose uppercase text-sm '>Platform</h1>
                            <li>
                                <Link to="/feature" className='flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg'>
                                    <div className='flex gap-2  items-center'>
                                        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_2_14364)">
                                                <path d="M6 0V38" stroke="#E8E9EB" stroke-width="0.8" stroke-linejoin="round" />
                                                <path d="M32 0V38" stroke="#E8E9EB" stroke-width="0.8" stroke-linejoin="round" />
                                                <path d="M0 6H38" stroke="#E8E9EB" stroke-width="0.8" stroke-linejoin="round" />
                                                <path d="M0 32H38" stroke="#E8E9EB" stroke-width="0.8" stroke-linejoin="round" />
                                                <path d="M10.5417 16.9584V11.7084C10.5417 11.064 11.0641 10.5417 11.7084 10.5417H15.7917C16.4361 10.5417 16.9584 11.064 16.9584 11.7084V16.9584C16.9584 17.6027 16.4361 18.125 15.7917 18.125H11.7084C11.0641 18.125 10.5417 17.6027 10.5417 16.9584Z" fill="#CFEAE7" stroke="#0D9488" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M10.5417 26.2916V23.375C10.5417 22.7306 11.0641 22.2083 11.7084 22.2083H15.7917C16.4361 22.2083 16.9584 22.7306 16.9584 23.375V26.2916C16.9584 26.936 16.4361 27.4583 15.7917 27.4583H11.7084C11.0641 27.4583 10.5417 26.936 10.5417 26.2916Z" fill="#CFEAE7" stroke="#0D9488" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M21.0417 12.2917V11.7084C21.0417 11.064 21.5641 10.5417 22.2084 10.5417H26.2917C26.9361 10.5417 27.4584 11.064 27.4584 11.7084V12.2917C27.4584 12.936 26.9361 13.4584 26.2917 13.4584H22.2084C21.5641 13.4584 21.0417 12.936 21.0417 12.2917Z" fill="#CFEAE7" stroke="#0D9488" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M21.0417 26.2917V18.7084C21.0417 18.064 21.5641 17.5417 22.2084 17.5417H26.2917C26.9361 17.5417 27.4584 18.064 27.4584 18.7084V26.2917C27.4584 26.936 26.9361 27.4584 26.2917 27.4584H22.2084C21.5641 27.4584 21.0417 26.936 21.0417 26.2917Z" fill="#CFEAE7" stroke="#0D9488" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_2_14364">
                                                    <rect width="38" height="38" rx="7" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <div>
                                            <h1>Features</h1>
                                            <p className='text-gray-400 text-sm leading-loose'>Track, forecast & get advice</p>
                                        </div>
                                    </div>
                                    <p><FontAwesomeIcon icon={faArrowRight} className='text-lg' /></p>
                                </Link>
                            </li>
                            <li>
                                <a href="#" className='flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg'>
                                    <div className='flex gap-2  items-center'>
                                        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_2_14377)">
                                                <path d="M6 0V38" stroke="#E8E9EB" stroke-width="0.8" stroke-linejoin="round" />
                                                <path d="M32 0V38" stroke="#E8E9EB" stroke-width="0.8" stroke-linejoin="round" />
                                                <path d="M0 6H38" stroke="#E8E9EB" stroke-width="0.8" stroke-linejoin="round" />
                                                <path d="M0 32H38" stroke="#E8E9EB" stroke-width="0.8" stroke-linejoin="round" />
                                                <path d="M25.1254 27.4584H12.8751C11.5864 27.4584 10.5417 26.4137 10.5417 25.125V16.2406C10.5417 15.7587 10.6909 15.2887 10.9688 14.895L14.0417 10.5417H23.9587L27.0316 14.895C27.3095 15.2887 27.4587 15.7587 27.4587 16.2406V25.125C27.4587 26.4137 26.414 27.4584 25.1254 27.4584Z" stroke="#666D80" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M10.8333 15.7917H27.1666" stroke="#666D80" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M19 10.8333V15.5" stroke="#666D80" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_2_14377">
                                                    <rect width="38" height="38" rx="7" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>

                                        <div>
                                            <h1>Investment Products <span className='text-Primary text-sm'>coming soon!</span></h1>

                                            <p className='text-gray-400 text-sm leading-loose'>Grow your wealth with Strabo</p>
                                        </div>
                                    </div>
                                    <p><FontAwesomeIcon icon={faArrowRight} className='text-lg' /></p>
                                </a>
                            </li>
                            <li>
                                <Link to="/strabo_for_advisers" className='flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg'>
                                    <div className='flex gap-2  items-center'>
                                        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_2_14391)">
                                                <path d="M6 0V38" stroke="#E8E9EB" stroke-width="0.8" stroke-linejoin="round" />
                                                <path d="M32 0V38" stroke="#E8E9EB" stroke-width="0.8" stroke-linejoin="round" />
                                                <path d="M0 6H38" stroke="#E8E9EB" stroke-width="0.8" stroke-linejoin="round" />
                                                <path d="M0 32H38" stroke="#E8E9EB" stroke-width="0.8" stroke-linejoin="round" />
                                                <path d="M10.5417 16.375C10.5417 15.0864 11.5864 14.0417 12.8751 14.0417H25.1251C26.4137 14.0417 27.4584 15.0864 27.4584 16.375V25.125C27.4584 26.4137 26.4137 27.4584 25.1251 27.4584H12.8751C11.5864 27.4584 10.5417 26.4137 10.5417 25.125V16.375Z" stroke="#666D80" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M15.2083 13.75V12.875C15.2083 11.5864 16.2529 10.5417 17.5416 10.5417H20.4583C21.7469 10.5417 22.7916 11.5864 22.7916 12.875V13.75" stroke="#666D80" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M10.8333 20.4583H27.1666" stroke="#666D80" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M15.2083 18.7083V21.625" stroke="#666D80" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M22.7917 18.7083V21.625" stroke="#666D80" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_2_14391">
                                                    <rect width="38" height="38" rx="7" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>


                                        <div>
                                            <h1>Strabo for Advisers </h1>

                                            <p className='text-gray-400 text-sm leading-loose'>Your adviser-client portal</p>
                                        </div>
                                    </div>
                                    <p><FontAwesomeIcon icon={faArrowRight} className='text-lg' /></p>
                                </Link>
                            </li>
                        </ul>
                        <ul className='w-5/12  px-1 py-2'>
                            <h1 className='text-gray-300 leading-loose uppercase text-sm '>changelog</h1>
                            <li className='flex flex-col justify-evenly h-full'>
                                <a href="#" className='flex justify-between items-center p-3rounded-lg'>
                                    <div className='flex gap-2  items-center'>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.99992 2.66665C5.0544 2.66665 2.66659 5.05446 2.66659 7.99998C2.66659 10.9455 5.0544 13.3333 7.99992 13.3333C9.67506 13.3333 11.1695 12.5618 12.1483 11.3522C12.3799 11.066 12.7997 11.0217 13.0859 11.2533C13.3722 11.4849 13.4164 11.9047 13.1848 12.1909C11.9637 13.6999 10.0945 14.6666 7.99992 14.6666C4.31802 14.6666 1.33325 11.6819 1.33325 7.99998C1.33325 4.31808 4.31802 1.33331 7.99992 1.33331C11.4228 1.33331 14.2431 3.91287 14.6231 7.23401L14.6617 7.19531C14.9221 6.93492 15.3442 6.93486 15.6046 7.19517C15.8649 7.45548 15.865 7.87759 15.6047 8.13798L14.2718 9.47131C14.1467 9.59636 13.9772 9.66662 13.8004 9.66665C13.6236 9.66667 13.454 9.59646 13.3289 9.47145L11.9952 8.13812C11.7348 7.87781 11.7348 7.4557 11.9951 7.19531C12.2554 6.93492 12.6775 6.93486 12.9379 7.19517L13.3165 7.57363C13.0993 4.82745 10.8019 2.66665 7.99992 2.66665Z" fill="#666D80" />
                                            <path d="M8.66659 4.66665C8.66659 4.29846 8.36811 3.99998 7.99992 3.99998C7.63173 3.99998 7.33325 4.29846 7.33325 4.66665V7.99998C7.33325 8.22288 7.44465 8.43104 7.63012 8.55468L9.63012 9.88801C9.93647 10.0922 10.3504 10.0095 10.5546 9.70311C10.7589 9.39676 10.6761 8.98285 10.3697 8.77861L8.66659 7.64319V4.66665Z" fill="#666D80" />
                                        </svg>

                                        <div>
                                            <h1>Changelog</h1>
                                            <p className='text-gray-400 text-sm leading-loose'>v2.0 Big update!</p>
                                        </div>
                                    </div>
                                </a>
                                <img src={home6Img} alt="" className='w-full' />
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DropdownPlatfom
