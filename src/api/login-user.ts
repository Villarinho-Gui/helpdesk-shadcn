import api from '.'

export interface LoginUserProps {
  email: string
  password: string
  access_token?: string
}

export async function LoginUser({ email, password }: LoginUserProps) {
  const response = await api.post('/auth/login', { email, password })
  const token = response.data.access_token
  localStorage.setItem('access_token', token!)
  return token
}
