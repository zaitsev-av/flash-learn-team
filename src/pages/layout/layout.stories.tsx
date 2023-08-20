import { Meta } from '@storybook/react'
import { Provider } from 'react-redux'

import { store } from '@/app/store.ts'
import { Layout } from '@/pages/layout/layout.tsx'

const meta = {
  title: 'Pages/Layout',
  component: Layout,
  decorators: [
    Story => (
      <div
        style={{
          margin: '3em',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Provider store={store}>
          <Story />
        </Provider>
      </div>
    ),
  ],
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof Layout>

export default meta

export const Layout_ = {}
