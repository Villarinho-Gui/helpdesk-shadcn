import { Download, Image } from 'lucide-react'

import { Button } from './ui/button'
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card'

interface FileCardProps {
  filename: string
  mimetype: string
}

export function FileCard({ filename, mimetype }: FileCardProps) {
  return (
    <Card className="mt-3 flex w-max items-center justify-between bg-muted">
      <CardHeader className="flex h-5 flex-row items-center gap-3 py-8">
        <div>
          <Image />
        </div>
        <div className="">
          <CardTitle className="text-md">{filename}</CardTitle>
          <CardDescription className="mb-2 text-xs">{mimetype}</CardDescription>
        </div>
      </CardHeader>
      <Button variant="secondary" className="mr-3">
        <Download className="h-5 w-5" />
      </Button>
    </Card>
  )
}
