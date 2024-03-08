import ReactCountryFlag from 'react-country-flag'
import { FaBars, FaEarthAsia, FaUser, FaGear, FaPeopleGroup, FaCommentMedical } from 'react-icons/fa6'
import { GrDocumentText } from 'react-icons/gr'
import { LuHelpingHand } from 'react-icons/lu'
import { PiSignInBold, PiSignOutBold } from 'react-icons/pi'

import { Dropdown } from '../Dropdown'
import { Popover } from '../Popover'

export const RightNavigation = () => {
  return (
    <div className='flex items-center justify-end'>
      <div className='mr-2 flex'>
        <Popover label={<FaCommentMedical size='16' />} className='!px-3 rounded-full hover:bg-black/10'>
          Post a Topic
        </Popover>

        <Popover label={<FaPeopleGroup size='16' />} className='!px-3 rounded-full hover:bg-black/10'>
          Community
        </Popover>

        <Dropdown
          label={<FaEarthAsia size='16' />}
          className='!px-3 rounded-full hover:bg-black/10'
          width={92}
          list={[
            {
              label: 'TH',
              icon: <ReactCountryFlag countryCode='TH' svg className='' />,
            },
            {
              label: 'EN',
              icon: <ReactCountryFlag countryCode='US' svg className='' />,
            },
          ]}
        />
      </div>

      <Dropdown
        label={
          <>
            <FaBars size='16' />

            <FaUser size='16' />
          </>
        }
        className='rounded-full hover:shadow-xl flex items-center justify-between gap-4 border border-gray-300'
        list={[
          {
            label: 'Sign up',
            icon: <GrDocumentText size='16' className='' />,
          },
          {
            label: 'Login',
            icon: <PiSignInBold size='16' className='' />,
          },
          {
            label: 'Logout',
            icon: <PiSignOutBold size='16' className='' />,
            divider: true,
          },
          {
            label: 'Setting',
            icon: <FaGear size='16' className='' />,
          },
          {
            label: 'Help Center',
            icon: <LuHelpingHand size='16' className='' />,
          },
        ]}
      />
    </div>
  )
}