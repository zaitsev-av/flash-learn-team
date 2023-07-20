import { Meta, StoryObj } from '@storybook/react'

import { InitialLoader } from '@/components/ui/loaders/initial-loader/initial-loader.tsx'

const meta = {
  title: 'Components/Loaders/Initial loader',
  component: InitialLoader,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div style={{ margin: '3em', display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof InitialLoader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
