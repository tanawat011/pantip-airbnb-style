import { headerHeight, sidebarWidth } from '../../constants'

export const Sidebar = () => {
  return (
    <div
      className='sticky left-0 bg-secondary shadow border-r border-black'
      style={{ top: headerHeight, minWidth: sidebarWidth, height: `calc(100vh - ${headerHeight}px)` }}
    >
      Sidebar
    </div>
  )
}
