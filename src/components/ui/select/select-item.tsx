import { FC } from 'react'

import * as Select from '@radix-ui/react-select'

import s from '@/components/ui/select/select.module.scss'
import { Typography } from '@/components/ui/typography'

type SelectItemPropsType = {
  className?: string
  value: string
}

export const SelectItem: FC<SelectItemPropsType> = ({ value, ...props }) => {
  return (
    <Select.Item className={s.item} value={value} {...props}>
      <Select.ItemText>
        <Typography variant={'body1'}>{value}</Typography>
      </Select.ItemText>
    </Select.Item>
  )
}
