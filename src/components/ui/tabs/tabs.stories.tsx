import type { Meta, StoryObj } from '@storybook/react'

import { Tabs } from './'

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  decorators: [
    Story => (
      <div style={{ margin: '3em', display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  args: {
    tabs: [
      { value: 'string123', tabName: 'my packs' },
      { value: 'string456', tabName: 'my packs' },
    ],
    defaultValue: 'string123',
    onValueChange: value => console.log(value),
  },
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
export const Tabs_with_label: Story = {
  args: {
    label: 'Your label',
  },
}

export const Disabled: Story = {
  args: {
    tabs: [
      { value: '123', tabName: 'my packs' },
      { value: '456', tabName: 'all packs', disabled: true },
    ],
    defaultValue: '123',
  },
}

export const Three_tabs: Story = {
  args: {
    tabs: [
      { value: '123', tabName: 'my packs' },
      { value: '789', tabName: 'packs' },
      { value: '456', tabName: 'all packs' },
    ],
    defaultValue: '123',
  },
}
