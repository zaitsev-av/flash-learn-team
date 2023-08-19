/*
import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

import { Button, InputProps, Typography } from '@/components'
import { useImageUploader } from '@/components/ui/avatar/useImageUploader.ts'

type ControlledInputFilePropsType<T extends FieldValues> = Omit<
  UseControllerProps<T>,
  'rules' | 'defaultValues'
> &
  Omit<InputProps, 'onChange' | 'value'>

export const ControlledInputFile = <T extends FieldValues>({
  name,
  control,
}: ControlledInputFilePropsType<T>) => {
  const {
    field: { onChange, ref, value },
  } = useController({ name, control })
  // const { fileInputRef, openFileInput, file, handleFileChange } = useImageUploader('')

  return (
    <Button variant={'secondary'} fullWidth onClick={openFileInput} style={{ marginBottom: '3px' }}>
      <input
        hidden
        accept="image/png, image/jpeg"
        type="file"
        ref={ref}
        onChange={e => onChange(e)}
        name={'answerImg'}
        {...control}
      />
      <Typography variant={'subtitle2'}>Change Cover</Typography>
    </Button>
  )
}
*/
