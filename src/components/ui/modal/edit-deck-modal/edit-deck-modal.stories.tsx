import { Meta, StoryObj } from '@storybook/react'

import { EditIcon } from '@/assets'
import { EditDeckModal } from '@/components'

const meta = {
  title: 'Modals/Edit Pack Modal',
  component: EditDeckModal,
  tags: ['autodocs'],
} satisfies Meta<typeof EditDeckModal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    deckName: 'EditedPackName',
    isPrivate: true,
    children: <EditIcon />,
    onSubmit: data => {
      // eslint-disable-next-line no-console
      console.log(data)
    },
  },
}
