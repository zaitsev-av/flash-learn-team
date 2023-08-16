import { Meta, StoryObj } from '@storybook/react'
import { Provider } from 'react-redux'
import { withRouter } from 'storybook-addon-react-router-v6'

import { store } from '@/app/store.ts'
import { Decks } from '@/components'

const meta = {
  title: 'Pages/Packs',
  component: Decks,
  render: () => (
    <Provider store={store}>
      <Decks />
    </Provider>
  ),
  decorators: [withRouter],
  tags: ['autodocs'],
} satisfies Meta<typeof Decks>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
