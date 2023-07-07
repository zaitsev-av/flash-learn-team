import type { StoryObj } from '@storybook/react'

import {
  CheckedIcon,
  CheckEmailLogo,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CloseIcon,
  DeletePackIcon,
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
  title: 'Icons/All_icons',
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof meta>

export const CheckEmailLogo_Story: Story = {
  render: () => {
    return (
      <div style={{ width: '300px', height: '300px' }}>
        <CheckEmailLogo />
      </div>
    )
  },
}

export const ChevronDown_story: Story = {
  render: () => {
    return (
      <div style={{ width: '30px', height: '30px' }}>
        <ChevronDown />
      </div>
    )
  },
}

export const ChevronLeft_story: Story = {
  render: () => {
    return (
      <div style={{ width: '30px', height: '30px' }}>
        <ChevronLeft />
      </div>
    )
  },
}
export const ChevronRight_story: Story = {
  render: () => {
    return (
      <div style={{ width: '30px', height: '30px' }}>
        <ChevronRight />
      </div>
    )
  },
}

export const CloseIcon_story: Story = {
  render: () => {
    return (
      <div style={{ width: '30px', height: '30px' }}>
        <CloseIcon />
      </div>
    )
  },
}

export const DeletePackIcon_story: Story = {
  render: () => {
    return (
      <div style={{ width: '30px', height: '30px' }}>
        <DeletePackIcon />
      </div>
    )
  },
}

export const HideIcon_story: Story = {
  render: () => {
    return (
      <div style={{ width: '30px', height: '30px' }}>
        <HideIcon fill={'red'} />
      </div>
    )
  },
}

export const LearnPackIcon_story: Story = {
  render: () => {
    return (
      <div style={{ width: '50px', height: '50px' }}>
        <LearnPackIcon />
      </div>
    )
  },
}

export const Logo_story: Story = {
  render: () => {
    return (
      <div style={{ width: '450px' }}>
        <Logo />
      </div>
    )
  },
}

export const LogoutIcon_story: Story = {
  render: () => {
    return (
      <div style={{ width: '50px', height: '50px' }}>
        <LogoutIcon />
      </div>
    )
  },
}

export const OpenPackMenuIcon_story: Story = {
  render: () => {
    return (
      <div style={{ width: '50px', height: '50px' }}>
        <OpenPackMenuIcon />
      </div>
    )
  },
}

export const PencilIcon_story: Story = {
  render: () => {
    return (
      <div style={{ width: '50px', height: '50px' }}>
        <PencilIcon />
      </div>
    )
  },
}

export const ProfileIcon_story: Story = {
  render: () => {
    return (
      <div>
        <ProfileIcon />
      </div>
    )
  },
}

export const SearchIcon_story: Story = {
  render: () => {
    return (
      <div style={{ width: '50px', height: '50px' }}>
        <SearchIcon color={'red'} />
      </div>
    )
  },
}

export const ShowIcon_story: Story = {
  render: () => {
    return (
      <div style={{ width: '50px', height: '50px' }}>
        <ShowIcon color={'red'} />
      </div>
    )
  },
}

export const CheckedIcon_story: Story = {
  render: () => {
    return (
      <div style={{ width: '50px', height: '50px' }}>
        <CheckedIcon color={'red'} />
      </div>
    )
  },
}

export const StarIcon_story: Story = {
  render: () => {
    return (
      <div style={{ width: '50px', height: '50px' }}>
        <StarIcon />
      </div>
    )
  },
}

export const StarOutlineIcon_story: Story = {
  render: () => {
    return (
      <div style={{ width: '50px', height: '50px' }}>
        <StarOutlineIcon />
      </div>
    )
  },
}
