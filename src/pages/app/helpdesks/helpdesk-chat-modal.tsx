import { zodResolver } from '@hookform/resolvers/zod'
import { useQuery } from '@tanstack/react-query'
import { Paperclip, SendHorizontal } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

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
  helpdeskId: string
}
interface CommentProps {
  id: string
  user: {
    name: string
  }
  message: string
}

const PostMessageFormSchema = z.object({
  message: z.string().min(1),
  helpdeskId: z.string().uuid(),
})

type PostMessageForm = z.infer<typeof PostMessageFormSchema>

export function HelpDeskChatModal({ helpdeskId }: HelpDeskChatModalProps) {
  const {
    register,
    formState: { isSubmitting },
  } = useForm<PostMessageForm>({
    resolver: zodResolver(PostMessageFormSchema),
  })

  const { data: comment } = useQuery({
    queryKey: ['helpdesk-message', helpdeskId],
    queryFn: () => getHelpDeskMessage(helpdeskId),
    refetchOnWindowFocus: false,
  })

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Chamado: {helpdeskId}</DialogTitle>
      </DialogHeader>

      <div className="h-[500px] space-y-6 overflow-auto rounded border p-2">
        {comment &&
          comment.length > 0 &&
          comment.map(({ id, message, user }: CommentProps) => (
            <HelpDeskMessage key={id} author={user.name} message={message} />
          ))}
      </div>
      <form className="flex flex-row items-center space-x-2" method="post">
        <Input
          className="h-max text-wrap"
          placeholder="Escreva uma mensagem..."
          {...register('message')}
        />

        <Button variant="ghost" type="button">
          <Input type="file" className="hidden" />
          <Paperclip />
        </Button>

        <Button variant="default" type="submit" disabled={isSubmitting}>
          <SendHorizontal />
        </Button>
      </form>
    </DialogContent>
  )
}
