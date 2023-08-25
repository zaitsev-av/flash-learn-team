import { Meta, StoryObj } from '@storybook/react'

import { ReadMore } from '@/components/ui/read-more/read-more.tsx'

const meta = {
  title: 'Components/Read more',
  component: ReadMore,
  tags: ['autodocs'],
  args: {
    text: 'Метод splice() изменяет содержимое массива, удаляя, заменяя или добавляя элементы.',
  },
  decorators: [
    Story => (
      <div style={{ margin: '3em', display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ReadMore>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
