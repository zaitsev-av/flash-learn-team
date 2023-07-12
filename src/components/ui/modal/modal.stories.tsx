import { Meta, StoryObj } from '@storybook/react'

import ChangeConverIcon from '@/assets/icons/ChangeConverIcon.tsx'
import { Button, Checkbox, Select, TextField, Typography } from '@/components'
import { Modal } from '@/components/ui/modal/modal.tsx'

const meta = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div style={{ margin: '3em', display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    trigger: <Button variant={'primary'}>modal</Button>,
  },
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Title',
    body: <TextField inputType={'text'} title={'test'} />,
    footer: (
      <>
        <Button variant={'primary'} type={'submit'}>
          <Typography variant={'subtitle2'}>Add New Pack</Typography>
        </Button>
        <Button variant={'secondary'}>
          <Typography variant={'subtitle2'}>Cancel</Typography>
        </Button>
      </>
    ),
  },
}

export const Header: Story = {
  args: {
    title: 'Header Only',
  },
}

export const Body: Story = {
  args: {
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamdsa',
  },
}
export const Body_variant: Story = {
  args: {
    body: (
      <>
        <Select fullWidth items={['item1', 'item2', 'item3', 'item4']} />
        <TextField title={'input'} inputType={'text'} />
        <TextField title={'input'} inputType={'password'} />
        <Checkbox left label={'Check-box'} />
      </>
    ),
  },
}
export const Body_variant2: Story = {
  args: {
    title: 'Header',
    body: (
      <>
        <Select label={'select-box'} fullWidth items={['item1', 'item2', 'item3', 'item4']} />
        <Typography variant={'subtitle2'}>Question:</Typography>
        <Button variant={'secondary'}>
          <ChangeConverIcon />
          <>Change cover</>
        </Button>
        <Typography variant={'subtitle2'}>Answer:</Typography>
        <Button variant={'secondary'}>
          <ChangeConverIcon />
          <>Change cover</>
        </Button>
        <TextField title={'input'} inputType={'text'} />
        <Checkbox left label={'Check-box'} />
      </>
    ),
  },
}
export const Footer_One_Button: Story = {
  args: {
    title: 'Header',
    footer: <Button variant={'primary'}>Primary</Button>,
  },
}
