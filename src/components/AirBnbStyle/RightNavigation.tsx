import { FaBars, FaEarthAsia, FaUser } from 'react-icons/fa6'

export const RightNavigation = () => {
  return (
    <div className='flex items-center justify-end'>
      <button className='select-none px-3 py-3 rounded-full hover:bg-black/10 mr-2'>
        <FaEarthAsia size='16' />
      </button>

      <button className='select-none px-4 py-3 rounded-full hover:shadow-xl flex items-center justify-between gap-4 border border-gray-300'>
        <FaBars size='16' />

        <FaUser size='16' />
      </button>
    </div>
  )
}
