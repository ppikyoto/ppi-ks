import React from 'react'
import { Link } from 'gatsby'
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

import logo from '/src/images/logo.png'

const navigation = [
  { name: 'Info COVID-19', to: '/info-covid19', current: false },
  { name: 'Sensus 2022', to: 'https://forms.gle/rYQL3wUBYg4LQPxx5', current: false },
  { name: 'Tentang Kami', to: '/about', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  return (
    <div>
      <Disclosure as="nav" className="bg-white">
        {({ open }) => (
          <>
            <div className="max-w-6xl mx-auto">
              <div className="relative flex items-center justify-start h-24 px-2">
                <div className="flex flex-1 sm:justify-start align-middle">
                  <div className="flex flex-1 items-center justify-start">
                    <Link to="/">
                      <img src={logo} className="h-20 mx-2" alt="logo"/>
                    </Link>
                  </div>

                  <div className="flex flex-none object-left">
                    <div className="hidden sm:flex sm:flex-grow sm:ml-6">
                      <div className="flex flex-none space-x-0">
                        {navigation.map((item) => (
                          <Link
                            key={item.name}
                            to={item.to}
                            className={classNames(
                              item.current ? 'bg-gray-900 text-white' : 'text-gray-800 hover:bg-gray-200',
                              'px-3 py-2 my-auto rounded-md text-center text-base uppercase items-center font-semibold tracking-wider'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-none sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-800 focus:outline-none">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="bg-white px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'flex text-gray-800 hover:bg-gray-200',
                      'inline px-3 py-2 rounded-md text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  )
}