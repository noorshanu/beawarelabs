

function NewsLetter() {
  return (
    <section className="bg-[#fff] w-full relative">
        <div className="flex flex-col items-center text-center px-[60px] py-[90px] mx-auto my-0 max-w-[1440px]">
            <img src="assets/letter.svg" alt=""  />
            <h3 className="text-center text-black text-[40px] font-[600] mx-0 my-[30px] mb-[20px]">
            Subscribe to our newsletter and never skip a beat!
          </h3>
            <p className="font-[16px] text-[#313131] text-center  mt-0 mx-0 mb-7">
                Get updates on our latest news and product releases.</p>
                <form action="" className="flex text-left ant-form">
                    <div className="ant-form-item m-0">
                        <div className="flex text-sm max-w-0 ant-row">
                            <div className="ant-col ant-form-item-control w-full max-w-0 flex flex-col">
                                <div className="relative flex items-center min-h-[32px]">
                                    <div className="flex-auto max-w-[100%]">
                                    <input placeholder="Enter your email address" type="email" id="email" aria-required="true" className="ant-input " value=""/>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                </form>
        </div>
    </section>
  )
}

export default NewsLetter