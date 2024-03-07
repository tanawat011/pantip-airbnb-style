import { FaAnglesRight } from 'react-icons/fa6'
import { breadcrumbHeight } from '../constants'

export const Breadcrumb = () => {
  return (
    <div className='w-full border-black border-y bg-secondary mb-5' style={{ height: breadcrumbHeight }}>
      <div className='h-full flex items-center gap-5 mx-auto md:px-8 max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]'>
        <FaAnglesRight />
        <p>หน้าแรกพันทิป</p>
      </div>
    </div>
  )
}
