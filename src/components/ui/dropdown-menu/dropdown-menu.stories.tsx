import { Meta } from '@storybook/react'

import { AvtarDropdown, DeckEditMenu, DropdownMenu } from '@/components'

const meta = {
  title: 'Components/Dropdown-menu',
  component: DropdownMenu,
  tags: ['autodocs'],
} satisfies Meta<typeof DropdownMenu>

export default meta

export const Avatar_dropdown_menu = {
  render: () => {
    return <AvtarDropdown />
  },
}

export const Deck_menu = {
  render: () => {
    return <DeckEditMenu />
  },
}
