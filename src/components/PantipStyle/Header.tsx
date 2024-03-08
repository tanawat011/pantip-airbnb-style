import { FaBars, FaSistrix, FaCommentMedical, FaPeopleGroup } from 'react-icons/fa6'
import { IoLogoReact } from 'react-icons/io5'
import { headerHeight } from '../../constants'

export const Header = () => {
  return (
    <div
      className='sticky top-0 left-0 z-[1] w-full bg-tertiary border-b border-black flex items-center justify-between'
      style={{ height: headerHeight }}
    >
      <div className='h-full flex'>
        <div className='px-4 flex items-center cursor-pointer hover:bg-accent'>
          <FaBars size='20px' className='mx-3' />
        </div>

        <div className='px-4 flex items-center cursor-pointer hover:bg-accent'>
          <IoLogoReact size='20px' className='mx-3 animate-spin' />
        </div>
      </div>

      <div>
        <div className='relative flex'>
          <input placeholder='ค้นหาบน Pantip' className='h-7 px-4 pr-8 bg-accent border border-black' />

          <div className='absolute top-0 right-0 h-full flex items-center mr-1 p-1 cursor-pointer'>
            <FaSistrix size='18px' className='' />
          </div>
        </div>
      </div>

      <div className='h-full flex'>
        <div className='px-4 flex items-center cursor-pointer hover:bg-accent group'>
          <FaCommentMedical size='20px' className='mr-2 group-hover:animate-bounce' />

          <p className=''>ตั้งกระทู้</p>
        </div>

        <div className='px-4 flex items-center cursor-pointer hover:bg-accent group'>
          <FaPeopleGroup size='20px' className='mr-2 group-hover:animate-bounce' />

          <p className=''>คอมมูนิตี้</p>
        </div>

        <div className='px-4 flex items-center cursor-pointer hover:bg-accent group'>
          <p>เข้าสู่ระบบ / สมัครสมาชิก</p>
        </div>
      </div>
    </div>
  )
}
