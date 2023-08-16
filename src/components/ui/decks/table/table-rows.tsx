import { FC, useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { transformDate } from '@/common'
import { Table } from '@/components'
import { TableActions } from '@/components/ui/table-action-buttons'
import { ItemsType } from '@/services'

type TableRowsPropsType = {
  data: ItemsType[]
  pageSize: number
  isMe: string
}

export const TableRows: FC<TableRowsPropsType> = props => {
  const { data, pageSize, isMe } = props
  const [isDeleteModalOpen, setDeleteModalOpen] = useState<boolean>(false)
  const [isEditCardModalOpen, setEditCardModalOpen] = useState<boolean>(false)

  const navigate = useNavigate()

  return (
    <>
      {data.slice(0, pageSize).map(el => (
        <Table.Row key={el.id}>
          <Table.DataCell onClick={() => navigate(`/cards/${el.id}`)} style={{ cursor: 'pointer' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              {el.name}
              {el.cover === null ? '' : <img src={el.cover} alt="" width="70px" height="50px" />}
            </span>
          </Table.DataCell>
          <Table.DataCell>{el.cardsCount}</Table.DataCell>
          <Table.DataCell>{transformDate(el.updated)}</Table.DataCell>
          <Table.DataCell>{el.author.name}</Table.DataCell>
          <Table.DataCell>
            <TableActions
              isEditCardModalOpen={isEditCardModalOpen}
              setEditCardModalOpen={setEditCardModalOpen}
              isDeleteModalOpen={isDeleteModalOpen}
              setDeleteModalOpen={setDeleteModalOpen}
              editable={el.userId === isMe}
              item={{ id: el.id, title: el.name, isPrivate: el.isPrivate }}
            />
          </Table.DataCell>
        </Table.Row>
      ))}
    </>
  )
}
