import axios from '@/lib/axios'
export interface LoginUserProps {
  email: string
  password: string
  access_token?: string
}

export async function LoginUser({ email, password }: LoginUserProps) {
  const response = await axios.post('/auth/login', { email, password })
  const token = response.data.access_token
  localStorage.setItem('access_token', token!)
  return token
}
