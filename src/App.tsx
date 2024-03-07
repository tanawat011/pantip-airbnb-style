import './App.css'
import { Header } from './components/Header'
import { Lorem } from './components/Lorem'

import { Sidebar } from './components/Sidebar'
import { Banner } from './components/Banner'
import { Breadcrumb } from './components/Breadcrumb'
import { Content } from './components/Content'

function App() {
  return (
    <div className='relative text-white text-sm font-roboto bg-primary'>
      <Header />

      <div className='w-full flex'>
        <Sidebar />

        <div className='w-full flex flex-col items-center'>
          <Banner />

          <Breadcrumb />

          <Content>
            <Lorem />
            <Lorem />
            <Lorem />
            <Lorem />
          </Content>
        </div>
      </div>
    </div>
  )
}

export default App
