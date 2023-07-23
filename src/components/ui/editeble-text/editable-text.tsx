import { FC } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import s from './editable-text.module.scss'

import { Button, ControlledTextField } from '@/components'

export type EditableTextPropsType = {
  text: string
  onButtonSave: () => void
}

export const EditableText: FC<EditableTextPropsType> = props => {
  const { text, onButtonSave } = props

  const schema = z.object({
    nickName: z
      .string()
      .trim()
      .nonempty('Please enter a question')
      .min(5, 'Question must be at least 3 characters')
      .max(50, 'Question must be at more 50 characters')
      .default(text),
  })
  // const disableEditModeHandler = () => {
  //   disableEditMode()
  //   onButtonSave(false)
  // }

  type Form = z.infer<typeof schema>

  const { handleSubmit, control } = useForm<Form>({
    resolver: zodResolver(schema),
    mode: 'onSubmit',
    defaultValues: schema.parse({}),
  })

  const onSubmitForm = handleSubmit(data => {
    console.log({ name: data.nickName })
    onButtonSave()
  })

  return (
    <form onSubmit={onSubmitForm} style={{ width: '100%' }}>
      <ControlledTextField
        title={'Nickmame'}
        inputType={'text'}
        name={'nickName'}
        control={control}
        autoFocus
      />
      <Button variant={'primary'} fullWidth={true} className={s.btn} type={'submit'}>
        Save Changes
      </Button>
      {/*{error && <span className={s.error}>{}</span>}*/}
    </form>
  )
}
