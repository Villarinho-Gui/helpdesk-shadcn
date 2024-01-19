import { Avatar, AvatarImage } from './ui/avatar'
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card'

interface HelpDeskAuthor {
  name: string
}

export function AuthorInfoCard({ name }: HelpDeskAuthor) {
  return (
    <HoverCard>
      <HoverCardTrigger>{name}</HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/villarinho-gui.png" />
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">{name}</h4>
            <p className="text-sm">Desenvolvedor Júnior</p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
