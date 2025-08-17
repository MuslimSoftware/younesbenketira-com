import { IconType } from 'react-icons'
import { RiTwitterXFill } from 'react-icons/ri'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail, MdPhone } from 'react-icons/md'

export interface Social {
  id: string
  name: string
  handle: string
  copyText: string
  url: string
  icon: IconType
  opensInNewTab: boolean
}

export const socialsData: Social[] = [
  {
    id: 'twitter',
    name: 'X (Twitter)',
    handle: '@muslimsoftware',
    copyText: 'https://twitter.com/muslimsoftware',
    url: 'https://twitter.com/muslimsoftware',
    icon: RiTwitterXFill,
    opensInNewTab: true
  },
  {
    id: 'github',
    name: 'GitHub',
    handle: '@muslimsoftware',
    copyText: 'https://github.com/muslimsoftware',
    url: 'https://github.com/muslimsoftware',
    icon: FaGithub,
    opensInNewTab: true
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    handle: 'younesbenketira',
    copyText: 'https://www.linkedin.com/in/younesbenketira/',
    url: 'https://www.linkedin.com/in/younesbenketira/',
    icon: FaLinkedin,
    opensInNewTab: true
  },
  {
    id: 'email',
    name: 'Email',
    handle: 'me@younesbenketira.com',
    copyText: 'me@younesbenketira.com',
    url: 'mailto:me@younesbenketira.com',
    icon: MdEmail,
    opensInNewTab: false
  },
  {
    id: 'phone',
    name: 'Phone',
    handle: '+1 438 927 9454',
    copyText: '+14389279454',
    url: 'tel:+14389279454',
    icon: MdPhone,
    opensInNewTab: false
  }
]