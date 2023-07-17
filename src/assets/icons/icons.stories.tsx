import type { StoryObj } from '@storybook/react'

import {
  ArrowLeftIcon,
  CheckedIcon,
  CheckEmailLogo,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CloseIcon,
  DeleteIcon,
  HideIcon,
  LearnPackIcon,
  Logo,
  LogoutIcon,
  PencilIcon,
  ProfileIcon,
  SearchIcon,
  ShowIcon,
  StarIcon,
  StarOutlineIcon,
} from '@/assets'
import OpenPackMenuIcon from '@/assets/icons/OpenPackMenuIcon.tsx'

const meta = {
  title: 'Icons/Icons',
  tags: ['autodocs'],
  decorators: [
    (Story: any) => (
      <div style={{ margin: '3em', display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof meta>

export const CheckEmail: Story = {
  render: () => {
    return (
      <div style={{ width: '300px', height: '300px' }}>
        <CheckEmailLogo />
      </div>
    )
  },
}

export const Chevron_Down: Story = {
  render: () => {
    return <ChevronDown />
  },
}

export const Chevron_Left: Story = {
  render: () => {
    return <ChevronLeft />
  },
}
export const Chevron_Right: Story = {
  render: () => {
    return <ChevronRight />
  },
}

export const Close_Icon: Story = {
  render: () => {
    return <CloseIcon />
  },
}

export const Delete_Icon: Story = {
  render: () => {
    return <DeleteIcon />
  },
}

export const Hide_Icon: Story = {
  render: () => {
    return (
      <div style={{ width: '30px', height: '30px' }}>
        <HideIcon fill={'#fff'} />
      </div>
    )
  },
}

export const Learn_Pack_Icon: Story = {
  render: () => {
    return <LearnPackIcon />
  },
}

export const Logo_Incubator: Story = {
  render: () => {
    return <Logo />
  },
}

export const Logout_Icon: Story = {
  render: () => {
    return <LogoutIcon />
  },
}

export const Open_Pack_Menu_Icon: Story = {
  render: () => {
    return <OpenPackMenuIcon />
  },
}

export const Pencil_Icon: Story = {
  render: () => {
    return <PencilIcon />
  },
}

export const Profile_Icon: Story = {
  render: () => {
    return <ProfileIcon />
  },
}

export const Search_Icon: Story = {
  render: () => {
    return (
      <div style={{ width: '50px', height: '50px' }}>
        <SearchIcon color={'#fff'} />
      </div>
    )
  },
}

export const Show_Icon: Story = {
  render: () => {
    return (
      <div style={{ width: '50px', height: '50px' }}>
        <ShowIcon color={'#fff'} />
      </div>
    )
  },
}

export const Checked_Icon: Story = {
  render: () => {
    return <CheckedIcon color={'#fff'} />
  },
}

export const Star_Icon: Story = {
  render: () => {
    return <StarIcon />
  },
}

export const Star_Outline_Icon: Story = {
  render: () => {
    return <StarOutlineIcon />
  },
}
export const ArrowLeft_Icon: Story = {
  render: () => {
    return <ArrowLeftIcon />
  },
}
