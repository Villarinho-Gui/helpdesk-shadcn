import axios from '@/lib/axios'

interface PostHelpDeskMessageProps {
  message: string
  helpdeskId: string
}

const token = localStorage.getItem('access_token')
const headers = {
  headers: {
    'Content-Type': 'multipart/form-data',
    Authorization: `bearer ${token}`,
  },
}

export async function postHelpDeskMessage({
  message,
  helpdeskId,
}: PostHelpDeskMessageProps) {
  return await axios.post('/comment', { message, helpdeskId }, headers)
}
