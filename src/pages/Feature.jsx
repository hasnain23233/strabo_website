import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faUser, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FaCheckCircle } from "react-icons/fa";

const Feature = () => {
    return (
        <div className='font-inter bg-[#fcfefe]'>
            <div className='bg-[radial-gradient(circle_at_center,_#F5FBFC,_#fcfefe)] '>
                <div className=' border-x-2 border-gray-100 w-9/12 m-auto'>
                    <div className='py-16  text-center w-9/12 border-x-2 border-gray-100 m-auto'>
                        <h1 className='m-auto text-5xl mt-4  leading-[60px] font-semibold '>
                            Core  <span className="text-Primary italic font-serif font-light tracking-normal">features</span> <br />

                        </h1>
                        <p className='text-gray-500 text-xl mt-6 font-pretendard'>
                            Discover what makes the Strabo platform uniquere.
                        </p>
                        <div className='flex items-center justify-center gap-2 mt-4'>
                            <p className='w-3/12'>
                                <button className='bg-Primary text-white flex gap-2 justify-center m-auto w-full  py-3 rounded-full'>Get Started <p className='-rotate-180'><FontAwesomeIcon icon={faAnglesLeft} /></p></button>
                            </p>
                            <p className='w-3/12'>
                                <button className='bg-white text-gray-600 flex gap-2 justify-center m-auto w-full  py-3 rounded-full border'>Contact us </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border-x-2 border-gray-100 w-10/12 m-auto'>
                <div className=" flex items-center  p-2">
                    <div className=" px-12 py-28 w-6/12">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Connect Manual and Synced Accounts
                            </h2>
                            <p className="text-gray-600 mb-6">
                                Choose from more than 10,000 institutions to sync with,
                                or manually configure your own
                            </p>

                            <div className="space-y-3  rounded-md p-4">
                                <div className="flex items-center gap-3 border-b border-dotted border-gray-300 pb-2">
                                    <FaCheckCircle className="text-Primary w-5 h-5" />
                                    <p className="text-gray-800">
                                        Banks, stocks, crypto, property & more
                                    </p>
                                </div>
                                <div className="flex items-center gap-3 border-b border-dotted border-gray-300 pb-2">
                                    <FaCheckCircle className="text-Primary w-5 h-5" />
                                    <p className="text-gray-800">
                                        Crypto assets direct from your wallet ID
                                    </p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <FaCheckCircle className="text-Primary  w-5 h-5" />
                                    <p className="text-gray-800">
                                        Live stock prices, news & analyst data
                                    </p>
                                </div>
                            </div>

                            <button className="mt-6 inline-flex items-center px-5 py-2 rounded-full  border-2 bg-white border-gray-100 text-gray-800 hover:bg-gray-200 transition">
                                Learn more →
                            </button>
                        </div>

                    </div>
                    <div className='h-96 w-6/12 bg-white shadow-xl rounded-xl'></div>
                </div>
                <div className=" flex items-center flex-row-reverse  p-2">
                    <div className=" px-12 py-28 w-6/12">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Account Tagging
                            </h2>
                            <p className="text-gray-600 mb-6">
                                Tag accounts to group and analyse together: think Kids Education, Holiday or Emergency
                            </p>

                            <div className="space-y-3  rounded-md p-4">
                                <div className="flex items-center gap-3 border-b border-dotted border-gray-300 pb-2">
                                    <FaCheckCircle className="text-Primary w-5 h-5" />
                                    <p className="text-gray-800">
                                        Use preset tags or create your own
                                    </p>
                                </div>
                                <div className="flex items-center gap-3 border-b border-dotted border-gray-300 pb-2">
                                    <FaCheckCircle className="text-Primary w-5 h-5" />
                                    <p className="text-gray-800">
                                        Group assets on your accounts page
                                    </p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <FaCheckCircle className="text-Primary  w-5 h-5" />
                                    <p className="text-gray-800">
                                        Filter custom widgets with your new tags
                                    </p>
                                </div>
                            </div>

                            <button className="mt-6 inline-flex items-center px-5 py-2 rounded-full border-2 bg-white border-gray-100 text-gray-800 hover:bg-gray-200 transition">
                                Learn more →
                            </button>
                        </div>
                    </div>
                    <div className='h-96 w-6/12 bg-white shadow-xl rounded-xl'></div>
                </div>
                <div className=" flex items-center  p-2">
                    <div className=" px-12 py-28 w-6/12">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Currency switcher
                            </h2>
                            <p className="text-gray-600 mb-6">
                                Choose your base currency and then switch between live rates at the click of a button
                            </p>

                            <div className="space-y-3  rounded-md p-4">
                                <div className="flex items-center gap-3 border-b border-dotted border-gray-300 pb-2">
                                    <FaCheckCircle className="text-Primary w-5 h-5" />
                                    <p className="text-gray-800">
                                        200+ global currencies available
                                    </p>
                                </div>
                                <div className="flex items-center gap-3 border-b border-dotted border-gray-300 pb-2">
                                    <FaCheckCircle className="text-Primary w-5 h-5" />
                                    <p className="text-gray-800">
                                        Ideal for users with cross-border assets
                                    </p>
                                </div>
                            </div>

                            <button className="mt-6 inline-flex items-center px-5 py-2 rounded-full border-2 bg-white border-gray-100 text-gray-800 hover:bg-gray-200 transition">
                                Learn more →
                            </button>
                        </div>
                    </div>
                    <div className='h-96 w-6/12 bg-white shadow-xl rounded-xl'></div>
                </div>
                <div className=" flex items-center flex-row-reverse p-2">
                    <div className=" px-12 py-28 w-6/12">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Privacy toggle
                            </h2>
                            <p className="text-gray-600 mb-6">
                                Hide balances and key information so that you can log in at work or in front of family & friends
                            </p>

                            <div className="space-y-3  rounded-md p-4">
                                <div className="flex items-center gap-3 border-b border-dotted border-gray-300 pb-2">
                                    <FaCheckCircle className="text-Primary w-5 h-5" />
                                    <p className="text-gray-800">
                                        Discover the privacy toggle in your header bar
                                    </p>
                                </div>
                                <div className="flex items-center gap-3 border-b border-dotted border-gray-300 pb-2">
                                    <FaCheckCircle className="text-Primary w-5 h-5" />
                                    <p className="text-gray-800">
                                        Switch between obscured and visible balances
                                    </p>
                                </div>
                            </div>

                            <button className="mt-6 inline-flex items-center px-5 py-2 rounded-full border-2 bg-white border-gray-100 text-gray-800 hover:bg-gray-200 transition">
                                Learn more →
                            </button>
                        </div>
                    </div>
                    <div className='h-96 w-6/12 bg-white shadow-xl rounded-xl'></div>
                </div>
                <div className=" flex items-center p-2">
                    <div className=" px-12 py-28 w-6/12">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Pages
                            </h2>
                            <p className="text-gray-600 mb-6">
                                You have four default pages: beyond that, you can add and configure as many as you like
                            </p>

                            <div className="space-y-3  rounded-md p-4">
                                <div className="flex items-center gap-3 border-b border-dotted border-gray-300 pb-2">
                                    <FaCheckCircle className="text-Primary w-5 h-5" />
                                    <p className="text-gray-800">
                                        Start with our 4 base immutable pages
                                    </p>
                                </div>
                                <div className="flex items-center gap-3 border-b border-dotted border-gray-300 pb-2">
                                    <FaCheckCircle className="text-Primary w-5 h-5" />
                                    <p className="text-gray-800">
                                        Add unlimited custom pages to your dashboard
                                    </p>
                                </div>
                                <div className="flex items-center gap-3 border-b border-dotted border-gray-300 pb-2">
                                    <FaCheckCircle className="text-Primary w-5 h-5" />
                                    <p className="text-gray-800">
                                        Export pages to email reporting or external widgets
                                    </p>
                                </div>
                            </div>

                            <button className="mt-6 inline-flex items-center px-5 py-2 rounded-full border-2 bg-white border-gray-100 text-gray-800 hover:bg-gray-200 transition">
                                Learn more →
                            </button>
                        </div>
                    </div>
                    <div className='h-96 w-6/12 bg-white shadow-xl rounded-xl'></div>
                </div>
                <div className=" flex items-center flex-row-reverse p-2">
                    <div className=" px-12 py-28 w-6/12">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Flexible widgets
                            </h2>
                            <p className="text-gray-600 mb-6">
                                Populate new pages with flexible, configurable widgets from our growing list, or suggest more
                            </p>

                            <div className="space-y-3  rounded-md p-4">
                                <div className="flex items-center gap-3 border-b border-dotted border-gray-300 pb-2">
                                    <FaCheckCircle className="text-Primary w-5 h-5" />
                                    <p className="text-gray-800">
                                        Configure widgets by account, asset or country
                                    </p>
                                </div>
                                <div className="flex items-center gap-3 border-b border-dotted border-gray-300 pb-2">
                                    <FaCheckCircle className="text-Primary w-5 h-5" />
                                    <p className="text-gray-800">
                                        Group and filter by tagged accounts
                                    </p>
                                </div>
                                <div className="flex items-center gap-3 border-b border-dotted border-gray-300 pb-2">
                                    <FaCheckCircle className="text-Primary w-5 h-5" />
                                    <p className="text-gray-800">
                                        Drag and drop widgets throughout pages
                                    </p>
                                </div>
                            </div>

                            <button className="mt-6 inline-flex items-center px-5 py-2 rounded-full border-2 bg-white border-gray-100 text-gray-800 hover:bg-gray-200 transition">
                                Learn more →
                            </button>
                        </div>
                    </div>
                    <div className='h-96 w-6/12 bg-white shadow-xl rounded-xl'></div>
                </div>
                <div className=" flex items-center p-2">
                    <div className=" px-12 py-28 w-6/12">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Strabo AI
                            </h2>
                            <p className="text-gray-600 mb-6">
                                You'll use Strabo AI to generate reports, summarise pages and populate your widgets
                            </p>

                            <div className="space-y-3  rounded-md p-4">
                                <div className="flex items-center gap-3 border-b border-dotted border-gray-300 pb-2">
                                    <FaCheckCircle className="text-Primary w-5 h-5" />
                                    <p className="text-gray-800">
                                        Retrieve portfolio insights as your assets grow
                                    </p>
                                </div>
                                <div className="flex items-center gap-3 border-b border-dotted border-gray-300 pb-2">
                                    <FaCheckCircle className="text-Primary w-5 h-5" />
                                    <p className="text-gray-800">
                                        Check diversification, performance and price changes
                                    </p>
                                </div>
                                <div className="flex items-center gap-3 border-b border-dotted border-gray-300 pb-2">
                                    <FaCheckCircle className="text-Primary w-5 h-5" />
                                    <p className="text-gray-800">
                                        Generate charts, graphics & suggestions
                                    </p>
                                </div>
                            </div>

                            <button className="mt-6 inline-flex items-center px-5 py-2 rounded-full border-2 bg-white border-gray-100 text-gray-800 hover:bg-gray-200 transition">
                                Learn more →
                            </button>
                        </div>
                    </div>
                    <div className='h-96 w-6/12 bg-white shadow-xl rounded-xl'></div>
                </div>
                <div className=" flex items-center flex-row-reverse p-2">
                    <div className=" px-12 py-28 w-6/12">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Collectibles
                            </h2>
                            <p className="text-gray-600 mb-6">
                                Why stick to stocks and bonds? Sync up your sneakers, paintings, cars and trading cards
                            </p>

                            <div className="space-y-3  rounded-md p-4">
                                <div className="flex items-center gap-3 border-b border-dotted border-gray-300 pb-2">
                                    <FaCheckCircle className="text-Primary w-5 h-5" />
                                    <p className="text-gray-800">
                                        Add vehicles, trading cards and more to your portfolio
                                    </p>
                                </div>
                                <div className="flex items-center gap-3 border-b border-dotted border-gray-300 pb-2">
                                    <FaCheckCircle className="text-Primary w-5 h-5" />
                                    <p className="text-gray-800">
                                        Gain real time price information using our AI estimator
                                    </p>
                                </div>
                            </div>

                            <button className="mt-6 inline-flex items-center px-5 py-2 rounded-full border-2 bg-white border-gray-100 text-gray-800 hover:bg-gray-200 transition">
                                coming soon
                            </button>
                        </div>
                    </div>
                    <div className='h-96 w-6/12 bg-white shadow-xl rounded-xl'></div>
                </div>
            </div>
            <div className=' border-y-2 w-full border-gray-100 m-auto '>
                <div className='border-x-2 border-gray-100 w-10/12 m-auto'>
                    <div className='w-full m-auto text-center '>
                        <h1 className='m-auto text-4xl text-center pt-12   leading-[60px] font-semibold '>
                            Join our  <span className="text-Primary italic font-serif font-light tracking-normal">newsletter</span>
                        </h1>
                        <p className='text-gray-600'>Want to keep track of what we're up to without the commitment? <br /> You can sign up to the newsletter below.</p>
                        <input type="text" name="text" className='px-4 w-3/12 focus:outline-none py-2 rounded-2xl text-sm border-2 border-gray-100' id="" placeholder='Enter your email Address' />
                        <button className="bg-gray-800 text-white border-2 text-sm border-gray-100 rounded-full px-4 py-2 mt-4 hover:shadow ml-3">
                            Contact Us
                        </button>
                        <br /><br />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Feature
