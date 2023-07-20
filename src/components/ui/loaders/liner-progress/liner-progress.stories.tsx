import { useState } from 'react'

import { Meta } from '@storybook/react'

import { Button } from '@/components'
import { LinerProgress } from '@/components/ui/loaders/liner-progress/liner-progress.tsx'

const meta = {
  title: 'Components/Loaders/Liner progress',
  component: LinerProgress,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div style={{ margin: '3em', display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof LinerProgress>

export default meta

export const Default = {
  render: () => {
    const [snow, setSnow] = useState(false)

    return (
      <div>
        {snow ? (
          <LinerProgress />
        ) : (
          <Button variant={'primary'} onClick={() => setSnow(prevState => !prevState)}>
            click on button
          </Button>
        )}
      </div>
    )
  },
}
