import { FaBars, FaEarthAsia, FaUser, FaSistrix, FaHeart, FaCommentMedical, FaPeopleGroup } from 'react-icons/fa6'
import { MdMoreHoriz } from 'react-icons/md'
import clsx from 'clsx'

import './App.css'
import { announces, menu, navigationMenu } from './mocks'
import { UIEvent, useState } from 'react'

function App() {
  const [scrollStarted, setScrollStarted] = useState(false)

  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    const el = e.target as HTMLDivElement

    setScrollStarted(el.scrollTop > 0)
  }

  return (
    <div className='font-roboto overflow-y-scroll h-screen' onScroll={handleScroll}>
      <div className={clsx('sticky top-0 bg-white z-10', scrollStarted && 'shadow')}>
        <div className='flex flex-col'>
          <div
            className={clsx('w-full flex px-10 relative transition-all duration-500')}
            style={{
              height: scrollStarted ? 80 : 168,
            }}
          >
            <div className='w-full flex items-center justify-between h-[80px]'>
              <button className='flex items-center gap-1'>
                <img src='logo192.png' width={40} height={40} />

                <p className='text-[#61dafb] text-xl font-semibold'>Pantip</p>
              </button>

              <div className='flex flex-col items-center justify-center relative'>
                <div
                  className={clsx(
                    'flex items-center justify-center px-6 font-semibold text-gray-400 transition-all animate-fade',
                    scrollStarted && 'text-[0px]',
                  )}
                >
                  {navigationMenu.map(({ label, path }, idx) => {
                    const isActive = path === '/'

                    return (
                      <button
                        key={`${label.replaceAll(' ', '-')}-${idx}`}
                        className={clsx(
                          'select-none px-4 py-3 rounded-full hover:bg-black/10 transition-all duration-300',
                          isActive && 'text-gray-600 font-bold',
                          scrollStarted && 'text-[0px]',
                        )}
                      >
                        {label}
                      </button>
                    )
                  })}
                </div>

                <div
                  className={clsx(
                    'absolute transition-all duration-300',
                    scrollStarted ? '-top-2.5' : 'top-[calc(100%+theme(space.3))]',
                  )}
                >
                  <div className='border border-gray-300 rounded-full shadow-lg flex relative transition-all duration-300'>
                    <button
                      className={clsx(
                        'pl-9 pr-6 py-3 hover:bg-black/10 rounded-full cursor-pointer text-start transition-all duration-300',
                        scrollStarted ? 'h-[44px]' : 'h-[68px]',
                      )}
                    >
                      <p className='text-sm text-gray-500 font-semibold select-none'>Tags</p>

                      <input
                        placeholder='Search by Tags'
                        className={clsx(
                          'text-sm outline-none bg-transparent transition-all duration-300',
                          scrollStarted ? 'h-0 w-0 opacity-0' : 'h-5 w-40',
                        )}
                      />
                    </button>

                    <div className='flex items-center'>
                      <hr
                        className={clsx(
                          'border-l border-gray-300 w-[1px] transition-all duration-300',
                          scrollStarted ? 'h-6' : 'h-9',
                        )}
                      />
                    </div>

                    <button
                      className={clsx(
                        'pl-9 pr-14 py-3 hover:bg-black/10 rounded-full cursor-pointer text-start transition-all duration-300',
                        scrollStarted ? 'h-[44px]' : 'h-[68px]',
                      )}
                    >
                      <p className='text-sm text-gray-500 font-semibold select-none'>Date</p>

                      <p
                        className={clsx(
                          'text-sm text-gray-400 transition-all duration-300',
                          scrollStarted ? 'h-0 w-0 opacity-0' : 'h-5 w-32',
                        )}
                      >
                        Select Date
                      </p>
                    </button>

                    <button
                      className={clsx(
                        'absolute transition-all duration-300 bg-[#61dafb] rounded-full',
                        scrollStarted ? 'top-[1.25px] right-[1.25px] p-2 m-1' : 'top-0 right-0 p-4 m-2',
                      )}
                    >
                      <FaSistrix size={scrollStarted ? '18' : '20'} className='text-white' />
                    </button>
                  </div>
                </div>
              </div>

              <div className='flex items-center justify-end'>
                <button className='select-none px-3 py-3 rounded-full hover:bg-black/10 mr-2'>
                  <FaEarthAsia size='16' />
                </button>

                <button className='select-none px-4 py-3 rounded-full hover:shadow-xl flex items-center justify-between gap-4 border border-gray-300'>
                  <FaBars size='16' />

                  <FaUser size='16' />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full flex items-center justify-center gap-4 border-t border-gray-300 h-[78px] px-10 pt-3 mb-4'>
          {menu.map(({ label, icon }, idx) => {
            const isActive = label === 'Announce'

            return (
              <button
                key={`${label.replaceAll(' ', '-')}-${idx}`}
                className={clsx(
                  'flex flex-col items-center justify-center gap-2 min-w-20 rounded-lg p-3 hover:text-gray-500 hover:bg-black/10',
                  isActive ? 'relative text-gray-600' : 'text-gray-400',
                )}
              >
                {icon}

                <p className={clsx('text-sm', isActive && 'font-semibold')}>{label}</p>

                {isActive && (
                  <hr className='absolute bottom-0 w-[calc(100%-theme(space.6))] border-b border-gray-600' />
                )}
              </button>
            )
          })}

          <button className='flex flex-col items-center justify-center gap-2 min-w-20 rounded-lg p-3 text-gray-400 hover:text-gray-500 hover:bg-black/10'>
            <MdMoreHoriz size='24' />
            <p className='text-sm'>More</p>
          </button>
        </div>
      </div>

      <div className='w-full px-10 pt-3 gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
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
      </div>
    </div>
  )
}

export default App
