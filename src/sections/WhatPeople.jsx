

function WhatPeople() {
  return (
    <section className="bg-[#f4f4f4] w-full relative">
    <div className="flex flex-wrap px-[60px] py-[60px] mx-auto my-0 max-w-[1440px]">
    <div className="flex flex-col w-full">
    <h3 className="text-center text-black text-[40px] font-[600] mb-[60px]">
    What people say about us
          </h3>
        </div>
    <div>
        <div className="people-row grid grid-cols-1 sm:grid-cols-3 gap-8 min-w-0 -ml-[15px] -mr-[15px] ">
          <div className="d px-4">
            <div className="flex flex-col h-full rounded-md p-7 bg-white">
              <a href="">
                <img src="assets/pure.webp" alt=""  />
              </a>

            </div>

          </div>
          

        </div>
    </div>

    </div>
    
    </section>
  )
}

export default WhatPeople