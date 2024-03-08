import React from 'react'

import { clsx } from 'clsx'

type HeaderProps = {
  children?: React.ReactNode
  scrollStarted?: boolean
}

export const Header: React.FC<HeaderProps> = ({ children, scrollStarted }) => {
  return <div className={clsx('sticky top-0 bg-white z-10', scrollStarted && 'shadow')}>{children}</div>
}
