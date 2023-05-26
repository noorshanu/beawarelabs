import React from 'react'

const Stats = () => {
    return (
        <div className="my-24 flex flex-wrap gap-5 px-5 justify-center">
            <div className="bg-[#313131] w-56 px-2 rounded-lg flex flex-col items-center justify-between  h-20 py-3">
                <span className="text-[19px] font-medium text-white"> Enterprise Customers</span>
                <span className="text-[#fdb913] text-lg font-bold">100+</span>
            </div>
            <div className="bg-[#313131] w-56 px-2 rounded-lg flex flex-col items-center justify-between  h-20 py-3">
                <span className="text-[19px] font-medium text-white"> Chains Supported</span>
                <span className="text-[#fdb913] text-lg font-bold">23</span>
            </div>
            <div className="bg-[#313131] w-56 px-2 rounded-lg flex flex-col items-center justify-between  h-20 py-3">
                <span className="text-[19px] font-medium text-white"> Validators</span>
                <span className="text-[#fdb913] text-lg font-bold">33</span>
            </div>
            <div className="bg-[#313131] w-56 px-2 rounded-lg flex flex-col items-center justify-between  h-20 py-3">
                <span className="text-[19px] font-medium text-white"> Total Value Locked</span>
                <span className="text-[#fdb913] text-lg font-bold">{'>'} $300M</span>
            </div>
            <div className="bg-[#313131] w-56 px-2 rounded-lg flex flex-col items-center justify-between  h-20 py-3">
                <span className="text-[19px] font-medium text-white"> Assets Secured</span>
                <span className="text-[#fdb913] text-lg font-bold">{'>'} $5B</span>
            </div>
        </div>
    )
}

export default Stats