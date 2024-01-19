import { Card, CardHeader } from './ui/card'

interface CommentProps {
  author: string
  message: string
}

export function HelpDeskMessage({ author, message }: CommentProps) {
  return (
    <Card className="ml-2 mt-2 flex h-max max-w-64 flex-col bg-muted p-2">
      <CardHeader className="flex flex-row items-center justify-between p-0">
        <p className="font-semibold">{author}</p>
        <span className="text-sm font-light text-muted-foreground">10:30</span>
      </CardHeader>
      <p className="">{message}</p>
    </Card>
  )
}
