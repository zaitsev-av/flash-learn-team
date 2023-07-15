import { FC, useState } from 'react'

import clsx from 'clsx'

import s from './packs.module.scss'

import { Logo } from '@/assets'
import { AddNewPackModal, Button, Header, Pagination, Sort, Table, Typography } from '@/components'
import { FilterPanel } from '@/components/ui/filter-panel'
import { columns, data } from '@/components/ui/table/table.stories.tsx'
import { TableActions } from '@/components/ui/table-action-buttons'

type PacksProps = {}
export const Packs: FC<PacksProps> = () => {
  const [page, setPage] = useState<number>(1)
  const [pageSize, setPageSize] = useState<string>('7')
  const [sort, setSort] = useState<Sort>(null)

  const cNames = {
    container: clsx(s.container, 'container'),
    title: clsx(s.pageTitle),
  }

  const tableRows = data.slice(0, +pageSize).map(row => (
    <Table.Row key={row.title}>
      <Table.DataCell>{row.title}</Table.DataCell>
      <Table.DataCell>{row.cardsCount}</Table.DataCell>
      <Table.DataCell>{row.updated}</Table.DataCell>
      <Table.DataCell>{row.createdBy}</Table.DataCell>
      <Table.DataCell>
        <TableActions editable={row.editable} item={row} />
      </Table.DataCell>
    </Table.Row>
  ))

  return (
    <>
      <Header>
        <Logo />
        <Button>Sign In</Button>
      </Header>
      <div className={cNames.container}>
        <div className={cNames.title}>
          <Typography variant={'large'}>Pack list</Typography>
          <AddNewPackModal
            trigger={<Button>Add New Pack</Button>}
            onSubmit={data => {
              console.log(data)
            }}
          />
        </div>

        <FilterPanel />

        <Table.Root>
          <Table.Head sort={sort} onSort={setSort} columns={columns}></Table.Head>
          <Table.Body>{tableRows}</Table.Body>
        </Table.Root>

        <Pagination
          currentPage={page}
          totalCount={400}
          pageSize={+pageSize}
          siblingCount={3}
          onPageChange={setPage}
          onPageSizeChange={setPageSize}
        />
      </div>
    </>
  )
}
