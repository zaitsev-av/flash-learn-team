import { Meta, StoryObj } from '@storybook/react'

import { DeleteIcon } from '@/assets'
import { DeleteDialog } from '@/components/ui/modal/delete-dialog/delete-dialog.tsx'

const meta = {
  title: 'Modals/Delete Dialog',
  component: DeleteDialog,
  tags: ['autodocs'],
  parameters: {
    controls: {
      exclude: /(?:\b|')(item|trigger|onClick)(?:\b|')/g,
    },
  },
} satisfies Meta<typeof DeleteDialog>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
  args: {
    title: 'Delete Pack',
    buttonTitle: 'Delete Pack',
    item: { title: 'SomePackName', id: 'pack_ID_ajkskg' },
    children: <DeleteIcon />,
    onClick: id => {
      console.log(id)
    },
  },
}
