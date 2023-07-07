import { FC } from 'react'

import s from './filter-panel.module.scss'

import DeleteIcon from '@/assets/icons/DeleteIcon.tsx'
import { Button, TextField, Typography } from '@/components'
import { CustomSlider } from '@/components/ui/slider'
import { CustomTabs } from '@/components/ui/switch'

export const FilterPanel: FC = () => {
  return (
    <div className={s.wrapper}>
      <TextField title={''} inputType={'search'} className={s.text_field} />
      <CustomTabs tabs={['Me cards', 'All cards']} label={'Show packs cards'} />
      <CustomSlider
        minValue={10}
        maxValue={99}
        onValueCommit={() => {}}
        onChange={() => {}}
        label={'Number of cards'}
        className={s.slider}
      />
      <Button variant={'secondary'} className={s.btn}>
        <DeleteIcon />
        <Typography variant={'subtitle2'}>Clear Filter</Typography>
      </Button>
    </div>
  )
}
