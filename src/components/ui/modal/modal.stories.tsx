import { Meta, StoryObj } from '@storybook/react'

import { Button } from '@/components'
import { Modal } from '@/components/ui/modal/modal.tsx'

const meta = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  args: {
    trigger: <Button variant={'primary'}>modal</Button>,
  },
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Title',
    body: 'Body',
    footer: 'Footer',
  },
}

export const Header: Story = {
  args: {
    title: 'Header Only',
  },
}

export const FooterOneButton: Story = {
  args: {
    title: 'Header Only',
    footer: <Button variant={'primary'}>Primary</Button>,
  },
}
