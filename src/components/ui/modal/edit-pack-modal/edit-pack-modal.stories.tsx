import { Meta, StoryObj } from '@storybook/react'

import { EditIcon } from '@/assets'
import { EditPackModal } from '@/components/ui/modal/edit-pack-modal/edit-pack-modal.tsx'

const meta = {
  title: 'Modals/Edit Pack Modal',
  component: EditPackModal,
  tags: ['autodocs'],
} satisfies Meta<typeof EditPackModal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    packName: 'EditedPackName',
    isPrivate: true,
    children: <EditIcon />,
    onSubmit: data => {
      // eslint-disable-next-line no-console
      console.log(data)
    },
  },
}
