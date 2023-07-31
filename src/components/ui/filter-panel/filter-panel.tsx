import { FC } from 'react'

import { clsx } from 'clsx'

import s from './filter-panel.module.scss'

import DeleteIcon from '@/assets/icons/DeleteIcon.tsx'
import { Button, TextField, Typography } from '@/components'
import { Slider } from '@/components/ui/slider'
import { Tabs } from '@/components/ui/tabs'
import { useAuthMeQuery } from '@/services'

type FilterPanelPropsType = {
  className?: string
  userEmail?: string
  userName?: string
  maxSliderValue: number
  searchValue: string
  setSearchValue: (value: string) => void
  sliderValues: [number, number]
  setSliderValues: (values: [number, number]) => void
  onValueCommit: (values: [number, number]) => void
  setMyDecks: (value: string) => void
}

export const FilterPanel: FC<FilterPanelPropsType> = props => {
  const {
    className,
    setSearchValue,
    searchValue,
    sliderValues,
    maxSliderValue,
    setSliderValues,
    onValueCommit,
    setMyDecks,
  } = props

  // const { sliderValues, setSliderValues, setSearch, search } = useDecks()

  const classNames = {
    root: clsx(s.wrapper, className),
  }

  const { data: authData } = useAuthMeQuery()
  const isMe = authData?.id

  console.log(sliderValues + ' filterPanel')

  return (
    <div className={classNames.root}>
      <TextField
        value={searchValue}
        onChange={e => setSearchValue(e.currentTarget.value)}
        title={''}
        inputType={'search'}
        className={s.text_field}
      />
      <Tabs
        tabs={[
          { tabName: 'Me decks', value: isMe ?? '' },
          { tabName: 'All decks', value: 'all' },
        ]}
        label={'Show packs decks'}
        defaultValue={'all'}
        onValueChange={setMyDecks}
      />
      <Slider
        max={maxSliderValue}
        minValue={0}
        maxValue={sliderValues[1]}
        onValueCommit={onValueCommit}
        onChange={setSliderValues}
        label={'Number of cards'}
        value={sliderValues}
        className={s.slider}
      />
      <Button variant={'secondary'} className={s.btn}>
        <DeleteIcon />
        <Typography variant={'subtitle2'}>Clear Filter</Typography>
      </Button>
    </div>
  )
}
