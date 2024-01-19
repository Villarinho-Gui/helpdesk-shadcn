import { Search, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function HelpDeskFilter() {
  return (
    <form className="mt-2 flex items-center gap-2 rounded border bg-muted p-4">
      <span className="text-sm font-semibold">Filtros:</span>
      <Input placeholder="ID do chamado" className="h-8 w-auto" />
      <Input placeholder="Título" className="h-8 w-[320px]" />
      <Select defaultValue="all">
        <SelectTrigger className="h-8 w-[180px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todas categorias</SelectItem>
          <SelectItem value="email">Email</SelectItem>
          <SelectItem value="ramal">Ramal</SelectItem>
          <SelectItem value="rede">Rede</SelectItem>
          <SelectItem value="fluig">Fluig</SelectItem>
          <SelectItem value="hardware">Hardware</SelectItem>
          <SelectItem value="software">Software</SelectItem>
          <SelectItem value="pcfactory">PcFactory</SelectItem>
          <SelectItem value="preactor">Preactor</SelectItem>
          <SelectItem value="protheus">Protheus</SelectItem>
          <SelectItem value="vexon">Vexon</SelectItem>
          <SelectItem value="portaldocliente">Portal do Cliente</SelectItem>
        </SelectContent>
      </Select>

      <Button type="submit" size="xs" variant="outline">
        <Search className="mr-2 h-4 w-4" />
        Filtrar resultados
      </Button>
      <Button type="button" size="xs" variant="outline">
        <X className="mr-2 h-4 w-4" />
        Remover filtros
      </Button>
    </form>
  )
}
