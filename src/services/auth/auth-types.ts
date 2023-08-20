export type ArgsSignUpType = {
  name?: string
  password: string
  email: string
}

export type UserDataType = {
  avatar: string
  id: string
  email: string
  isEmailVerified: boolean
  name: string
  created: string
  updated: string
}

export type LoginArgs = {
  email: string
  password: string
}

export type UpdateUserDataType = { data: FormData; email: string }

export type RecoveryPassword = {
  html: string
  email: string
  subject: string
}
