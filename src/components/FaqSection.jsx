import React, { useState } from "react";

const faqData = [
    {
        question: "What do you do with my data?",
        answer:
            "Strabo's policy is to never retain, store or sell any of our data. We don't run ads or platform either, and all marketing is optional and opt-in, down to the cookie data on our website.",
    },
    {
        question: "What countries are we expanding to?",
        answer:
            "We are actively working on expanding to multiple countries across Europe, North America, and Asia-Pacific. Stay tuned as we roll out support region by region.",
    },
    {
        question: "Why did you start Strabo?",
        answer:
            "Strabo was founded to simplify international finances for global citizens. We wanted to create a secure, transparent platform that brings all your accounts into one clear dashboard.",
    },
    {
        question: "Is Strabo just for internationals?",
        answer:
            "No — while Strabo is great for people managing finances across borders, anyone looking to organize multiple bank accounts or assets can benefit from using Strabo.",
    },
    {
        question: "What features are coming next?",
        answer:
            "Upcoming features include deeper integrations with banks, real-time currency tracking, custom financial goals, and advanced analytics to help you make better financial decisions.",
    },
    {
        question: "Do you analyse user financial transaction information?",
        answer:
            "No, Strabo does not analyse or mine user financial transactions for profit. Your data stays encrypted and private — only you have control over what is visible and shared.",
    },
];


const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState(0); // Default first item open

    const toggleIndex = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-10 font-inter">
            {/* Left Side */}
            <div>
                <h2 className="text-4xl font-semibold">Frequently asked</h2>
                <p className="text-teal-600 italic text-4xl mb-6 font-instrument">questions</p>
                <div className="bg-gray-50 border rounded-lg p-4">
                    <p className="mb-4">Want to know more about the company, product, or team? You can reach out directly here</p>
                    <button className="bg-white border border-gray-400 rounded-full px-4 py-2 text-sm hover:shadow">
                        Contact Us →
                    </button>
                </div>
            </div>

            {/* Right Side */}
            <div className="space-y-4">
                {faqData.map((faq, index) => (
                    <div key={index} className="border-b">
                        <button
                            className="flex justify-between items-center w-full py-4 text-left text-lg font-medium"
                            onClick={() => toggleIndex(index)}
                        >
                            {faq.question}
                            <span>{openIndex === index ? "−" : "+"}</span>
                        </button>
                        {openIndex === index && faq.answer && (
                            <p className="pb-4 text-gray-600">{faq.answer}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FaqSection;
