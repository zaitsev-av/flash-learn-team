import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from '@/components'
import { Card } from '@/components/ui/card/card.tsx'

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Large: Story = {
  args: {
    children: (
      <div
        style={{
          width: '150px',
          height: '300px',
          padding: '25px',
        }}
      >
        <Typography variant={'h1'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
      </div>
    ),
  },
}
