import { FaHeart } from 'react-icons/fa6'

import { announces } from '../../../mocks'

export const Announce = () => {
  return (
    <>
      {announces.map(({ title, desc }, idx) => {
        return (
          <div key={`${title.replaceAll(' ', '-')}-${idx}`} className='flex flex-col rounded-xl'>
            <div className='bg-gray-200 w-full h-48 rounded-xl relative'>
              <button className='absolute top-4 right-4'>
                <FaHeart size='20' className='text-black/20' />
              </button>
            </div>
            <div className='flex justify-between'>
              <p className='font-semibold text-gray-600'>{title}</p>
              <p className='font-semibold text-gray-600'>...</p>
            </div>
            <p>{desc}</p>
          </div>
        )
      })}
    </>
  )
}
