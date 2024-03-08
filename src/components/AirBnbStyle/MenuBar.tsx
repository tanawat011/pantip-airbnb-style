import React from 'react'

import { clsx } from 'clsx'
import { MdMoreHoriz } from 'react-icons/md'

export type MenuItem = {
  label: string
  icon: React.ReactNode
}

type MenuBarProps = {
  list: MenuItem[]
  itemActive?: string
  forMobile?: boolean
  className?: string
}

export const MenuBar: React.FC<MenuBarProps> = ({ list, itemActive, forMobile, className }) => {
  const newList = forMobile ? [...list.slice(0, 4)] : [...list]

  return (
    <div
      className={clsx(
        'w-full items-center justify-center gap-0 xs:gap-2 sm:gap-4 border-t border-gray-300 h-[78px] sm:px-10 pt-3',
        className,
        forMobile ? 'flex md:hidden' : 'hidden md:flex',
      )}
    >
      {newList.map(({ label, icon }, idx) => {
        const isActive = label === itemActive

        return (
          <button
            key={`${label.replaceAll(' ', '-')}-${idx}`}
            className={clsx(
              'flex flex-col items-center justify-center gap-2 min-w-20 rounded-lg p-3 hover:text-gray-500 hover:bg-black/10 group',
              isActive ? 'relative text-gray-600' : 'text-gray-400',
            )}
          >
            {icon}

            <p className={clsx('text-sm', isActive && 'font-semibold')}>{label}</p>

            {isActive && <hr className='absolute bottom-0 w-[calc(100%-theme(space.6))] border-b border-gray-600' />}
          </button>
        )
      })}

      <button className='flex flex-col items-center justify-center gap-2 min-w-20 rounded-lg p-3 text-gray-400 hover:text-gray-500 hover:bg-black/10 group'>
        <MdMoreHoriz size='24' className='group-hover:animate-bounce' />
        <p className='text-sm'>More</p>
      </button>
    </div>
  )
}
