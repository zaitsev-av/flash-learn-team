import { Meta, StoryObj } from '@storybook/react'

import { LearnDesk } from '@/components/learn-pack/learn-desk.tsx'

const meta = {
  title: 'Modals/Learn desk',
  component: LearnDesk,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div style={{ margin: '3em', display: 'flex', justifyContent: 'center' }}>
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
    question: 'How "This" works in JavaScript?',
    attempts: 10,
    answer: 'This is how "This" works in JavaScript',
  },
}
