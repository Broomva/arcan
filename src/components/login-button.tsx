'use client'

import { signIn } from 'next-auth/react'
import * as React from 'react'

import { Button, type ButtonProps } from '@/components/ui/button'
import { IconGitHub, IconGoogle, IconSpinner } from '@/components/ui/icons'
import { cn } from '@/lib/utils'

interface GithubLoginButtonProps extends ButtonProps {
  showGithubIcon?: boolean
  text?: string
}

export function GithubLoginButton({
  text = 'Login with GitHub',
  showGithubIcon = true,
  className,
  ...props
}: GithubLoginButtonProps) {
  const [isLoading, setIsLoading] = React.useState(false)
  return (
    <Button
      variant="outline"
      onClick={() => {
        setIsLoading(true)
        // next-auth signIn() function doesn't work yet at Edge Runtime due to usage of BroadcastChannel
        signIn('github', { callbackUrl: `/spells_studio` })
      }}
      disabled={isLoading}
      className={cn(className)}
      {...props}
    >
      {isLoading ? (
        <IconSpinner className="mr-2 animate-spin" />
      ) : showGithubIcon ? (
        <IconGitHub className="mr-2" />
      ) : null}
      {text}
    </Button>
  )
}


interface GoogleLoginButtonProps extends ButtonProps {
  showGoogleIcon?: boolean
  text?: string
}

export function GoogleLoginButton({
  text = 'Login with Google',
  showGoogleIcon = true,
  className,
  ...props
}: GoogleLoginButtonProps) {
  const [isLoading, setIsLoading] = React.useState(false)
  return (
    <Button
      variant="outline"
      onClick={() => {
        setIsLoading(true)
        // next-auth signIn() function doesn't work yet at Edge Runtime due to usage of BroadcastChannel
        signIn('google', { callbackUrl: `/spells_studio` })
      }}
      disabled={isLoading}
      className={cn(className)}
      {...props}
    >
      {isLoading ? (
        <IconSpinner className="mr-2 animate-spin" />
      ) : showGoogleIcon ? (
        <IconGoogle className="mr-2" />
      ) : null}
      {text}
    </Button>
  )
}