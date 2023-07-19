export type ArgsSignUpType = {
  name?: string
  password: string
  email: string
}

export type AuthMeResponseType = {
  avatar: string
  id: string
  email: string
  isEmailVerified: boolean
  name: string
  created: string
  updated: string
}
