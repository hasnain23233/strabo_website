import React from 'react'

const Plan = () => {
    return (
        <div className=' font-inter  bg-[#fcfefe]'>
            <div className='bg-[radial-gradient(circle_at_center,_#F5FBFC,_#fcfefe)] '>
                <div className=' border-x-2 border-gray-100 w-9/12 m-auto'>
                    <div className='pt-12 text-center w-9/12 border-x-2 border-gray-100 m-auto'>
                        <h1 className='m-auto text-5xl mt-4  leading-[60px] font-semibold '>
                            <span className="text-Primary italic font-serif font-light tracking-normal">We’re with you </span> every <br />
                            step of the way
                        </h1>
                        <div className='bg-gray-100 flex items-center px-2 w-8/12 m-auto mt-3 text-gray-500 rounded-md h-12'>
                            <button className='h-10 bg-white w-6/12 rounded-md'> Montly</button>
                            <button className='h-10  w-6/12 rounded-md'> Annual -35%</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Plan
