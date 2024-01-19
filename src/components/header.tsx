import { LayoutDashboard, Megaphone } from 'lucide-react'

import { AccountMenu } from './account-menu'
import { NavLink } from './nav-link'
import { ThemeToggle } from './theme/mode-toggle'
import { Separator } from './ui/separator'

export function Header() {
  return (
    <div className="sticky left-0 right-0 top-0 border-b bg-muted">
      <div className="flex h-16 items-center gap-6 px-6">
        <p className="text-xl font-bold text-muted-foreground">
          Portal de Chamados
        </p>
        <Separator orientation="vertical" className="h-6" />

        <nav className="flex items-center space-x-4 lg:space-x-6">
          <NavLink to="/helpDesk">
            <Megaphone className="h-4 w-4" />
            Chamados
          </NavLink>
          <NavLink to="/dashboard">
            <LayoutDashboard className="h-4 w-4" />
            Dashboard
          </NavLink>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          <AccountMenu />
        </div>
      </div>
    </div>
  )
}
