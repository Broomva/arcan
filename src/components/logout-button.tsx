'use client'

import * as React from 'react'

import { Button, type ButtonProps } from '@/components/ui/button'
import { IconSpinner } from '@/components/ui/icons'
import { cn } from '@/lib/utils'
import { signOut } from 'next-auth/react'

interface LogoutButtonProps extends ButtonProps {
  showGithubIcon?: boolean
  text?: string
}

export function LogoutButton({
  text = 'Logout',
  className,
  ...props
}: LogoutButtonProps) {
  const [isLoading, setIsLoading] = React.useState(false)
  return (
    <Button
      variant="outline"
      // onClick={() => {
      //   setIsLoading(true)
      //   // next-auth signIn() function doesn't work yet at Edge Runtime due to usage of BroadcastChannel
      //   signIn('github', { callbackUrl: `/spells_studio` })
      // }}
      onClick={() =>
        signOut({
          callbackUrl: '/'
        })
      }
      disabled={isLoading}
      className={cn(className)}
      {...props}
    >
      {isLoading ? (
        <IconSpinner className="mr-2 animate-spin" />
      ) : (
        null
      )}
      {text}
    </Button>
  )
}
