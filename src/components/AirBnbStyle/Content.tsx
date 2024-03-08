import React from 'react'

type ContentProps = {
  children?: React.ReactNode
}

export const Content: React.FC<ContentProps> = ({ children }) => {
  return (
    <div className='w-full px-10 pt-3 pb-10 gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
      {children}
    </div>
  )
}
