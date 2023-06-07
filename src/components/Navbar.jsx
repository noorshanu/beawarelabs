import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

let navItems = [
  {
    label: 'Products',
    route: '/',
  },
  {
    label: 'About',
    route: 'Market',
  },
  {
    label: 'INFRA Token',
    route: 'Market',
  },
  {
    label: 'Airdrop',
    route: 'airdrop',
  },
  {
    label: 'Community',
    route: 'Market',
  },
  {
    label: 'Blog',
    route: 'Market',
  },
  // { label: "Features", route: "Create", icon: "/assets/icons/interface.png" },
  // { label: "Roadmap", route: "Wallet", icon: "/assets/icons/cube.png" },
]

export default function Navbar() {
  const route = '/'
  return (
    // bg-[#14141f]
    <Popover className="">
      <div className="fixed top-0 left-0 right-0 bg-[#212121] w-full">
        <div className=" max-w-[110rem] mx-auto font-orbitron flex items-center justify-between  py-4 md:justify-start md:space-x-10 animate-top-left px-5">
          <img src="/assets/logo.svg" className="h-8 w-auto" alt="" />
          <div className=" flex items-center justify-center md:flex md:flex-1 space-x-4 lg:w-0">
            <Popover.Group as="nav" className="hidden space-x-10 md:flex mx-5">
              {navItems.map((nav, i) => {
                return (
                  <a
                    key={i}
                    href={nav.route}
                    className={`text-medium font-normal hover:text-[#fdd46e]
                     
                     ${
                       route == nav.route
                         ? ' text-[#fdd46e] '
                         : 'text-[#9292C5]'
                     }
                  `}
                  >
                    <div className=" flex justify-center items-center">
                      <span>{nav.label}</span>
                    </div>
                  </a>
                )
              })}
            </Popover.Group>

            <div className=" md:hidden">
              <Popover.Button className=" inline-flex items-center justify-center  rounded-md  p-2">
                <span className="sr-only">Open menu</span>
                <Bars3Icon
                  className="h-6 w-6"
                  color="white"
                  aria-hidden="true"
                />
              </Popover.Button>
            </div>
          </div>
          <a
            href="/"
            className="mr-8 whitespace-nowrap w-40 border bg-transparent  border-[#fdb913] text-[#fdb913] rounded-md py-2 font-bold justify-center items-center px-3 text-sm md:flex hidden"
          >
            Contact
          </a>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="fixed inset-0 transform transition md:hidden"
        >
          <div className="relative rounded-lg bg-[#212121] h-screen w-screen ">
            <div className="bg-[#212121] border-b  border-white border-opacity-50 px-5 py-3">
              <div className="flex items-center justify-between">
                <div className="focus:border:0 flex items-center justify-center space-x-1 focus:outline-0 focus:ring-0">
                  <img src="/assets/logo.svg" alt="" />
                </div>
                <div className="mr-3">
                  <Popover.Button className=" inline-flex items-center justify-center rounded-md  p-2">
                    <XMarkIcon
                      className="h-6 w-6"
                      aria-hidden="true"
                      color="white"
                    />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className=" py-4 px-2">
              <div className="mb-2 grid grid-cols-1 gap-y-1 gap-x-1">
                {navItems.map((nav, i) => {
                  return (
                    <a
                      key={i}
                      href={nav.route}
                      className={`rounded-md py-2 px-2 text-base font-medium  text-white hover:text-[#fdd46e]
                        ${
                          (!route && i === 0) || route === nav.label
                            ? '  text-[#fdd46e] '
                            : 'text-white'
                        }
                        `}
                    >
                      {nav.label}
                    </a>
                  )
                })}
              </div>
            </div>
            {/* code here */}
            <a
              href="/"
              className="mr-8 whitespace-nowrap w-[90%] bottom-5 right-5 left-5 text-center absolute border bg-transparent  border-[#fdb913] text-[#fdb913] rounded-md py-2 font-bold justify-center items-center px-3 text-sm"
            >
              Contact
            </a>
            {/* code here */}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
