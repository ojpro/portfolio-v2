import { useState } from 'react'
import { Disclosure } from '@headlessui/react'
import { HiBars3BottomRight, HiOutlineXMark } from "react-icons/hi2"

// navigation's interface
interface Navigation {
  name: string,
  href: string,
  current: boolean
}

export default function Example() {

  // navigation object's to store nav links
  const [navigation, setNavigation] = useState<Navigation[]>([
    { name: 'About', href: '#about', current: false },
    { name: 'Work', href: '#work', current: false },
    { name: 'Testimonials', href: '#testimonials', current: false },
    { name: 'Contact', href: '#contact', current: false },
  ]);

  // update nav to the current section
  function updateNavigation(item: { name: string, href: string, current: boolean }) {
    // loop through the navigation items 
    const newNavigation = navigation.map(navItem => {
      // looking for the current item and make it active
      return {
        ...navItem,
        current: navItem.name === item.name
      };
    });

    // then apply the update
    setNavigation(newNavigation);
  }


  return (
    <Disclosure as="nav" className="backdrop-blur-sm sticky top-0 left-0 right-0 bg-black/40 bg-opacity-60 z-20">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-between sm:items-stretch sm:justify-between p-4">
                <div className="flex flex-shrink-0 items-start">
                  <a href="#" className='text-lg font-bold'>
                    ojpro<span className="text-blue-300">.</span>me
                  </a>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        onClick={() => updateNavigation(item)}
                        key={item.name}
                        href={item.href}
                        className={`text-gray-300 ${item.current ? 'bg-gray-800 rotate-2' : ''} hover:bg-slate-800 hover:text-white rounded px-3 py-2 text-sm font-medium`}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="flex items-end sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <HiOutlineXMark className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <HiBars3BottomRight className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  onClick={() => updateNavigation(item)}
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={`text-gray-300 ${item.current ? 'bg-gray-800' : ''} hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium`}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )
      }
    </Disclosure >
  )
}
