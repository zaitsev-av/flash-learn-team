import { Meta, StoryObj } from '@storybook/react'
import { Provider } from 'react-redux'

import { store } from '@/app/store.ts'
import { Decks } from '@/components'

const meta = {
  title: 'Pages/Deck',
  component: Decks,
  render: () => (
    <Provider store={store}>
      <Decks />
    </Provider>
  ),
  tags: ['autodocs'],
} satisfies Meta<typeof Decks>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
