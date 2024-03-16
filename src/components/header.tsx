import { client } from '@/app/client'
import { ThirdwebProvider } from '@/app/thirdweb'
import Link from 'next/link'
import * as React from 'react'

import { auth } from '@/app/auth/auth'
import { clearChats } from '@/app/spells_studio/actions'
import { ConnectButton } from '@/app/thirdweb'
import { ClearHistory } from '@/components/clear-history'
import { GithubLoginButton } from '@/components/login-button'
import { LogoutButton } from '@/components/logout-button'
import { Sidebar } from '@/components/sidebar'
import { SidebarFooter } from '@/components/sidebar-footer'
import { SidebarList } from '@/components/sidebar-list'
import { ThemeToggle } from '@/components/theme-toggle'
import { Button, buttonVariants } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { IconGitHub, IconSeparator } from '@/components/ui/icons'
// import { ThirdwebConnect } from '@/components/ui/thirdweb-wallet'
import { UserMenu } from '@/components/user-menu'
import { cn } from '@/lib/utils'

export async function Header() {
  const session = await auth()
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between w-full h-16 px-4 border-b shrink-0 bg-gradient-to-b from-background/10 via-background/50 to-background/80 backdrop-blur-xl">
      <div className="flex items-center">
        {session?.user ? ( // if user is logged in
          <Sidebar>
            <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="pl-0">
                <span className="ml-2">Navigation Menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent sideOffset={8} align="start" className="w-[280px]">
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <a
                  target="_self"
                  href="/"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full text-xs"
                >
                  <span className="hidden sm:block">Home</span>
                </a>
              </DropdownMenuItem>

              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <a
                  href="/spells_studio/"
                  target="_self"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full text-xs"
                >
                  <span className="hidden sm:block">Spells Studio</span>
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
            </DropdownMenu>
            

            <React.Suspense fallback={<div className="flex-1 overflow-auto" />}>
              {/* @ts-ignore */}
              <SidebarList userId={session?.user?.id} />
            </React.Suspense>
            <SidebarFooter>
              <ThemeToggle />
              <LogoutButton />
              <ClearHistory clearChats={clearChats} />
            </SidebarFooter>
          </Sidebar>
        ) : ( // if user is not logged in
          <Sidebar>
            <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="pl-0">
                <span className="ml-2">Navigation Menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent sideOffset={8} align="start" className="w-[280px]">
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <a
                  target="_self"
                  href="/"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full text-xs"
                >
                  <span className="hidden sm:block">Home</span>
                </a>
              </DropdownMenuItem>

              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <a
                  href="/spells_studio/"
                  target="_self"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full text-xs"
                >
                  <span className="hidden sm:block">Spells Studio</span>
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
            </DropdownMenu>

            <div className="flex-1 overflow-auto"/>
            
            <SidebarFooter>
              <ThemeToggle />
              <GithubLoginButton />
            </SidebarFooter>
            
          </Sidebar>
        )}
        <div className="flex items-center">
          <IconSeparator className="w-6 h-6 text-muted-foreground/50" />
          {session?.user ? (
            <UserMenu user={session.user} />
          ) : (
            <Button variant="link" asChild className="-ml-2">
              <Link href="/auth/sign-in?callbackUrl=/">Enter Arcan</Link>
            </Button>
          )}
          {/* <IconSeparator className="w-6 h-6 text-muted-foreground/50" /> */}
          <a
            href="/spells_studio/"
            target="_self"
            className={cn(buttonVariants())}
          >
            <span className="hidden sm:block">Go to Spells Studio</span>
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
        <div className="flex items-center justify-end space-x-2 h-2">
          <ThirdwebProvider client={client}>
            <ConnectButton />
            {/* <ThirdwebConnect /> */}
            </ThirdwebProvider>
        </div>
        
        {/* <a suppressHydrationWarning
          className={cn(buttonVariants({ variant: 'outline' }))}
        > 
          <ThemeToggle />
        </a> */}
      </div>
    </header>
  )
}
