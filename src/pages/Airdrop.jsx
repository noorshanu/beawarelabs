import React from 'react'
import Table from '../components/Table'
import Footer from '../components/Footer'
import { BsTwitter } from 'react-icons/bs'
import NFTCard from '../components/NFTCard'
import {CgSandClock} from "react-icons/cg"
import AirdropPageModal from '../components/AirdropPageModal'

const Airdrop = () => {
  return (
    <div className="flex  w-full mt-[70px]   max-w-[87rem]   3xl:mr-[25vw] mx-auto sm:justify-center">
      <AirdropPageModal/>
      <div className="justify-self-center">
        <div className="md:w-[80%] max-w-[100%] 3xl:w-full grid  md:grid-cols-11  mr-0 gap-x-4 px-5 py-5 bg-[#141624] rounded-lg">
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
              <h1 className='text-white font-bold text-2xl'>ETH</h1>
              <h1 className='text-white font-bold text-2xl flex items-center'><span className='text-sm text-gray-300 mr-1'> Value:</span> $56,323</h1>
            </div>
            <p className="mt-3 text-white font-bold text-sm flex items-center"><CgSandClock className='text-blue-500 mr-1'/> CLOSES: 1 JUL 2023 01:00</p>
            <div className="bg-[#00111de9] p-3 rounded-2xl mt-4">
              <h1 className="text-center my-4 text-white text-2xl font-mono font-bold">
                ENTER COMPETITION
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-[#0e1f2a]  rounded-md w-full h-full p-2 flex flex-col justify-center items-center space-y-3">
                  <h1 className=" text-3xl sm:text-6xl text-white">1</h1>
                  <h1 className="text-white tracking-wide font-bold">Entry</h1>
                  <button className="rounded-full text-sm font-bold text-white bg-[#0087ff] w-full flex justify-center items-center py-3">
                    0.75 eth
                  </button>
                </div>
                {[2, 3, 4].map((e) => (
                  <div
                    className={`bg-[url("https://metawin.com/_nuxt/rainbow.348c933e.svg")] bg-cover cursor-pointer transition-all hover:p-[3px] ${
                      e == 2 ? 'p-[3px]' : 'p-0 '
                    } rounded-md`}
                  >
                    <div className="bg-[#0e1f2a] rounded-md w-full h-full  p-2 pt-10 flex flex-col justify-center items-center space-y-3">
                      <h1 className=" text-3xl sm:text-6xl bg-gradient-to-b from-[#facc15] to-[#f97316] bg-clip-text text-transparent">
                        1750
                      </h1>
                      <h1 className="font-bold text-white font-sans">
                        ENTRIES
                      </h1>
                      <button className="rounded-full text-sm font-bold text-white bg-[#0087ff] w-full flex justify-center items-center py-3">
                        0.75 eth
                      </button>
                      <p className="font-black text-sm bg-gradient-to-b from-[#facc15] to-[#f97316] bg-clip-text text-transparent">
                        INCLUDES 1600 FREE ENTRIES
                      </p>
                      <p className="font-medium text-white text-sm">
                        Gas Saving = 1750x
                      </p>
                    </div>
                  </div>
                ))}
                <div className="bg-[url('https://metawin.com/_nuxt/microchip.585024a7.png')] bg-cover col-span-1 sm:col-span-2 bg-gray-200 rounded-md w-full h-auto  p-2 pt-10 flex flex-col justify-center items-center space-y-3">
                  <h1 className=" text-3xl sm:text-6xl bg-gradient-to-b from-[#facc15] to-[#f97316] bg-clip-text text-transparent">
                    1750
                  </h1>
                  <h1 className="font-bold text-white font-sans">ENTRIES</h1>
                  <button className="rounded-full text-sm font-bold text-white bg-[#0087ff] w-full flex justify-center items-center py-3">
                    0.75 eth
                  </button>
                  <p className="font-black text-sm bg-gradient-to-b from-[#facc15] to-[#f97316] bg-clip-text text-transparent">
                    INCLUDES 1600 FREE ENTRIES
                  </p>
                  <p className="font-medium text-white text-sm">
                    Gas Saving = 1750x
                  </p>
                </div>
              </div>
              <h3 className="text-center text-gray-400 mt-5 text-sm">
                All entries require gas.
              </h3>

              <h4 className="text-center text-white mt-5 text-sm">
                <span className="text-gray-400">
                  Smart Contract v1.2 Update:{' '}
                </span>
                <span> Multi Buy Gas Amount = Single Entry Gas Amount</span>
              </h4>
            </div>
            <div className="bg-[#00111de9] py-3 px-2 rounded-xl flex justify-center mt-1 font-medium text-white text-sm text-clip">
              <span className="text-blue-600 font-bold mr-1">Contract: </span>{' '}
            <span className='text-clip'>   0X05ACEEDA4CFD9D084A20CB9E3B510C051599EF53</span>
            </div>
            <div className="bg-[#00111de9] py-5 px-2 rounded-xl flex justify-center items-center flex-col mt-1  text-white text-[.8rem] font-bold">
              <p>SHARE THIS COMPETITION</p>
              <p className="flex items-center w-full justify-center mt-6">
                <BsTwitter className="text-2xl mr-6 " /> MORE
              </p>
            </div>
            <div className="bg-[#00111de9] py-5 px-5 rounded-xl  mt-1">
              <h1 className="text-white font-bold">ENDING SOON</h1>
              <div className="w-full h-[0.6px] bg-gray-600 mt-3" />
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-2 mt-5">
                <NFTCard />
                <NFTCard />
                <NFTCard />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#212121] w-full">
          <div className="md:w-[80%] 3xl:w-full  3xl:mr-0">
            <Footer />
          </div>
        </div>
      </div>
      <div className="w-[20vw]  fixed invisible md:visible top-[70px] right-0 bottom-0 left-[80vw] bg-black  h-full "></div>
    </div>
  )
}

export default Airdrop
