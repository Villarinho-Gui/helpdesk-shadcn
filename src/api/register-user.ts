import axios from '@/lib/axios'
export interface RegisterUserProps {
  name: string
  email: string
  password: string
  sector: string
  extension: string
}

export async function registerUser({
  name,
  email,
  password,
  sector,
  extension,
}: RegisterUserProps) {
  await axios.post('/auth/register', {
    name,
    email,
    password,
    sector,
    extension,
  })
}
