import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Router, useNavigate } from 'react-router-dom'

// MetaWin logo
// Win huge crypto prizes, digital collectibles and play our instant win games with just one click.

// You control your data. (No email required)
// Instant payments in and out.
// Verifiable, real time prize draws.
// Secure, transparent with Zero friction.
// Highest win % available online.
// Join 117,621 connected participants and experience the future of winning. Experience MetaWin.

// CONNECT WALLETDon't show again
export default function AirdropPageModal({ showContent, setShowContent }) {
  const [open, setOpen] = useState(true)
  const navigate = useNavigate()

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => {}}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-95 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-transparent text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md">
                <XMarkIcon className='absolute top-4 right-4 cursor-pointer h-5 w-5' onClick={()=> setOpen(false)} color='white'/>
                <div className=" eco-box-modal bg-[#020119]  px-4 pb-4 pt-4 sm:pt-6 sm:px-3 sm:pb-4">
                  <div className="">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6 my-2 text-white"
                      >
                        <img src="/assets/logo.svg" className="mx-auto" />
                      </Dialog.Title>
                      <div className="mt-2 flex flex-col items-start font-play">
                        <p className="text-gray-400 text-lg font-light">
                          Win huge{' '}
                          <span className="text-white font-bold text-lg">
                            {' '}
                            crypto prizes, digital collectibles
                          </span>{' '}
                          and play our instant win games with just one click.
                        </p>
                        <ol className="text-gray-500 list-disc list-inside my-5 text-left ml-2 space-y-2">
                          <li>You control your data. (No email required)</li>
                          <li>Instant payments in and out.</li>
                          <li>Verifiable, real time prize draws.</li>
                          <li>Secure, transparent with Zero friction.</li>
                          <li>Highest win % available online.</li>
                        </ol>
                        <p className='text-gray-400 text-lg leading-snug mt-3'>
                          Join <span className='text-white font-bold'> 117,621 connected participants </span> and experience the
                          future of winning. Experience MetaWin.
                        </p>
                        <div className='bg-[#0e1f2a] border-2 text-white font-bold mt-5 cursor-pointer hover:border-white transition-all border-[#017794] py-3 w-full rounded-full '>
                            Connect Wallet
                        </div>
                        <div className='flex justify-center w-full mt-4 items-center text-blue-600'><input type='checkbox' className='h-4 w-4 mr-1'/> Remember me</div>
                      </div>
                    </div>
                  </div>
                </div>
                
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
