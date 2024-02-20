type loginType = {
  email: string
  password: string
}
type registerType = {
  name: string
  username: string
  email: string
  password: string
}
type changePasswordType = {
  email: string
  password: string
  confirmPassword: string
}

export type {loginType, registerType, changePasswordType}