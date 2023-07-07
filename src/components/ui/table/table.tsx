import { ComponentProps, FC } from 'react'

import { clsx } from 'clsx'

import s from './table.module.scss'

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
} & ComponentProps<'th'>
const HeadCell: FC<HeadCellProps> = ({ title, className, ...rest }) => {
  const style = clsx(s.headCell, className)

  return (
    <th className={style} {...rest}>
      <Typography variant={'subtitle2'}>{title}</Typography>
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
