import { Meta } from '@storybook/react'

import { AvtarDropdown, DeckEditMenu, DropdownMenu } from '@/components'

const meta = {
  title: 'Components/Dropdown-menu',
  component: DropdownMenu,
  decorators: [
    Story => (
      <div style={{ margin: '3em', display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof DropdownMenu>

export default meta
const src = 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80'

export const Avatar_dropdown_menu = {
  render: () => {
    return (
      <AvtarDropdown
        src={src}
        userName={'Valera'}
        userEmail={'valera@gmail.com'}
        onSignOut={() => console.log('onSigOut called')}
      />
    )
  },
}

export const Deck_menu = {
  render: () => {
    return (
      <DeckEditMenu
        onEdit={() => console.log('onEdit called')}
        onDelete={() => console.log('onDelete called')}
      />
    )
  },
}
