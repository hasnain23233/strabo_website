import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faUser } from '@fortawesome/free-solid-svg-icons';
import Dashbord from '../assets/Dashbord.png'


const home = () => {
    return (
        <div className='bg-[radial-gradient(circle_at_center,_#F5FBFC,_white)]  font-inter'>
            <div className=' border-x-2 border-gray-50 w-9/12 m-auto'>
                <div className='pt-12 text-center w-9/12 border-x-2 border-gray-50 m-auto'>
                    <span className='border-2 gap-1 flex items-center  w-[140px] m-auto bg-white text-[13px] rounded-full '>
                        <svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_ddd_2_11104)">
                                <rect x="4" y="2" width="22" height="22" rx="11" fill="#0D9488" />
                                <path d="M16.9667 7.82051C16.8924 7.62741 16.7069 7.5 16.5 7.5C16.2931 7.5 16.1076 7.62741 16.0333 7.82051L15.444 9.35272C15.2938 9.74324 15.2466 9.85578 15.1821 9.94657C15.1173 10.0377 15.0377 10.1173 14.9466 10.1821C14.8558 10.2466 14.7432 10.2938 14.3527 10.444L12.8205 11.0333C12.6274 11.1076 12.5 11.2931 12.5 11.5C12.5 11.7069 12.6274 11.8924 12.8205 11.9667L14.3527 12.556C14.7432 12.7062 14.8558 12.7534 14.9466 12.8179C15.0377 12.8827 15.1173 12.9623 15.1821 13.0534C15.2466 13.1442 15.2938 13.2568 15.444 13.6473L16.0333 15.1795C16.1076 15.3726 16.2931 15.5 16.5 15.5C16.7069 15.5 16.8924 15.3726 16.9667 15.1795L17.556 13.6473C17.7062 13.2568 17.7534 13.1442 17.8179 13.0534C17.8827 12.9623 17.9623 12.8827 18.0534 12.8179C18.1442 12.7534 18.2568 12.7062 18.6473 12.556L20.1795 11.9667C20.3726 11.8924 20.5 11.7069 20.5 11.5C20.5 11.2931 20.3726 11.1076 20.1795 11.0333L18.6473 10.444C18.2568 10.2938 18.1442 10.2466 18.0534 10.1821C17.9623 10.1173 17.8827 10.0377 17.8179 9.94657C17.7534 9.85578 17.7062 9.74324 17.556 9.35272L16.9667 7.82051Z" fill="white" />
                                <path d="M12.6972 13.2764C12.6125 13.107 12.4394 13 12.25 13C12.0606 13 11.8875 13.107 11.8028 13.2764L11.4106 14.0609C11.2693 14.3433 11.2263 14.4246 11.174 14.4925C11.1215 14.5605 11.0605 14.6215 10.9925 14.674C10.9246 14.7263 10.8433 14.7693 10.5609 14.9106L9.77639 15.3028C9.607 15.3875 9.5 15.5606 9.5 15.75C9.5 15.9394 9.607 16.1125 9.77639 16.1972L10.5609 16.5894C10.8433 16.7307 10.9246 16.7737 10.9925 16.826C11.0605 16.8785 11.1215 16.9395 11.174 17.0075C11.2263 17.0754 11.2693 17.1567 11.4106 17.4391L11.8028 18.2236C11.8875 18.393 12.0606 18.5 12.25 18.5C12.4394 18.5 12.6125 18.393 12.6972 18.2236L13.0894 17.4391C13.2307 17.1567 13.2737 17.0754 13.326 17.0075C13.3785 16.9395 13.4395 16.8785 13.5075 16.826C13.5754 16.7737 13.6567 16.7307 13.9391 16.5894L14.7236 16.1972C14.893 16.1125 15 15.9394 15 15.75C15 15.5606 14.893 15.3875 14.7236 15.3028L13.9391 14.9106C13.6567 14.7693 13.5754 14.7263 13.5075 14.674C13.4395 14.6215 13.3785 14.5605 13.326 14.4925C13.2737 14.4246 13.2307 14.3433 13.0894 14.0609L12.6972 13.2764Z" fill="white" />
                            </g>
                            <defs>
                                <filter id="filter0_ddd_2_11104" x="0" y="0" width="30" height="30" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy="2" />
                                    <feGaussianBlur stdDeviation="2" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0.0117647 0 0 0 0 0.027451 0 0 0 0 0.0705882 0 0 0 0.04 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_11104" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect2_dropShadow_2_11104" />
                                    <feOffset dy="1" />
                                    <feGaussianBlur stdDeviation="1" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0.0117647 0 0 0 0 0.027451 0 0 0 0 0.0705882 0 0 0 0.08 0" />
                                    <feBlend mode="normal" in2="effect1_dropShadow_2_11104" result="effect2_dropShadow_2_11104" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feMorphology radius="0.8" operator="dilate" in="SourceAlpha" result="effect3_dropShadow_2_11104" />
                                    <feOffset />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0.0117647 0 0 0 0 0.027451 0 0 0 0 0.0705882 0 0 0 0.06 0" />
                                    <feBlend mode="normal" in2="effect2_dropShadow_2_11104" result="effect3_dropShadow_2_11104" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_2_11104" result="shape" />
                                </filter>
                            </defs>
                        </svg>
                        Strabo AI is live
                    </span>
                    <h1 className='m-auto text-5xl mt-4  leading-[60px] font-semibold '>
                        Manage your wealth <br />
                        like <span className="text-Primary italic font-serif font-light tracking-normal">never before</span>
                    </h1>
                    <p className='text-gray-500 text-xl mt-6 font-pretendard'>
                        Track, forecast & get advice in one place to grow <br /> your assets with Strabo.
                    </p>
                    <button className='bg-Primary text-white flex gap-2 justify-center m-auto w-3/12 py-3 rounded-full mt-6'>Get Started <p className='-rotate-180'><FontAwesomeIcon icon={faAnglesLeft} /></p></button>
                    <div className='mt-12 grid grid-cols-3 gap-2 border-b-2'>
                        <p className='border-b-2 border-Primary py-2 font-pretendard' ><span className='text-Primary'><FontAwesomeIcon icon={faUser} /></span> For individuals</p>
                        <p className='hover:border-b-2 border-Primary font-pretendard text-gray-600 hover:text-gray-900 py-2'><span className='text-Primary'><FontAwesomeIcon icon={faUser} /></span> For Couples</p>
                        <p className='hover:border-b-2 border-Primary font-pretendard text-gray-600 hover:text-gray-900 py-2'><span className='text-Primary'><FontAwesomeIcon icon={faUser} /></span> For Advisers</p>
                    </div>
                </div>
            </div>
            <img src={Dashbord} className='m-auto' alt="" />
        </div>
    )
}

export default home
