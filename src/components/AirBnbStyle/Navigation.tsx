import { clsx } from 'clsx'
import React from 'react'

type NavigationProps = {
  children?: React.ReactNode
  scrollStarted?: boolean
}

export const Navigation: React.FC<NavigationProps> = ({ children, scrollStarted }) => {
  return (
    <div className='flex flex-col'>
      <div
        className={clsx('w-full flex px-10 relative transition-all duration-500')}
        style={{
          height: scrollStarted ? 80 : 168,
        }}
      >
        <div className='w-full flex items-center justify-between h-[80px]'>{children}</div>
      </div>
    </div>
  )
}
