import { FC } from 'react'

import * as Tabs from '@radix-ui/react-tabs'
import { clsx } from 'clsx'

import s from './custom-tabs.module.scss'

import { Typography } from '@/components/ui/typography'

export type CustomTabsPropsType = {
  tabs: string[]
  label?: string
  defaultValue?: number
  disabled?: boolean
  className?: string
}
//todo: add callback in onChangeValue

export const CustomTabs: FC<CustomTabsPropsType> = props => {
  const { tabs, label, defaultValue = 1, disabled = false, className } = props
  const classNames = {
    root: clsx(s.wrapper, className),
  }

  return (
    <div>
      <label>
        <Typography variant={'body2'}> {label}</Typography>
      </label>
      <Tabs.Root className={classNames.root} defaultValue={tabs[defaultValue]}>
        <Tabs.List className={s.list}>
          {tabs.map((el, i) => {
            return (
              <Tabs.Trigger asChild className={s.trigger} value={el} key={i} disabled={disabled}>
                <Typography variant={'body1'}>{el}</Typography>
              </Tabs.Trigger>
            )
          })}
        </Tabs.List>
      </Tabs.Root>
    </div>
  )
}
