import { ComponentProps, FC } from 'react'

import { clsx } from 'clsx'

import s from './table.module.scss'

import { ChevronDown } from '@/assets'
import { Typography } from '@/components'

type TableProps = { className?: string } & ComponentProps<'table'>

const Root: FC<TableProps> = ({ className, ...rest }) => {
  const style = clsx(s.table, className)

  return <table className={style} {...rest} />
}

type HeadProps = { className?: string } & ComponentProps<'thead'>
const Head: FC<HeadProps> = ({ className, ...rest }) => {
  return <thead className={className} {...rest} />
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
  columnName?: string
  sortDirection?: string
  setSortDirection?: (sortDirection: string) => void
} & ComponentProps<'th'>
const HeadCell: FC<HeadCellProps> = ({
  setSortDirection,
  sortDirection,
  columnName,
  title,
  className,
  ...rest
}) => {
  const showSortDirectionIcon = sortDirection?.slice(1) === columnName && sortDirection
  const desc = '0'
  const asc = '1'
  const handleColumnClick = () => {
    let newSortValue = ''

    if (setSortDirection) {
      if (sortDirection === '') {
        newSortValue = `${desc + columnName}`
      } else if (sortDirection?.startsWith(desc) && sortDirection.slice(1) === columnName) {
        newSortValue = `${asc + columnName}`
      }
      setSortDirection(newSortValue)
    }
  }
  const style = {
    th: clsx(s.headCell, className),
    title: clsx(s.title),
    icon: clsx(s.sortDscIcon, sortDirection?.startsWith(asc) && s.sortAscIcon),
  }

  return (
    <th className={style.th} {...rest} onClick={handleColumnClick}>
      <div className={style.title}>
        <Typography variant={'subtitle2'}>{title}</Typography>
        <div className={style.icon}>{showSortDirectionIcon && <ChevronDown />}</div>
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
