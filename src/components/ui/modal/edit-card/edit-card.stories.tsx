import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { EditCard } from './edit-card.tsx'

import { Button } from '@/components'

const meta = {
  title: 'Modals/Edit Card Modal',
  component: EditCard,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div style={{ margin: '3em', display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    children: <Button variant={'primary'}>Edit card</Button>,
    answer: 'How "This" works in JavaScript?',
    question: 'This is how "This" works in JavaScript',
    isOpen: false,
    setIsOpen: isOpen => !isOpen,
    questionImg: '',
    answerImg: '',
  },
  parameters: {
    controls: {
      exclude: /(?:\b|')(children)(?:\b|')/g,
    },
  },
} satisfies Meta<typeof EditCard>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
  render: args => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
      <EditCard
        onSubmit={data => {
          // eslint-disable-next-line no-console
          console.log(data)
        }}
        questionImg={''}
        answerImg={''}
        answer={args.answer}
        question={args.question}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
        {args.children}
      </EditCard>
    )
  },
}
