import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faUser, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import customer from '../assets/customer.png'
import firstLogo from '../assets/CutomerImg/firstLogo.png'
import secondLogo from '../assets/CutomerImg/secondLogo.png'
import Custome1Img from '../assets/CutomerImg/Customer1Img.png'
import Custome2Img from '../assets/CutomerImg/Customer2Img.png'
import client1 from '../assets/CutomerImg/client1.png'
import client2 from '../assets/CutomerImg/client2.png'
import client3 from '../assets/CutomerImg/client3.png'
import client4 from '../assets/CutomerImg/client4.png'

const Customers = () => {
    return (
        <div className=' font-inter  bg-[#fcfefe]'>
            <div className='bg-[radial-gradient(circle_at_center,_#F5FBFC,_#fcfefe)] '>
                <div className=' border-x-2 border-gray-100 lg:w-9/12 w-11/12 m-auto'>
                    <div className='pt-12 text-center lg:w-9/12 w-11/12 border-x-2 border-gray-50 m-auto'>
                        <h1 className='m-auto xl:text-5xl lg:text-4xl sm:text-2xl text-xl mt-4  lg:leading-[60px] font-semibold '>
                            Meet the investor <br />
                            <span className="text-Primary italic font-serif font-light tracking-normal">building  the future</span> with Strabo
                        </h1>
                        <p className='text-gray-500 lg:text-xl mt-6 font-pretendard'>
                            Trusted by thousands, from thrifty students to <br /> financial advisers and retirees
                        </p>
                    </div>
                    <img src={customer} className='m-auto' alt="" />
                </div>
            </div>
            <div className='border-y-2 border-gray-100'>
                <div className=' border-x-2 border-gray-100 w-10/12 m-auto'>
                    <div>
                        <div className='text-start w-10/12 border-x-2 border-gray-100 m-auto'>
                            <div className='m-auto border-b-2 px-5 py-2 border-gray-100 '>
                                <img src={firstLogo} alt="" />
                            </div>
                        </div>
                        <div className='flex items-end sm:flex-row flex-col w-10/12 m-auto border-x-2 border-b-2 border-gray-100 justify-between'>
                            <div className='px-4 sm:w-6/12 w-full '>
                                <div className='text-gray-400 leading-loose'> FINANCIAL ADVISER</div>
                                <p className='lg:text-3xl sm:text-2xl text-xl leading-[40px] mt-5'>Leveraging custom pages & widgets for Keyman Wealth retail clients</p>
                                <button className='mt-5 text-gray-600'>Read case study <FontAwesomeIcon icon={faArrowRight} /></button> <br /> <br />
                            </div>
                            <div className='sm:w-6/12 w-full'>
                                <img src={Custome1Img} alt="" />
                            </div>
                        </div>
                        <div className='grid lg:grid-cols-2 grid-cols-1 mt-5 w-10/12 m-auto gap-3 justify-between'>
                            <div className='px-4 w-full border-2 border-gray-100 bg-gray-50 hover:bg-white rounded-lg '>
                                <div className='text-gray-800 h-12 font-semibold text-sm leading-loose border-b-2 flex items-center gap-2'>
                                    <img src={client1} alt="" className='w-1/12 rounded-md' /> <p>Jeremiah Johnson <span className='text-gray-400 border-l-2 px-3 font-light'>AI Consultant</span></p>
                                </div>
                                <div className='py-4'>
                                    <h1 className='text-gray-400 text-sm'>INDIVIDUAL</h1>
                                    <p className='lg:text-3xl sm:text-2xl text-xl leading-[40px] mt-5'>Managing personal assets across mainland Europe</p>
                                    <button className='mt-5 text-Primary'>Read case study <FontAwesomeIcon icon={faArrowRight} /></button>
                                </div>
                                <div className='border-t-2 flex gap-4 border-gray-100'>
                                    <div className='w-2/12 border-t-2 border-gray-500'>
                                        <h1 className='lg:text-4xl sm:text-2xl text-xl text-gray-800 font-semibold leading-relaxed'>3</h1>
                                        <p className='text-gray-500 text-sm'>countries</p>
                                    </div>
                                    <div className='w-6/12 border-t-2 border-gray-500'>
                                        <h1 className='lg:text-4xl sm:text-2xl text-xl text-gray-800 font-semibold leading-relaxed'>7</h1>
                                        <p className='text-gray-500 text-sm'>asset classes consolidated</p>
                                    </div>
                                </div>
                            </div>
                            <div className='px-4 w-full border-2 border-gray-100 hover:bg-gray-50 bg-white rounded-lg '>
                                <div className='text-gray-800 h-12 font-semibold text-sm leading-loose border-b-2 flex items-center gap-2'>
                                    <img src={client2} alt="" className='w-1/12 rounded-md' /> <p>Jeremiah Johnson   <span className='text-gray-400 border-l-2 px-3 font-light'>AI Consultant</span></p>
                                </div>
                                <div className='py-4'>
                                    <h1 className='text-gray-400 text-sm'>INDIVIDUAL</h1>
                                    <p className='lg:text-3xl sm:text-2xl text-xl leading-[40px] mt-5'>Building a crypto portfolio tracker with Strabo</p>
                                    <button className='mt-5 '>Read case study <FontAwesomeIcon icon={faArrowRight} /></button>
                                </div>
                                <div className='border-t-2 flex gap-4 border-gray-100'>
                                    <div className='w-4/12 border-t-2 border-gray-500'>
                                        <h1 className='lg:text-4xl sm:text-2xl text-xl text-gray-800 font-semibold leading-relaxed'>30+</h1>
                                        <p className='text-gray-500 text-sm'>cryptocurrencies</p>
                                    </div>
                                    <div className='w-6/12 border-t-2 border-gray-500'>
                                        <h1 className='lg:text-4xl sm:text-2xl text-xl text-gray-800 font-semibold leading-relaxed'>50%</h1>
                                        <p className='text-gray-500 text-sm'>time saved vs old dashboard</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-12'>
                        <div className='text-start w-10/12 border-x-2 border-gray-100 m-auto'>
                            <div className='m-auto border-y-2 px-5 py-2 border-gray-100 '>
                                <img src={secondLogo} alt="" />
                            </div>
                        </div>
                        <div className='flex items-end sm:flex-row-reverse flex-col w-10/12 m-auto border-x-2 border-b-2 border-gray-100 justify-between'>
                            <div className='px-4 sm:w-6/12 w-full  '>
                                <div className='text-gray-400 leading-loose'> FINANCIAL ADVISER</div>
                                <p className='text-3xl leading-[40px] mt-5'>Providing real time quarterly portfolio reporting for individual clients</p>
                                <button className='mt-5 text-gray-600'>Read case study <FontAwesomeIcon icon={faArrowRight} /></button> <br /> <br />
                            </div>
                            <div className='sm:w-6/12 w-full '>
                                <img src={Custome2Img} alt="" />
                            </div>
                        </div>
                        <div className='grid lg:grid-cols-2 grid-cols-1 mt-5 w-10/12 m-auto gap-3 justify-between'>
                            <div className='px-4 w-full border-2 border-gray-100 bg-gray-50 hover:bg-white rounded-lg '>
                                <div className='text-gray-800 h-12 font-semibold  text-sm leading-loose border-b-2 flex items-center gap-2'>
                                    <img src={client3} alt="" className='w-1/12 rounded-md' /> <p className='text-sm'>Lucy Woolfenden <span className='text-gray-400 border-l-2 px-3 font-light'>Founder, The Scale Up Collective</span></p>
                                </div>
                                <div className='py-4'>
                                    <h1 className='text-gray-400 text-sm'>INDIVIDUAL</h1>
                                    <p className='lg:text-3xl sm:text-2xl text-xl leading-[40px] mt-5'>Switching seamlessly between British and French accounts</p>
                                    <button className='mt-5 text-Primary'>Read case study <FontAwesomeIcon icon={faArrowRight} /></button>
                                </div>
                                <div className='border-t-2 flex gap-4 border-gray-100'>
                                    <div className='sm:w-2/12 w-5/12 border-t-2 border-gray-500'>
                                        <h1 className='lg:text-4xl sm:text-2xl text-xl text-gray-800 font-semibold leading-relaxed'>2</h1>
                                        <p className='text-gray-500 text-sm'>currencies</p>
                                    </div>
                                    <div className='w-3/12 border-t-2 border-gray-500'>
                                        <h1 className='lg:text-4xl sm:text-2xl text-xl text-gray-800 font-semibold leading-relaxed'>60%</h1>
                                        <p className='text-gray-500 text-sm'>more efficient</p>
                                    </div>
                                </div>
                            </div>
                            <div className='px-4 w-full border-2 border-gray-100 hover:bg-gray-50 bg-white rounded-lg '>
                                <div className='text-gray-800 h-12 font-semibold text-sm leading-loose border-b-2 flex items-center gap-2'>
                                    <img src={client4} alt="" className='w-1/12 rounded-md' /> <p>Hena Husain      <span className='text-gray-400 border-l-2 px-3 font-light'>Media & PR</span></p>
                                </div>
                                <div className='py-4'>
                                    <h1 className='text-gray-400 text-sm'>INDIVIDUAL</h1>
                                    <p className='lg:text-3xl sm:text-2xl text-xl leading-[40px] mt-5'>Managing growth stock investment portfolio
                                    </p>
                                    <button className='mt-5 '>Read case study <FontAwesomeIcon icon={faArrowRight} /></button>
                                </div>
                                <div className='border-t-2 flex gap-4 border-gray-100'>
                                    <div className='w-5/12 border-t-2 border-gray-500'>
                                        <h1 className='lg:text-4xl sm:text-2xl text-xl text-gray-800 font-semibold leading-relaxed'>3x</h1>
                                        <p className='text-gray-500 text-sm'>more stock information</p>
                                    </div>
                                    <div className='w-6/12 border-t-2 border-gray-500'>
                                        <h1 className='lg:text-4xl sm:text-2xl text-xl text-gray-800 font-semibold leading-relaxed'>20%</h1>
                                        <p className='text-gray-500 text-sm'>faster metrics updates</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border-b-2 border-gray-100 '>
                <div className='border-x-2 border-gray-100 w-10/12 m-auto'>
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
        </div>
    )
}

export default Customers
