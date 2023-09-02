import Link from 'next/link'
import * as React from 'react'

import { clearChats } from '@/app/spells_studio/actions'
import { auth } from '@/app/spells_studio/auth'
import { ClearHistory } from '@/components/clear-history'
import { Sidebar } from '@/components/sidebar'
import { SidebarFooter } from '@/components/sidebar-footer'
import { SidebarList } from '@/components/sidebar-list'
import { ThemeToggle } from '@/components/theme-toggle'
import { Button, buttonVariants } from '@/components/ui/button'
import {
  IconGitHub,
  IconNextChat,
  IconSeparator
} from '@/components/ui/icons'
import { UserMenu } from '@/components/user-menu'
import { cn } from '@/lib/utils'

export async function Header() {
  const session = await auth()
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between w-full h-16 px-4 border-b shrink-0 bg-gradient-to-b from-background/10 via-background/50 to-background/80 backdrop-blur-xl">
      <div className="flex items-center">
        {session?.user ? (
          <Sidebar>
            <React.Suspense fallback={<div className="flex-1 overflow-auto" />}>
              {/* @ts-ignore */}
              <SidebarList userId={session?.user?.id} />
            </React.Suspense>
            <SidebarFooter>
              <ThemeToggle />
              <ClearHistory clearChats={clearChats} />
            </SidebarFooter>
          </Sidebar>
        ) : (
          <Link href="/" target="_blank" rel="nofollow">
            <IconNextChat className="w-6 h-6 mr-2 dark:hidden" inverted />
            <IconNextChat className="hidden w-6 h-6 mr-2 dark:block" />
          </Link>
        )}
        <div className="flex items-center">
          <IconSeparator className="w-6 h-6 text-muted-foreground/50" />
          {session?.user ? (
            <UserMenu user={session.user} />
          ) : (
            <Button variant="link" asChild className="-ml-2">
              <Link href="/spells_studio/sign-in?callbackUrl=/">Enter Arcan</Link>
            </Button>
          )}
          {/* <IconSeparator className="w-6 h-6 text-muted-foreground/50" /> */}
          <a
            href="/spells_studio/"
            target="_self"
            className={cn(buttonVariants())}
          >
            {/* <IconVercel className="mr-2" /> */}
            <span className="hidden sm:block">Go to Spells Studio</span>
            <span className="sm:hidden">Deploy</span>
          </a>
        </div>
      </div>
      <div className="flex items-center justify-end space-x-2">
        <a
          target="_blank"
          href="https://github.com/Broomva/arcan/"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: 'outline' }))}
        >
          <IconGitHub />
          <span className="hidden ml-2 md:flex">GitHub</span>
        </a>
      </div>
    </header>
  )
}
