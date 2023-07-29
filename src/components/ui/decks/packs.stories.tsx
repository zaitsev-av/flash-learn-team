import { Meta, StoryObj } from '@storybook/react'

import { Decks } from '@/components'

const meta = {
  title: 'Pages/Packs',
  component: Decks,
  tags: ['autodocs'],
} satisfies Meta<typeof Decks>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
