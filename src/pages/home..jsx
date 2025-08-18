import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faUser, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Dashbord from '../assets/Dashbord.png'
import home2Img from '../assets/home2Img.png'
import home3Img from '../assets/home3Img.png'
import home4Img from '../assets/home34Img.png'
import home5Img from '../assets/home5Img.png'
import client from '../assets/client.png'
import beckgroundImg from '../assets/beckgroundImg.png'
import FaqSection from '../components/FaqSection';
import Slider from '../components/Slider';


const home = () => {
    return (
        <div className=' font-inter  bg-[#fcfefe]'>
            <div className='bg-[radial-gradient(circle_at_center,_#F5FBFC,_#fcfefe)] '>
                <div className=' border-x-2 border-gray-100 lg:w-9/12 w-11/12 m-auto'>
                    <div className='pt-12 text-center lg:w-9/12 w-11/12 border-x-2 border-gray-100 m-auto'>
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
                        <h1 className='m-auto xl:xl:text-5xl lg:text-4xl sm:text-2xl text-xl mt-4  lg:leading-[60px] font-semibold '>
                            Manage your wealth <br />
                            like <span className="text-Primary italic font-serif font-light tracking-normal">never before</span>
                        </h1>
                        <p className='text-gray-500 lg:text-xl mt-6 font-pretendard'>
                            Track, forecast & get advice in one place to grow <br /> your assets with Strabo.
                        </p>
                        <button className='bg-Primary text-white flex gap-2 justify-center m-auto lg:w-3/12 w-8/12 py-3 rounded-full mt-6'>Get Started <p className='-rotate-180'><FontAwesomeIcon icon={faAnglesLeft} /></p></button>
                        <div className='mt-12 grid lg:grid-cols-3 grid-cols-2  gap-2 border-b-2 '>
                            <p className='border-b-2 border-Primary py-2 font-pretendard' ><span className='text-Primary'><FontAwesomeIcon icon={faUser} /></span> For individuals</p>
                            <p className='hover:border-b-2 border-Primary font-pretendard text-gray-600 hover:text-gray-900 py-2'><span className='text-Primary'><FontAwesomeIcon icon={faUser} /></span> For Couples</p>
                            <p className='hover:border-b-2 border-Primary font-pretendard text-gray-600 hover:text-gray-900 py-2'><span className='text-Primary'><FontAwesomeIcon icon={faUser} /></span> For Advisers</p>
                        </div>
                    </div>
                </div>
                <div className="relative w-11/12 m-auto overflow-hidden">
                    <img src={Dashbord} className="w-full h-auto" alt="" />

                    {/* Bottom blur overlay */}
                    <div className="absolute bottom-0 left-0 w-full xl:h-32 lg:h-24 h-16 bg-gradient-to-t to-[#fcfcfcc7] from-[#fcfcfceb] z-10" />
                </div>
            </div>
            <Slider />
            <div className=' border-x-2  border-gray-100 m-auto text-center mt-12'>
                <div className='border-b-2 border-gray-100'>
                    <div className='border-x-2 w-11/12 m-auto border-gray-100'>
                        <h1 className='m-auto xl:xl:text-5xl lg:text-4xl sm:text-2xl text-xl  mt-4 py-3 lg:leading-[60px] font-semibold '>
                            Bring <span className="text-Primary italic font-serif font-light tracking-normal">order</span> to <br />
                            the chaos
                        </h1>
                    </div>
                </div>
                <div className='w-11/12 m-auto border-x-2 pb-12 border-gray-100'>
                    <img src={home2Img} alt="" className='w-full' />
                    <div className='mt-24 flex sm:flex-row flex-col border-t-2 border-r-2 items-center border-gray-100 h-56 w-10/12 m-auto'>
                        <div className='border-r-2 border-gray-100 sm:w-4/12 w-11/12 lg:block hidden p-4'>
                            <img src={client} alt="" className='m-auto' />
                        </div>
                        <div className='lg:w-8/12 w-11/12 text-start p-4'>
                            <p className='xl:text-[30px] lg:text-xl sm:text-lg text-sm font-[600]'>
                                “Tried Strabo for the first time today. Managing stocks and crypto together is a game changer. No going back now”
                            </p>

                            <p className='mt-6 font-medium'>Cameron Orcutt <span className='text-gray-400'>: Founder, OnLadder</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' border-y-2 w-full border-gray-100 m-auto '>
                <div className='border-x-2 border-gray-100 w-11/12 m-auto'>
                    <div className='w-9/12  m-auto border-gray-100'>
                        <h1 className='m-auto xl:text-5xl lg:text-4xl sm:text-2xl text-xl  py-10  lg:leading-[60px] font-semibold '>
                            Reliable security at  <br />
                            an <span className="text-Primary italic font-serif font-light tracking-normal">enterprise level</span>
                        </h1>
                        <div className='grid lg:grid-cols-2 grid-cols-1 gap-3 py-3'>
                            <div className='border-l-2  py-4 border-gray-100'>
                                <p className='ml-12'>
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.688 2.89343C16.5022 2.71731 16.256 2.61914 16 2.61914C15.744 2.61914 15.4978 2.71731 15.312 2.89343C12.4817 5.58127 8.71217 7.0552 4.80934 7.0001C4.59672 6.99733 4.38875 7.06242 4.21564 7.1859C4.04253 7.30938 3.91328 7.48483 3.84668 7.68676C3.28397 9.40165 2.99817 11.1953 3.00001 13.0001C3.00001 20.9228 8.41867 27.5774 15.7507 29.4641C15.9142 29.5063 16.0858 29.5063 16.2493 29.4641C23.5813 27.5774 29 20.9228 29 13.0001C29 11.1468 28.7027 9.3601 28.1533 7.68676C28.087 7.48458 27.9578 7.30884 27.7847 7.1851C27.6115 7.06137 27.4035 6.99609 27.1907 6.99876L27 7.0001C23.0053 7.0001 19.3773 5.4401 16.688 2.89343ZM20.8133 13.5814C20.8933 13.4748 20.9512 13.3533 20.9836 13.224C21.016 13.0947 21.0222 12.9603 21.0018 12.8286C20.9815 12.6969 20.935 12.5705 20.8651 12.457C20.7953 12.3435 20.7034 12.2451 20.595 12.1676C20.4866 12.0901 20.3638 12.0351 20.2338 12.0057C20.1037 11.9764 19.9692 11.9733 19.838 11.9967C19.7068 12.0201 19.5816 12.0695 19.4697 12.142C19.3579 12.2145 19.2616 12.3086 19.1867 12.4188L14.872 18.4588L12.7067 16.2934C12.5171 16.1168 12.2664 16.0206 12.0073 16.0252C11.7482 16.0298 11.5011 16.1347 11.3178 16.3179C11.1346 16.5012 11.0297 16.7483 11.0251 17.0074C11.0205 17.2665 11.1167 17.5172 11.2933 17.7068L14.2933 20.7068C14.396 20.8093 14.5197 20.8883 14.656 20.9383C14.7922 20.9882 14.9377 21.0079 15.0824 20.996C15.227 20.9841 15.3673 20.9408 15.4935 20.8692C15.6197 20.7976 15.7289 20.6994 15.8133 20.5814L20.8133 13.5814Z" fill="#0D9488" />
                                    </svg>
                                </p>
                                <p className='pl-12 border-l-2 border-Primary leading-loose mt-3 text-lg'>
                                    AES 256 encryption
                                </p>
                                <p className='pl-12 text-gray-500 font-pretendard'>
                                    Your data is securely encrypted both at rest and in transit, ensuring maximum protection against cyber threats.
                                </p>
                            </div>
                            <div className='border-l-2  py-4 border-gray-100'>
                                <p className='ml-12'>
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 4C6.93913 4 5.92172 4.42143 5.17157 5.17157C4.42143 5.92172 4 6.93913 4 8V10C4 10.2652 4.10536 10.5196 4.29289 10.7071C4.48043 10.8946 4.73478 11 5 11C5.26522 11 5.51957 10.8946 5.70711 10.7071C5.89464 10.5196 6 10.2652 6 10V8C6 7.46957 6.21071 6.96086 6.58579 6.58579C6.96086 6.21071 7.46957 6 8 6H10C10.2652 6 10.5196 5.89464 10.7071 5.70711C10.8946 5.51957 11 5.26522 11 5C11 4.73478 10.8946 4.48043 10.7071 4.29289C10.5196 4.10536 10.2652 4 10 4H8ZM22 4C21.7348 4 21.4804 4.10536 21.2929 4.29289C21.1054 4.48043 21 4.73478 21 5C21 5.26522 21.1054 5.51957 21.2929 5.70711C21.4804 5.89464 21.7348 6 22 6H24C24.5304 6 25.0391 6.21071 25.4142 6.58579C25.7893 6.96086 26 7.46957 26 8V10C26 10.2652 26.1054 10.5196 26.2929 10.7071C26.4804 10.8946 26.7348 11 27 11C27.2652 11 27.5196 10.8946 27.7071 10.7071C27.8946 10.5196 28 10.2652 28 10V8C28 6.93913 27.5786 5.92172 26.8284 5.17157C26.0783 4.42143 25.0609 4 24 4H22ZM16 11C14.6739 11 13.4021 11.5268 12.4645 12.4645C11.5268 13.4021 11 14.6739 11 16C11 17.3261 11.5268 18.5979 12.4645 19.5355C13.4021 20.4732 14.6739 21 16 21C17.3261 21 18.5979 20.4732 19.5355 19.5355C20.4732 18.5979 21 17.3261 21 16C21 14.6739 20.4732 13.4021 19.5355 12.4645C18.5979 11.5268 17.3261 11 16 11ZM6 22C6 21.7348 5.89464 21.4804 5.70711 21.2929C5.51957 21.1054 5.26522 21 5 21C4.73478 21 4.48043 21.1054 4.29289 21.2929C4.10536 21.4804 4 21.7348 4 22V24C4 25.0609 4.42143 26.0783 5.17157 26.8284C5.92172 27.5786 6.93913 28 8 28H10C10.2652 28 10.5196 27.8946 10.7071 27.7071C10.8946 27.5196 11 27.2652 11 27C11 26.7348 10.8946 26.4804 10.7071 26.2929C10.5196 26.1054 10.2652 26 10 26H8C7.46957 26 6.96086 25.7893 6.58579 25.4142C6.21071 25.0391 6 24.5304 6 24V22ZM28 22C28 21.7348 27.8946 21.4804 27.7071 21.2929C27.5196 21.1054 27.2652 21 27 21C26.7348 21 26.4804 21.1054 26.2929 21.2929C26.1054 21.4804 26 21.7348 26 22V24C26 24.5304 25.7893 25.0391 25.4142 25.4142C25.0391 25.7893 24.5304 26 24 26H22C21.7348 26 21.4804 26.1054 21.2929 26.2929C21.1054 26.4804 21 26.7348 21 27C21 27.2652 21.1054 27.5196 21.2929 27.7071C21.4804 27.8946 21.7348 28 22 28H24C25.0609 28 26.0783 27.5786 26.8284 26.8284C27.5786 26.0783 28 25.0609 28 24V22Z" fill="#0D9488" />
                                    </svg>

                                </p>
                                <p className='pl-12 border-l-2 border-Primary leading-loose mt-3 text-lg'>
                                    Passwordless system
                                </p>
                                <p className='pl-12 text-gray-500 font-pretendard'>
                                    A security system that grants unique one-time codes without passwords, using biometrics, magic links, or one-time codes.
                                </p>
                            </div>
                            <div className='border-l-2  py-4 border-gray-100'>
                                <p className='ml-12'>
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.00001 13.0001C5.99907 11.1399 6.64643 9.3375 7.83073 7.90298C9.01502 6.46845 10.6622 5.49147 12.489 5.14011C14.3157 4.78875 16.2078 5.08496 17.8397 5.9778C19.4717 6.87064 20.7415 8.30429 21.4307 10.0321C22.1956 9.94431 22.9705 10.0343 23.6949 10.2952C24.4193 10.556 25.0737 10.9806 25.607 11.5359C26.1404 12.0912 26.5383 12.7622 26.7697 13.4965C27.0012 14.2308 27.0599 15.0087 26.9413 15.7695C28.0981 16.4195 29.0068 17.4347 29.5252 18.6562C30.0435 19.8777 30.1424 21.2366 29.8062 22.5203C29.47 23.8039 28.7178 24.9399 27.6672 25.7505C26.6166 26.5611 25.327 27.0006 24 27.0001H9.00001C7.40756 27.0009 5.86245 26.4586 4.61972 25.4629C3.37698 24.4671 2.5109 23.0774 2.16443 21.5231C1.81796 19.9688 2.01181 18.3428 2.71398 16.9136C3.41615 15.4843 4.58468 14.3371 6.02668 13.6615C6.00878 13.4415 5.99988 13.2208 6.00001 13.0001Z" fill="#0D9488" />
                                    </svg>


                                </p>
                                <p className='pl-12 border-l-2 border-Primary leading-loose mt-3 text-lg'>
                                    Serverless cloud–based architecture
                                </p>
                                <p className='pl-12 text-gray-500 font-pretendard'>
                                    A cloud-based architecture that runs applications without servers, scaling automatically as needed and keeping your data secure.
                                </p>
                            </div>
                            <div className='border-l-2  py-4 border-gray-100'>
                                <p className='ml-12'>
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.44 6.96933C5.66712 6.11767 6.16917 5.36488 6.86816 4.82792C7.56715 4.29096 8.42392 3.99991 9.30534 4H22.6933C23.575 3.99962 24.4321 4.29053 25.1313 4.82751C25.8306 5.36449 26.3328 6.11745 26.56 6.96933L29.3773 17.5373C28.1366 16.5401 26.5919 15.9976 25 16H7C5.4077 15.9973 3.86247 16.5398 2.62134 17.5373L5.44 6.96933Z" fill="#0D9488" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7 18C6.34339 18 5.69321 18.1293 5.08658 18.3806C4.47995 18.6319 3.92876 19.0002 3.46447 19.4645C3.00017 19.9288 2.63188 20.48 2.3806 21.0866C2.12933 21.6932 2 22.3434 2 23C2 23.6566 2.12933 24.3068 2.3806 24.9134C2.63188 25.52 3.00017 26.0712 3.46447 26.5355C3.92876 26.9998 4.47995 27.3681 5.08658 27.6194C5.69321 27.8707 6.34339 28 7 28H25C25.6566 28 26.3068 27.8707 26.9134 27.6194C27.52 27.3681 28.0712 26.9998 28.5355 26.5355C28.9998 26.0712 29.3681 25.52 29.6194 24.9134C29.8707 24.3068 30 23.6566 30 23C30 22.3434 29.8707 21.6932 29.6194 21.0866C29.3681 20.48 28.9998 19.9288 28.5355 19.4645C28.0712 19.0002 27.52 18.6319 26.9134 18.3806C26.3068 18.1293 25.6566 18 25 18H7ZM21 24C21.2652 24 21.5196 23.8946 21.7071 23.7071C21.8946 23.5196 22 23.2652 22 23C22 22.7348 21.8946 22.4804 21.7071 22.2929C21.5196 22.1054 21.2652 22 21 22C20.7348 22 20.4804 22.1054 20.2929 22.2929C20.1054 22.4804 20 22.7348 20 23C20 23.2652 20.1054 23.5196 20.2929 23.7071C20.4804 23.8946 20.7348 24 21 24ZM26 23C26 23.2652 25.8946 23.5196 25.7071 23.7071C25.5196 23.8946 25.2652 24 25 24C24.7348 24 24.4804 23.8946 24.2929 23.7071C24.1054 23.5196 24 23.2652 24 23C24 22.7348 24.1054 22.4804 24.2929 22.2929C24.4804 22.1054 24.7348 22 25 22C25.2652 22 25.5196 22.1054 25.7071 22.2929C25.8946 22.4804 26 22.7348 26 23Z" fill="#0D9488" />
                                    </svg>



                                </p>
                                <p className='pl-12 border-l-2 border-Primary leading-loose mt-3 text-lg'>
                                    No third-party data sharing
                                </p>
                                <p className='pl-12 text-gray-500 font-pretendard'>
                                    We do not share any user data with third parties, ensuring strict privacy protection and enhanced security for all sensitive information
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className=' border-b-2 w-full border-gray-100 m-auto '>
                <div className='border-x-2 border-gray-100 w-11/12 m-auto'>
                    <div className='w-9/12  m-auto border-gray-100 '>
                        <br /><br /><br />
                        <div className="relative h-[330px] ">
                            <div>
                                <img src={beckgroundImg} alt="logo" className="w-full h-full" />
                            </div>
                            <div className='absolute bottom-16 text-center w-full'>
                                <p className='m-auto  w-1/12'>
                                    <svg width="66" height="65" viewBox="0 0 66 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M33 34.5312C31.8782 34.5312 30.9688 33.6218 30.9688 32.5C30.9688 31.3782 31.8782 30.4688 33 30.4688C34.1218 30.4688 35.0312 31.3782 35.0312 32.5C35.0312 33.6218 34.1218 34.5312 33 34.5312Z" fill="#0D9488" />
                                        <path d="M33 32.5004L31.839 33.1972C32.0835 33.6051 32.5244 33.8545 33 33.8545C33.4756 33.8545 33.9165 33.6051 34.1614 33.1972L33 32.5004ZM18.5988 11.1305L31.839 33.1972L34.1614 31.8038L20.9212 9.73708L18.5988 11.1305ZM34.1614 33.1972L47.4013 11.1305L45.0789 9.73711L31.839 31.8038L34.1614 33.1972ZM33 56.8748C19.5381 56.8748 8.62502 45.9619 8.62502 32.4998H5.91669C5.91669 47.4574 18.0423 59.5832 33 59.5832V56.8748ZM8.62502 32.4998C8.62502 19.0379 19.5381 8.12484 33 8.12484V5.4165C18.0423 5.4165 5.91669 17.5421 5.91669 32.4998H8.62502ZM33 8.12484C46.4621 8.12484 57.375 19.0379 57.375 32.4998H60.0834C60.0834 17.5421 47.9576 5.4165 33 5.4165V8.12484ZM57.375 32.4998C57.375 45.9619 46.4621 56.8748 33 56.8748V59.5832C47.9576 59.5832 60.0834 47.4574 60.0834 32.4998H57.375ZM33 45.8487C25.5212 45.8487 19.4584 39.7861 19.4584 32.307H16.75C16.75 41.2816 24.0254 48.557 33 48.557V45.8487ZM46.5417 32.307C46.5417 39.7861 40.4788 45.8487 33 45.8487V48.557C41.9746 48.557 49.25 41.2816 49.25 32.307H46.5417ZM39.9672 20.6926C43.9092 23.063 46.5417 27.3784 46.5417 32.307H49.25C49.25 26.389 46.0856 21.2113 41.3628 18.3716L39.9672 20.6926ZM19.4584 32.307C19.4584 27.3784 22.0908 23.063 26.0328 20.6926L24.6372 18.3716C19.9145 21.2113 16.75 26.389 16.75 32.307H19.4584ZM33 33.1769C32.626 33.1769 32.3229 32.8739 32.3229 32.4998H29.6146C29.6146 34.3697 31.1302 35.8853 33 35.8853V33.1769ZM32.3229 32.4998C32.3229 32.1258 32.626 31.8228 33 31.8228V29.1144C31.1302 29.1144 29.6146 30.63 29.6146 32.4998H32.3229ZM33 31.8228C33.374 31.8228 33.6771 32.1258 33.6771 32.4998H36.3854C36.3854 30.63 34.8699 29.1144 33 29.1144V31.8228ZM33.6771 32.4998C33.6771 32.8739 33.374 33.1769 33 33.1769V35.8853C34.8699 35.8853 36.3854 34.3697 36.3854 32.4998H33.6771Z" fill="#0D9488" />
                                    </svg>

                                </p>
                                <h1 className="xl:text-5xl lg:text-4xl sm:text-2xl text-xl font-semibold text-gray-800">
                                    Discover new ways to <br />
                                    grow your <span className="text-Primary italic font-serif font-light tracking-normal">wealth</span>
                                </h1>
                                <p className="mt-4 text-sm md:text-base text-gray-600">
                                    Put your money to work with our suite of bespoke <br />
                                    investment products
                                </p>
                            </div>
                        </div>
                        <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1  border-x-2 border-gray-100 gap-3'>
                            <div className=' p-4 border-gray-100'>
                                <p className='leading-loose font-semibold'>
                                    Infrastructure Investments
                                </p>
                                <p className=' font-pretendard text-sm text-gray-800'>
                                    Invest in large-scale projects that power economies and drive progress.
                                </p>
                            </div>
                            <div className=' p-4 border-gray-100'>
                                <p className='leading-loose text-gray-500 font-semibold'>
                                    P2P Lending
                                </p>
                                <p className=' text-gray-500 font-pretendard text-sm'>
                                    Earn competitive returns by lending directly to individuals and businesses.
                                </p>
                            </div>
                            <div className=' p-4 border-gray-100'>
                                <p className='leading-loose text-gray-500 font-semibold '>
                                    Real-Time Home Insurance
                                </p>
                                <p className=' text-gray-500 font-pretendard text-sm'>
                                    A smarter, more responsive way to protect your property and finances.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className=' border-b-2 w-full border-gray-100 m-auto '>
                <div className='border-x-2 border-gray-100 w-11/12 m-auto'>
                    <div className='w-9/12 m-auto  '>
                        <div className='w-full border-x-2 border-gray-100'>
                            <div className="">
                                <div className='border-b-2 border-gray-100 lg:flex-row flex flex-col items-center'>
                                    <p className='flex items-center gap-2 p-2 border-r-2 border-gray-100 lg:w-4/12 w-full'>
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.00001 0.583496C3.45618 0.583496 0.583344 3.45634 0.583344 7.00016C0.583344 10.544 3.45618 13.4168 7.00001 13.4168C10.5438 13.4168 13.4167 10.544 13.4167 7.00016C13.4167 3.45634 10.5438 0.583496 7.00001 0.583496ZM10.0375 5.66264C10.2653 5.43484 10.2653 5.06549 10.0375 4.83768C9.80968 4.60988 9.44034 4.60988 9.21253 4.83768L6.12501 7.92521L4.78749 6.58768C4.55968 6.35988 4.19034 6.35988 3.96253 6.58768C3.73473 6.81549 3.73473 7.18484 3.96253 7.41264L5.71253 9.16264C5.94034 9.39045 6.30968 9.39045 6.53749 9.16264L10.0375 5.66264Z" fill="#0D9488" />
                                        </svg>
                                        <p className='text-sm text-gray-400'>Stable, long-term returns from</p>
                                    </p>
                                    <p className='flex items-center gap-2 p-2 border-r-2 border-gray-100 lg:w-2/12 w-full'>
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.00001 0.583496C3.45618 0.583496 0.583344 3.45634 0.583344 7.00016C0.583344 10.544 3.45618 13.4168 7.00001 13.4168C10.5438 13.4168 13.4167 10.544 13.4167 7.00016C13.4167 3.45634 10.5438 0.583496 7.00001 0.583496ZM10.0375 5.66264C10.2653 5.43484 10.2653 5.06549 10.0375 4.83768C9.80968 4.60988 9.44034 4.60988 9.21253 4.83768L6.12501 7.92521L4.78749 6.58768C4.55968 6.35988 4.19034 6.35988 3.96253 6.58768C3.73473 6.81549 3.73473 7.18484 3.96253 7.41264L5.71253 9.16264C5.94034 9.39045 6.30968 9.39045 6.53749 9.16264L10.0375 5.66264Z" fill="#0D9488" />
                                        </svg>
                                        <p className='text-sm text-gray-400'>volatility</p>
                                    </p>
                                    <p className='flex items-center gap-2 p-2  lg:w-4/12 w-full'>
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.00001 0.583496C3.45618 0.583496 0.583344 3.45634 0.583344 7.00016C0.583344 10.544 3.45618 13.4168 7.00001 13.4168C10.5438 13.4168 13.4167 10.544 13.4167 7.00016C13.4167 3.45634 10.5438 0.583496 7.00001 0.583496ZM10.0375 5.66264C10.2653 5.43484 10.2653 5.06549 10.0375 4.83768C9.80968 4.60988 9.44034 4.60988 9.21253 4.83768L6.12501 7.92521L4.78749 6.58768C4.55968 6.35988 4.19034 6.35988 3.96253 6.58768C3.73473 6.81549 3.73473 7.18484 3.96253 7.41264L5.71253 9.16264C5.94034 9.39045 6.30968 9.39045 6.53749 9.16264L10.0375 5.66264Z" fill="#0D9488" />
                                        </svg>
                                        <p className='text-sm text-gray-400'>Sustainable impact through funding.</p>
                                    </p>
                                </div>
                            </div>
                            <div className=' mt-24 text-center'>
                                <button className='lg:w-4/12 sm:w-9/12 w-full bg-gray-800 flex items-center gap-3 m-auto rounded-full hover:bg-gray-700 text-white text-[13px] p-4'>
                                    <p className='text-gray-500 border-r border-gray-500 w-5/12'>Coming soon!</p>
                                    <p className='text-white  w-7/12 gap-2 flex items-center'>Be the first to know <FontAwesomeIcon icon={faArrowRight} /></p>
                                </button>
                            </div>
                        </div>
                        <br /><br />
                        <div className="text-start mt-6">
                            <h1 className='m-auto xl:text-5xl lg:text-4xl sm:text-2xl text-xl px-3  py-10  leading-[60px] font-semibold '>
                                Financial guidance  <br />
                                an <span className="text-Primary italic font-serif font-light tracking-normal">the experts</span>
                            </h1>
                            <img src={home3Img} alt="" />
                        </div>
                    </div>
                </div>

            </div>
            <div className=' border-b-2 w-full border-gray-100 m-auto '>
                <div className='border-x-2 border-gray-100 w-11/12 m-auto'>
                    <div className='w-9/12  m-auto  text-center'>
                        <br /><br />
                        <div className="mt-6">
                            <h1 className='m-auto lg:text-4xl sm:text-2xl text-lg px-3 lg:w-8/12 w-full text-gray-900  py-10  leading-[60px] font-semibold '>
                                Tried Strabo? Making life easier managing my French & UK finances together 🙏
                                <p className='text-gray-800 font-semibold tracking-wider text-sm mt-4'>Lucy Woolfenden<span className='text-gray-500 font-light'> : Founder, The Scale Up Collective</span></p>
                            </h1>
                        </div>
                    </div>
                </div>

            </div>
            <div className=' border-b-2 w-full border-gray-100 m-auto '>
                <div className='border-x-2 border-gray-100 w-11/12 m-auto'>
                    <div className='w-11/12  m-auto '>
                        <FaqSection />
                    </div>
                </div>

            </div>
            <div className=' border-b-2 w-full border-gray-100 m-auto '>
                <div className='border-x-2 border-gray-100 w-11/12 m-auto'>
                    <div className='w-11/12 m-auto  '>
                        <div className="text-start  flex items-center justify-between">
                            <h1 className='m-auto xl:text-5xl lg:text-4xl sm:text-2xl text-xl w-6/12 px-3 py-10  leading-[60px] font-semibold '>
                                We’re along for <br />
                                <span className="text-Primary italic font-serif font-light tracking-normal">the ride</span>
                            </h1>
                            <p className='w-6/12 flex justify-end'>
                                Join thousands of users in 12+ countries <br /> managing their assets with Strabo
                            </p>
                        </div>
                        <img src={home4Img} alt="" />
                        <h1 className='m-auto text-4xl text-center mt-12  px-3 py-10  leading-[60px] font-semibold '>
                            Our ears are  <span className="text-Primary italic font-serif font-light tracking-normal">burning</span>
                        </h1>
                    </div>
                </div>

            </div>
            <div className=' border-b-2 w-full border-gray-100 m-auto '>
                <div className='border-x-2 border-gray-100 w-11/12 m-auto'>
                    <div className='w-full m-auto text-center '>
                        <img src={home5Img} alt="" className='w-full' />
                        <button className="bg-white border-2 text-gray-700 border-gray-100 rounded-full px-4 py-2 mt-12 text-sm hover:shadow">
                            See all case studies <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                        <br /><br />
                    </div>
                </div>

            </div>
            <div className=' border-b-2 w-full border-gray-100 m-auto '>
                <div className='border-x-2 border-gray-100 w-11/12 m-auto'>
                    <div className='w-full m-auto text-center '>
                        <h1 className='m-auto text-4xl text-center pt-12   leading-[60px] font-semibold '>
                            Join our  <span className="text-Primary italic font-serif font-light tracking-normal">newsletter</span>
                        </h1>
                        <p className='text-gray-600'>Want to keep track of what we're up to without the commitment? <br /> You can sign up to the newsletter below.</p>
                        <input type="text" name="text" className='px-4 w-3/12 focus:outline-none py-2 rounded-2xl text-sm border-2 border-gray-100' id="" placeholder='Enter your email Address' />
                        <button className="bg-gray-800 text-white border-2 text-sm border-gray-100 rounded-full px-4 py-2 mt-12 hover:shadow ml-3">
                            Contact Us
                        </button>
                        <br /><br />
                    </div>
                </div>

            </div>
        </div >
    )
}

export default home
