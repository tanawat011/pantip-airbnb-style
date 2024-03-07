import React from 'react'
import { bannerHeight } from '../constants'

type ContentProps = {
  children: React.ReactNode
}

export const Content: React.FC<ContentProps> = ({ children }) => {
  return (
    <div className='flex flex-col items-center mx-auto md:px-8  max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]'>
      {children}
    </div>
  )
}
