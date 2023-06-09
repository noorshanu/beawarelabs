import React, { useState } from 'react'
import chat from '../../utilts/chat.json'
import {BsEmojiSmile} from 'react-icons/bs'


const ChatMessage = ({ sender, date, image = null, text = '', profilePic }) => {
  return (
    <div className="w-full flex">
      <div className="rounded-full h-6 w-6 mr-2">
        <img src={profilePic} alt={'Sender'} className="rounded-full h-6 w-6" />
      </div>
      <div className="flex-1 pr-3">
        <div className="flex w-full items-center ">
          <h1 className="text-blue-400 font-bold  text-[0.9rem]">{sender}</h1>
          <h2 className="text-[0.73rem] ml-2 text-gray-700 font-bold">
            {date}
          </h2>
        </div>
        <div className="mt-1">
          {text && <p className="text-sm font-medium text-gray-200">{text}</p>}
          {image && (
            <img src={image} className="w-full h-auto mt-3 rounded-xl" />
          )}
        </div>
      </div>
    </div>
  )
}

const AirdropSidebar = () => {
    let [showchat, setShowChat] = useState(false);
  return (
    <div className="w-[20vw]  fixed invisible md:visible top-[70px] right-0 bottom-0 left-[80vw] bg-black  h-full ">
      <div className="h-[calc(100vh-70px)] relative w-full pt-3 font-play">
        <div className={`absolute  inset-0 z-50 ${showchat? "hidden" : "flex"}  justify-center items-center backdrop:blur-lg bg-black bg-opacity-30`}>
          <button onClick={()=>setShowChat(true)} className=" cursor-pointer hover:border-white transition-all   border-[#fdb913] text-[#fff] bg-[#0088ff00]  border-2 rounded-full py-2 px-3 font-bold text-lg mt-10 ">
            Connect Wallet
          </button>
        </div>
        <div className={`flex flex-col h-full  font-play ${showchat? "blur-0":"blur-md"} `}>
          <div className='flex-grow  overflow-y-auto px-2  space-y-5'>
            {chat.map((msg) => {
              return <ChatMessage {...msg} />
            })}
          </div>
          <div className="h-[10vh] bg-gray-900 w-full mt-4 flex items-center px-3 pr-6 justify-between">
            <input type="text" className='bg-transparent text-gray-300 text-sm outline-none border-none font-medium' placeholder='Message # | the-arena'/>
            <BsEmojiSmile className='text-white hover:text-yellow-500 cursor-pointer'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AirdropSidebar
