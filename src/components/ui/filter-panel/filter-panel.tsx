import { FC } from 'react'

import { clsx } from 'clsx'

import s from './filter-panel.module.scss'

import DeleteIcon from '@/assets/icons/DeleteIcon.tsx'
import { Button, TextField, Typography } from '@/components'
import { CustomSlider } from '@/components/ui/slider'
import { CustomTabs } from '@/components/ui/switch'
type FilterPanelPropsType = {
  className?: string
  userEmail?: string
  userName?: string
}

export const FilterPanel: FC<FilterPanelPropsType> = props => {
  const { className } = props
  const classNames = {
    root: clsx(s.wrapper, className),
  }

  return (
    <div className={classNames.root}>
      <TextField title={''} inputType={'search'} className={s.text_field} />
      <CustomTabs tabs={['Me cards', 'All cards']} label={'Show packs cards'} />
      <CustomSlider
        minValue={10}
        maxValue={99}
        onValueCommit={() => {}}
        onChange={() => {}}
        label={'Number of cards'}
        className={s.slider}
        value={[10, 90]}
      />
      <Button variant={'secondary'} className={s.btn}>
        <DeleteIcon />
        <Typography variant={'subtitle2'}>Clear Filter</Typography>
      </Button>
    </div>
  )
}
