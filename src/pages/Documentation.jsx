import React from 'react'

const Documentation = () => {
    return (
        <div className=' font-inter  bg-[#fcfefe]'>
            <div className='bg-[radial-gradient(circle_at_center,_#F5FBFC,_#fcfefe)] '>
                <div className=' border-x-2 border-gray-100 lg:w-9/12 w-11/12 m-auto '>
                    <div className='pt-12 py-28 text-center lg:w-9/12 w-11/12 border-x-2 border-gray-100 m-auto'>
                        <h1 className='m-auto xl:text-5xl lg:text-4xl sm:text-2xl text-xl mt-4  lg:leading-[60px] font-semibold '>
                            Documentation
                        </h1>
                        <p className='text-gray-500 lg:text-xl sm:text-lg text-sm mt-6 font-pretendard'>
                            Short explanation about blog and articles will be placed right over here and this is just a placement text or dummies
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-10/12 m-auto flex lg:flex-row flex-col gap-4    mt-12">
                <div className="lg:w-4/12 w-full">
                    <div>
                        <h1>Table of contents</h1>
                        <h1 className='py-3 text-gray-500'>Legal</h1>

                        <div className='border-l-2 border-gray-100  space-y-3 text-sm'>
                            <p className='border-l-2 border-Primary text-Primary pl-3'>Terms of Use</p>
                            <p className=' pl-3 text-gray-600'>Cookie Policy</p>
                            <p className='pl-3 text-gray-600'>Privacy Policy</p>
                        </div>
                    </div>
                    <div className='py-2'>
                        <h1 className='leading-loose text-gray-500'>Getting Started</h1>
                        <h1 className='leading-loose text-gray-500'>Adding Accounts</h1>
                        <h1 className='leading-loose text-gray-500'>Advice</h1>
                    </div>
                </div>
                <div className='lg:w-8/12 w-full'>
                    <div>
                        <h1 className='text-4xl text-gray-700 font-semibold'>Terms of Use</h1>
                        <p className='text-gray-600 mt-3'>
                            <p className='py-1'>
                                Last updated: 1 June 2024
                            </p>
                        </p>
                    </div>
                    <div className='mt-8'>
                        <h1 className='text-4xl text-gray-700 font-semibold'>Our Agreement:</h1>
                        <p className='text-gray-600 mt-3'>
                            <p className='py-2'>
                                By accessing the Strabo website and the Service, you confirm that you accept the terms and conditions outlined below ("The Agreement"), and that you agree to be bound by them. The Service is owned and operated by Strabo Financial Ltd.
                            </p>
                            <p className='py-2'>
                                These terms and conditions, together with our Privacy Policy and Cookie Policy list the terms on which you may use the Service, your rights and responsibilities to us, and our rights and responsibilities to you. Please read the Agreement carefully before proceeding to use the Service, and if possible, print or save a copy of the Agreement.
                            </p>
                            <p className='py-2'>
                                f you do not agree to the Agreement, you must not use the Service
                            </p>
                        </p>
                    </div>
                    <div className='mt-8'>
                        <h1 className='text-4xl text-gray-700 font-semibold'>The Service:</h1>
                        <p className='text-gray-600 mt-3'>
                            <p className='py-2'>
                                ‍Strabo allows you to connect your financial accounts into one dashboard, and visualises your account information to help you better understand your financial information ("The Service"). You can access the Service through our website. The Service is a read-only service as of the date of this Agreement.

                            </p>
                            <p className='py-2'>
                                By using the Service, you warrant that you are at least 16 years of age.
                            </p>
                        </p>
                    </div>
                    <div className='mt-8'>
                        <h1 className='text-4xl text-gray-700 font-semibold'>‍Creating a User Account::</h1>
                        <p className='text-gray-600 mt-3'>
                            <p className='py-2'>
                                ‍To use the service, you will need a Google account or an email address. Sign in by email address is done using a unique authentication code, which changes on each login. This means that there is no password storage.We assign and store a unique identifier for each authenticated user account, to link with the respective personal accounts, to help us in the provision of the Service. This is internally anonymised to ensure that even when examining user data for the provision of the service, unique identifying characteristics are obscured.
                            </p>
                        </p>
                    </div>
                    <div className='mt-8'>
                        <h1 className='text-4xl text-gray-700 font-semibold'>‍Connecting Personal Accounts:</h1>
                        <p className='text-gray-600 mt-3'>
                            <p className='py-2'>
                                ‍We rely on our Trusted Partners, Plaid Inc. ("Plaid"), Yodlee Inc. ("Yodlee"), and Vezgo Inc. ("Vezgo") for the provision of the Service. (You can find out more information about these partners on their respective websites). Our partnership with Plaid is limited to an Account Information Service Provider (AISP), whereby we only aggregate your financial information. We do not initiate payments on your behalf as of the date of this Agreement.
                            </p>
                            <p className='py-2'>
                                For the provision of the Service, you give your consent to provide your Personal Account login details to our Trusted Partner, who will then create a token containing a snapshot of your financial information securely through their proprietary APIs. Our Trusted Partner will continue to do so until you withdraw your consent.
                            </p>
                            <p className='py-2'>
                                By agreeing to the terms and conditions you grant to us and our Trusted Partner a royalty-free and non-exclusive license to the information in your personal accounts for the provision of the Service, which is visualised in a dashboard on the website.
                            </p>
                            <p className='py-2'>
                                You agree that we will be entitled to disclose your identity and information relating to your Personal Account(s) to third parties if we are required to do so by any applicable law or court order. By using the Service, you confirm that you are the legal owner of all the personal information in your Personal Accounts and that you have the authority to appoint, and do appoint, our Trusted Partner as your agent and grant a limited power of attorney to access and retrieve such information on your behalf.‍
                            </p>
                        </p>
                    </div>
                    <div className='mt-8'>
                        <h1 className='text-4xl text-gray-700 font-semibold'>‍Privacy & Cookies:</h1>
                        <p className='text-gray-600 mt-3'>
                            <p className='py-2'>
                                ‍Your privacy and security is of high importance to us. Strabo's Privacy Policy explains how we store and process your data and protect your privacy when you use our service.We use cookies for enhancing your user experience when you use our Service. By using our Service, you agree to the terms of our Privacy & Cookies Policy which forms part of our Agreement with you. You can read this on our Privacy page.
                            </p>
                        </p>
                    </div>
                    <div className='mt-8'>
                        <h1 className='text-4xl text-gray-700 font-semibold'>‍Your Use of the Service:</h1>
                        <p className='text-gray-600 mt-3'>
                            <p className='py-2'>
                                ‍You agree to ensure that you access the Service as permitted by law, and do not interfere with or damage (including attempting to do the same) our Service by using a method not listed in the terms of the Agreement. You may access the service from a third-party web browser (such as Chrome, Safari, Edge, Firefox) and must not attempt to use any engine, software, tool or mechanism (including but not limited to spiders, crawlers, bots, scrapers) to navigate the Service.
                            </p>
                            <p className='py-2'>
                                You must not alter or modify (including attempting to do the same) the visualised dashboard after the provision of the Service in any way or form, including but not limited to altering the content and the code. You must not inaccurately imply any associations with the Service and Strabo. You must not transmit any file, including but not limited to, viruses, worms, trojan horses, or any other malware to interfere with the provision of the Service.
                            </p>
                            <p className='py-2'>
                                Please do not provide any unsolicited information regarding the Service to Strabo unless explicitly requested by Strabo with proper feedback gathering mechanisms. You agree that such unsolicited information may be used in the development of the Service and other areas deemed necessary by us without any liability or payment to you
                            </p>
                        </p>
                    </div>
                    <div className='mt-8'>
                        <h1 className='text-4xl text-gray-700 font-semibold'>‍Third-Parties:</h1>
                        <p className='text-gray-600 mt-3'>
                            <p className='py-2'>
                                ‍For the provision of the Service, we may use Third-Party websites, applications or features ("Third-Party Services"). We do not control Third-Party Services and you acknowledge and agree that your use of Third-Part Services is at your own risk. We assume no liability for the operation of Third-Party Services, and will be not liable for any loss or damage that arises from such use of Third-Party Services.‍ At time of writing, these are limited to analytics platforms that allow us to observe aggregated and anonymised user behaviour. At time of writing these are comprised by Mixpanel, Livesession and Google Analytics. The individual terms for these platforms can be viewed on their respective websites.
                            </p>
                            <p className='py-2'>
                                We have made every best effort where applicable to ensure that through the use of these services, Strabo have no access to identifiable user data including personal financial information. These platforms are used to provide the best service possible, and analytics include counting the use of particular features on the Platform, as well as email opens and activity, number of accounts connected and similar.
                            </p>
                        </p>
                    </div>
                    <div className='mt-8'>
                        <h1 className='text-4xl text-gray-700 font-semibold'>‍Warranties:</h1>
                        <p className='text-gray-600 mt-3'>
                            <p className='py-2'>
                                ‍You agree that your use of the Service and content (including that of third parties) included in or accessible from the Service is at your own risk. You agree that the service is provided on an"as is" and"as available" basis. Strabo and its Trusted Partners disclaim all warranties of any kind as to the Service and content (including that of third parties) included in or accessible from the Service.
                            </p>
                            <p className='py-2'>
                                We and our Trusted Partner make no warranties that the Service will meet your requirements; the Service will be uninterrupted, timely, secure, or error-free; the results that may be obtained from the use of the Service will be accurate or reliable; the quality of any products, services, information, or other material purchased or obtained by you through the Service will meet your expectations; or any errors in the technology will be corrected.‍
                            </p>
                        </p>
                    </div>
                    <div className='mt-8'>
                        <h1 className='text-4xl text-gray-700 font-semibold'>Our Liability:</h1>
                        <p className='text-gray-600 mt-3'>
                            <p className='py-2'>
                                ‍Strabo is not developed to meet your individual needs, it is your responsibility to ensure that it meet such requirements. Strabo provides the Service for domestic and private use. You may not use the Service for any commercial, business, or resale purposes and we have no liability to you for any loss of profit, loss of revenue, loss of business, business interruption, or loss of business opportunity
                            </p>
                            <p className='py-2'>
                                All information and content made available through the Service is not financial advice, and Strabo is not a Financial Advisor. You are responsible for making your own decisions by using your own judgement and seeking professional advice.
                            </p>
                            <p className='py-2'>
                                We and our Trusted Partners do not in any way limit our liability for: Fraud and fraudulent activities; Loss of profits and goodwill; any statement or conduct on or via the Service by any third party; loss of data which is caused by factors other than negligence or breach of statutory duty on the party of us or our Trusted Partner; the acts or omissions of the providers of your Personal Account(s);the cost to you of obtaining goods or services as substitutes for the Service; or any other loss or damage suffered by you in connection with the Service
                            </p>
                        </p>
                    </div>
                    <div className='mt-8'>
                        <h1 className='text-4xl text-gray-700 font-semibold'>Financial Advice Disclaimer</h1>
                        <p className='text-gray-600 mt-3'>
                            <p className='py-2'>
                                Strabo Financial Ltd isn't a registered financial advisor or dealer and doesn't provide personalised financial, investment, tax, or legal advice. The information you see on the Platform is intended for informational purposes only and should not be considered as specific advice or recommendations. Your investment decisions should be based on your own risk tolerance and financial situation.
                            </p>
                            <p className='py-2'>
                                You should consider the multi-jurisdiction implications of any financial decisions before making any investments based on information you see in the Platform. All data shown uses best practices and forecasts are made using historical asset data.
                            </p>
                        </p>
                    </div>
                </div>
            </div>
            <div className=' border-b-2 w-full border-gray-100 m-auto '>
                <div className='border-x-2 border-gray-100 w-11/12 m-auto'>
                    <div className='w-full m-auto text-center '>
                        <h1 className='m-auto lg:text-4xl sm:text-2xl text-xl text-center pt-12   lg:leading-[60px] font-semibold '>
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


export default Documentation
