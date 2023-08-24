import { FC } from 'react'

import { clsx } from 'clsx'

import { DeleteIcon, EditIcon } from '@/assets'
import { transformDate } from '@/common'
import { Grade, GradeType, Table } from '@/components'
import s from '@/components/ui/cards/cards.module.scss'
import { CardsItem } from '@/services'

type CardsTableRowsPropsType = {
  item: CardsItem
  isMyDeck: boolean
  onClickEditHandler: () => void
  onClickDeleteHandler: () => void
  openImageInModal: (src: string) => void
}

export const CardsTableRows: FC<CardsTableRowsPropsType> = props => {
  const { item, isMyDeck, onClickEditHandler, onClickDeleteHandler, openImageInModal } = props

  const classNames = {
    btn: clsx(s.btn),
  }

  return (
    <Table.Row key={item.id}>
      <Table.DataCell>
        <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }} className={s.getCards}>
          {item.question}
          {item.questionImg === null ? (
            ''
          ) : (
            <img
              src={item.questionImg}
              alt=""
              width="70px"
              height="50px"
              onClick={() => openImageInModal(item.questionImg)}
              style={{ cursor: 'pointer' }}
            />
          )}
        </span>
      </Table.DataCell>
      <Table.DataCell>
        <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }} className={s.getCards}>
          {item.answer}
          {item.answerImg === null ? (
            ''
          ) : (
            <img
              src={item.answerImg}
              alt=""
              width="70px"
              height="50px"
              onClick={() => openImageInModal(item.answerImg)}
              style={{ cursor: 'pointer' }}
            />
          )}
        </span>
      </Table.DataCell>
      <Table.DataCell>{transformDate(item.updated)}</Table.DataCell>
      <Table.DataCell>
        <Grade grade={item.grade as GradeType} />
      </Table.DataCell>
      <Table.DataCell style={{ padding: '6px 24px' }}>
        <div style={{ display: 'flex', gap: '10px' }}>
          {isMyDeck && (
            <>
              <button className={classNames.btn} onClick={onClickEditHandler}>
                <EditIcon />
              </button>

              <button className={classNames.btn} onClick={onClickDeleteHandler}>
                <DeleteIcon />
              </button>
            </>
          )}
        </div>
      </Table.DataCell>
    </Table.Row>
  )
}
