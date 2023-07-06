import { ComponentProps, FC } from 'react'

import { Typography } from '@/components'

type TableProps = { className?: string } & ComponentProps<'table'>
export const Table: FC<TableProps> = ({ className, ...rest }) => {
  return <table className={className} {...rest} />
}

type HeadProps = { className?: string } & ComponentProps<'thead'>
export const TableHead: FC<HeadProps> = ({ className, ...rest }) => {
  return <thead className={className} {...rest} />
}

type BodyProps = { className?: string } & ComponentProps<'tbody'>
export const TableBody: FC<BodyProps> = ({ className, ...rest }) => {
  return <thead className={className} {...rest} />
}

type RowProps = { className?: string } & ComponentProps<'tr'>
export const TableRow: FC<RowProps> = ({ className, ...rest }) => {
  return <tr className={className} {...rest} />
}

type HeadCellProps = { className?: string; title: string } & ComponentProps<'th'>
export const HeadCell: FC<HeadCellProps> = ({ title, className, ...rest }) => {
  return (
    <th className={className} {...rest}>
      <Typography variant={'subtitle2'}>{title}</Typography>
    </th>
  )
}

type DataCellProps = { className?: string } & ComponentProps<'td'>
export const DataCell: FC<DataCellProps> = ({ className, ...rest }) => {
  return <td className={className} {...rest} />
}
