import { FC } from 'react'

import { clsx } from 'clsx'

import s from './filter-panel.module.scss'

import DeleteIcon from '@/assets/icons/DeleteIcon.tsx'
import { Button, TextField, Typography } from '@/components'
import { Slider } from '@/components/ui/slider'
import { Tabs } from '@/components/ui/tabs'
import { useDecks } from '@/services/decks/hooks/useDecks.ts'
type FilterPanelPropsType = {
  className?: string
  userEmail?: string
  userName?: string
}

export const FilterPanel: FC<FilterPanelPropsType> = props => {
  const { className } = props

  const { sliderValues, setSliderValues, setSearch, search } = useDecks()

  const classNames = {
    root: clsx(s.wrapper, className),
  }

  return (
    <div className={classNames.root}>
      <TextField
        value={search}
        onChange={e => setSearch(e.currentTarget.value)}
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
        minValue={sliderValues[0]}
        maxValue={sliderValues[1]}
        onValueCommit={setSliderValues}
        onChange={setSliderValues}
        label={'Number of cards'}
        className={s.slider}
        value={sliderValues}
      />
      <Button variant={'secondary'} className={s.btn}>
        <DeleteIcon />
        <Typography variant={'subtitle2'}>Clear Filter</Typography>
      </Button>
    </div>
  )
}
