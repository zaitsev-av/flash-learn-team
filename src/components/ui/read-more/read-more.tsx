import { FC, useState } from 'react'

import { clsx } from 'clsx'

import s from './read-more.module.scss'
type ReadMorePropsType = {
  text: string
  maxLength?: number
  showMore?: string
  hideText?: string
}

export const ReadMore: FC<ReadMorePropsType> = props => {
  const { text, maxLength = 50, showMore = 'more', hideText = 'hide' } = props
  const [isTrimmed, setTrimmed] = useState(true)
  const classNames = {
    btn: clsx(s.btn),
  }

  if (text.length <= maxLength) return <>{text} </>

  const newText = `${text.slice(0, maxLength)}...`

  return (
    <span>
      {isTrimmed ? newText : text}
      <button onClick={() => setTrimmed(prevState => !prevState)} className={classNames.btn}>
        {isTrimmed ? showMore : hideText}
      </button>
    </span>
  )
}
