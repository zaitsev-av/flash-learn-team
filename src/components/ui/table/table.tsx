import { ComponentProps, ComponentPropsWithoutRef, FC } from 'react'

import { clsx } from 'clsx'

import s from './table.module.scss'

import { ChevronDown } from '@/assets'
import { Typography } from '@/components'

type TableProps = { className?: string } & ComponentProps<'table'>

const Root: FC<TableProps> = ({ className, ...rest }) => {
  const style = clsx(s.table, className)

  return <table className={style} {...rest} />
}

export type Sort = {
  columnKey: string
  direction: 'asc' | 'desc' | null
} | null
type Column = {
  key: string
  title: string
  sortable: boolean
}
type HeadProps = Omit<
  ComponentPropsWithoutRef<'thead'> & {
    columns: Column[]
    sort?: Sort
    onSort?: (sort: Sort) => void
    className?: string
  },
  'children'
>
const Head: FC<HeadProps> = ({ columns, sort, onSort, className, ...rest }) => {
  const handlerSort = (key: string, sortable?: boolean) => {
    if (!onSort || !sortable) return

    if (key !== sort?.columnKey) {
      return onSort({ columnKey: key, direction: 'asc' })
    }
    if (sort.direction === 'asc') {
      return onSort({ columnKey: key, direction: 'desc' })
    }

    onSort(null)
  }

  return (
    <thead className={className} {...rest}>
      <tr>
        {columns.map(col => {
          const handler = () => {
            handlerSort(col.key, col.sortable)
          }

          return (
            <Table.HeadCell
              sort={sort}
              title={col.title}
              onClick={handler}
              key={col.key}
              columnKey={col.key}
              sortable={col.sortable}
            />
          )
        })}
      </tr>
    </thead>
  )
}

type BodyProps = { className?: string } & ComponentProps<'tbody'>
const Body: FC<BodyProps> = ({ className, ...rest }) => {
  return <tbody className={className} {...rest} />
}

type RowProps = { className?: string } & ComponentProps<'tr'>
const Row: FC<RowProps> = ({ className, ...rest }) => {
  return <tr className={className} {...rest} />
}

type HeadCellProps = {
  minWidth?: number
  className?: string
  title?: string
  columnKey?: string
  sort?: Sort
  onClick?: (sortDirection: string) => void
  sortable?: boolean
} & ComponentProps<'th'>
const HeadCell: FC<HeadCellProps> = ({
  sortable,
  onClick,
  sort,
  columnKey,
  title,
  className,
  ...rest
}) => {
  const style = {
    th: clsx(s.headCell, !sortable && s.noSort, className),
    title: clsx(s.title),
    icon: clsx(s.sortDscIcon, sort?.direction === 'asc' && s.sortAscIcon),
  }
  const showSortIcon = sort?.columnKey === columnKey && sort?.direction
  const handleClick = () => {
    if (onClick && columnKey) {
      onClick(columnKey)
    }
  }

  return (
    <th className={style.th} {...rest} onClick={handleClick}>
      <div className={style.title}>
        <Typography variant={'subtitle2'}>{title}</Typography>
        <div className={style.icon}>{showSortIcon && <ChevronDown />}</div>
      </div>
    </th>
  )
}

type DataCellProps = { className?: string } & ComponentProps<'td'>
const DataCell: FC<DataCellProps> = ({ children, content, className, ...rest }) => {
  const style = clsx(s.dataCell, className)

  return (
    <td className={style} {...rest}>
      {children}
    </td>
  )
}

export const Table = { DataCell, HeadCell, Row, Body, Head, Root }
