import api from '.'

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
  const response = await api.post('/comment', { message, helpdeskId }, headers)
  return response
}
