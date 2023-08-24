import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'
import { clsx } from 'clsx'

import s from './table.module.scss'

import { DeleteIcon, EditIcon } from '@/assets'
import { Checkbox, Grade, Sort, Table } from '@/components'
import { columns } from '@/components/ui/decks/table/columns-deck-table.ts'
import { data } from '@/components/ui/table/test-data.ts'

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
  const [__, setDeleteModalOpen] = useState<boolean>(false)
  const [_, setEditCardModalOpen] = useState<boolean>(false)
  const classNames = {
    btn: clsx(s.btn),
  }

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
                <button className={classNames.btn} onClick={() => setEditCardModalOpen(true)}>
                  <EditIcon />
                </button>
                <button className={classNames.btn} onClick={() => setDeleteModalOpen(true)}>
                  <DeleteIcon />
                </button>
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
const [__, setDeleteModalOpen] = useState<boolean>(false)
const [_, setEditCardModalOpen] = useState<boolean>(false)
const classNames = {
  btn: clsx(s.btn),
}

export const Data_Cell_With_Actions: Story = {
  args: {
    children: (
      <Table.DataCell className={s.row}>
        <button className={classNames.btn} onClick={() => setEditCardModalOpen(true)}>
          <EditIcon />
        </button>
        <button className={classNames.btn} onClick={() => setDeleteModalOpen(true)}>
          <DeleteIcon />
        </button>
      </Table.DataCell>
    ),
  },
}
