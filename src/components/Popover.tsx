import React, { useState } from 'react'

import { clsx } from 'clsx'

type PopoverProps = {
  label: string | React.ReactNode
  desc?: string | React.ReactNode
  children?: React.ReactNode
  className?: string
}

export const Popover: React.FC<PopoverProps> = ({ label, className, desc, children }) => {
  const [openMenu, setOpenMenu] = useState(false)

  const handleToggle = (isOpen?: boolean) => {
    setOpenMenu(!!isOpen)
  }

  return (
    <div className='relative'>
      <button
        className={clsx('select-none px-4 py-3', className)}
        onMouseOver={() => handleToggle(true)}
        onMouseLeave={() => handleToggle()}
      >
        {label}
      </button>

      <div
        className={clsx(
          'absolute right-0 mb-1 px-3 py-1 bg-white shadow-gray-400 shadow rounded-xl text-xs z-20 text-gray-400 whitespace-nowrap max-w-[208px] transition-all [&>*]:transition-all',
          openMenu ? 'opacity-100' : 'opacity-0 [&>*]:px-0 [&>*]:py-0 [&>*]:text-[0px]',
        )}
      >
        {children || desc}
      </div>
    </div>
  )
}
