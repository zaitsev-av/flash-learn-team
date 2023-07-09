import { Meta, StoryObj } from '@storybook/react'

import { Button } from '../button'

import { Header } from './header.tsx'

import { Logo } from '@/assets'
import { Avatar, AvtarDropdownMenu } from '@/components'
import { DropdownMenu } from '@/components/ui/dropdown-menu'
import s from '@/components/ui/dropdown-menu/dropdown-menu.module.scss'

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
        <Logo />
        <Button variant={'primary'}>Sign In</Button>
      </>
    ),
  },
}

export const Header_App_User_Avatar: Story = {
  args: {
    children: (
      <>
        <Logo />
        <Avatar
          label={'User name'}
          src={
            'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80'
          }
        />
      </>
    ),
  },
}

export const Header_App_User_Avatar_Dropdown_menu: Story = {
  args: {
    children: (
      <>
        <Logo />
        <DropdownMenu
          trigger={
            <Avatar
              src={
                'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80'
              }
              className={s.menu_item}
            />
          }
          content={<AvtarDropdownMenu />}
        />
      </>
    ),
  },
}
