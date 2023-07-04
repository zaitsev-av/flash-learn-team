import { Meta, StoryObj } from '@storybook/react'

import { Button } from '../button'

import { Header } from './header.tsx'

import { LogoIncubator } from '@/assets'
import { Avatar } from '@/components'
import { DropdownMenu } from '@/components/ui/dropdown-menu'

const meta = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Header_App: Story = {
  args: {
    children: (
      <>
        <LogoIncubator />
        <Button variant={'primary'}>Sign In</Button>
      </>
    ),
  },
}

export const Header_App_User_Avatar: Story = {
  args: {
    children: (
      <>
        <LogoIncubator />
        <Avatar name={'User name'} variant={'header'} />
      </>
    ),
  },
}

export const Header_App_User_Avatar_Dropdown_menu: Story = {
  args: {
    children: (
      <>
        <LogoIncubator />
        <DropdownMenu />
      </>
    ),
  },
}
