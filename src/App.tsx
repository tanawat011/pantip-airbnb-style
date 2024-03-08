import type { UIEvent } from 'react'
import { useState } from 'react'

import './App.css'
import { Announce, Content, Header, Logo, MenuBar, Navbar, Navigation, RightNavigation } from './components/AirBnbStyle'
import { menu, navigationMenu } from './mocks'

function App() {
  const [scrollStarted, setScrollStarted] = useState(false)

  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    const el = e.target as HTMLDivElement

    setScrollStarted(el.scrollTop > 0)
  }

  return (
    <div className='font-roboto overflow-y-scroll overflow-x-hidden h-screen' onScroll={handleScroll}>
      <Header scrollStarted={scrollStarted}>
        <Navigation scrollStarted={scrollStarted}>
          <Logo />

          <Navbar scrollStarted={scrollStarted} list={navigationMenu} itemActive='/' />

          <RightNavigation />
        </Navigation>

        <MenuBar list={menu} itemActive='Announce' />
      </Header>

      <Content>
        <Announce />
      </Content>
    </div>
  )
}

export default App
