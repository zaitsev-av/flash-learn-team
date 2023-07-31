import { FC } from 'react'

import { clsx } from 'clsx'

import s from './filter-panel.module.scss'

import DeleteIcon from '@/assets/icons/DeleteIcon.tsx'
import { Button, TextField, Typography } from '@/components'
import { Slider } from '@/components/ui/slider'
import { Tabs } from '@/components/ui/tabs'

type FilterPanelPropsType = {
  className?: string
  userEmail?: string
  userName?: string
  searchValue: string
  setSearchValue: (value: string) => void
  sliderValues: [number, number]
  setSliderValues: (values: [number, number]) => void
}

export const FilterPanel: FC<FilterPanelPropsType> = props => {
  const { className, setSearchValue, searchValue, sliderValues, setSliderValues } = props

  // const { sliderValues, setSliderValues, setSearch, search } = useDecks()

  const classNames = {
    root: clsx(s.wrapper, className),
  }

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
          { tabName: 'Me cards', value: '123' },
          { tabName: 'All cards', value: '456' },
        ]}
        label={'Show packs cards'}
        defaultValue={'456'}
        onValueChange={() => {}}
      />
      <Slider
        max={11} //todo fix number
        minValue={0}
        maxValue={sliderValues[1]}
        onValueCommit={() => {}}
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
