import { Meta, StoryObj } from '@storybook/react'

import { LearnDesk } from '@/components/learn-pack/learn-desk.tsx'

const meta = {
  title: 'Modals/Learn desk',
  component: LearnDesk,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div style={{ margin: '3rem' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    controls: {
      exclude: /(?:\b|')(item|trigger|onClick)(?:\b|')/g,
    },
  },
} satisfies Meta<typeof LearnDesk>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
  args: {
    packName: 'Pack Name',
  },
}
