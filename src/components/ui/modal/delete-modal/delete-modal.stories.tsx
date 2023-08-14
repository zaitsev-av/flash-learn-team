import { Meta, StoryObj } from '@storybook/react'

import { DeleteIcon } from '@/assets'
import { DeleteModal } from '@/components'

const meta = {
  title: 'Modals/Delete Dialog',
  component: DeleteModal,
  tags: ['autodocs'],
  parameters: {
    controls: {
      exclude: /(?:\b|')(item|trigger|onClick)(?:\b|')/g,
    },
  },
} satisfies Meta<typeof DeleteModal>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
  args: {
    title: 'Delete Pack',
    buttonTitle: 'Delete Pack',
    item: { title: 'SomePackName', id: 'pack_ID_ajkskg' },
    isOpen: false,
    setIsOpen: isOpen => console.log(isOpen),
    children: <DeleteIcon />,
    onClick: id => {
      console.log(id)
    },
  },
}
