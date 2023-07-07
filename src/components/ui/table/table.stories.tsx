import { Meta, StoryObj } from '@storybook/react'

import s from './table.module.scss'

import { Checkbox, Grade, Table } from '@/components'
const meta = {
  title: 'Components/Table',
  component: Table.Root,
  tags: ['autodocs'],
  render: args => <Table.Root {...args} />,
} satisfies Meta<typeof Table.Root>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
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
    ),
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
    children: <Table.HeadCell title={'Name'} />,
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
        {
          <Grade
            grade={3}
            onClick={() => {
              console.log()
            }}
          />
        }
      </Table.DataCell>
    ),
  },
}
