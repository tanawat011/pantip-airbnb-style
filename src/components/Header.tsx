import { headerHeight } from '../constants'

export const Header = () => {
  return (
    <div
      className='sticky top-0 left-0 z-[1] w-full bg-tertiary border-b border-black'
      style={{ height: headerHeight }}
    >
      Header
    </div>
  )
}
