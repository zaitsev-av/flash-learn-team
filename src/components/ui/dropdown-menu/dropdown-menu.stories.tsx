import { Meta, StoryObj } from '@storybook/react'

import s from './dropdown-menu.module.scss'

import OpenPackMenuIcon from '@/assets/icons/OpenPackMenuIcon.tsx'
import { DropdownMenu, Avatar, AvtarDropdownMenu, DeckEditMenu } from '@/components'

const meta = {
  title: 'Components/Dropdown-menu',
  component: DropdownMenu,
  tags: ['autodocs'],
} satisfies Meta<typeof DropdownMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Avatar_menu: Story = {
  args: {
    trigger: (
      <Avatar
        src={'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80'}
        className={s.menu_item}
      />
    ),
    content: <AvtarDropdownMenu />,
  },
}

export const Deck_menu: Story = {
  args: {
    trigger: <OpenPackMenuIcon />,
    content: <DeckEditMenu />,
  },
}
