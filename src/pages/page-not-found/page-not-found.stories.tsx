import { Meta } from '@storybook/react'

import { PageNotFound } from '@/pages/page-not-found/page-not-found.tsx'

const meta = {
  title: 'Pages/Page not found',
  component: PageNotFound,
  decorators: [
    Story => (
      <div style={{ margin: '3em', display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof PageNotFound>

export default meta

export const PageNotFound_ = {}
