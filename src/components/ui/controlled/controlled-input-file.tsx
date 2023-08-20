import { ChangeEvent } from 'react'

import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { useImageUploader } from '@/components/ui/avatar/useImageUploader.ts'

type ControlledInputFilePropsType<T extends FieldValues> = {
  children: (onClick: () => void) => JSX.Element
  cover?: any
} & Omit<UseControllerProps<T>, 'rules' | 'defaultValues' | 'onChange' | 'value' | 'type'>

export const ControlledInputFile = <T extends FieldValues>({
  name,
  control,
  children,
  cover,
  ...rest
}: ControlledInputFilePropsType<T>) => {
  const {
    field: { onChange, ref, value, ...field },
  } = useController({ name, control })
  const { fileInputRef, openFileInput, handleFileChange } = useImageUploader('')

  const onChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
    handleFileChange(e)
    if (e?.target?.files !== null) onChange(e.target.files[0] as any)
  }

  return (
    <>
      <input
        hidden
        type="file"
        onChange={onChangeHandle}
        ref={e => {
          ref(e)
          fileInputRef.current = e
        }}
        {...rest}
        {...field}
      />

      {children(openFileInput)}
    </>
  )
}
