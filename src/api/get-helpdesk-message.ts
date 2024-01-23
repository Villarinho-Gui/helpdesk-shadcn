import api from '.'

const token = localStorage.getItem('access_token')
const headers = {
  headers: {
    Authorization: `bearer ${token}`,
  },
}

export async function getHelpDeskMessage(id: string | undefined) {
  const response = await api.get(`/comment/${id}`, headers)
  return response.data
}
