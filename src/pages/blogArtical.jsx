import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const BlogArtical = () => {
    const cards = [
        {
            image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            category: "INVESTING • PROJECT INSIGHT",
            title: "Best Investing Apps for Beginners UK: Top Choices to Start Your Investment Journey in 2025",
            description: "Discover the best investing apps in the UK for first-time investors so you can manage your money and build your portfolio today."
        },
        {
            image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            category: "INVESTING • PROJECT INSIGHT",
            title: "Best Investing Apps for Beginners UK: Top Choices to Start Your Investment Journey in 2025",
            description: "Discover the best investing apps in the UK for first-time investors so you can manage your money and build your portfolio today."
        },
        {
            image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            category: "INVESTING • PROJECT INSIGHT",
            title: "Best Investing Apps for Beginners UK: Top Choices to Start Your Investment Journey in 2025",
            description: "Discover the best investing apps in the UK for first-time investors so you can manage your money and build your portfolio today."
        },
        {
            image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            category: "INVESTING • PROJECT INSIGHT",
            title: "Best Investing Apps for Beginners UK: Top Choices to Start Your Investment Journey in 2025",
            description: "Discover the best investing apps in the UK for first-time investors so you can manage your money and build your portfolio today."
        },
        {
            image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            category: "INVESTING • PROJECT INSIGHT",
            title: "Best Investing Apps for Beginners UK: Top Choices to Start Your Investment Journey in 2025",
            description: "Discover the best investing apps in the UK for first-time investors so you can manage your money and build your portfolio today."
        },
    ];

    const cardsUpper = [
        {
            image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3De",
            category: "INVESTING • PROJECT INSIGHT",
            title: "Best Investing Apps for Beginners UK: Top Choices to Start Your Investment Journey in 2025",
            description: "Discover the best investing apps in the UK for first-time investors so you can manage your money and build your portfolio today."
        },
        {
            image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            category: "INVESTING • PROJECT INSIGHT",
            title: "Best Investing Apps for Beginners UK: Top Choices to Start Your Investment Journey in 2025",
            description: "Discover the best investing apps in the UK for first-time investors so you can manage your money and build your portfolio today."
        }
    ];
    return (
        <div className='font-inter bg-[#fcfefe]'>
            {/* Hero Section */}
            <div className='bg-[radial-gradient(circle_at_center,_#F5FBFC,_#fcfefe)]'>
                <div className='border-x-2 border-gray-100 lg:w-9/12 w-11/12 m-auto'>
                    <div className='py-28 text-center lg:w-9/12 w-11/12 border-x-2 border-gray-100 m-auto'>
                        <h1 className='m-auto  xl:text-5xl lg:text-4xl sm:text-2xl text-xl mt-4 lg:leading-[60px] font-semibold'>
                            Blogs and Articles
                        </h1>
                        <p className='text-gray-500 lg:text-xl sm:text-lg text-sm  mt-6 font-pretendard'>
                            Grab a coffee & have a browse
                        </p>
                    </div>
                </div>
            </div>

            {/* Categories + Search */}
            <div className='w-11/12 m-auto flex items-center lg:flex-row flex-col gap-4 justify-between mt-10'>
                <ul className='flex lg:items-center justify-between lg:flex-row flex-col gap-3 lg:w-10/12 w-full'>
                    <li className='border rounded-full hover:bg-gray-900 hover:text-white text-sm text-center py-2 px-8'>All Categories</li>
                    <li className='border rounded-full hover:bg-gray-900 hover:text-white text-sm text-center py-2 px-8'><Link to={'/InvestmentFeatures'}> Investing</Link></li>
                    <li className='border rounded-full hover:bg-gray-900 hover:text-white text-sm text-center py-2 px-8'>Financial Independence</li>
                    <li className='border rounded-full hover:bg-gray-900 hover:text-white text-sm text-center py-2 px-8'>Company Updates</li>
                    <li className='border rounded-full hover:bg-gray-900 hover:text-white text-sm text-center py-2 px-8'>Saving</li>
                    <li className='border rounded-full hover:bg-gray-900 hover:text-white text-sm text-center py-2 px-8'>Guides</li>
                </ul>
                <div className='lg:w-2/12 w-full relative'>
                    <input
                        type="text"
                        className='border rounded-full h-8 w-full focus:outline-none text-sm px-10'
                        placeholder='Search Articles'
                    />
                    <p className='absolute top-1 left-3'>
                        <FontAwesomeIcon icon={faSearch} size="sm" />
                    </p>
                </div>
            </div>
            <div className="w-11/12 mx-auto grid md:grid-cols-2 grid-cols-1 gap-6 mt-10">
                {cardsUpper.map((card, index) => (
                    <div key={index} className="bg-white shadow rounded-lg overflow-hidden flex flex-col sm:flex-row">
                        {/* Image */}
                        <img
                            src={card.image}
                            alt="Blog"
                            className="sm:w-1/2 w-full h-full object-cover"
                        />

                        {/* Content */}
                        <div className="p-5 flex flex-col justify-between sm:w-1/2">
                            <div>
                                <div className="text-sm text-gray-500 uppercase tracking-wide mb-2">{card.category}</div>
                                <h2 className="text-lg font-semibold text-gray-900 mb-2">{card.title}</h2>
                                <p className="text-gray-600 text-sm mb-4">{card.description}</p>
                            </div>
                            <a href="#" className="text-gray-600 font-medium hover:underline">
                                Read article →
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {/* Blog Cards Grid */}
            <div className='w-11/12 m-auto mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 '>
                {cards.map((card, index) => (
                    <div key={index} className='bg-white shadow rounded-lg overflow-hidden'>
                        <img src={card.image} alt="Blog" className="w-full h-48 object-cover" />
                        <div className="p-5">
                            <div className="text-sm text-gray-500 uppercase tracking-wide mb-2">{card.category}</div>
                            <h2 className="text-lg font-semibold text-gray-900 mb-2">{card.title}</h2>
                            <p className="text-gray-600 text-sm mb-4">{card.description}</p>
                            <a href="#" className="text-gray-600 font-medium hover:underline">
                                Read article →
                            </a>
                        </div>
                    </div>
                ))}
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
        </div>
    )
}

export default BlogArtical
