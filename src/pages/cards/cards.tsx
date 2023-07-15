import { FC } from 'react'

import { clsx } from 'clsx'

import s from './cards.module.scss'

import { Button, DeckEditMenu, Grade, Table, TextField, Typography } from '@/components'
import { columns } from '@/pages/cards/table-columns.ts'
import { testData } from '@/pages/cards/test-data.ts'

export const Cards = () => {
  const classNames = {
    header: clsx(s.headerPage),
    textField: clsx(s.textField),
  }

  return (
    <div style={{ width: '100%' }}>
      <div className={classNames.header}>
        <Typography variant={'large'} style={{ display: 'flex', gap: '16px' }}>
          My pack
          <DeckEditMenu onEdit={() => {}} onDelete={() => {}} />
        </Typography>
        <Button variant={'primary'}>Add New Card</Button>
      </div>
      <div style={{ width: '170px', height: '107px' }}>
        <img
          src="https://www.patterns.dev/img/reactjs/react-logo@3x.svg"
          alt="dsfsdfs"
          style={{ width: '170px', height: '107px' }}
        />
      </div>
      <TextField inputType={'search'} className={classNames.textField} />
      <CardTable rowData={testData} />
    </div>
  )
}

type CardTablePropsType = {
  rowData: typeof testData //для теста todo remove
}
const CardTable: FC<CardTablePropsType> = props => {
  const { rowData } = props
  const classNames = {
    head: clsx(s.tableHead),
  }

  return (
    <Table.Root style={{ width: '100%' }}>
      <Table.Head columns={columns} sort={null} onSort={() => {}} className={classNames.head} />
      {rowData.map(el => {
        return (
          <Table.Row key={el.id}>
            <Table.DataCell>{el.question}</Table.DataCell>
            <Table.DataCell>{el.answer}</Table.DataCell>
            <Table.DataCell>{el.updated}</Table.DataCell>
            <Table.DataCell>
              <Grade onClick={() => {}} grade={5} />
            </Table.DataCell>
            <Table.DataCell>{el.question}</Table.DataCell>
          </Table.Row>
        )
      })}
    </Table.Root>
  )
}
