import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faLink } from '@fortawesome/free-solid-svg-icons';
import { faXTwitter, faFacebookF, faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";

import image1 from '../assets/getstarted/image1.png'
import image2 from '../assets/getstarted/image2.png'
import image3 from '../assets/getstarted/image3.png'
import image4 from '../assets/getstarted/image4.png'
import image5 from '../assets/getstarted/image5.png'

const GetStarted = () => {
    return (
        <div className=' font-inter  bg-[#fcfefe]'>
            <div className='bg-[radial-gradient(circle_at_center,_#F5FBFC,_#fcfefe)] '>
                <div className=' border-x-2 border-gray-100 lg:w-9/12 w-11/12 m-auto '>
                    <div className='pt-12 py-12 text-center lg:w-9/12 w-11/12 border-x-2 border-gray-100 m-auto'>
                        <h1 className='m-auto xl:text-5xl lg:text-4xl sm:text-2xl text-xl mt-4  lg:leading-[60px] font-semibold '>
                            Getting <span className="text-Primary italic font-serif font-light tracking-normal">Started</span>
                        </h1>
                        <p className='text-gray-500 lg:text-xl sm:text-lg text-sm mt-6 font-pretendard'>
                            Strabo is the future of net worth tracking—monitor, manage, and forecast your assets, liabilities, and investments worldwide.
                        </p>
                        <button className='bg-Primary text-white flex gap-2 justify-center m-auto xl:w-4/12 lg:w-6/12 sm:w-8/12 w-11/12 py-3 rounded-full mt-6'>Check out What's New <p className='-rotate-180'><FontAwesomeIcon icon={faAnglesLeft} /></p></button>

                    </div>
                </div>
            </div>
            <div className="w-10/12 m-auto flex lg:flex-row flex-col gap-4    mt-12">
                <div className="lg:w-4/12 w-11/12
                ">
                    <div className='border-b-2 border-gray-100 py-4'>
                        <h1 className='text-gray-700 text-xl'>Contributors</h1>
                        <div className='flex mt-3 gap-4'>
                            <img src={image1} alt="" />
                            <div>
                                <h1>Ben</h1>
                                <p className='text-gray-500'>Founder</p>
                            </div>
                        </div>
                        <div className='flex mt-3 gap-4'>
                            <img src={image2} alt="" />
                            <div>
                                <h1>Amy</h1>
                                <p className='text-gray-500'>Marketing</p>
                            </div>
                        </div>
                    </div>
                    <div className='py-4 border-b-2 border-gray-100'>

                        <p className='text-gray-400 '>
                            If you need any further support setting up your dashboard, you can reach us directly via hello@strabo.app, or using this form:
                        </p>
                        <input type="text" name="" id="" className='border-2 rounded-full px-4 h-12 w-full mt-3' placeholder='Enter Your Email Address' />
                    </div>
                    <div className="flex space-x-4 py-3">
                        {/* X (Twitter) */}
                        <a
                            href="#"
                            className="w-12 h-12 flex justify-center items-center rounded-full border border-gray-300 text-gray-500 hover:text-black hover:border-black transition"
                        >
                            <FontAwesomeIcon icon={faXTwitter} className="text-xl" />
                        </a>

                        {/* Facebook */}
                        <a
                            href="#"
                            className="w-12 h-12 flex justify-center items-center rounded-full border border-gray-300 text-gray-500 hover:text-blue-600 hover:border-blue-600 transition"
                        >
                            <FontAwesomeIcon icon={faFacebookF} className="text-xl" />
                        </a>

                        {/* LinkedIn */}
                        <a
                            href="#"
                            className="w-12 h-12 flex justify-center items-center rounded-full border border-gray-300 text-gray-500 hover:text-blue-700 hover:border-blue-700 transition"
                        >
                            <FontAwesomeIcon icon={faLinkedinIn} className="text-xl" />
                        </a>

                        {/* Instagram */}
                        <a
                            href="#"
                            className="w-12 h-12 flex justify-center items-center rounded-full border border-gray-300 text-gray-500 hover:text-pink-500 hover:border-pink-500 transition"
                        >
                            <FontAwesomeIcon icon={faInstagram} className="text-xl" />
                        </a>
                    </div>
                </div>
                <div className="lg:w-8/12 w-full ">
                    <div>
                        <h1 className='text-4xl text-gray-700 font-semibold'>Main Dashboard </h1>
                        <p className='text-gray-600 mt-3'>
                            <p className='py-2'>
                                This is the first page you’ll find on login. The top half is a current and historical breakdown of your net worth, by previous balances, asset allocation, diversification and country ranking.
                            </p>
                            <img src={image3} className='w-full' alt="" />
                        </p>
                    </div>
                    <div className='mt-8'>
                        <h1 className='text-4xl text-gray-700 font-semibold'>Adding Accounts</h1>
                        <p className='text-gray-600 mt-3'>
                            <p className='py-2'>
                                The UK has seen a boom in investing apps in recent years, which offer beginner investors an easy to use and accessible option to get into the market.
                            </p>
                            <p className='py-2'>
                                Investing is now simpler than ever thanks to these applications, which get rid of the need for pricy brokers or complicated procedures. Investing apps like Trading 212, Freetrade, and Revolut make it possible for young and beginner investors to take control of their investments with their user friendly interfaces, built in educational tools and minimal or no costs.
                            </p>
                            <p className='py-2'>
                                As the need for low cost investing options and financial independence continues to grow, the UK is expected to utilise mobile investing tools even more in 2025. More people in the UK are using apps to manage their money as a result of its adaptability, simplicity of use, and the growing trend towards digital financial solutions and increased awareness of personal financial planning, which makes investing apps an effective tool for beginner investors.
                            </p>
                        </p>
                    </div>
                    <div className='mt-8'>
                        <h1 className='text-4xl text-gray-700 font-semibold'>Benefits of Using Investing Apps for Beginners</h1>
                        <p className='text-gray-600 mt-3'>
                            <p className='py-2'>
                                To add accounts to your dashboard, simply navigate to the Accounts page and click Add Account in the top right of your screen. This will start off the Add Account flow. You’ll be given the choice to add accounts in two ways:</p>
                            <p className='py-2'>
                                <h1 className='text-gray-800 text-lg font-semibold'>Syncing to your bank</h1>
                                ‍This process will involve an automatic connection to your bank or financial institution, so that balances and other data can be pulled automatically. We are regulated by the Financial Conduct Authority to access this data, and do so using Plaid, Yodlee & Vezgo
                            </p>
                            <p className='py-2'>
                                <h1 className='text-gray-800 text-lg font-semibold'>‍Manually</h1>
                                You can also add accounts manually. This means that you input the name, balance, and growth rate, and we’ll add them to your dashboard for completeness. You can also find individual stocks by inputting their Ticker, tell us how many units you have and we’ll find the stock’s performance and add it too.
                            </p>
                        </p>
                    </div>
                    <div className='mt-8'>
                        <h1 className='text-4xl text-gray-700 font-semibold'>Investments Page</h1>
                        <p className='text-gray-600 mt-3'>
                            <p className='py-2'>
                                This is where you can dive a little deeper into your investments. Break down your net worth by key asset classes and observe historical performance, and the NW split over time. In the table at the bottom, you’ll also be able to see a line by line diagnostic of individual holdings, and their total returns.
                            </p>
                            <img src={image4} className='w-full' alt="" />
                            <div className='py-6 mt-5 flex justify-end gap-3 border-y-2 border-gray-100'>
                                <a
                                    href="#"
                                    className="w-3/12 h-12 flex justify-center items-center rounded-full border border-gray-300 text-gray-500 hover:text-black hover:border-black transition"
                                >
                                    <FontAwesomeIcon icon={faLink} /> &nbsp; Copy link
                                </a>
                                {/* X (Twitter) */}
                                <a
                                    href="#"
                                    className="w-12 h-12 flex justify-center items-center rounded-full border border-gray-300 text-gray-500 hover:text-black hover:border-black transition"
                                >
                                    <FontAwesomeIcon icon={faXTwitter} className="text-xl" />
                                </a>

                                {/* Facebook */}
                                <a
                                    href="#"
                                    className="w-12 h-12 flex justify-center items-center rounded-full border border-gray-300 text-gray-500 hover:text-blue-600 hover:border-blue-600 transition"
                                >
                                    <FontAwesomeIcon icon={faFacebookF} className="text-xl" />
                                </a>

                                {/* LinkedIn */}
                                <a
                                    href="#"
                                    className="w-12 h-12 flex justify-center items-center rounded-full border border-gray-300 text-gray-500 hover:text-blue-700 hover:border-blue-700 transition"
                                >
                                    <FontAwesomeIcon icon={faLinkedinIn} className="text-xl" />
                                </a>
                            </div>
                        </p>
                    </div>
                    <div className='mt-8'>
                        <h1 className='text-4xl text-gray-700 font-semibold'>Tags</h1>
                        <p className='text-gray-600 mt-3'>
                            <p className='py-2'>
                                Account tagging is a system we’ve implemented to allow you to tag and segment accounts into groups. This means that you can separate your accounts into chunks based on their purpose - financial independence, children’s education fund, retirement, or for a specific goal like a holiday. You can then track this group towards their goal on your dashboard.
                            </p>
                        </p>
                    </div>
                    <div className='mt-8'>
                        <h1 className='text-4xl text-gray-700 font-semibold'>What's Next?</h1>
                        <p className='text-gray-600 mt-3'>
                            <p className='py-2'>
                                We’ve got a number of exciting developments in the works, and we’d love to hear what you’d like to see next. You can find our Public Roadmap here, where you can leave comments and feedback, or do this directly in-platform using the help box.
                            </p>
                        </p>
                    </div>
                    <div className='mt-8'>
                        <h1 className='text-4xl text-gray-700 font-semibold'>Bugs</h1>
                        <p className='text-gray-600 mt-3'>
                            <p className='py-2'>
                                Strabo is an early stage platform, and so you’re bound to encounter a bug every now and again. If this happens, please refresh your browser and if this still doesn’t fix it, raise a ticket using the question mark symbol in the bottom left of your dashboard.
                            </p>
                            <img src={image5} className='w-full' alt="" />
                        </p>
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
                        <input type="text" name="text" className='px-4 w-3/12 focus:outline-none py-2 rounded-2xl text-sm border-2 mt-3 border-gray-100' id="" placeholder='Enter your email Address' />
                        <button className="bg-gray-800 text-white border-2 text-sm border-gray-100 rounded-full px-4 py-2 mt-3 hover:shadow ml-3">
                            Contact Us
                        </button>
                        <br /><br />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default GetStarted
