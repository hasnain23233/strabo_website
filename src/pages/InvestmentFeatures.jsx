import React from 'react'

const InvestmentFeatures = () => {
    const content = [
        {
            title: "Easy to use interface",
            desc: "The app should be simple and easy to use and intuitive, this will help first-timers to better understand investment options available and finding content shouldn’t be a struggle."
        },
        {
            title: "Educational resources",
            desc: "Best investment apps include educational resources such as FAQs, videos, tutorials, articles, and glossary of key investment terms."
        },
        {
            title: "Real-time market data",
            desc: "Providing access to live stock exchange data as well as quick notifications, important market events, and price changes."
        },
        {
            title: "Portfolio management",
            desc: "Investment apps should offer simple management tools for beginners. To protect your assets, choose apps that suggest changes to help you meet your long-term investment goals."
        },
        {
            title: "Low minimum investment",
            desc: "Beginner-friendly apps should allow you to start with as little as £1, making it more accessible."
        },
        {
            title: "Automated features",
            desc: "Some apps offer automation options like recurring investments, portfolio rebalancing, and dividend reinvestment plans."
        },
        {
            title: "Security features",
            desc: "Ensure the app has features like two-step verification, biometric login, and strong encryption to protect your account."
        },
        {
            title: "Fees and commissions",
            desc: "Look for low or zero fees on trades and clear details on costs."
        },
        {
            title: "Types of investment accounts",
            desc: "Check if multiple account types are available, such as ISAs or general investment accounts."
        }
    ]
    const articles = [
        {
            img: "https://via.placeholder.com/600x400", // Replace with actual image
            category: "INVESTING",
            date: "FEB 5 2025",
            title: "Best Investing Apps for Beginners UK: Top Choices to Start Your Investment Journey in 2025",
            link: "#"
        },
        {
            img: "https://via.placeholder.com/600x400",
            category: "INVESTING",
            date: "FEB 5 2025",
            title: "Best Investing Apps for Beginners UK: Top Choices to Start Your Investment Journey in 2025",
            link: "#"
        },
        {
            img: "https://via.placeholder.com/600x400",
            category: "INVESTING",
            date: "FEB 5 2025",
            title: "Best Investing Apps for Beginners UK: Top Choices to Start Your Investment Journey in 2025",
            link: "#"
        }
    ];
    return (
        <div className='font-inter bg-[#fcfefe]'>
            <div className='bg-[radial-gradient(circle_at_center,_#F5FBFC,_#fcfefe)] '>
                <div className=' border-x-2 border-gray-100 w-9/12 m-auto'>
                    <div className='pt-12 text-center w-9/12 border-x-2 border-gray-100 m-auto'>
                        <div className='flex w-6/12 m-auto items-center  justify-center '>
                            <p className='border-2  w-[100px] py-2 m-auto bg-white text-[13px] rounded-full '>
                                Investing
                            </p>
                            <p className='text-Primary border-l-2 border-gray-100 w-8/12 ' >Published 27 February, 2025</p>
                        </div>
                        <h1 className='m-auto text-5xl mt-4  leading-[60px] font-semibold '>
                            Best Investing Apps for Beginners UK: Top Choices to Start Your Investment Journey in 2025
                        </h1>
                    </div>
                </div>
                <div className="relative w-10/12 m-auto overflow-hidden">
                    <img src={'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} className="w-full h-[404px] rounded-md" alt="" />

                </div>
            </div>
            <div className="w-10/12 m-auto mt-12 flex gap-3 justify-between">
                <div className='w-3/12'>
                    <div>
                        <h1>Table of contents</h1>

                        <div className='border-l-2 border-gray-100 mt-2 space-y-3 text-sm'>
                            <p className='border-l-2 border-Primary text-Primary pl-3'>Introduction</p>
                            <p className=' pl-3 text-gray-600'>Why Use Investing Apps in the UK</p>
                            <p className='pl-3 text-gray-600'>Benefits of Using Investing Apps for Beginners</p>
                        </div>
                    </div>
                    <div className='mt-4 text-sm'>
                        <h1 className='text-gray-600'>Key Features to Look for in an Investment App for Beginners in the UK</h1>

                        <div className='border-l-2 border-gray-100 mt-2 space-y-3 text-sm'>
                            <p className=' pl-3 text-gray-600'>East to use interface</p>
                            <p className=' pl-3 text-gray-600'>Educational Resources</p>
                            <p className='pl-3 text-gray-600'>Platform fees</p>
                            <p className='pl-3 text-gray-600'>Low minimum investment</p>
                            <p className='pl-3 text-gray-600'>Portfolio diversification tools </p>
                            <p className='pl-3 text-gray-600'>Robo-Advisor Features </p>
                            <p className='pl-3 text-gray-600'>Security features  </p>
                            <p className='pl-3 text-gray-600'>Current market data  </p>
                            <p className='pl-3 text-gray-600'>Type of investment accounts fees </p>
                        </div>
                    </div>
                </div>
                <div className='w-8/12'>
                    <div>
                        <h1 className='text-4xl text-gray-700 font-semibold'>Introduction</h1>
                        <p className='text-gray-600 mt-3'>
                            <p className='py-2'>
                                In 2025, <span className='underline'>investing</span> is an essential step for anyone seeking to secure their financial future. And no, it's not just for experienced investors and the rich. Anyone can start investing.
                            </p>
                            <p className='py-2'>
                                Investing provides a means for beginners to increase their money, protect themselves against <span className='underline'> inflation </span> and benefit from compound interest. Overtime, investing in assets like, bonds, stocks, or funds might yield larger returns if interest rates stay low. Beginners can start creating long term financial security sooner rather than later since the earlier you start, the more your money can work for you.
                            </p>
                            <p className='py-2'>

                                Furthermore, it's more important than ever to begin investing because traditional  <span className='underline'>pensions </span> are becoming less dependable and living expenses are rising.
                            </p>
                        </p>
                    </div>
                    <div className='mt-8'>
                        <h1 className='text-4xl text-gray-700 font-semibold'>Why Use Investing Apps in the UK</h1>
                        <p className='text-gray-600 mt-3'>
                            <p className='py-2'>
                                The UK has seen a boom in investing apps in recent years, which offer beginner investors an easy to use and accessible option to get into the market.
                            </p>
                            <p className='py-2'>
                                Investing is now simpler than ever thanks to these applications, which get rid of the need for pricy brokers or complicated procedures. Investing apps like Trading 212, Freetrade, and Revolut make it possible for young and beginner investors to take control of their investments with their user friendly interfaces, built in educational tools and minimal or no costs.
                            </p>
                            <p className='py-2'>

                                FAs the need for low cost investing options and financial independence continues to grow, the UK is expected to utilise mobile investing tools even more in 2025. More people in the UK are using apps to manage their money as a result of its adaptability, simplicity of use, and the growing trend towards digital financial solutions and increased awareness of personal financial planning, which makes investing apps an effective tool for beginner investors.
                            </p>
                        </p>
                    </div>
                    <div className='mt-8'>
                        <h1 className='text-4xl text-gray-700 font-semibold'>Benefits of Using Investing Apps for Beginners</h1>
                        <p className='text-gray-600 mt-3'>
                            <p className='py-2'>
                                There are a number of advantages to using investing apps for beginners, particularly for those who are just getting started. Here are a few main benefits:
                            </p>
                            <p className='py-2'>
                                Accessibility - By providing a straightforward, mobile friendly platform that is available at anytime and from any location, investing apps have completely changed how individuals invest. You no longer have to spend hours learning complicated systems or setting up sessions with financial experts. Beginners can begin investing directly from their smartphones with a few taps. Anyone, regardless of their schedule or location, can participate in investing without any obstacles thanks to this immediate access.
                            </p>
                            <p className='py-2'>

                                Low cost - The affordability of investment apps is one of their most notable benefits. The high commissions and administration costs associated with traditional broking services make it challenging for those starting out to invest small amounts of money. On the other hand, a lot of investment apps provide cheap fees or commission free trading, which makes them perfect for beginners. This enables beginners to invest without fear of losing a significant amount of their profits to fees, allowing them to give more money to the market.
                            </p>
                            <p className='py-2'>

                                Adaptability - Traditional investment strategies are not as flexible as investing apps. Beginners can more easily dabble without making a significant upfront payment because many investment platforms enable users to invest in a variety of assets, stocks and shares, exchange traded funds (ETFs), and specialised investment options, allowing beginners in the UK to diversify their investment portfolios right away. Furthermore, everyday investors may manage their investments on their own terms and are not restricted to a 9 to 5 schedule thanks to the option to trade at any time and from any location.
                            </p>
                            <p className='py-2'>

                                Investment apps are a great place for beginner investors to start because they combine low-cost solutions, user friendliness, and convenience to help gradually increase wealth.
                            </p>
                        </p>
                    </div>
                    <div className="text-gray-800 font-sans mt-8">
                        {/* Header */}
                        <header className="bg-[#f5f7f6] py-4 px-6 flex flex-col md:flex-row items-center justify-between">
                            <h2 className="text-lg font-medium">
                                Manage your wealth like{" "}
                                <span className="text-Primary italic font-serif font-light tracking-normal">never before</span>
                            </h2>
                            <button className="bg-Primary text-white px-4 py-2 rounded-full mt-3 md:mt-0 hover:bg-green-700 transition">
                                Get started now
                            </button>
                        </header>

                        {/* Main content */}
                        <main className="max-w-4xl mx-auto px-6 py-10">
                            {/* Title */}
                            <h1 className="text-2xl md:text-3xl font-bold mb-4">
                                Key Features to Look for in an Investment App for Beginners in the UK
                            </h1>
                            {/* Intro */}
                            <p className="mb-8 text-gray-700 leading-relaxed">
                                It’s crucial to search for features that can facilitate your learning and
                                make investing simpler and accessible when selecting an investment app as a beginner.
                                Here are some essential features to look out for:
                            </p>

                            {/* Features */}
                            <div className="space-y-6">
                                {content.map((item, i) => (
                                    <div key={i}>
                                        <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                                        <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </main>
                    </div>
                </div>
            </div>
            <section className="max-w-6xl mx-auto px-6 py-10">
                <div className="text-center mb-8">
                    <h2 className="text-4xl font-semibold">
                        Further <span className="text-Primary italic font-serif font-light tracking-normal">reading</span>
                    </h2>
                </div>
                <div className="grid gap-6 md:grid-cols-3">
                    {articles.map((article, idx) => (
                        <div key={idx} className="bg-white shadow-md rounded overflow-hidden">
                            <img
                                src={'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                                alt={article.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <p className="text-xs text-gray-500 font-semibold">
                                    {article.category} • {article.date}
                                </p>
                                <h3 className="mt-2 font-medium text-gray-900 text-sm md:text-base">
                                    {article.title}
                                </h3>
                                <a
                                    href={article.link}
                                    className="block mt-3 text-xs font-medium text-gray-600 hover:underline"
                                >
                                    Read article →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
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

export default InvestmentFeatures
