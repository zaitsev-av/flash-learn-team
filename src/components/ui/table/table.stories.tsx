import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import s from './table.module.scss'

import { Checkbox, Grade, Sort, Table } from '@/components'
import { columns } from '@/components/ui/decks/table/columns-deck-table.ts'
import { data } from '@/components/ui/table/test-data.ts'
import { TableActions } from '@/components/ui/table-action-buttons'

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
  const [isDeleteModalOpen, setDeleteModalOpen] = useState<boolean>(false)

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
                <TableActions
                  item={row}
                  editable={row.editable}
                  isDeleteModalOpen={isDeleteModalOpen}
                  setDeleteModalOpen={setDeleteModalOpen}
                />
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
        <TableActions item={data[0]} isDeleteModalOpen={false} setDeleteModalOpen={() => {}} />
      </Table.DataCell>
    ),
  },
}
