import { Paperclip, SendHorizontal } from 'lucide-react'
import { useQuery } from 'react-query'

import { getHelpDeskMessage } from '@/api/get-helpdesk-message'
import { HelpDeskMessage } from '@/components/helpdesk-message'
import { Button } from '@/components/ui/button'
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
interface HelpDeskChatModalProps {
  id: string
}

interface MessageProps {
  id: string
  user: {
    name: string
  }
  message: string
}

export function HelpDeskChatModal({ id }: HelpDeskChatModalProps) {
  const { data: comment } = useQuery({
    queryKey: ['helpdesk-message', id],
    queryFn: () => getHelpDeskMessage(id),
    refetchOnWindowFocus: false,
  })

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{id}</DialogTitle>
      </DialogHeader>

      <div className="h-[500px] space-y-6 rounded border">
        {comment &&
          comment.length > 0 &&
          comment.map((comment: MessageProps) => (
            <HelpDeskMessage
              key={comment.id}
              author={comment.user.name}
              message={comment.message}
            />
          ))}
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
