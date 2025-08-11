import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faUser, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import FistImage from '../assets/stradoForAdvistor/FistImage.png'
import secondImage from '../assets/stradoForAdvistor/secondImage.png'

const strabloForAdviser = () => {
    return (
        <div className='font-inter bg-[#fcfefe]'>
            <div className='bg-[radial-gradient(circle_at_center,_#F5FBFC,_#fcfefe)] '>
                <div className=' border-x-2 border-gray-100 w-9/12 m-auto'>
                    <div className='py-12  text-center w-9/12 border-x-2 border-gray-100 m-auto'>
                        <h1 className='m-auto text-5xl mt-4  leading-[60px] font-semibold '>
                            Smarter <span className="text-Primary italic font-serif font-light tracking-normal">wealth management</span> <br />
                            for your clients
                        </h1>
                        <p className='text-gray-500 text-xl mt-6 font-pretendard'>
                            Strabo’s dashboards and analytics help financial advisers and wealth managers deliver better results—anytime, anywhere.
                        </p>
                        <div className='flex items-center justify-center gap-2 mt-4'>
                            <input type="text" name="text" className='px-4 w-5/12 focus:outline-none py-2 rounded-full h-14 text-sm border-2 border-gray-100' id="" placeholder='Enter your email Address' />
                            <p className='w-3/12'>
                                <button className='bg-Primary text-white flex gap-2 justify-center m-auto w-full  py-3 rounded-full'>Explore <p className='-rotate-180'><FontAwesomeIcon icon={faAnglesLeft} /></p></button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative w-11/12 bg-white h-96 shadow-[0_-4px_6px_rgba(0,0,0,0.1)] rounded-2xl m-auto overflow-hidden">

                {/* Bottom blur overlay */}
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t to-white from-[#fcfcfceb] z-10" />
            </div>
            <div className='flex justify-between w-10/12 gap-3 py-2 m-auto mt-16'>
                <div className='w-6/12'>
                    <h1 className='m-auto text-4xl  leading-[60px] font-semibold '>
                        Header for intro <br /> section <span className="text-Primary italic font-serif font-light tracking-normal">will be here</span> <br />
                    </h1>
                </div>
                <div className='w-6/12 '>
                    <p className='tracking-wider text-gray-700 leading-loose font-light'>
                        Say goodbye to scattered data and hello to clarity. Strabo equips financial advisers and wealth managers with a single, intuitive platform to track, analyze, and optimize client portfolios—globally. Deliver personalized insights, streamline your workflow, and impress your clients with cutting-edge tools tailored to your expertise.
                    </p>
                    <p className='w-4/12 mt-4'>
                        <button className='bg-Primary text-white flex gap-2 justify-center m-auto w-full  py-3 rounded-full'>Get a demo now <p className='-rotate-180'><FontAwesomeIcon icon={faAnglesLeft} /></p></button>
                    </p>
                </div>
            </div>
            <div className='text-center w-11/12 m-auto mt-20 border-x-2 border-gray-100'>
                <h1 className='m-auto text-5xl mt-4  py-4 leading-[60px] font-semibold '>
                    Reasons why Strabo is the <br /> <span className="text-Primary italic font-serif font-light tracking-normal">right choice </span>
                    for you
                </h1>
            </div>
            <div className="border-y-2 border-gray-100">
                <div className="w-11/12 m-auto border-x-2 border-gray-100">
                    <img src={FistImage} alt="" className='w-full' />
                </div>
            </div>
            <div className='text-start w-11/12 m-auto mt-20 border-x-2 border-gray-100'>
                <h1 className='m-auto text-5xl mt-4  py-4 px-3 leading-[60px] font-semibold '>
                    Get started with just <br /> <span className="text-Primary italic font-serif font-light tracking-normal">three simple </span>
                    steps
                </h1>
            </div>
            <div className="border-y-2 border-gray-100">
                <div className="w-11/12 m-auto border-x-2 border-gray-100">
                    <img src={secondImage} alt="" className='w-full' />
                </div>
            </div>
            <div className=' border-b-2 w-full border-gray-100 m-auto '>
                <div className='border-x-2 border-gray-100 w-11/12 m-auto'>
                    <div className='w-full m-auto text-center '>
                        <h1 className='m-auto text-4xl text-center pt-12 font-semibold '>
                            Join the advisers <br /> <span className="text-Primary italic font-serif font-light tracking-normal">winning </span> with Strabo
                        </h1>
                        <p className='text-gray-600 mt-3'>Request a free demo and see how Strabo can elevate <br /> your advisory game</p>
                        <input type="text" name="text" className='px-4 w-3/12 focus:outline-none py-2 rounded-2xl text-sm border-2 border-gray-100' id="" placeholder='Enter your email Address' />
                        <button className="bg-gray-800 text-white border-2 text-sm border-gray-100 rounded-full px-4 py-2 mt-6 hover:shadow ml-3">
                            Get you demo
                        </button>
                        <br /><br />
                    </div>
                </div>

            </div>
        </div >
    )
}

export default strabloForAdviser
