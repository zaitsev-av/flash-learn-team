import { FC, useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { Pagination, PaginationPropsType } from './'

const meta = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Pagination>

const ControlledPagination: FC<PaginationPropsType> = ({ currentPage, onPageChange, ...args }) => {
  const [page, setPage] = useState(1)

  return <Pagination currentPage={page} onPageChange={setPage} {...args} />
}

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
  args: {
    currentPage: 1,
    pageSize: 5,
    siblingCount: 1,
    totalCount: 30,
  },
  render: args => <ControlledPagination {...args} />,
}
