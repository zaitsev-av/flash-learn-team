import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import s from './table.module.scss'

import { Checkbox, Grade, Table } from '@/components'
const meta = {
  title: 'Components/Table',
  component: Table.Root,
  tags: ['autodocs'],
} satisfies Meta<typeof Table.Root>

const Container = () => {
  const [sort, setSort] = useState('')

  return (
    <>
      <Table.Head>
        <Table.Row>
          <Table.HeadCell
            columnName={'name'}
            title={'Name'}
            sortDirection={sort}
            setSortDirection={setSort}
          />
          <Table.HeadCell
            columnName={'cards'}
            title={'Cards'}
            sortDirection={sort}
            setSortDirection={setSort}
          />
          <Table.HeadCell
            columnName={'date'}
            title={'Last Updated'}
            sortDirection={sort}
            setSortDirection={setSort}
          />
          <Table.HeadCell
            columnName={'owner'}
            title={'Created by'}
            sortDirection={sort}
            setSortDirection={setSort}
          />
          <Table.HeadCell />
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.DataCell>{'Test1'}</Table.DataCell>
          <Table.DataCell>{'Test2'}</Table.DataCell>
          <Table.DataCell>{'Test3'}</Table.DataCell>
          <Table.DataCell>{'Test4'}</Table.DataCell>
          <Table.DataCell>{'Test5'}</Table.DataCell>
        </Table.Row>
        <Table.Row>
          <Table.DataCell>{'Test1'}</Table.DataCell>
          <Table.DataCell>{'Test2'}</Table.DataCell>
          <Table.DataCell>{'Test3'}</Table.DataCell>
          <Table.DataCell>{'Test4'}</Table.DataCell>
          <Table.DataCell>{'Test5'}</Table.DataCell>
        </Table.Row>
        <Table.Row>
          <Table.DataCell>{'Test1'}</Table.DataCell>
          <Table.DataCell>{'Test2'}</Table.DataCell>
          <Table.DataCell>{'Test3'}</Table.DataCell>
          <Table.DataCell>{'Test4'}</Table.DataCell>
          <Table.DataCell>{'Test77'}</Table.DataCell>
        </Table.Row>
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
}

export const TableWithReactNode: Story = {
  args: {
    children: (
      <>
        <Table.Head>
          <Table.Row>
            <Table.HeadCell title={'Name'} />
            <Table.HeadCell title={'Cards'} />
            <Table.HeadCell title={'Last Updated'} />
            <Table.HeadCell title={'Created by'} />
            <Table.HeadCell />
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.DataCell>{'Test'}</Table.DataCell>
            <Table.DataCell>{'Test2'}</Table.DataCell>
            <Table.DataCell>{'Test3'}</Table.DataCell>
            <Table.DataCell>{'Test5'}</Table.DataCell>
            <Table.DataCell>
              {
                <Grade
                  grade={3}
                  onClick={() => {
                    console.log()
                  }}
                />
              }
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>{'Test1'}</Table.DataCell>
            <Table.DataCell>{'Test2'}</Table.DataCell>
            <Table.DataCell>{'Test3'}</Table.DataCell>
            <Table.DataCell>{'Test5'}</Table.DataCell>
            <Table.DataCell>
              {
                <Grade
                  grade={3}
                  onClick={() => {
                    console.log()
                  }}
                />
              }
            </Table.DataCell>
          </Table.Row>
        </Table.Body>
      </>
    ),
  },
}

export const Head_Cell: Story = {
  args: {
    children: <Table.HeadCell columnName={'name'} title={'Name'} />,
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

export const Data_Cell_WithGrade: Story = {
  args: {
    children: (
      <Table.DataCell className={s.row}>
        <Grade
          grade={3}
          onClick={() => {
            console.log()
          }}
        />
      </Table.DataCell>
    ),
  },
}
