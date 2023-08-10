import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'
import { v4 as uuidv4 } from 'uuid'

import s from './table.module.scss'

import { Checkbox, Grade, Sort, Table } from '@/components'
import { TableActions } from '@/components/ui/table-action-buttons'
import { columns } from '@/helpers'

export const data = [
  {
    id: uuidv4(),
    title: 'Project A',
    cardsCount: 10,
    updated: '2023-07-07',
    createdBy: 'John Doe',
    editable: false,
  },
  {
    id: uuidv4(),
    title: 'Project B',
    cardsCount: 5,
    updated: '2023-07-06',
    createdBy: 'Jane Smith',
    editable: true,
  },
  {
    id: uuidv4(),
    title: 'Project C',
    cardsCount: 8,
    updated: '2023-07-05',
    createdBy: 'Alice Johnson',
    editable: false,
  },
  {
    id: uuidv4(),
    title: 'Project D',
    cardsCount: 3,
    updated: '2023-07-07',
    createdBy: 'Bob Anderson',
    editable: true,
  },
  {
    id: uuidv4(),
    title: 'Project E',
    cardsCount: 12,
    updated: '2023-07-04',
    createdBy: 'Emma Davis',
    editable: false,
  },
  {
    id: uuidv4(),
    title: 'Project A',
    cardsCount: 10,
    updated: '2023-07-07',
    createdBy: 'John Doe',
    editable: false,
  },
  {
    id: uuidv4(),
    title: 'Project B',
    cardsCount: 5,
    updated: '2023-07-06',
    createdBy: 'Jane Smith',
    editable: true,
  },
  {
    id: uuidv4(),
    title: 'Project C',
    cardsCount: 8,
    updated: '2023-07-05',
    createdBy: 'Alice Johnson',
    editable: false,
  },
  {
    id: uuidv4(),
    title: 'Project D',
    cardsCount: 3,
    updated: '2023-07-07',
    createdBy: 'Bob Anderson',
    editable: true,
  },
  {
    id: uuidv4(),
    title: 'Project E',
    cardsCount: 12,
    updated: '2023-07-04',
    createdBy: 'Emma Davis',
    editable: false,
  },
  {
    id: uuidv4(),
    title: 'Project A',
    cardsCount: 10,
    updated: '2023-07-07',
    createdBy: 'John Doe',
    editable: false,
  },
  {
    id: uuidv4(),
    title: 'Project B',
    cardsCount: 5,
    updated: '2023-07-06',
    createdBy: 'Jane Smith',
    editable: true,
  },
  {
    id: uuidv4(),
    title: 'Project C',
    cardsCount: 8,
    updated: '2023-07-05',
    createdBy: 'Alice Johnson',
    editable: false,
  },
  {
    id: uuidv4(),
    title: 'Project D',
    cardsCount: 3,
    updated: '2023-07-07',
    createdBy: 'Bob Anderson',
    editable: true,
  },
  {
    id: uuidv4(),
    title: 'Project E',
    cardsCount: 12,
    updated: '2023-07-04',
    createdBy: 'Emma Davis',
    editable: false,
  },
  {
    id: uuidv4(),
    title: 'Project A',
    cardsCount: 10,
    updated: '2023-07-07',
    createdBy: 'John Doe',
    editable: false,
  },
  {
    id: uuidv4(),
    title: 'Project B',
    cardsCount: 5,
    updated: '2023-07-06',
    createdBy: 'Jane Smith',
    editable: true,
  },
  {
    id: uuidv4(),
    title: 'Project C',
    cardsCount: 8,
    updated: '2023-07-05',
    createdBy: 'Alice Johnson',
    editable: false,
  },
  {
    id: uuidv4(),
    title: 'Project D',
    cardsCount: 3,
    updated: '2023-07-07',
    createdBy: 'Bob Anderson',
    editable: true,
  },
  {
    id: uuidv4(),
    title: 'Project E',
    cardsCount: 12,
    updated: '2023-07-04',
    createdBy: 'Emma Davis',
    editable: false,
  },
]

const meta = {
  title: 'Components/Table',
  component: Table.Root,
  decorators: [
    Story => (
      <div style={{ margin: '3em', display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof Table.Root>

const Container = () => {
  const [sort, setSort] = useState<Sort>(null)

  return (
    <>
      <Table.Head columns={columns} sort={sort} handlerSort={() => {}} onSort={setSort} />

      <Table.Body>
        {data.map(row => {
          return (
            <Table.Row key={row.title}>
              <Table.DataCell>{row.title}</Table.DataCell>
              <Table.DataCell>{row.cardsCount}</Table.DataCell>
              <Table.DataCell>{row.updated}</Table.DataCell>
              <Table.DataCell>{row.createdBy}</Table.DataCell>
              <Table.DataCell>
                <TableActions editable={row.editable} item={row} />
              </Table.DataCell>
            </Table.Row>
          )
        })}
      </Table.Body>
    </>
  )
}

export default meta
type Story = StoryObj<typeof meta>
export const DefaultWithSort: Story = {
  args: {
    children: <Container />,
  },
  parameters: {
    controls: {
      exclude: /(?:\b|')(children)(?:\b|')/g,
    },
  },
}

export const Head_Cell: Story = {
  args: {
    children: <Table.HeadCell key={'name'} title={'Name'} />,
  },
}

export const Data_Cell: Story = {
  args: {
    children: <Table.DataCell>{'Name'}</Table.DataCell>,
  },
}
export const Data_Cell_WithReactNode: Story = {
  args: {
    children: <Table.DataCell className={s.row}>{<Checkbox label={'Name'} />}</Table.DataCell>,
  },
}

export const Data_Cell_With_Grade: Story = {
  args: {
    children: (
      <Table.DataCell className={s.row}>
        <Grade grade={3} />
      </Table.DataCell>
    ),
  },
}

export const Data_Cell_With_Actions: Story = {
  args: {
    children: (
      <Table.DataCell className={s.row}>
        <TableActions item={data[0]} />
      </Table.DataCell>
    ),
  },
}
