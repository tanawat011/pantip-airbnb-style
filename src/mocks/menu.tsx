import { BsTags } from 'react-icons/bs'
import { MdOutlineAccessTime, MdOutlineHighlight, MdOutlineMeetingRoom } from 'react-icons/md'
import { TbColorPicker } from 'react-icons/tb'
import { TfiAnnouncement } from 'react-icons/tfi'

export const menu = [
  {
    label: 'Announce',
    icon: <TfiAnnouncement size='24' className='group-hover:animate-bounce' />,
  },
  {
    label: 'Rooms',
    icon: <MdOutlineMeetingRoom size='24' className='group-hover:animate-bounce' />,
  },
  {
    label: 'Highlight',
    icon: <MdOutlineHighlight size='24' className='group-hover:animate-bounce' />,
  },
  {
    label: 'Realtime',
    icon: <MdOutlineAccessTime size='24' className='group-hover:animate-bounce' />,
  },
  {
    label: 'Pick',
    icon: <TbColorPicker size='24' className='group-hover:animate-bounce' />,
  },
  {
    label: 'Hitz',
    icon: <BsTags size='24' className='group-hover:animate-bounce' />,
  },
]
