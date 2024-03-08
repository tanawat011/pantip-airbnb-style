import React, { useCallback, useEffect, useRef, useState } from 'react'

import { clsx } from 'clsx'

type DropdownProps = {
  label: string | React.ReactNode
  className?: string
  width?: number
  list: {
    label: string | React.ReactNode
    icon?: React.ReactNode
    divider?: boolean
  }[]
}

export const Dropdown: React.FC<DropdownProps> = ({ label, className, width = 208, list }) => {
  const refMenu = useRef<HTMLDivElement>(null)
  const refButtonMenu = useRef<HTMLButtonElement>(null)

  const [openMenu, setOpenMenu] = useState(false)

  const handleToggleMenu = () => {
    setOpenMenu(!openMenu)
  }

  const handleClickOutsideMenu = useCallback(
    (e: MouseEvent) => {
      if (openMenu && refButtonMenu.current && refButtonMenu.current.contains(e.target as HTMLDivElement)) {
        return
      }

      if (openMenu && refMenu.current && !refMenu.current.contains(e.target as HTMLDivElement)) {
        setOpenMenu(false)
      }
    },
    [openMenu],
  )

  useEffect(() => {
    window.addEventListener('mousedown', handleClickOutsideMenu)

    return () => window.removeEventListener('mousedown', handleClickOutsideMenu)
  }, [refMenu, refButtonMenu, openMenu])

  return (
    <div className='relative'>
      <button ref={refButtonMenu} className={clsx('select-none px-4 py-3', className)} onClick={handleToggleMenu}>
        {label}
      </button>

      <div
        ref={refMenu}
        className={clsx(
          'absolute right-0 mt-2 py-2 bg-white shadow-gray-400 shadow z-20 rounded-xl transition-all [&>*]:transition-all',
          !openMenu && '[&>*]:px-0 [&>*]:py-0 [&>*]:text-[0px]',
        )}
        style={{
          height: openMenu ? list.length * 48 + 16 : 0,
          width: openMenu ? width : 0,
        }}
      >
        {list.map(({ label: lb, icon, divider }) => {
          return (
            <>
              <button className={clsx('w-full text-start px-6 py-3 hover:bg-black/10 flex items-center gap-2')}>
                {icon}

                <p>{lb}</p>
              </button>

              {divider && <hr className='border-gray-300' />}
            </>
          )
        })}
      </div>
    </div>
  )
}
