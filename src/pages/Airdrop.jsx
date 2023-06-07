import React from 'react'
import Table from '../components/Table'
import Footer from '../components/Footer'

const Airdrop = () => {
  return (
    <div className="flex  w-full mt-[70px] bg-[#3e3e3e] max-w-[87rem]  mx-auto 3xl:mr-[25vw] justify-center">
      <div className='justify-self-center'>
        <div className="md:w-[80%] 3xl:w-full grid  md:grid-cols-11  mr-0 gap-x-4 px-5 py-5">
          <div className="md:col-span-5">
            <video loop autoPlay className="rounded-md">
              <source src="/airdrop.mp4" type="video/mp4" />
            </video>
            <div className="mt-6">
              <h1 className="text-white font-bold">DESCRIPTION</h1>
              <div className="w-full h-[0.3px] bg-gray-400 mt-3" />
              <p className="text-gray-300 text-sm mt-4">
                <p>Enter now for the chance to win a Massive 30ETH!</p>
                <p className="mt-3">
                  Plus! Get 5% of your entry cost (excluding gas) as playable
                  ETH directly into your MetaWin Balance!
                </p>
              </p>
            </div>
            <div className="mt-6">
              <Table />
            </div>
          </div>
          <div className="md:col-span-6">
            <div className="flex justify-between">
              <h1>ETH</h1>
              <h1>Value: $56,323</h1>
            </div>
            <p className="mt-3">CLOSES: 1 JUL 2023 01:00</p>
            <div className="bg-[#00111d] p-3 rounded-lg mt-4">
              <h1 className="text-center my-3 text-white text-2xl font-mono font-bold">
                ENTER COMPETITION
              </h1>
              <div className="grid grid-cols-2 gap-3">
                {[1, 2, 3, 4].map((e) => (
                  <div className="bg-gray-200 rounded-md w-full h-40 p-2 flex flex-col justify-center items-center space-y-3">
                    <h1>1</h1>
                    <h1>Entry</h1>
                    <button className="rounded-full bg-[#0087ff] w-full flex justify-center items-center py-3">
                      0.295 eth
                    </button>
                  </div>
                ))}
                <div className="col-span-2 bg-gray-200 rounded-md w-full h-auto  p-2 pt-10 flex flex-col justify-center items-center space-y-3">
                  <h1>1750</h1>
                  <h1>Entries</h1>
                  <button className="rounded-full bg-[#0087ff] w-full flex justify-center items-center py-3">
                    0.295 eth
                  </button>
                  <p>INCLUDES 1600 FREE ENTRIES</p>
                  <p>Gas Saving = 1750x</p>
                </div>
              </div>
              <h3 className="text-center text-white mt-5">
                All entries require gas. Smart Contract v1.2 Update: Multi Buy
                Gas
              </h3>
              <h4 className="text-center text-white mt-5">
                Amount = Single Entry Gas Amount
              </h4>
            </div>
          </div>
        </div>
        <div className="md:w-[80%] 3xl:w-full  3xl:mr-0">
          <Footer />
        </div>
      </div>
        <div className="w-[20vw]  fixed invisible md:visible top-[70px] right-0 bottom-0 left-[80vw] bg-black  h-full "></div>
    </div>
  )
}

export default Airdrop
