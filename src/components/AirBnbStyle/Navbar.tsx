import React from 'react'

import { clsx } from 'clsx'
import { FaSistrix } from 'react-icons/fa6'

export type NavMenuItem = {
  label: string
  path: string
}

type NavbarProps = {
  scrollStarted?: boolean
  list: NavMenuItem[]
  itemActive?: string
  className?: string
  forMobile?: boolean
}

export const Navbar: React.FC<NavbarProps> = ({ scrollStarted, list, itemActive, className, forMobile }) => {
  return (
    <div
      className={clsx(
        'flex-col items-center justify-center relative transition-all duration-200 hidden',
        className,
        forMobile ? 'md:flex base:hidden' : 'base:flex',
        scrollStarted && forMobile && '!absolute top-7 left-48',
      )}
    >
      <div
        className={clsx(
          'flex items-center justify-center px-6 font-semibold text-gray-400 transition-all animate-fade',
          scrollStarted && 'text-[0px]',
        )}
      >
        {list.map(({ label, path }, idx) => {
          const isActive = path === itemActive

          return (
            <button
              key={`${label.replaceAll(' ', '-')}-${idx}`}
              className={clsx(
                'select-none px-4 py-3 rounded-full hover:bg-black/10 transition-all duration-200',
                isActive && 'text-gray-600 font-bold',
                scrollStarted && 'text-[0px]',
              )}
            >
              {label}
            </button>
          )
        })}
      </div>

      <div
        className={clsx(
          'absolute transition-all duration-200',
          scrollStarted ? '-top-2.5' : 'top-[calc(100%+theme(space.3))]',
        )}
      >
        <div className='border border-gray-300 rounded-full shadow-lg flex relative transition-all duration-200'>
          <button
            className={clsx(
              'pl-9 pr-6 py-3 hover:bg-black/10 rounded-full cursor-pointer text-start transition-all duration-200',
              scrollStarted ? 'h-[44px]' : 'h-[68px]',
            )}
          >
            <p className='text-sm text-gray-500 font-semibold select-none'>Tags</p>

            <input
              placeholder='Search by Tags'
              className={clsx(
                'text-sm outline-none bg-transparent transition-all duration-200',
                scrollStarted ? 'h-0 w-0 opacity-0' : 'h-5 w-40',
              )}
            />
          </button>

          <div className='flex items-center'>
            <hr
              className={clsx(
                'border-l border-gray-300 w-[1px] transition-all duration-200',
                scrollStarted ? 'h-6' : 'h-9',
              )}
            />
          </div>

          <button
            className={clsx(
              'pl-9 pr-14 py-3 hover:bg-black/10 rounded-full cursor-pointer text-start transition-all duration-200',
              scrollStarted ? 'h-[44px]' : 'h-[68px]',
            )}
          >
            <p className='text-sm text-gray-500 font-semibold select-none'>Date</p>

            <p
              className={clsx(
                'text-sm text-gray-400 transition-all duration-200',
                scrollStarted ? 'h-0 w-0 opacity-0' : 'h-5 w-32',
              )}
            >
              Select Date
            </p>
          </button>

          <button
            className={clsx(
              'absolute transition-all duration-200 bg-[#61dafb] rounded-full hover:bg-sky-500',
              scrollStarted ? 'top-[1.25px] right-[1.25px] p-2 m-1' : 'top-0 right-0 p-4 m-2',
            )}
          >
            <FaSistrix size={scrollStarted ? '18' : '20'} className='text-white' />
          </button>
        </div>
      </div>
    </div>
  )
}
