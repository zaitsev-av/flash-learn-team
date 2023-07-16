import { Meta, StoryObj } from '@storybook/react'

import { Packs } from '@/components'

const meta = {
  title: 'Pages/Packs',
  component: Packs,
  tags: ['autodocs'],
} satisfies Meta<typeof Packs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
