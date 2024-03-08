import React from 'react'

import { clsx } from 'clsx'

type NavigationProps = {
  children?: React.ReactNode
  scrollStarted?: boolean
}

export const Navigation: React.FC<NavigationProps> = ({ children, scrollStarted }) => {
  return (
    <div className='flex flex-col'>
      <div
        className={clsx(
          'w-full flex px-10 relative transition-all duration-300',
          scrollStarted ? 'h-[80px]' : 'h-[80px] md:h-[240px] base:h-[168px]',
        )}
      >
        {children}
      </div>
    </div>
  )
}
