import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from './index'

const meta = {
  title: 'Components/Typography',
  component: Typography,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div style={{ margin: '3em', display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    color: {
      options: ['primary', 'secondary', 'error', 'inherit'],
      control: { type: 'radio' },
    },
    variant: {
      options: [
        'large',
        'h1',
        'h2',
        'h3',
        'body1',
        'body2',
        'subtitle1',
        'subtitle2',
        'caption',
        'overline',
        'link1',
        'link2',
        'error1',
        'error2',
      ],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Typography>

const content =
  'Lorem ipsum dolor sit amet, ' +
  'consectetur adipiscing elit, ' +
  'sed do eiusmod tempor incididunt ' +
  'ut labore et dolore magna aliqua. ' +
  'Ut enim ad minim veniamdsa Lorem ' +
  'ipsum dolor sit amet, consectetur ' +
  'adipiscing elit, sed do eiusmod ' +
  'tempor incididunt ut labore et ' +
  'dolore magna aliqua. Ut enim ad ' +
  'minim veniamdsa Lorem ipsum dolor sit amet, ' +
  'consectetur adipiscing elit, ' +
  'sed do eiusmod tempor incididunt ' +
  'ut labore et dolore magna aliqua. ' +
  'Ut enim ad minim veniamdsa Lorem ' +
  'ipsum dolor sit amet, consectetur ' +
  'adipiscing elit, sed do eiusmod ' +
  'tempor incididunt ut labore et ' +
  'dolore magna aliqua. Ut enim ad ' +
  'minim veniamdsa'

export default meta
type Story = StoryObj<typeof meta>

export const Large: Story = {
  args: {
    variant: 'large',
    children: content,
  },
}
export const H1: Story = {
  args: {
    variant: 'h1',
    children: content,
  },
}
export const H2: Story = {
  args: {
    variant: 'h2',
    children: content,
  },
}
export const H3: Story = {
  args: {
    variant: 'h3',
    children: content,
  },
}
export const Body1: Story = {
  args: {
    variant: 'body1',
    children: content,
  },
}
export const Body2: Story = {
  args: {
    variant: 'body2',
    children: content,
  },
}
export const Subtitle1: Story = {
  args: {
    variant: 'subtitle1',
    children: content,
  },
}
export const Subtitle2: Story = {
  args: {
    variant: 'subtitle2',
    children: content,
  },
}

export const Caption: Story = {
  args: {
    variant: 'caption',
    children: content,
  },
}

export const Overline: Story = {
  args: {
    variant: 'overline',
    children: content,
  },
}
export const Link1: Story = {
  args: {
    variant: 'link1',
    children: content,
  },
}
export const Link2: Story = {
  args: {
    variant: 'link2',
    children: content,
  },
}
export const Error1: Story = {
  args: {
    variant: 'error1',
    children: content,
  },
}
export const Error2: Story = {
  args: {
    variant: 'error2',
    children: content,
  },
}

export const InheritColor: Story = {
  args: {
    variant: 'body1',
    color: 'inherit',
    children: content,
  },
  decorators: [Story => <div style={{ color: 'green' }}>{Story()}</div>],
}
