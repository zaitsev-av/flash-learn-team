import { Meta } from '@storybook/react'
import { Provider } from 'react-redux'
import { withRouter } from 'storybook-addon-react-router-v6'

import { store } from '@/app/store.ts'
import { Cards } from '@/components/ui/cards/cards.tsx'

const meta = {
  title: 'Pages/Cards',
  component: Cards,
  render: () => (
    <Provider store={store}>
      <Cards />
    </Provider>
  ),
  decorators: [withRouter],
  tags: ['autodocs'],
  args: {
    userId: '1',
  },
} satisfies Meta<typeof Cards>

export default meta

export const Cards_ = {}
