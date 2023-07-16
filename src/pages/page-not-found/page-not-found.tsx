import { FC } from 'react'

import { Page404 } from '@/assets'
import { Button, Typography } from '@/components'

export const PageNotFound: FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Page404 />
      <Typography variant={'body1'}>Sorry! Page not found!</Typography>
      <Button variant={'primary'}>Back to home page</Button>
    </div>
  )
}
