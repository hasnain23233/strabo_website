import React from "react";

const Glossary = () => {
  const glossary = {
    A: [
      {
        term: "Angel Investing",
        desc: "Angel investing is when wealthy individuals, or 'angel investors', provide capital to early-stage startups in exchange for equity or convertible debt."
      },
      {
        term: "APR (Annual Percentage Rate)",
        desc: "APR stands for Annual Percentage Rate; representing the total cost of borrowing, including interest and fees, over a year."
      },
      {
        term: "Asset Allocation",
        desc: "Asset allocation is distributing investments across asset classes like stocks and bonds, based on financial goals."
      },
      {
        term: "Asset Class",
        desc: "An asset class includes securities or investments with similar characteristics, such as stocks, bonds, or real estate."
      }
    ],
    B: [
      {
        term: "Bear Market",
        desc: "A bear market features prolonged declining prices and pessimistic sentiment, leading to reduced investment."
      },
      {
        term: "Blockchain",
        desc: "Blockchain is a decentralised digital ledger technology that records transactions across a network of computers."
      },
      {
        term: "Bull Market",
        desc: "A bull market is a financial condition with sustained rising stock prices, leading to increased investment activity."
      }
    ],
    C: [
      {
        term: "Call Option",
        desc: "A call option is a contract that gives the holder the right to buy an asset at a set price within a specific period."
      },
      {
        term: "Capital Gain",
        desc: "A capital gain is the profit from selling an asset for more than its purchase price."
      }
    ]
  };

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div className="font-inter bg-[#fcfefe]">
      {/* Top Header Section */}
      <div className="bg-[radial-gradient(circle_at_center,_#F5FBFC,_#fcfefe)]">
        <div className="border-x-2 border-gray-100 lg:w-9/12 w-11/12 m-auto">
          <div className="pt-12 text-center lg:w-9/12 w-11/12 py-20 border-x-2 border-gray-100 m-auto">
            <h1 className="m-auto  xl:text-5xl lg:text-4xl sm:text-2xl text-xl mt-4 leading-[60px] font-semibold">
              Glossary
            </h1>
            <p className="text-gray-500 w-11/12 m-auto mt-6 font-pretendard">
              Strabo uses many terms you won’t hear in everyday conversation.
              To make the most of your experience, it’s important to understand
              them. Here are some key terms and their meanings—let’s dive in!
            </p>
          </div>
        </div>
        <div className="relative w-11/12 m-auto overflow-hidden">
          {/* Bottom blur overlay */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t to-[#fcfcfcc7] from-[#fcfcfceb] z-10" />
        </div>
      </div>

      {/* Alphabet Navigation */}
      <div className="overflow-x-auto border-t-2 border-gray-200">
        <div className="flex justify-between w-8/12 m-auto space-x-3 px-4 py-3 text-sm font-medium">
          {alphabet.map((letter) => (
            <a
              key={letter}
              href={`#${letter}`}
              className="hover:text-green-600 transition-colors"
            >
              {letter}
            </a>
          ))}
        </div>
      </div>

      {/* Glossary Content */}
      <div className="max-w-4xl mx-auto px-6 py-10">
        {Object.entries(glossary).map(([letter, terms]) => (
          <section key={letter} id={letter} className="mb-10">
            <h2 className="text-xl font-bold mb-4">{letter}</h2>
            {terms.map((item, idx) => (
              <div key={idx} className="mb-5">
                <p className="font-semibold">{item.term}</p>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </section>
        ))}
      </div>
      <div className=' border-b-2 w-full border-gray-100 m-auto '>
        <div className='border-x-2 border-gray-100 w-11/12 m-auto'>
          <div className='w-full m-auto text-center '>
            <h1 className='m-auto  lg:text-4xl sm:text-2xl text-xl text-center pt-12   lg:leading-[60px] font-semibold '>
              Join hundreds of advisers <br />  <span className="text-Primary italic font-serif font-light tracking-normal">winning</span> with Strabo
            </h1>
            <p className='text-gray-600'>Request a free demo and see how Strabo can elevate <br /> your advisory game</p>
            <input type="text" name="text" className='px-4 w-3/12 focus:outline-none py-2 rounded-2xl text-sm border-2 border-gray-100' id="" placeholder='Enter your email Address' />
            <button className="bg-gray-800 text-white border-2 text-sm border-gray-100 rounded-full px-4 py-2 mt-12 hover:shadow ml-3">
              Get your demo
            </button>
            <br /><br />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Glossary;
