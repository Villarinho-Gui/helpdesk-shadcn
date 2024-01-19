import api from '.'

interface FileProps {
  id: string
  filename: string
  mimetype: string
}

interface GetHelpDeskResponse {
  id: string
  user: {
    name: string
  }
  accountable: string
  title: string
  category: string
  description: string
  files?: FileProps[]
  countFiles: number
  status: string
  createdAt: Date
  comments: {
    id: string
    message: string
  }
}

const token = localStorage.getItem('access_token')
const headers = {
  headers: {
    Authorization: `bearer ${token}`,
  },
}

export async function getHelpDesk() {
  const response = await api.get<GetHelpDeskResponse[]>('/helpdesk', headers)
  return response.data
}
