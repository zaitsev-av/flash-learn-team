import { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

import { Header } from './header.tsx'

const meta = {
  title: 'Components/Header',
  component: Header,
  render: () => <Header logout={() => {}} />,
  decorators: [withRouter],
  tags: ['autodocs'],
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Header_App: Story = {
  args: {},
}

export const Header_App_User_Avatar: Story = {
  args: {
    logout: () => console.log('called'),
    data: { name: '', email: '' },
  },
}

export const Header_App_User_Avatar_Dropdown_menu: Story = {
  args: {
    logout: () => console.log('called'),
    data: { name: '', email: '' },
  },
}
