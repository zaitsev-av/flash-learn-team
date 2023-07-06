import { Meta, StoryObj } from '@storybook/react'

import s from './table.module.scss'

import { Checkbox, DataCell, HeadCell, Table, TableBody, TableHead, TableRow } from '@/components'
const meta = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
  render: args => <Table {...args} />,
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
  args: {
    children: (
      <>
        <TableHead>
          <TableRow>
            <HeadCell title={'Name'} />
            <HeadCell title={'Cards'} />
            <HeadCell title={'Last Updated'} />
            <HeadCell title={'Created by'} />
            <HeadCell />
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <DataCell>{'Test1'}</DataCell>
            <DataCell>{'Test2'}</DataCell>
            <DataCell>{'Test3'}</DataCell>
            <DataCell>{'Test4'}</DataCell>
            <DataCell>{'Test5'}</DataCell>
          </TableRow>
          <TableRow>
            <DataCell>{'Test1'}</DataCell>
            <DataCell>{'Test2'}</DataCell>
            <DataCell>{'Test3'}</DataCell>
            <DataCell>{'Test4'}</DataCell>
            <DataCell>{'Test5'}</DataCell>
          </TableRow>
        </TableBody>
      </>
    ),
  },
}

export const TableWithReactNode: Story = {
  args: {
    children: (
      <>
        <TableHead>
          <TableRow>
            <HeadCell title={'Name'} />
            <HeadCell title={'Cards'} />
            <HeadCell title={'Last Updated'} />
            <HeadCell title={'Created by'} />
            <HeadCell />
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <DataCell>{'Test'}</DataCell>
            <DataCell>{'Test2'}</DataCell>
            <DataCell>{'Test3'}</DataCell>
            <DataCell>{<Checkbox className={s.checkbox} label={'Name'} />}</DataCell>
            <DataCell>{'Test3'}</DataCell>
          </TableRow>
        </TableBody>
      </>
    ),
  },
}

export const Head_Cell: Story = {
  args: {
    children: <HeadCell title={'Name'} />,
  },
}

export const Data_Cell: Story = {
  args: {
    children: <DataCell>{'Name'}</DataCell>,
  },
}
