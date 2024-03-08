import type { NavMenuItem } from './Navbar'

import React from 'react'

import clsx from 'clsx'
import { FaTimes } from 'react-icons/fa'
import { FaBars } from 'react-icons/fa6'

import { Logo } from './Logo'

type LeftNavigationProps = {
  list: NavMenuItem[]
  itemActive?: string
}

export const LeftNavigation: React.FC<LeftNavigationProps> = ({ list, itemActive }) => {
  const handleToggleDrawer = (isShow?: boolean) => {
    const elDrawer = document.getElementById('drawer')
    const elBackdrop = document.getElementById('backdrop')
    const elSidebar = document.getElementById('sidebar')

    if (elDrawer && elBackdrop && elSidebar) {
      if (isShow) {
        elDrawer.classList.add('!block')
        elBackdrop.classList.add('!opacity-100', '!block')
        elSidebar.classList.add('!left-0')
      } else {
        elDrawer.classList.remove('!block')
        elBackdrop.classList.remove('!opacity-100', '!block')
        elSidebar.classList.remove('!left-0')
      }
    }
  }

  return (
    <div className='flex items-center gap-1 sm:gap-6'>
      <Logo />

      <button
        className={clsx('block md:hidden select-none px-3 py-3 rounded-full hover:bg-black/10')}
        onClick={() => handleToggleDrawer(true)}
      >
        <FaBars size='16' />
      </button>

      <div id='drawer' className='fixed top-0 left-0 w-full z-20 transition-all'>
        <div
          id='backdrop'
          className='fixed w-full h-screen bg-black/60 opacity-0 hidden'
          onClick={() => handleToggleDrawer()}
        />

        <div id='sidebar' className='fixed -left-60 w-60 h-screen bg-white shadow-lg transition-all'>
          <div className='flex flex-col p-4'>
            <div className='flex items-start justify-between'>
              <div />
              <Logo />

              <FaTimes size='16' className='cursor-pointer' onClick={() => handleToggleDrawer()} />
            </div>

            {list.map(({ label, path }, idx) => {
              const isActive = path === itemActive

              return (
                <button
                  key={`left-navigation-${label.replaceAll(' ', '-')}-${idx}`}
                  className={clsx(
                    'select-none px-4 py-3 rounded-full hover:bg-black/10 text-start',
                    isActive && 'text-gray-600 font-bold',
                  )}
                >
                  {label}
                </button>
              )
            })}
          </div>

          <div className='h-[78px] w-60 fixed bottom-0 border-t border-gray-300 flex flex-col items-center justify-center'>
            <p className='text-sm'>Powered by GuAskReal</p>
            <p className='text-xs font-semibold'>Version 1.0.0</p>
          </div>
        </div>
      </div>
    </div>
  )
}
