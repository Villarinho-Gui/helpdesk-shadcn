import { MessageSquareShare } from 'lucide-react'

import { AuthorInfoCard } from '@/components/author-info-card'
import { FileCard } from '@/components/file-card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'

import { HelpDeskChatModal } from './helpdesk-chat-modal'

interface FileProps {
  id: string
  filename: string
  mimetype: string
}
interface HelpDeskDetailsProps {
  id: string
  author: string
  title: string
  category: string
  description: string
  file?: FileProps[]
}

export function HelpDeskDetail({
  id,
  author,
  category,
  description,
  title,
  file,
}: HelpDeskDetailsProps) {
  return (
    <Card className="mr-2 mt-2 h-max w-[760px]">
      <CardHeader className="flex flex-row justify-between">
        <div className="flex flex-col gap-2">
          <CardTitle>{title}</CardTitle>
          <CardDescription>
            <AuthorInfoCard name={author} />
          </CardDescription>
        </div>
        <span className="text-sm text-muted-foreground">há 5 horas</span>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Badge>{category}</Badge>
          <p className="space-y-2">{description}</p>
        </div>

        {file &&
          file.length > 0 &&
          file.map((file) => (
            <div className="flex gap-2" key={file.id}>
              <FileCard filename={file.filename} mimetype={file.mimetype} />
            </div>
          ))}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="ghost">
              <MessageSquareShare />
            </Button>
          </DialogTrigger>
          <HelpDeskChatModal id={id} />
        </Dialog>
        <Badge variant="secondary">{id}</Badge>
      </CardFooter>
    </Card>
  )
}
