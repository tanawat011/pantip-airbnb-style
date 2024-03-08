import type { UIEvent } from 'react'
import { useState } from 'react'

import './App.css'
import {
  Announce,
  Content,
  Header,
  LeftNavigation,
  MenuBar,
  Navbar,
  Navigation,
  RightNavigation,
} from './components/AirBnbStyle'
import { menu, navigationMenu } from './mocks'

function App() {
  const [scrollStarted, setScrollStarted] = useState(false)

  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    const el = e.target as HTMLDivElement

    setScrollStarted(el.scrollTop > 0)
  }

  return (
    <div
      id='body'
      className='font-roboto overflow-y-scroll overflow-x-hidden h-screen relative'
      onScroll={handleScroll}
    >
      <Header scrollStarted={scrollStarted}>
        <Navigation scrollStarted={scrollStarted}>
          <div className='w-full flex flex-col'>
            <div className='w-full flex items-center justify-between h-[80px]'>
              <LeftNavigation list={navigationMenu} itemActive='/' />

              <Navbar scrollStarted={scrollStarted} list={navigationMenu} itemActive='/' />

              <RightNavigation scrollStarted={scrollStarted} />
            </div>

            <Navbar scrollStarted={scrollStarted} list={navigationMenu} itemActive='/' forMobile />
          </div>
        </Navigation>

        <MenuBar list={menu} itemActive='Announce' className='mb-4' />
      </Header>

      <Content>
        <Announce />
      </Content>

      <div className='sticky bottom-0 w-full bg-white py-2'>
        <MenuBar list={menu} itemActive='Announce' forMobile />
      </div>
    </div>
  )
}

export default App
