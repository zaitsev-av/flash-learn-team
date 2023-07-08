import { FC, ReactNode } from 'react'

import * as DropdownMenuRDX from '@radix-ui/react-dropdown-menu'

import s from './dropdown-menu.module.scss'

export type DropdownMenuPropsType = {
  trigger: ReactNode
  content: ReactNode
}
export const DropdownMenu: FC<DropdownMenuPropsType> = props => {
  const { trigger, content } = props

  return (
    <DropdownMenuRDX.Root>
      <DropdownMenuRDX.Trigger asChild className={s.trigger}>
        <button className={s.icon_button}>{trigger}</button>
      </DropdownMenuRDX.Trigger>

      <DropdownMenuRDX.Portal>
        <DropdownMenuRDX.Content className={s.content} sideOffset={0} align={'end'} alignOffset={0}>
          {content}
          <DropdownMenuRDX.Arrow className={s.arrow} />
        </DropdownMenuRDX.Content>
      </DropdownMenuRDX.Portal>
    </DropdownMenuRDX.Root>
  )
}
