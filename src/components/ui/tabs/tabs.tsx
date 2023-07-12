import { FC, ReactNode } from 'react'

import * as TabsRDX from '@radix-ui/react-tabs'
import { clsx } from 'clsx'

import s from './tabs.module.scss'

import { Typography } from '@/components/ui/typography'

type TabType = {
  value: string
  tabName: string
  disabled?: boolean
}

export type TabsPropsType = {
  tabs: TabType[]
  label?: string
  defaultValue?: string
  className?: string
  onValueChange: (value: string) => void
}

export const Tabs: FC<TabsPropsType> = props => {
  const { tabs, label, defaultValue, className, onValueChange } = props
  const classNames = {
    root: clsx(s.root, className),
    trigger: clsx(s.trigger),
  }

  return (
    <div>
      <label>
        <Typography variant={'body2'}> {label}</Typography>
      </label>
      <TabsRDX.Root
        className={classNames.root}
        defaultValue={defaultValue}
        onValueChange={onValueChange}
      >
        <TabsRDX.List className={s.list}>
          {tabs.map(el => {
            return (
              <Trigger
                key={el.value}
                className={classNames.trigger}
                value={el.value}
                disabled={el.disabled}
              >
                <Typography variant={'body1'}>{el.tabName}</Typography>
              </Trigger>
            )
          })}
        </TabsRDX.List>
      </TabsRDX.Root>
    </div>
  )
}

type TriggerPropsType = {
  className?: string
  children: ReactNode
  disabled?: boolean
  value: string
}
const Trigger: FC<TriggerPropsType> = props => {
  const { className, children, value, disabled } = props

  return (
    <TabsRDX.Trigger asChild className={className} value={value} disabled={disabled}>
      {children}
    </TabsRDX.Trigger>
  )
}
