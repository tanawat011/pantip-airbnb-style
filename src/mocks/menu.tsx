import { BsTags } from 'react-icons/bs'
import { MdOutlineAccessTime, MdOutlineHighlight, MdOutlineMeetingRoom } from 'react-icons/md'
import { TbColorPicker } from 'react-icons/tb'
import { TfiAnnouncement } from 'react-icons/tfi'

export const menu = [
  {
    label: 'Announce',
    icon: <TfiAnnouncement size='24' />,
  },
  {
    label: 'Rooms',
    icon: <MdOutlineMeetingRoom size='24' />,
  },
  {
    label: 'Highlight',
    icon: <MdOutlineHighlight size='24' />,
  },
  {
    label: 'Realtime',
    icon: <MdOutlineAccessTime size='24' />,
  },
  {
    label: 'Pick',
    icon: <TbColorPicker size='24' />,
  },
  {
    label: 'Hitz',
    icon: <BsTags size='24' />,
  },
]
