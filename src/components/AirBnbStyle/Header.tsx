import { clsx } from 'clsx'
import React from 'react'

type HeaderProps = {
  children?: React.ReactNode
  scrollStarted?: boolean
}

export const Header: React.FC<HeaderProps> = ({ children, scrollStarted }) => {
  return <div className={clsx('sticky top-0 bg-white z-10', scrollStarted && 'shadow')}>{children}</div>
}
