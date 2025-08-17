import React, { useState } from "react";

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "How much usage is included with the free plan?",
            answer:
                "With Strabo Pro, you’ll be able to connect unlimited synced and manual accounts across all asset classes."
        },
        {
            question: "Is there a free trial?",
            answer:
                "We offer a 7-day trial on all paid plans. You will not receive a bill if you cancel before the trial ends, and you will not be charged if you decide not to upgrade."
        },
        {
            question: "How does Strabo use my data?",
            answer:
                "We take data privacy very seriously. We never share, transfer, or misuse any data on any of your financial details. It’s yours."
        },
        {
            question: "Do you offer discounts?",
            answer:
                "Yes! We offer discounts for annual plans. If you have any difficulties paying, please reach out to our team and we’ll try our best to help."
        },
        {
            question: "How do couples plans work?",
            answer:
                "Couples plans let you and your partner sync, add, and view joint accounts in one place while still keeping personal accounts separate."
        },
        {
            question: "Can I change my payment method?",
            answer:
                "Yes, you can change your payment method. Go to Settings and select ‘Manage Billing’. From there, you’ll be able to change your billing method anytime."
        }
    ];

    return (
        <div className="bg-[#fcfefe] font-inter py-16">
            <div className="w-10/12 m-auto grid grid-cols-1 md:grid-cols-2 gap-12">

                {/* Left Side */}
                <div>
                    <h1 className="text-3xl font-semibold leading-snug">
                        Frequently asked <br />
                        <span className="text-Primary italic font-serif font-light">
                            questions
                        </span>
                    </h1>

                    <p className="text-gray-600 mt-6">
                        Want to know more about the company, product, or team?
                        You can reach out directly here
                    </p>

                    <button className="mt-4 px-5 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
                        Contact Us →
                    </button>
                </div>

                {/* Right Side (Accordion) */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border-b border-gray-200 pb-3 cursor-pointer"
                            onClick={() => toggleFAQ(index)}
                        >
                            <div className="flex justify-between items-center">
                                <h3 className="text-gray-800 font-medium">{faq.question}</h3>
                                <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
                            </div>
                            {openIndex === index && (
                                <p className="text-gray-600 mt-2">{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
