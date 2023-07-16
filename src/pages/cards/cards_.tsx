import { FC, useState } from 'react'

import { clsx } from 'clsx'

import s from './cards.module.scss'

import { ArrowLeftIcon } from '@/assets'
import {
  Button,
  DeckEditMenu,
  Grade,
  Pagination,
  Sort,
  Table,
  TextField,
  Typography,
} from '@/components'
import { AddNewCard } from '@/components/ui/modal/add-new-card'
import { TableActions } from '@/components/ui/table-action-buttons'
import { columns } from '@/pages/cards/table-columns.ts'
import { testData } from '@/pages/cards/test-data.ts'

type CardsPropsType = {
  userId: string
  img?: string
  /**
   * я думаю сюда должна приходить packId как минимум как максимум - нужно подумать
   * img не будем пробрасывать - эти данные получим по packId как нибудь :)
   */
}

export const Cards: FC<CardsPropsType> = ({ userId, img }) => {
  const [sort, setSort] = useState<Sort>(null)
  const [page, setPage] = useState<number>(1)
  const [pageSize, setPageSize] = useState<string>('10')
  /**
   * TODO раскомментировать когда подключим роуты
   * const navigate = useNavigate()
   */
  //userId - только для тестирования функционала
  const back = () => {
    // eslint-disable-next-line no-console
    console.log('back')
    // navigate(-1)
  }
  const classNames = {
    header: clsx(s.headerPage),
    textField: clsx(s.textField),
    back: clsx(s.back),
    container: clsx(s.container, 'container'),
  }

  // eslint-disable-next-line no-console
  console.log(sort)

  return (
    /**
     * я бы верстал следующим образом: flex и direcion column в s.container а в глобальных стилях есть
     * 'container' он задает ширину видимой области и тебе не нужно думать о том
     * как задать ширину контента флексы сами растянут контент на 100% от 'container'
     *тогда флекс элементы: [ссылка 'назад'], [заголовок в котором слева <div>Имя, меню, картинка<div> справа кнопка], [таблица], [пагинация]
     * */
    <div style={{ width: '100%' }}>
      {/** думаю что это должна быть ссылка*/}
      <Typography
        as={'a'}
        href={'https//:google.com'}
        variant={'body2'}
        className={classNames.back}
        onClick={back}
      >
        <ArrowLeftIcon /> Back to Packs List
      </Typography>
      <div className={classNames.header}>{renderDeckHeading(userId)}</div>
      <div style={{ width: '170px', height: '107px' }}>
        {img && <img src={img} alt="" style={{ width: '170px', height: '107px' }} />}
      </div>
      <TextField inputType={'search'} className={classNames.textField} />
      <CardTable
        rowData={testData}
        sort={sort}
        setSort={setSort}
        userId={userId}
        pageSize={pageSize}
      />
      <Pagination
        currentPage={page}
        totalCount={14}
        pageSize={+pageSize}
        siblingCount={3}
        onPageChange={setPage}
        onPageSizeChange={setPageSize}
      />
    </div>
  )
}

type CardTablePropsType = {
  rowData: any
  userId: string
  pageSize: string
  sort: Sort
  setSort: (sort: Sort) => void
}
const CardTable: FC<CardTablePropsType> = props => {
  const { rowData, sort, setSort, userId, pageSize } = props
  const classNames = {
    head: clsx(s.tableHead),
  }

  return (
    <Table.Root style={{ width: '100%', marginBottom: '25px' }}>
      <Table.Head columns={columns} sort={sort} onSort={setSort} className={classNames.head} />
      <Table.Body>{rowData.slice(0, +pageSize).map((el: any) => TableRows(el, userId))}</Table.Body>
    </Table.Root>
  )
}
/**
 я бы не делал компонентой, а просто переменной как мы обычно делаем тогда <Table.Body>{rows}</Table.Body> более читабельно
 возможно стоит подумать над тем чтобы запихнуть строки как в хедере внутрь таблицы,
 а туда передавать только массив строк
 */
const TableRows = (el: any, userId: string) => {
  return (
    <Table.Row key={el.question}>
      <Table.DataCell>{el.question}</Table.DataCell>
      <Table.DataCell>{el.answer}</Table.DataCell>
      <Table.DataCell>{el.updated}</Table.DataCell>
      <Table.DataCell>
        <Grade onClick={id => console.log(id)} grade={5} />
      </Table.DataCell>
      <Table.DataCell>
        {/**надо чтото делать с TableActions а то я их как будто для паков только сделал, может отдельно тогда делать еще для карт */}
        <TableActions item={{ id: el.id, title: el.question }} editable={userId === '1'} />
      </Table.DataCell>
    </Table.Row>
  )
}
/**
 * тоже что и с TableRows. Я бы еще условие не на все писал, а на конкретные части
 * и выносил их в переменные, мне кажется так читается лучше и гибкость кода чтоли повышается
 * если вдруг нужно будет отрисовать по условию другому например. Хотя может тогда выносить
 * в отдельные файлы хз пойду на сапорт спрошу
 */
const renderDeckHeading = (userId: string) => {
  const me = {
    id: '1',
  }
  const isMy = userId === me.id
  /** наверное вместо Friends нужно чтобы было имя того чей пак типа */
  const title = isMy ? 'My pack' : 'Friends Pack'

  const menu = isMy && (
    <DeckEditMenu
      onEdit={() => console.log('onEdit called')}
      onDelete={() => console.log('onDelete called')}
    />
  )

  const buttonVariant = isMy ? (
    <AddNewCard onSubmit={data => console.log(data)}>
      <Button variant={'primary'}>Add New Card</Button>
    </AddNewCard>
  ) : (
    <Button variant={'primary'} as={'a'} href={'#'}>
      Learn to Pack
    </Button>
  )

  return (
    <>
      <div className={s.deckMenuSection}>
        <Typography variant={'large'}>{title}</Typography>
        {menu}
      </div>
      {buttonVariant}
    </>
  )
}
