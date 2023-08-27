import { useState } from 'react'

import { Meta } from '@storybook/react'

import { AvtarDropdown, DeckMenu, DropdownMenu } from '@/components'

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
const src = 'https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_640.png'

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
    const [isDeleteModalOpen, setDeleteModalOpen] = useState<boolean>(false)
    const [isEditCardModalOpen, setEditCardModalOpen] = useState<boolean>(false)

    return (
      <DeckMenu
        isEditDeckModalOpen={isEditCardModalOpen}
        setEditDeckModalOpen={setEditCardModalOpen}
        isDeleteModalOpen={isDeleteModalOpen}
        setDeleteModalOpen={setDeleteModalOpen}
        deckId={''}
        deckName={'deck'}
        onEdit={() => console.log('onEdit called')}
        onDelete={() => console.log('onDelete called')}
      />
    )
  },
}
