import React, { useState } from 'react'
import Slider from '../components/Slider'

const Plan = () => {
    const [text, setText] = useState(true)
    return (
        <div className='font-inter bg-[#fcfefe]'>
            <div className='bg-[radial-gradient(circle_at_center,_#F5FBFC,_#fcfefe)]'>
                <div className=''>
                    <div className='border-x-2 border-gray-100 w-9/12 m-auto'>

                        {/* Heading Section */}
                        <div className='py-12  text-center w-9/12 border-x-2 border-gray-100 m-auto'>
                            <h1 className='m-auto text-5xl mt-4 leading-[60px] font-semibold'>
                                <span className="text-Primary italic font-serif font-light tracking-normal">We’re with you </span> every <br />
                                step of the way
                            </h1>

                            {/* Toggle Buttons */}
                            <div className='bg-gray-100 flex items-center font-semibold px-2 w-8/12 m-auto mt-3 text-gray-500 rounded-xl h-12'>
                                <button className='h-10 bg-white w-6/12 border rounded-md'>Monthly</button>
                                <button className='h-10 w-6/12 rounded-md'>Annual <span className="text-Primary">-35%</span></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-y-2 border-gray-100 ">
                    <div className="flex justify-center items-start gap-8 ">
                        {/* Pro Plan */}
                        <div className="bg-white shadow-xl rounded-2xl p-6 w-80">
                            <h2 className="text-xl font-semibold mb-2">Pro Plan</h2>
                            <p className="text-gray-500 mb-4">Unlock Strabo's full potential.</p>
                            <div className="text-3xl font-bold mb-4 ">
                                £ 9.00<span className="text-base text-gray-400">&nbsp; /month</span>
                            </div>

                            <button className="w-full bg-Primary text-white py-2 rounded-full font-medium mb-6">
                                Try 7 days for FREE →
                            </button>

                            <ul className="space-y-3 text-gray-600">
                                <li>✔ Unlimited synced connections</li>
                                <li>✔ Advanced insights</li>
                                <li>✔ Unlimited pages & widgets</li>
                                <li>✔ Unlimited manual connections</li>
                                <li>✔ Strabo AI assistant</li>
                            </ul>
                        </div>

                        {/* Adviser Plan */}
                        <div className=" rounded-2xl p-6 w-80">
                            <h2 className="text-xl font-semibold mb-2">Adviser Plan</h2>
                            <p className="text-gray-500 mb-4">Your adviser-client portal</p>
                            <div className="text-3xl font-bold mb-4">
                                £ 150.<span className="text-xl">00</span><span className="text-base">/month</span>
                            </div>

                            <button className="w-full border border-gray-300 hover:bg-gray-100 py-2 rounded-full bg-white font-medium mb-6">
                                Contact us now →
                            </button>

                            <ul className="space-y-3 text-gray-600">
                                <li>✔ Multi-tenancy login</li>
                                <li>✔ Client management</li>
                                <li>✔ Email reporting</li>
                                <li>✔ Whitelabel license</li>
                                <li>✔ Unlimited pages</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Slider />
            </div>
        </div>
    )
}

export default Plan
