import clsx from 'clsx'
import { FaBars } from 'react-icons/fa6'

export const Logo = () => {
  return (
    <div className='flex items-center gap-1 sm:gap-6'>
      <button className='flex items-center gap-1'>
        <img src='logo192.png' width={40} height={40} />

        <p className='text-[#61dafb] text-xl font-semibold hidden sm:block'>Pantip</p>
      </button>

      <button className={clsx('block md:hidden select-none px-3 py-3 rounded-full hover:bg-black/10')}>
        <FaBars size='16' />
      </button>
    </div>
  )
}
