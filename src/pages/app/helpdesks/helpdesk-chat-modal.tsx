import { Paperclip, SendHorizontal } from 'lucide-react'
import { useQuery } from 'react-query'

import { getHelpDesk } from '@/api/get-helpdesk'
import { HelpDeskMessage } from '@/components/helpdesk-message'
import { Button } from '@/components/ui/button'
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'

export function HelpDeskChatModal() {
  const { data } = useQuery({
    queryKey: ['helpdesk'],
    queryFn: getHelpDesk,
    refetchOnWindowFocus: false,
  })

  console.log(data![0].comments.message)

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Chamado: 1232393732</DialogTitle>
      </DialogHeader>

      <div className="h-[500px] space-y-6 rounded border">
        <HelpDeskMessage
          author={data![0].user.name}
          message={data![0].comments.message}
        />
      </div>
      <form className="flex flex-row items-center space-x-2">
        <Input
          className="h-max text-wrap"
          placeholder="Escreva uma mensagem..."
        />

        <Button variant="ghost" type="button">
          <Input type="file" className="hidden" />
          <Paperclip />
        </Button>

        <Button variant="default">
          <SendHorizontal />
        </Button>
      </form>
    </DialogContent>
  )
}
