import { FC } from 'react'

import * as TabsRDX from '@radix-ui/react-tabs'
import { clsx } from 'clsx'

import s from './tabs.module.scss'

import { Typography } from '@/components/ui/typography'

export type CustomTabsPropsType = {
  tabs: string[]
  label?: string
  defaultValue?: number
  disabled?: boolean
  className?: string
}
//todo: add callback in onChangeValue

export const Tabs: FC<CustomTabsPropsType> = props => {
  const { tabs, label, defaultValue = 1, disabled = false, className } = props
  const classNames = {
    root: clsx(s.root, className),
  }

  return (
    <div>
      <label>
        <Typography variant={'body2'}> {label}</Typography>
      </label>
      <TabsRDX.Root className={classNames.root} defaultValue={tabs[defaultValue]}>
        <TabsRDX.List className={s.list}>
          {tabs.map((el, i) => {
            return (
              <TabsRDX.Trigger asChild className={s.trigger} value={el} key={i} disabled={disabled}>
                <Typography variant={'body1'}>{el}</Typography>
              </TabsRDX.Trigger>
            )
          })}
        </TabsRDX.List>
      </TabsRDX.Root>
    </div>
  )
}
