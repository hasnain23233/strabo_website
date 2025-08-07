import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faTwitter,
    faLinkedinIn,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Logo from './../assets/logo.png'

const Footer = () => {
    return (
        <footer className="bg-[#0F0F0F] text-gray-400 text-sm pt-10 px-6 md:px-20">
            {/* Top Section */}
            <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 border-b border-gray-700 pb-10">
                {/* Logo & Icons */}
                <div className="flex flex-col justify-between">
                    <div className='flex items-center gap-2 w-2/12'>
                        <img src={Logo} alt="" />
                        <p className='text-xl font-semibold tracking-wider text-gray-50'>strabo</p>
                    </div>
                    <div className="flex gap-4 text-white text-base">
                        <FontAwesomeIcon icon={faFacebookF} />
                        <FontAwesomeIcon icon={faTwitter} />
                        <FontAwesomeIcon icon={faLinkedinIn} />
                        <FontAwesomeIcon icon={faInstagram} />
                    </div>
                </div>

                {/* Links Section */}
                <div>
                    <h3 className="text-white font-semibold mb-3">Company</h3>
                    <ul className="space-y-2">
                        <li>Reviews</li>
                        <li>Careers</li>
                        <li>Contact</li>
                        <li>Media</li>
                        <li>Technology</li>
                        <li>Getting Started</li>
                        <li>Pricing</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-white font-semibold mb-3">Legal</h3>
                    <ul className="space-y-2">
                        <li>Terms of Use</li>
                        <li>Cookie Policy</li>
                        <li>FCA Register</li>
                        <li>Open Banking</li>
                        <li>Status</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-white font-semibold mb-3">Resources</h3>
                    <ul className="space-y-2">
                        <li>Review</li>
                        <li>Customers</li>
                        <li>Team</li>
                        <li>Blog</li>
                    </ul>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="max-w-7xl mx-auto mt-6 py-6  border-gray-700 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm text-gray-200">
                <div className="flex items-center gap-2">
                    <span>© Strabo Financial Ltd 2025.</span>
                    <span>
                        Built with <span className="text-green-500">♥</span> and ☕
                    </span>
                </div>
                <div className="flex gap-6">
                    <span>Terms & Conditions</span>
                    <span>Privacy Policy</span>
                    <span>Cookie Policy</span>
                </div>
            </div>

            {/* Disclaimer Section */}
            <div className="max-w-7xl mx-auto mt-6 pb-10 text-sm text-gray-500 leading-relaxed">
                <p>
                    If you would like to find out more Strabo’s permissions, regulatory status, or if you have any other questions,
                    please reach out to us via the platform or email the Strabo team at info@strabo.com. Strabo Financial Ltd is a
                    company registered in England & Wales (Company No. 12345678). Registered office: 14 New Street, London, UK.
                </p>
                <br />
                <p>
                    Strabo is not a financial adviser and does not provide financial advice. Data shown in Strabo should not be
                    relied on for investment decisions. Always consult your financial adviser or a qualified professional before
                    making decisions. Past performance is not a reliable indicator of future performance.
                </p>
                <br />
                <p>
                    By using this website, you agree to our terms of use and privacy policy. Strabo Financial Ltd is authorised
                    and regulated by the Financial Conduct Authority under firm reference number 987654. Any use of this website
                    or platform indicates your acceptance of the above.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
